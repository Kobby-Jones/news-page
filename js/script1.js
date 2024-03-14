
let mixed_data = [];
const search_button = document.getElementById("search");
const search_input = document.getElementById("search-input")
const homeFeed = document.getElementById("home-feed");

//  A function to make the API call
async function fetchApi(api_url) {
  const request = await fetch(api_url);
  const results = await request.json();
  reports = results.results;
  reports.forEach((data) => {
      create_News_Card(data)
      mixed_data.push(data)

      
  });
}
search_button.addEventListener("click", function () {
  const search_text = search_input.value; // Move this line here
  console.log(search_text);
  homeFeed.innerHTML = "";
  fetchApi(
    `https://api.spaceflightnewsapi.net/v4/articles/?search=${search_text}`
  );
});

// Default data to return to the home page
fetchApi(`https://api.spaceflightnewsapi.net/v4/articles/?limit=15`);

mixed_data.forEach((item) => {
    console.log(item)
})
// A function to create a card to populate the news data
function create_News_Card(data) {
    const col = document.createElement('div')
    col.classList.add("col-lg-4");
    const newsCard = document.createElement("div");
    newsCard.classList.add("card", "text-center", "p-3");
    // Create The Image and add it to the card
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = data.image_url;
    newsCard.appendChild(cardImage);
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title", "text-light");
    cardTitle.innerText = data.title;
    newsCard.appendChild(cardTitle);
    const cardText = document.createElement("p");
    cardText.classList.add("card-text", "text-light");
    cardText.innerText = data.summary.substring(0, 100) + "...";
    newsCard.appendChild(cardText)
    const readMore_url = document.createElement("a");
    readMore_url.href = data.url;
    readMore_url.target = "_blank";
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "rounded-3");
    button.innerText = "Read More";
    readMore_url.appendChild(button);
    newsCard.appendChild(readMore_url);
    col.appendChild(newsCard);
    homeFeed.appendChild(col);
    
}