const hamburger = document.getElementById("menu-btn");
const navMenun = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  navMenun.classList.toggle("active");
});
