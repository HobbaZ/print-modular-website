import database from "./database.js";

let projectsDiv = document.querySelector("#projects");

const projectContainer = document.createElement("div");
projectContainer.classList.add("container");

const projectTitle = document.createElement("h3");
projectTitle.classList.add("text-center");
projectTitle.textContent = "Projects";

function getProjectData() {
  let data = database.projects[0];
  let projectCard = document.createElement("div");
  projectCard.innerHTML = `
    <div class="card mb-4">
    <div class="card-header">${data.name}</div>
    <div class="card-body">
      
      <p class="card-text">${data.description}</p>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Print Speed: ${data.printSpeed}</li>
    <li class="list-group-item">Print Time: ${data.printTime}</li>
  </ul>

  </div>
    </div>
    `;
  projectRow.appendChild(projectCard);
}

getProjectData();

projectsDiv.appendChild(projectTitle);
projectRow.appendChild(projectCard);
projectContainer.appendChild(projectRow);
projectsDiv.appendChild(projectContainer);
