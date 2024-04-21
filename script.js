"use strict";
import { moviess } from "./movies.js";
import { movies, tvShows } from "./moviesNew.js";

const reloadBtn = document.querySelector(".pageReload");
let movieOn = true;
let tvShowOn = true;
let moviesOpened = false;
let tvShowOpend = false;

const mainBtn = document.querySelector(".play");
const searchBtn = document.getElementById("search_Btn");
// Select all elements with the class name "playNew"
let playButtons = document.querySelectorAll(".playNew");
// player close button
const closeBtn = document.querySelector(".closePlayer");
// 'More' Movies button
const allMovies = document.querySelector(".moreMovies");
const allMoviesNav = document.querySelector(".moreMoviesNav");
const allTvShows = document.querySelector(".moreTvShows");
const allTvShowsNav = document.querySelector(".moreTvShowsNav");

const headline = document.getElementById("headline");
const sinema = document.createElement("div");

const closeMovie = function () {
  parentElement.removeChild(sinema);
  document.getElementById("homepage").style.display = "none";
};

const playMovie = function (movieName) {
  //   event.preventDefault();
  headline.style.display = "none";
  document.getElementById("homepage").style.display = "flex";
  sinema.innerHTML = `
  <iframe width="100%" height="100%" src="${moviess[movieName]}&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <button class='closePlayer'>Close Player</button>
  `;
  sinema.classList.add("sinema_style");
  const homepage = document.getElementById("homepage");
  homepage.appendChild(sinema);
};

// Add click event listener to each play button
playButtons.forEach(function (playButton) {
  playButton.addEventListener("click", function (event) {
    // Get the nearest ancestor element with the class name "movie_card" or "show_card"
    let cardElement = event.target.closest(".movie_card, .show_card");
    if (!cardElement) return; // Exit the function if the card element is not found
    // Get the title content based on the card type
    let titleElement;
    if (cardElement.classList.contains("movie_card")) {
      titleElement = cardElement.querySelector(".m_title");
    } else if (cardElement.classList.contains("show_card")) {
      titleElement = cardElement.querySelector(".m_title");
      // Adjust this if the class or structure is different for show cards
    }
    // Get the content of the span element inside "m_title"
    let titleContent = titleElement.textContent;
    // Output the title content to the console
    playMovie(titleContent);
  });
});

// Select the parent element that will contain the button(s)
const parentElement = document.getElementById("homepage");

// Add an event listener to the parent element
parentElement.addEventListener("click", function (event) {
  // Check if the clicked element is the button you're interested in
  if (event.target.matches(".closePlayer")) {
    // Your event handling logic here
    closeMovie();
  }
});

const moviePageNew = function () {
  if (movieOn) {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("tv_shows").style.display = "none";
    document.getElementById("movies").style.display = "flex"; // ???
    document.getElementById("movies").style.paddingTop = "110px";
    const containerM = document.querySelector(".containerM");
    if (!moviesOpened) {
      movies.forEach(function (movie) {
        const movieCard = document.createElement("div");
        movieCard.innerHTML = `
    <a href="#" class="playNew"
    ><img class="card_img" src="img/movPosters/${movie.imgSrc}" alt=""
    /></a>
    </div>
    <div class="title_date">
    <div class="m_title"><span>${movie.name}</span></div>
    <div class="m_rel_date"><span>${movie.year}</span></div>
    </div>
    <div class="info_rating">
    <div class="m_info"><span>HD ${movie.length} min</span></div>
    <div class="m_rating"><span>${movie.rating}</span></div>
    `;
        containerM.style.flexWrap = "wrap";
        movieCard.classList.add("movie_card");
        containerM.appendChild(movieCard);
        const moviesNew = document.getElementById("movies");
        moviesNew.style.overflow = "hidden";
        moviesNew.classList.remove("heightM");
      });
      // Get a reference to the child element I want to remove
      let childToRemoveM = document.getElementById("movieMore");
      if (childToRemoveM) {
        containerM.removeChild(childToRemoveM);
      }
      // Remove the child element and its children from the parent element
      moviesOpened = !moviesOpened;
    }
    newEventListener();
    movieOn = !movieOn;
    tvShowOn = true;
  }
};

allMovies.addEventListener("click", moviePageNew);
allMoviesNav.addEventListener("click", moviePageNew);

const tvShowPageNew = function () {
  if (tvShowOn) {
    document.getElementById("tv_shows").style.display = "flex";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("movies").style.display = "none";
    document.getElementById("tv_shows").style.paddingTop = "110px";
    const containerS = document.querySelector(".containerS");
    if (!tvShowOpend) {
      tvShows.forEach(function (tvShow) {
        const showCard = document.createElement("div");
        showCard.innerHTML = `
    <div>
    <a href="#" class="playNew"
    ><img class="card_img" src="img/movPosters/${tvShow.imgSrc}" alt=""
    /></a>
    </div>
    <div class="title_date">
    <div class="m_title"><span>${tvShow.name}</span></div>
    <div class="m_rel_date"><span>${tvShow.year}</span></div>
    </div>
    <div class="info_rating">
    <div class="m_info"><span>HD ${tvShow.length} min</span></div>
    <div class="m_rating"><span>${tvShow.rating}</span></div>
    </div>
    `;
        containerS.style.flexWrap = "wrap";
        showCard.classList.add("show_card");
        containerS.appendChild(showCard); //
        const tvShowsNew = document.getElementById("tv_shows");
        tvShowsNew.style.overflow = "hidden";
        tvShowsNew.classList.remove("heightS");
      });
      // Get a reference to the child element I want to remove
      let childToRemoveS = document.getElementById("tvShowMore");
      if (childToRemoveS) {
        containerS.removeChild(childToRemoveS);
      }
      tvShowOpend = !tvShowOpend;
    }
    // Remove the child element and its children from the parent element
    newEventListener();
    tvShowOn = !tvShowOn;
    movieOn = true;
  }
};

allTvShows.addEventListener("click", tvShowPageNew);
allTvShowsNav.addEventListener("click", tvShowPageNew);

// Adds an event listener to the recreated elements
const newEventListener = function () {
  const playButtonsNew = document.querySelectorAll(".playNew");
  playButtonsNew.forEach(function (playButton) {
    playButton.addEventListener("click", function (event) {
      // Get the nearest ancestor element with the class name "movie_card" or "show_card"
      let cardElement = event.target.closest(".movie_card, .show_card");
      if (!cardElement) return; // Exit the function if the card element is not found
      // Get the title content based on the card type
      let titleElement;
      if (cardElement.classList.contains("movie_card")) {
        titleElement = cardElement.querySelector(".m_title");
      } else if (cardElement.classList.contains("show_card")) {
        titleElement = cardElement.querySelector(".m_title");
        // Adjust this if the class or structure is different for show cards
      }
      // Get the content of the span element inside "m_title"
      let titleContent = titleElement.textContent;
      // Output the title content to the console
      playMovie(titleContent);
    });
  });
};
const homeReload = function refreshPage() {
  window.location.reload();
  window.scrollTo(0, 0);
  window.location.href = "";
};
reloadBtn.addEventListener("click", homeReload);

document.getElementById("scrollUp").addEventListener("click", function () {
  window.scrollTo(0, 0);
});
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, function (txt) {
    return txt.toUpperCase();
  });
}

const searchFilm = function (filmName) {
  if (moviess.hasOwnProperty(filmName)) {
    playMovie(filmName);
    window.scrollTo(0, 0);
  } else {
    alert(`Movie/TV Show named "${filmName}" doesn't found`);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let searchInput = document.getElementById("searchInput");
  let searchBtn = document.getElementById("search_Btn");

  // Add event listener for input event
  searchInput.addEventListener("input", function () {
    let searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term
  });

  // Add event listener for click event on search button
  searchBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    let searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term
    searchFilm(toTitleCase(searchTerm));
  });
});
