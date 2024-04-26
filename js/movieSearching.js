function makeMovieCard(title, overView, image, star) {
    let newCardDiv = document.createElement("div");
    let newCardBackground = document.createElement('div');
    let newCardTitle = document.createElement("div");
    let newCardoverView = document.createElement("p");
    let newCardstar = document.createElement("p");

    newCardTitle.innerText = title;
    newCardoverView.innerText = overView;
    newCardstar.innerText = star;


    newCardDiv.setAttribute("class","card");
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