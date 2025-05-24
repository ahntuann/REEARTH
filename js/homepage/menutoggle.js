const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function toggleMenu() {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("show");

  const expanded = menuToggle.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", expanded);
}

menuToggle.addEventListener("click", toggleMenu);
