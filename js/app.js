//responsive menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

const dinamicMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", dinamicMenu);

menuLinks.addEventListener("click", dinamicMenu);
//dinamic projects

const projectListContainer = document.getElementById("projects-list-container");

projects.forEach((project) => {
  let projectContent = document.createElement("li");
  projectContent.className = "projects-list-item";
  projectContent.innerHTML = `
                <img src="${project.img}">
                <div class="projects-list-item-info">
                <h2>${project.name} </h2>
                <h4>${project.projectDescription}</h4>
                <p>${project.role}</p>
                <div class="projects-list-item-links">
                <p><span><a class="btn-gradient-mobile" href="${project.linkInfo}" target="_blank" >More</a>              
                <a class="btn-gradient-mobile" href="${project.linkProject}" target="_blank">Live</a></span>
                </div>
                
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
