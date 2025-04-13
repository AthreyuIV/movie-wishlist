export const renderListInitial = () => {
    const movieList = document.getElementById("movie-list");

    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=cf0edcf6&')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            movieList.innerHTML += `
                <section class="movie" id="movie">
                    <div class="movie-title">
                        <h2><a href="./movieDetails.html">${data.Title}</a></h2>
                        <img class="box-image" src="${data.Poster}">
                    </div>
                </section>
            `
        })
        .catch(err => console.error(err));

    fetch('http://www.omdbapi.com/?t=mickey+17&y=2025&apikey=cf0edcf6&')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            movieList.innerHTML += `
                <section class="movie" id="movie">
                    <div class="movie-title">
                        <h2><a href="./movieDetails.html">${data.Title}</a></h2>
                        <img class="box-image" src="${data.Poster}">
                    </div>
                </section>
            `
        })
    fetch('http://www.omdbapi.com/?t=demon+slayer&y=2025&apikey=cf0edcf6&')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            movieList.innerHTML += `
                <section class="movie" id="movie">
                    <div class="movie-title">
                        <h2 class="title"><a href="./movieDetails.html">${data.Title}</movieDetails></h2>
                        <img class="box-image" src="${data.Poster}">
                    </div>
                </section>
            `
        })
    
    
};
