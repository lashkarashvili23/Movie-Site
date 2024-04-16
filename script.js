"use strict";
import { moviess } from "./movies.js";
import { movies } from "./moviesNew.js";

const mainBtn = document.querySelector(".play");
// Select all elements with the class name "playNew"
const playButtons = document.querySelectorAll(".playNew");
// player close button
const closeBtn = document.querySelector(".closePlayer");
// 'More' Movies button
const allMovies = document.querySelector(".moreMovies");

const headline = document.getElementById("headline");
const sinema = document.createElement("div");

const closeMovie = function () {
  parentElement.removeChild(sinema);
  document.getElementById("homepage").style.display = "none";
  // headline.style.display = "flex";
};

const playMovie = function (movieName) {
  //   event.preventDefault();
  headline.style.display = "none";
  document.getElementById("homepage").style.display = "flex";
  sinema.innerHTML = `
  <iframe width="100%" height="100%" src="${moviess[movieName]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <button class='closePlayer'>Close Player</button>
  `;
  sinema.classList.add("sinema_style");
  const homepage = document.getElementById("homepage");
  homepage.appendChild(sinema);
};

// Add click event listener to each play button
playButtons.forEach(function (playButton) {
  playButton.addEventListener("click", function (event) {
    // Get the nearest ancestor element with the class name "m_title"
    let titleElement = event.target
      .closest(".movie_card")
      .querySelector(".m_title");
    // Get the content of the span element inside "m_title"
    let titleContent = titleElement.textContent;
    // Output the title content to the console
    playMovie(titleContent);
  });
});

// mainBtnNew.addEventListener("click", playMovie);
// mainBtn.addEventListener("click", playMovie);

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
  document.getElementById("homepage").style.display = "none";
  document.getElementById("movies").style.paddingTop = "110px";
  const container = document.querySelector(".container");
  movies.forEach(function (movie) {
    const movieCard = document.createElement("div");
    movieCard.innerHTML = `
    <div>
    <a href="#" class="playNew"
    ><img class="card_img" src="img/test.png" alt=""
    /></a>
    </div>
    <div class="title_date">
    <div class="m_title"><span>${movie.name}</span></div>
    <div class="m_rel_date"><span>${movie.year}</span></div>
    </div>
    <div class="info_rating">
    <div class="m_info"><span>HD ${movie.length} min</span></div>
    <div class="m_rating"><span>${movie.rating}</span></div>
    </div>
    `;
    container.style.flexWrap = "wrap";
    movieCard.classList.add("movie_card");
    container.appendChild(movieCard);
    const moviesNew = document.getElementById("movies");
    moviesNew.style.overflow = "hidden";
    moviesNew.classList.remove("height");
  });
  // Get a reference to the child element I want to remove
  const childToRemove = document.getElementById("movieMore");

  // Remove the child element and its children from the parent element
  container.removeChild(childToRemove);
};

allMovies.addEventListener("click", moviePageNew);
