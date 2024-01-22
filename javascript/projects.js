import database from "./database.js";

let projectsDiv = document.querySelector("#projects");

const projectContainer = document.createElement("div");
projectContainer.classList.add("container");

const projectTitle = document.createElement("h3");
projectTitle.classList.add("text-center");
projectTitle.textContent = "Projects";

let projectRow = document.createElement("div");
projectRow.classList.add("row");

function getAllProjects() {
  for (let index = 0; index < database.projects.length; index++) {
    let data = database.projects[index];
    let projectCard = document.createElement("div");
    projectCard.classList.add("col-xs-12");
    projectCard.classList.add("col-md-6");
    projectCard.classList.add("col-lg-4");
    projectCard.innerHTML = `
    <div class="card">
    <div class="card-header">${data.name}</div>
    <div class="card-body">
      
      <p class="card-text">${data.description}</p>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Print Speed: ${data.printSpeed}</li>
    <li class="list-group-item">Print Time: ${data.printTime}</li>
  </ul>
  <a href="#" class="btn btn-primary">Read More</a>
  </div>
    </div>
    `;
    projectRow.appendChild(projectCard);
  }
}

getAllProjects();

projectsDiv.appendChild(projectTitle);
projectContainer.appendChild(projectRow);
projectsDiv.appendChild(projectContainer);
