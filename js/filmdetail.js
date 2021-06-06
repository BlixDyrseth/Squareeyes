const filmContainer = document.querySelector(".text-block");

const picContainer = document.querySelector(".picture-block")

const titleDetails = document.querySelector("#titledetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://ingridblixdyrseth.no/blog/wp-json/wc/store/products/" + id;


console.log(url)

async function getOneFilm() {
    try {
        const response = await fetch(url);
        const detail = await response.json();

        console.log(detail);

        filmContainer.innerHTML = ""

        createHtml(detail);

    }
    catch(error) {
        console.log(error);
        filmContainer.innerHTML = "error";
    }
    
} 

getOneFilm();

function createHtml(detail) {
    filmContainer.innerHTML += `<h1 class="h1-filmpage">${detail.name}</h1>
    <div class="detail-text">
    <p>Genre: ${detail.categories[0].name}</p>
    <p class="price">${detail.prices.price} ${detail.prices.currency_symbol}</p>
    <p>${detail.description}</p>
    <div class="rentbtn">
    <a id="rentbtn" class="link">Add to cart</a>
    </div>
    </div>`

    picContainer.innerHTML += `<img class="film-pic" src="${detail.images[0].src}" alt="${detail.images[0].alt}"/>`

    titleDetails.innerHTML = `${detail.name} - Squarespace`

    const rentBtn = document.getElementById("rentbtn");
    const modalRent = document.getElementById("modalRent");
    const close = document.querySelector(".close-me");
    const nevermind = document.querySelector(".small-text");
    const counter = document.querySelector(".count-container");
    let index = 0; 

    rentBtn.onclick = function() {
        modalRent.style.display = "block"
        counter.innerHTML = index + 1;
    }

    close.onclick = function() {
        modalRent.style.display = "none"
    }
    
    nevermind.onclick = function() {
        modalRent.style.display = "none"
    }
    
    window.onclick = function(event) {
        if(event.target == modalRent) {
            modalRent.style.display = "none";
        }
    }

}