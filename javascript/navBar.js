import home from "./Home.js";
import about from "./About.js";
import projects from "./Projects.js";
import products from "./Products.js";
import contact from "./Contact.js";

function getContent(contentType) {
  const contentDiv = document.getElementById("content");
  switch (contentType) {
    case "Home":
      contentDiv.innerHTML = home;
      break;

    case "About":
      contentDiv.innerHTML = about;
      break;

    case "Projects":
      contentDiv.innerHTML = projects;
      break;

    case "Products":
      contentDiv.innerHTML = products;
      break;

    case "Contact":
      contentDiv.innerHTML = contact;
      break;

    default:
      contentDiv.innerHTML = "";
  }
}

const navbar = `
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Print Modular</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <button class="nav-link" id="homeBtn">Home</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="aboutBtn">About</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="projectsBtn">Projects</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="productsBtn">Products</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="contactBtn">Contact Us</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

document.querySelector("#nav").innerHTML = navbar;

// Add event listeners
document
  .getElementById("homeBtn")
  .addEventListener("click", () => getContent("Home"));
document
  .getElementById("aboutBtn")
  .addEventListener("click", () => getContent("About"));
document
  .getElementById("projectsBtn")
  .addEventListener("click", () => getContent("Projects"));
document
  .getElementById("productsBtn")
  .addEventListener("click", () => getContent("Products"));
document
  .getElementById("contactBtn")
  .addEventListener("click", () => getContent("Contact"));

export default navbar;
