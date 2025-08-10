const iconMenu = document.querySelector(".mobile-menu-icon button");
const menuMobile = document.querySelector(".mobile-menu");
const openMenuIcon = document.querySelector(".open-menu");
const closeMenuIcon = document.querySelector(".close-menu");

const menuActive = () => {
  menuMobile.classList.toggle("active");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("show");
};

/*navigation bar effect for larger screens*/

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

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Fecha o menu
    menuMobile.classList.remove("active");
    openMenuIcon.classList.remove("hide");
    closeMenuIcon.classList.remove("show");

    // Rola até a seção clicada (caso queira animação suave)
    const targetId = link.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
