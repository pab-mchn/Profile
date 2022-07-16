//responsive menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

//dinamic projects

const projectListContainer = document.getElementById("projects-list-container");

projects.forEach((project) => {
  let projectContent = document.createElement("li");
  projectContent.className = "projects-list-item";
  projectContent.innerHTML = `
                <img src="${project.img}">
                <div class="projects-list-item-info">
                <h3>${project.name} </h3>
                <h6>${project.projectDescription}</h6>
                <p><small>${project.technologyDescription}</small></p>
                <p><span><a class="projects-list-item-info-link" href="${project.linkProject}">visit the site</a></span> - <span><a class="projects-list-item-info-link" href="${project.linkcode}">visit the code</a></span>
                </div>
            `;
  projectListContainer.append(projectContent);
});

//link in logo to go to the top
//
const navbarLogo = document.getElementById("navbar-logo");

navbarLogo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
