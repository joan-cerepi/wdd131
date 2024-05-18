// Caching the DOM.
const hamMenu = document.getElementById("hamMenu");
const navigation = document.querySelector(".navigation");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("change");
  navigation.classList.toggle("show-links");
});
