
const openSearch = document.getElementById("open-search");
const searchBtn = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

openSearch.addEventListener('click', () => {
    searchBar.style.display = "block";
})

import { renderListInitial } from './initialList.js';

renderListInitial();

searchBtn.addEventListener('click', event => {
    event.preventDefault();

    const titleInput = document.getElementById("title");
    const yearInput = document.getElementById("year");

    let movieString = titleInput.value.replace(/ /g, "+");
    let yearString = titleInput.value.replace(/ /g, "+");

    fetch(`http://www.omdbapi.com/?t=${movieString}&y=${yearString}&apikey=cf0edcf6&`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const movieList = document.getElementById("movie-list");
            movieList.innerHTML = `
                <section class="movie" id="movie">
                    <div class="movie-title">
                        <h2>${data.Title}</h2>
                        <img class="box-image" src="${data.Poster}">
                    </div>
                </section>
            `
        })

    titleInput.value = "";
    yearInput.value = "";
});

