const headerNav = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("header__nav-active");
});
