const filmContainer = document.querySelector(".text-block");

const picContainer = document.querySelector(".picture-block")

const titleDetails = document.querySelector("#titledetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "http://ingridblixdyrseth.no/wp-json/wc/store/products/" + id;

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
    filmContainer.innerHTML += `<h1>${detail.name}</h1>
    <div class="detail-text">
    <p>Genre: ${detail.categories.name}</p><p>${detail.prices.currency_symbol} ${detail.prices.price}</p>
    <p>${detail.description}</p>
    <div class="rentbtn" id="rentbtn">
    <a href="checkout.html" class="link">${detail.add_to_cart.text}</a>
    <div>
    </div>`

    picContainer.innerHTML += `<div class="image" style="background-image: url('${detail.images.thumbnail}')"</div>`

    titleDetails.innerHTML = `${detail.name}`
}