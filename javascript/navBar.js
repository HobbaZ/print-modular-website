const navbar = (document.querySelector("#nav").innerHTML = `
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Print Modular</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`);

/*<Nav className="navbar navbar-expand-lg navbar-dark">
      <Container fluid>
        <Navbar.Brand as={Link} className="text-white ml-3" to="/">
          Print Modular
        </Navbar.Brand>

        {/*Navbar collapse and expand }
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBarResponsive"
          aria-controls="navBarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span id="hamburgerIcon">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navBarResponsive">
          <Nav className="navbar-nav ml-auto mb-2 mb-lg-0">
            <NavLink
              as={Link}
              className="ml-3 my-2"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              Home
            </NavLink>

            <NavLink
              as={Link}
              className="ml-3 my-2"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              About
            </NavLink>

            <NavLink
              className="ml-3 my-2"
              as={Link}
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              {" "}
              Contact
            </NavLink>

            <NavLink
              className="ml-3 my-2"
              as={Link}
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              {" "}
              Projects
            </NavLink>

            <NavLink
              className="ml-3 my-2"
              as={Link}
              to="/products"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              {" "}
              products
            </NavLink>
          </Nav>
        </div>
      </Container>
    </Nav>*/
