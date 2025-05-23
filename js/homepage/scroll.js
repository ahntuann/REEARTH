const parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  parallax.style.transform = `translateY(-${scrollY * 0.2}px)`;
});
