"use strict";

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
