
const all = document.querySelector(".all-row");
const sports = document.querySelector(".sports-row");
const entertainment = document.querySelector(".entertainment-row");
const business = document.querySelector(".business-row");
const technology = document.querySelector(".technology-row");
const owlClases = document.querySelector(".owl-carousel");
let allUrl = `https://inshorts.deta.dev/news?category=all`;
let sportsUrl = `https://inshorts.deta.dev/news?category=sports`;
let entertainmentUrl = `https://inshorts.deta.dev/news?category=entertainment`;
let businessiUrl = `https://inshorts.deta.dev/news?category=business`;
let techUrl = `https://inshorts.deta.dev/news?category=technology`;
const catIcons = document.querySelectorAll(".category-icons");
const navLinks = document.querySelectorAll(".nav-link");

 

async function allReq(apiUrl, categoryRow) {
  let results = JSON.parse(localStorage.getItem(apiUrl));
  if (results) {
     results.data.forEach((element) => {
       if (element.imageUrl != null) {
         createNewsCard(element, categoryRow);
         console.log(element)
       }
     });
  } 
  else {
    const requests = await fetch(apiUrl);
    results = await requests.json();
    localStorage.setItem(apiUrl, JSON.stringify(results));
    results.data.forEach((element) => {
      if (element.imageUrl != null) {
        createNewsCard(element, categoryRow);
      }
    });
  }
}


// async function allReq(apiUrl, categoryRow) {
//   const requests = await fetch(apiUrl);
//   const results = await requests.json();
//   console.log(results)
//   results.data.forEach((element) => {
//     if (element.imageUrl != null) {
//      createNewsCard(element, categoryRow)
//     }
//   });
// }

allReq(allUrl, all)
allReq(sportsUrl, sports)
allReq(entertainmentUrl, entertainment)
allReq(businessiUrl, business)
allReq(techUrl, technology)


function createNewsCard(news, categoryRow) {
// Create a column for the card
  let colDiv = document.createElement("div");
  colDiv.classList.add("col-lg-6");
  // Create the card div
  let card = document.createElement("div");
  card.classList.add("card", "mb-3");
  // Crate the image and add it to the card
  let cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = news.imageUrl;
  cardImage.alt = "";
  card.appendChild(cardImage);
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  let title = document.createElement("h4");
  title.classList.add("card-title");
  title.innerText = news.title;
  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = news.content.substring(0, 80) + "....";
  cardBody.appendChild(title);
  cardBody.appendChild(cardText);
  // Create the read more button and add it to the card
  let readMoreDiv = document.createElement("div");
  readMoreDiv.classList.add("text-center", "mb-3");
  let readMoreAnchor = document.createElement("a");
  readMoreAnchor.href = news.readMoreUrl;
  let readMoreButton = document.createElement("button");
  readMoreButton.classList.add("btn", "btn-danger", "text-center");
  readMoreButton.innerText = "Read More"
  readMoreAnchor.appendChild(readMoreButton);
  readMoreDiv.appendChild(readMoreAnchor);
  card.appendChild(cardBody);
  card.appendChild(readMoreDiv);
  colDiv.appendChild(card);
  categoryRow.appendChild(colDiv); 
}



