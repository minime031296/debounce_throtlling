let timerID;

function debounce(callBackFunc, delay) {
    if (timerID) {
        clearTimeout(timerID);
    }

    timerID = setTimeout(function () {
        callBackFunc();
    }, delay);
}

function MakeApiCall() {
    let searchInputValue = document.getElementById("search-input").value;

    console.log("Make an API call ", searchInputValue);

    if (searchInputValue.trim() !== "") {
        let dynamicURL = `http://www.omdbapi.com/?t=${encodeURIComponent(
            searchInputValue
        )}&apikey=7910f82c`;

        fetchMovie(dynamicURL);
    }
}

async function fetchMovie(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        displayMovie(data);
    } catch (error) {
        console.log(error);
    }
}

let URL = {
    0: "http://www.omdbapi.com/?t=movies&apikey=7910f82c",
    1: "http://www.omdbapi.com/?t=batman&apikey=7910f82c",
    2: "http://www.omdbapi.com/?t=new+movie&apikey=7910f82c",
    3: "http://www.omdbapi.com/?t=need+for+speed&apikey=7910f82c"
};

let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function() {
    MakeApiCall();  // Trigger the API call when the search button is clicked
});

let cont = document.getElementById("container");

function displayMovie(movie) {
    cont.innerHTML = '';

    let div = document.createElement("div");
    div.id = "_box0";

    let poster = document.createElement("img");
    poster.src = movie.Poster;
    poster.className = "poster";

    let Staring = document.createElement("p");
    Staring.innerText = `Actors starring: ${movie.Actors}`;
    Staring.className = "actor";

    let Release = document.createElement("p");
    Release.innerText = `Releasing Date: ${movie.Released}`;
    Release.className = "Release";

    let btn = document.createElement("button");
    btn.innerText = "Watch Now";

    div.append(poster, Staring, Release, btn);
    cont.appendChild(div);
}



