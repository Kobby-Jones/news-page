$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    nav: true,
    loop: true,
    animateIn:'flipInY',
    animateOut:'zoomOutDown',
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots:false
        },
        485: {
            items: 1,
            dots:false
        },
        728: {
            items: 2,
            dots:false
        },
        960: {
            items: 3,
            dots:false
        },
        1200: {
            items: 3,
            dots:true
        }
    }
});

// async function apiFunction() {
//     const request = await fetch(
//       "https://api.thenewsapi.com/v1/news/top?api_token=KbM7H7Uq5ArlXqZv41IaFwadxsptJ5cmfkZD2AwV&locale=us&limit=3&page=4"
//     );
//     const json = await request.json();
//     console.log(json)
// }
// apiFunction();

const owl_carousel = document.querySelector(".owl-carousel");
const card = document.querySelector(".card-1");
const container = document.querySelector(".container");
const row = document.querySelector(".top-headlines-row");
const sports = document.querySelector(".sports-row");
const api_token = "0d229310050fb6ee6d7eddce1e3988d6";

console.log(sports.textContent.toLowerCase())
async function req() {
    const requests = await fetch(
      `https://gnews.io/api/v4/top-headlines?token=${api_token}&topic=breaking-news&lang=en&max=9`
    );
    const json = await requests.json();
    console.log(json)
    json.articles.forEach(element => {
        if (element.image != null) {
            row.innerHTML += `
        <div class="col-lg-4">
                <div class="card mb-3">
                    <img src="${element.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        ${element.description}
                    </div>
                    <div class="text-center mb-3">
                        <a href="${element.source.url}"><button class="btn btn-primary text-center">Read More</button></a>
                    </div>
                </div>
            </div>
        `;
        }
        
    });
}

async function sportsSection() {
  const requests2 = await fetch(
    `https://gnews.io/api/v4/top-headlines?token=${api_token}&topic=${sports.textContent.toLowerCase()}&lang=en&max=9`
  );
  const json2 = await requests2.json();
  console.log(json2);
  json2.articles.forEach((element2) => {
    if (element2.image != null) {
      sports.innerHTML += `
        <div class="col-lg-4">
                <div class="card mb-3">
                    <img src="${element2.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element2.title}</h5>
                        ${element2.description}
                    </div>
                    <div class="text-center mb-3">
                        <a href="${element2.source.url}"><button class="btn btn-primary text-center">Read More</button></a>
                    </div>
                </div>
            </div>
        `;
    }
  });
}
req();
sportsSection();

        
