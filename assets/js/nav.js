export function nav() {
  let burgerMenuOpen = document.querySelector(".burgerMenuOpen");
  let burgerMenuClose = document.querySelector(".burgerMenuClose");
  let navLinks = document.querySelector(".nav-links");

  burgerMenuOpen.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerMenuOpen.classList.toggle("active");
    burgerMenuClose.classList.add("active");
  });

  burgerMenuClose.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerMenuOpen.classList.remove("active");
    burgerMenuClose.classList.remove("active");
  });
}
