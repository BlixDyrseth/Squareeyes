const url = "https://ingridblixdyrseth.no/wp-json/wc/store/products?_embed/";

const filmBlock = document.querySelector(".search-block")

const filmContainer = document.querySelector(".thriller")

async function getFilms() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        const films = details;

        filmContainer.innerHTML = "";

        films.forEach(function(film) {
            filmContainer.innerHTML += `<a href="newfilmpage.html?id=${film.id}" class="a-search">
            <div class="image" style="background-image: url('${film.images.thumbnail}')"</div>
            <div class="search-block">
            <h4>${film.name}</h4>
            <h4>Price: ${film.prices.currency_symbol} ${film.prices.price}</h4>
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