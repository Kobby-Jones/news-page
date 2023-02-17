
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



async function allReq(apiUrl) {
  const requests = await fetch(apiUrl);
  const results = await requests.json();
  console.log(results)
  results.data.forEach((element) => {
    if (element.imageUrl != null) {
     createNewsCard(element)
    }
  });
}
allReq(allUrl);


function createNewsCard(news) {
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
  cardText.innerText = news.content
  cardBody.appendChild(title);
  cardBody.appendChild(cardText);
  // Create the read more button and add it to the card
  let readMoreDiv = document.createElement("div");
  readMoreDiv.classList.add("text-center", "mb-3");
  let readMoreAnchor = document.createElement("a");
  readMoreAnchor.href = news.readMoreUrl;
  let readMoreButton = document.createElement("button");
  readMoreButton.classList.add("btn", "btn-primary", "text-center");
  readMoreButton.innerText = "Read More"
  readMoreAnchor.appendChild(readMoreButton);
  readMoreDiv.appendChild(readMoreAnchor);
  card.appendChild(cardBody);
  card.appendChild(readMoreDiv);
  colDiv.appendChild(card);
  all.appendChild(colDiv); 
}


async function sportsReq() {
  let apiUrl = `https://inshorts.deta.dev/news?category=sports`;
  const requests = await fetch(apiUrl);
  const json = await requests.json();
  json.data.forEach((element) => {
    const html = `
        <div class="col-lg-6">
                <div class="card mb-3" data-aos="fade-in">
                    <img src="${element.imageUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        ${element.content}
                    </div>
                    <div class="text-center mb-3">
                        <a href="${element.readMoreUrl}"><button class="btn btn-primary text-center">Read More</button></a>
                    </div>
                </div>
            </div>
        `;

    if (element.imageUrl != null) {
      sports.innerHTML += html;
    }
  });
}
async function entertainmentReq() {
  let apiUrl = `https://inshorts.deta.dev/news?category=entertainment`;
  const requests = await fetch(apiUrl);
  const json = await requests.json();
  json.data.forEach((element) => {
    const html = `
        <div class="col-lg-6">
                <div class="card mb-3" data-aos="fade-in">
                    <img src="${element.imageUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        ${element.content}
                    </div>
                    <div class="text-center mb-3">
                        <a href="${element.readMoreUrl}"><button class="btn btn-primary text-center">Read More</button></a>
                    </div>
                </div>
            </div>
        `;
    if (element.imageUrl != null) {
      entertainment.innerHTML += html;
    }
  });
}
async function businessReq() {
  let apiUrl = `https://inshorts.deta.dev/news?category=business`;
  const requests = await fetch(apiUrl);
  const json = await requests.json();
  json.data.forEach((element) => {
    const html = `
        <div class="col-lg-6">
                <div class="card mb-3" data-aos="fade-in">
                    <img src="${element.imageUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        ${element.content}
                    </div>
                    <div class="text-center mb-3">
                        <a href="${element.readMoreUrl}"><button class="btn btn-primary text-center">Read More</button></a>
                    </div>
                </div>
            </div>
        `;
    if (element.imageUrl != null) {
      business.innerHTML += html;
    }
  });
}
async function techReq() {
  let apiUrl = `https://inshorts.deta.dev/news?category=technology`;
  const requests = await fetch(apiUrl);
  const json = await requests.json();
  json.data.forEach((element) => {
    const html = `
        <div class="col-lg-6">
                <div class="card mb-3">
                    <img src="${element.imageUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        ${element.content}
                    </div>
                    <div class="text-center mb-3">
                        <a href="${element.readMoreUrl}"><button class="btn btn-primary text-center">Read More</button></a>
                    </div>
                </div>
            </div>
        `;
    if (element.imageUrl != null) {
      technology.innerHTML += html;
    }
  });
}
// allReq();
sportsReq();
entertainmentReq();
businessReq();
techReq();
