export const renderListInitial = () => {
    const movieList = document.getElementById("movie-list");

    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=cf0edcf6&')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            movieList.innerHTML += `
                <section class="movie" id="movie">
                    <div class="movie-title">
                        <h2>${data.Title}</h2>
                        <img class="box-image" src="${data.Poster}">
                    </div>
                </section>
            `
        })
        .catch(err => console.error(err));

    fetch('https://www.omdbapi.com/?t=mickey+17&y=2025&apikey=cf0edcf6&')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            movieList.innerHTML += `
                <section class="movie" id="movie">
                    <div class="movie-title">
                        <h2>${data.Title}</h2>
                        <img class="box-image" src="${data.Poster}">
                    </div>
                </section>
            `
        })
    fetch('https://www.omdbapi.com/?t=demon+slayer&y=2025&apikey=cf0edcf6&')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            movieList.innerHTML += `
                <section class="movie" id="movie">
                    <div class="movie-title">
                        <h2 class="title">${data.Title}</h2>
                        <img class="box-image" src="${data.Poster}">
                    </div>
                </section>
            `
        })
    
    
};
