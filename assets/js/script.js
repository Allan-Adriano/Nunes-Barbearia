const iconMenu = document.querySelector(".mobile-menu-icon button");
const menuMobile = document.querySelector(".mobile-menu");
const openMenuIcon = document.querySelector(".open-menu");
const closeMenuIcon = document.querySelector(".close-menu");

const menuActive = () => {
  menuMobile.classList.toggle("active");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("show");
};

//Closes the menu when the user clicks
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    menuMobile.classList.remove("active");
    openMenuIcon.classList.remove("hide");
    closeMenuIcon.classList.remove("show");
  });
});

//navigation bar effect for larger screens

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const isDesktop = window.innerWidth >= 992;

  if (isDesktop && window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("resize", function () {
  const header = document.querySelector("header");
  if (window.innerWidth < 992) {
    header.classList.remove("scrolled");
  }
});

//automatic slideShow effect

let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
  nextImage();
}, 5000);
function nextImage() {
  count++;
  if (count > 3) count = 1;
  document.getElementById("radio" + count).checked = true;
}
