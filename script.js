const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const overlayEl = document.querySelector(".blacked");
const displayButton = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  if ("nav-open") {
    overlayEl.classList.toggle("overlay");
    // if ("overlay"){overflow-y: hidden;}
  }
  document.body.classList.toggle("no-scroll");
});
