//navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//font
var typed = new Typed(".typing-text", {
  strings: ["Freelance Photografer.", "Editor.", "Content Creator."],
  typeSpeed: 100,
  loop: true,
  backSpeed: 50,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
});
