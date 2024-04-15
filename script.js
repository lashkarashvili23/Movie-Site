"use strict";
import { movies } from "./movies.js";

const mainBtn = document.querySelector(".play");
// Select all elements with the class name "playNew"
var playButtons = document.querySelectorAll(".playNew");

const headline = document.getElementById("headline");
const sinema = document.createElement("div");

const closeMovie = function () {};

const playMovie = function (movieName) {
  //   event.preventDefault();
  headline.style.display = "none";
  sinema.innerHTML = `
  <iframe width="100%" height="100%" src="${movies[movieName]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

    // Output the title content to the console (you can do any further processing here)
    console.log(titleContent);
    playMovie(titleContent);
  });
});

mainBtn.addEventListener("click", playMovie);
// mainBtnNew.addEventListener("click", playMovie);
