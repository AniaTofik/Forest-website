const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((navLink) => {
  console.log(navLink);
  navLink.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
  });
});
