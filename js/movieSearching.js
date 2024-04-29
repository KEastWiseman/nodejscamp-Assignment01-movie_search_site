function makeMovieCard(title, overView, image, star, id) {
    let newCardDiv = document.createElement("div");
    let newCardBackground = document.createElement('div');
    let newCardTitle = document.createElement("div");
    let newCardoverView = document.createElement("p");
    let newCardstar = document.createElement("p");

    newCardTitle.innerText = title;
    newCardoverView.innerText = overView;
    newCardstar.innerText = star;


    newCardDiv.setAttribute("class","card");
    newCardDiv.setAttribute("onclick",`alert('movie id : ${id}')`)
    newCardBackground.setAttribute("class","cardBackground")
    newCardBackground.setAttribute("style",`
        background-image: url("https://image.tmdb.org/t/p/w500${image}") 
    `);
    newCardTitle.setAttribute("class","title");
    newCardoverView.setAttribute("class","overview");
    newCardstar.setAttribute("class","star");

    
    newCardBackground.appendChild(newCardTitle);
    newCardBackground.appendChild(newCardoverView);
    newCardBackground.appendChild(newCardstar);

    newCardDiv.appendChild(newCardBackground);

    document.querySelector(".container > .center").appendChild(newCardDiv)
}


function callMovieData(title){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTJlZDFjNTJkOTRjZjBiZDAxZWM5MDdlYjVkZjVlMSIsInN1YiI6IjY2MmI0OGNkMDFiMWNhMDExY2UzZjE4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kfsG0XrqjvjEinnMIHAGVtd7WbxUFpXPKj_CF_M-k08'
        }
    };
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then((response) => response.json())
        .then((json)=>{
            data=json.results;

            data.forEach(movie => {
                console.log(`${movie['title']} ?? ${title}`)
                makeMovieCard(`${movie['title']}`,`${movie['overview']}`,`${movie['poster_path']}`,`${movie['vote_average']}`,`${movie['id']}`);
            });    
        })
        .catch(err => console.error(err));
}