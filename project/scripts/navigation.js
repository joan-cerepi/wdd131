const menuBtn = document.querySelector(".hamburger-menu");
menuBtn.addEventListener("click", () => {
  const navBar = document.querySelector(".nav");
  menuBtn.classList.toggle("change");
  navBar.classList.toggle("show");
});
