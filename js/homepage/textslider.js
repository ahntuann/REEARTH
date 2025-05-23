const texts = [
  "Be the Change",
  "Stand for Something",
  "Make an Impact",
  "Join the Movement",
];

const textElement = document.getElementById("animated-text");
let index = 0;

function updateText() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  textElement.classList.remove("background-text");
  void textElement.offsetWidth;
  textElement.textContent = texts[index];
  textElement.classList.add("background-text");

  index = (index + 1) % texts.length;
  window.scrollTo(scrollX, scrollY);
}

setInterval(updateText, 5000);
