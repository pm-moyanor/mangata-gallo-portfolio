const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  console.log(navLinks);
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
