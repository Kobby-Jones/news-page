
const all = document.querySelector(".all-row");
const sports = document.querySelector(".sports-row");
const entertainment = document.querySelector(".entertainment-row");
const business = document.querySelector(".business-row");
const technology = document.querySelector(".technology-row");
const owlClases = document.querySelector(".owl-carousel");

async function allReq() {
  let apiUrl = `https://inshorts.deta.dev/news?category=all`;
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
      all.innerHTML += html;
    }
  });
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
allReq();
sportsReq();
entertainmentReq();
businessReq();
techReq();
