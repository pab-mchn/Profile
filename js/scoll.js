const scrollLinks = document.querySelectorAll(".scrollLink");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    let targetPosition = document.querySelector(targetId).offsetTop;

    let offset = 0;

    if (targetId === "#contact") {
      if (window.innerWidth < 768) {
        offset = navbarHeight - 350; // decrease the offset by 320 pixels on small screens
      } else {
        offset = navbarHeight - (20 * window.innerHeight) / 100; // decrease the offset by 5% of the viewport height on larger screens
      }
    } else {
      offset = navbarHeight;
    }

    targetPosition -= offset;

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
