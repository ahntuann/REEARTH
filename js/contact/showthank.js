document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contactForm form");
  const complainForm = document.querySelector("#complainForm form");

  const modal = document.getElementById("thankYouModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  function showModal() {
    modal.style.display = "flex";
  }

  function hideModal() {
    modal.style.display = "none";
  }

  function handleSubmit(event) {
    event.preventDefault();

    contactForm.reset();
    complainForm.reset();

    showModal();
  }

  contactForm.addEventListener("submit", handleSubmit);
  complainForm.addEventListener("submit", handleSubmit);

  closeModalBtn.addEventListener("click", hideModal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      hideModal();
    }
  });
});
