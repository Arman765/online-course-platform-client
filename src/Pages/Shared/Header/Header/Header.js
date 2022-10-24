import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={theme ? "light" : "primary"}
      variant={theme ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand href="#home">
          Free<span>Dom</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>

          {theme ? (
            <FaToggleOff onClick={handleTheme}></FaToggleOff>
          ) : (
            <FaToggleOn onClick={handleTheme}></FaToggleOn>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
