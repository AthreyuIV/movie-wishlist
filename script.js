
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=cf0edcf6&')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    