var elBtnPokemon = document.querySelector(".btnPokemon");
var elBtnMovies = document.querySelector(".btnMovies");
var elBtnBoth = document.querySelector(".btnBoth");
var elBtnClear = document.querySelector(".btnClear");
var elList = document.querySelector(".main-list");
var elResult = document.querySelector(".result");
var elWrapper = document.querySelector(".img-wrapper");

let pokemonArray = pokemons;
let moviesArray = movies.slice(0, 151);
var mainArray = pokemonArray.concat(moviesArray);




elBtnPokemon.addEventListener("click", function evt() {
    renderArray(pokemonArray);
    elWrapper.innerHTML = `<img src="./img/pokemon_logo.png" class="PokemonImg" width="200"></img>`
})

elBtnMovies.addEventListener("click", function evt() {
    renderArray(moviesArray);
    elWrapper.innerHTML = `<img src="./img/pngwing.com.png" class="MovieImg" width="200"></img>`
})

elBtnBoth.addEventListener("click", function evt() {
    renderArray(mainArray);
    elWrapper.innerHTML = `<img src="./img/pokemon_logo.png" class="MovieImg" width="200">
    <img src="./img/pngwing.com.png" class="MovieImg" width="200">`
    elResult.textContent = "151 ta Pokemondan so'ng Movies qismini ko'rsatadi. Movies bilan birgalikda Ko'rmoqchi Bo'lsangiz 151 dan katta son kiriting!"
})

elBtnClear.addEventListener("click", function evt() {
    elList.innerHTML = null;
    elResult.textContent = "Cleaned"
    elWrapper.innerHTML = null
})


function renderArray(array) {
    elList.innerHTML = null;

    array = array.slice(0, Number(prompt("Nechta Element kerak: ")));
    elResult.textContent = array.length;

    for (const item of array) {
        var newLi = document.createElement("li");
        newLi.classList = "main-item bg-white ps-4 pe-4 d-flex flex-column align-items-center rounded m-2 pb-2"

        var newImg = document.createElement("img");
        newImg.width = "120";
        newImg.height = "120";

        var textWrapper = document.createElement("div");
        textWrapper.classList = "text-wrapper d-flex flex-column align-items-center";

        var newH3 = document.createElement("h5");
        newH3.classList = "text-heading";

        var newType = document.createElement("p");
        newType.classList = "typeOfItem m-0"
        newType.textContent = item.type;

        var newWeight = document.createElement("p");
        newWeight.classList = "weightOfItem m-0"
        newWeight.textContent = item.weight;

        var newHeight = document.createElement("p");
        newHeight.classList = "heightOfItem m-0"
        newHeight.textContent = item.height;

        var buttonWrapper = document.createElement("div");
        buttonWrapper.classList = "buttonWrapper d-flex align-items-center justify-content-between gap-1"

        var newWatch = document.createElement("a");
        newWatch.classList = "btn btn-outline-danger";
        newWatch.textContent = "Watch Trailer"
        newWatch.href = `https://www.youtube.com/watch?v=${item.ytid}`

        var newBookmark = document.createElement("button");
        newBookmark.classList = "btn btn-outline-success";
        newBookmark.textContent = "Bookmark"

        var newMoreInfo = document.createElement("button");
        newMoreInfo.classList = "btn btn-outline-primary";
        newMoreInfo.textContent = "More Info"

        var newRating = document.createElement("p");
        newRating.textContent = "Rating: " + item.imdb_rating;

        var newCatogires = document.createElement("p");
        newCatogires.classList = "categories-text mb-1"
        newCatogires.textContent = item.Categories;

        buttonWrapper.appendChild(newWatch);
        buttonWrapper.appendChild(newBookmark);
        buttonWrapper.appendChild(newMoreInfo);

        textWrapper.appendChild(newH3);
        textWrapper.appendChild(newType);
        textWrapper.appendChild(newWeight);
        textWrapper.appendChild(newHeight);


        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
        }else {
            newH3.textContent = item.Title;
            newH3.style.fontSize = "13px"
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            textWrapper.appendChild(newRating);
            textWrapper.appendChild(newCatogires);
            textWrapper.appendChild(buttonWrapper);
            newImg.width = "200";
            newImg.classList = "rounded"
            newLi.classList.add = "p-0"
        }

        newLi.appendChild(newImg);
        newLi.appendChild(textWrapper);

        elList.appendChild(newLi);
    }
}
