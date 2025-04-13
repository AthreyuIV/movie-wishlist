
const openSearch = document.getElementById("open-search");
const searchBtn = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

openSearch.addEventListener('click', () => {
    searchBar.style.display = "block";
})

import { renderListInitial } from './initialList.js';

renderListInitial();

