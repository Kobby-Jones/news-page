
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
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = data.title;
    newsCard.appendChild(cardTitle)
    const cardText = document.createElement("p")
    cardText.classList.add("card-text");
    cardText.innerText = data.summary.substring(0, 70) + "...";
    newsCard.appendChild(cardText)
    col.appendChild(newsCard)
    homeFeed.appendChild(col)
    
}