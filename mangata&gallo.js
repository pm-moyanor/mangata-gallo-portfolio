const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("href");
    const targetSection = document.querySelector(sectionId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

const menuIcon = document.querySelector(".menu-icon i");
const xMark = document.querySelector(".menu-xmark i");
const navbar = document.querySelector(".navbar ul");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
  Icon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});
