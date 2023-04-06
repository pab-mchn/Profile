const scrollLinks = document.querySelectorAll(".scrollLink");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const myNavbarHeight = document.querySelector(".navbar").offsetHeight;
    let targetPosition = document.querySelector(targetId).offsetTop;

    if (targetId !== "#special-section") {
      targetPosition -= myNavbarHeight;
    }

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

//link in logo to go to the top
const navbarLogo = document.getElementById("navbar-logo");

navbarLogo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
