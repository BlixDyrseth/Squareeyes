const url = "http://ingridblixdyrseth.no/wp-json/wc/store/products?category";

const filmBlock = document.querySelector(".search-block")

const filmContainer = document.querySelector(".films")

async function getFilms() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        const films = details;

        filmContainer.innerHTML = "";

        films.forEach(function(film) {
            filmContainer.innerHTML += `<h2 class="h2-search">${film.categories.name}</h2>
            <a href="newfilmpage.html?id=${film.id}" class="a-search">
            <div class="image" style="background-image: url('${film.images.thumbnail}')"</div>
            <div class="search-block">
            <h4>${film.name}</h4>
            <p>Price: ${film.prices.currency_symbol} ${film.prices.price}</p>
            </a>
            </div` 
        }); 
    }
    catch(error) {
        console.log(error);
        filmContainer.innerHTML = "error";
    }
    
} 

getFilms();