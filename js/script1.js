
async function fetchApi() {
  const request = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=30`);
  const results = await request.json();
  reports = results.results;
  reports.forEach((data) => {
      create_News_Card(data)
      console.log(data)
  });
}
fetchApi()
function create_News_Card(data) {
    const col = document.createElement('div')
    col.classList.add("col-lg-4");
    const homeFeed = document.getElementById("home-feed")
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
    button.classList.add("btn", "btn-secondary", "rounded-3");
    button.innerText = "Read More";
    readMore_url.appendChild(button);
    newsCard.appendChild(readMore_url);
    col.appendChild(newsCard);
    homeFeed.appendChild(col);
    
}