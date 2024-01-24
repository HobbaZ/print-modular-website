import database from "./database.js";

const projects = document.getElementById("content");

const contentContainer = document.createElement("div");
contentContainer.classList.add("container");

const projectTitle = document.createElement("h3");
projectTitle.classList.add("text-center");
projectTitle.textContent = "Projects";

let projectRow = document.createElement("div");
projectRow.classList.add("row");

function redirectToProjectInfo(projectId) {
  console.log(`Clicked on project with ID: ${projectId}`);
}

function getAllProjects() {
  for (let index = 0; index < database.projects.length; index++) {
    let data = database.projects[index];
    let projectCard = document.createElement("div");
    projectCard.classList.add("col-xs-12");
    projectCard.classList.add("col-md-6");
    projectCard.classList.add("col-lg-4");
    projectCard.innerHTML = `
      <div class="card mb-4">
        <div class="card-header">${data.name}</div>
        <div class="card-body">
          <p class="card-text">${data.description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Print Speed: ${data.printSpeed}</li>
            <li class="list-group-item">Print Time: ${data.printTime}</li>
          </ul>
          <button onclick="redirectToProjectInfo(${index})" class="btn btn-primary">Read More</button>
        </div>
      </div>
    `;
    projectRow.appendChild(projectCard);
  }
}

getAllProjects();

contentContainer.appendChild(projectTitle);
contentContainer.appendChild(projectRow);
projects.appendChild(contentContainer);

export default projects;
