document.querySelector(".js-share-btn").addEventListener("click", () => {
  document.querySelectorAll(".js-share-popup").forEach((popup) => {
    popup.classList.toggle("opacity-100");
    popup.classList.toggle("md:-translate-y-7");
  });
});
