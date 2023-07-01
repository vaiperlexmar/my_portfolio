"use strict";

const TABLET_SCREEN = 768;

const navLinks = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("#nav");
const heroImg = document.querySelector(".header__hero-img");

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

let animationTimer;
let animationInProgress = false;
const swapImgAnimationDuration = 400;

heroImg.addEventListener("mouseenter", function () {
  if (!animationInProgress) {
    animationInProgress = true;
    heroImg.classList.add("rotate-right-animation");
    if (heroImg.src.endsWith("img/Hero.png")) {
      animationTimer = setTimeout(function () {
        heroImg.src = "img/Hero2.png";
        animationInProgress = false;
      }, swapImgAnimationDuration);
    }
    if (heroImg.src.endsWith("img/Hero2.png")) {
      animationTimer = setTimeout(function () {
        heroImg.src = "img/Hero.png";
        animationInProgress = false;
      }, swapImgAnimationDuration);
    }
  }
});

heroImg.addEventListener("mouseleave", function () {
  clearTimeout(animationTimer);
  heroImg.classList.remove("rotate-right-animation");
  animationInProgress = false;
});
