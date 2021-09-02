"use strict";

// Make navbar transparent when it is on the top

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Scroll to section
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// contact button Scroll

const cButton = document.querySelector(".home__contact");

cButton.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// home fading effect as scroll down.

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow top
const arrowBtn = document.querySelector(".arrow-up");

// console.log(arrowBtn);
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    arrowBtn.classList.add("arrow-showup");
    arrowBtn.classList.remove("arrow-up");
  }
});

arrowBtn.addEventListener("click", (event) => {
  scrollIntoView("#home");
});
