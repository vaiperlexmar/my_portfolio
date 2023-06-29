"use strict";

const TABLET_SCREEN = 768;

const navLinks = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("#nav");

function toggleMenu() {
  if (nav.classList.contains("open")) {
    nav.classList.remove("appearance-animation");
    nav.classList.add("disappearance-animation");
    setTimeout(function () {
      nav.classList.remove("open");
    }, 400);
  } else {
    nav.classList.remove("disappearance-animation");
    nav.classList.add("open");
    nav.classList.add("appearance-animation");
  }
}

function checkWindowSize() {
  if (window.innerWidth <= TABLET_SCREEN) {
    nav.classList.remove("open");
  } else {
    // if window is bigger then Mobile Screen
    nav.classList.remove("disappearance-animation");
    nav.classList.remove("appearance-animation");
  }
}

window.addEventListener("resize", checkWindowSize);
hamburger.addEventListener("click", toggleMenu);
