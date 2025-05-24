const contactBtn = document.getElementById("contactBtn");
const complainBtn = document.getElementById("complainBtn");
const contactForm = document.getElementById("contactForm");
const complainForm = document.getElementById("complainForm");

contactBtn.addEventListener("click", () => {
  contactBtn.classList.add("active");
  complainBtn.classList.remove("active");
  contactForm.classList.add("active");
  complainForm.classList.remove("active");
});

complainBtn.addEventListener("click", () => {
  complainBtn.classList.add("active");
  contactBtn.classList.remove("active");
  complainForm.classList.add("active");
  contactForm.classList.remove("active");
});
