const url = "https://ingridblixdyrseth.no/blog/wp-json/wc/store/products?per_page=21&_embed?";
const key = "ck_6b6a247daf0b4533483c751a5e7025a8d91c1cbc";
const secret = "cs_769a1273110661d2ff0ae9f632e8483b3f35eb1d";

const api = `${url}${key}${secret}`;

const filmBlock = document.querySelector(".search-block")

const filmContainer = document.querySelector(".thriller")

async function getFilms() {
    try {
        const response = await fetch(url);
        const films = await response.json();

        console.log(films);

        filmContainer.innerHTML = "";


        for (let i = 0; i <= films.length; i++) {

            console.log(films[i]);

        }
        
       films.forEach(function(film) {

           filmContainer.innerHTML += `<a href="newfilmpage.html?id=${film.id}" class="a-search">
           <div class="search-block">
           <img class="thumbnails-search" src="${film.images[0].src}" alt="${film.images[0].alt}"/>
           <div class="film-text">
           <h4>${film.name}</h4>
           <h4 class="price">${film.prices.price} ${film.prices.currency_symbol}</h4>
           </div>
           </div
           </a>`
       }); 


    }
    catch(error) {
        console.log(error);
        filmContainer.innerHTML = "error";
    }
    
} 

getFilms();

//Featured

const newUrl = "https://ingridblixdyrseth.no/wp-json/wc/store/products?_featured/";

const newUploads = document.querySelector(".new-uploads");

async function getUploads() {
    try {
        const response = await fetch(api);
        const feature = await response.json();

        console.log(feature);

        newUploads.innerHTML = "";


        for (let i = 0; i < 3; i++) {

            console.log(feature[i]);

            newUploads.innerHTML  += `<a href="newfilmpage.html?id=${feature[i].id}" class="a-search">
            <div class="new-block"">
            <img class="new-thumbnail" src="${feature[i].images[0].src}" alt="${feature[i].images[0].alt}"/>
            <h4>${feature[i].name}</h4>
            </div
            </a>`

        }


    }
    catch(error) {
        console.log(error);
        newUploads.innerHTML = "error";
    }
    
} 

getUploads();