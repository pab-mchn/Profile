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

  // const projectInfo = projectContent.querySelector(".btn-gradient-mobile");
  // projectInfo.addEventListener("click", () => {
  //   Swal.fire({
  //     title: "Sweet!",
  //     text: "Modal with a custom image",
  //     imageUrl: "https://unsplash.it/400/200",
  //     imageWidth: 400,
  //     color: "red",
  //     imageAlt: "Custom image",
  //   });
  // });
});

//dinamic main projects
const mainProjectListContainer = document.getElementById("main-projects-list-container");
mainProject.forEach((project) => {
  let mainProjectContent = document.createElement("li");
  mainProjectListContainer.className = "main-projects-list-item";
  mainProjectListContainer.innerHTML = `
                <h1>on the code</h1>
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
  projectListContainer.append(mainProjectContent);
});

//navegation projects
const arrowLeft = document.getElementById("navegation-arrow-left");
const arrowRight = document.getElementById("navegation-arrow-right");
const projectContent = document.getElementById("projects-list-container");

arrowLeft.addEventListener("click", () => {
  projectContent.scrollLeft -= 500;
});

arrowRight.addEventListener("click", () => {
  projectContent.scrollLeft += 500;
});
