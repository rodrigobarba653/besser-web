import { useState } from "react";

import "./MainNav.css";
import { Link } from "react-router-dom";

import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

function MainNav() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary"
          bg="white"
          data-bs-theme="light"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={"/assets/logo.png"} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Link className="me-3 nav-link" to="/nosotros">
                    Quienes Somos
                  </Link>
                  <Link className="me-3 nav-link" to="/directorio">
                    Directorio de Firmas
                  </Link>
                  <Link className="me-3 nav-link" to="/publicaciones">
                    Publicaciones
                  </Link>
                  <Link className="me-3 nav-link" to="/probono">
                    Probono
                  </Link>
                  <Link className="me-3 nav-link" to="/afiliaciones">
                    Afiliaciones
                  </Link>
                  <Link className="nav-link" to="/contacto">
                    Contacto
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MainNav;
