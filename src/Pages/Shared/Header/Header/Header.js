import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

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
          <Nav className="me-auto ">
            <Link to="/" className="text-decoration-none ms-5 text-dark">
              Home
            </Link>
            <Link className="text-decoration-none ms-5 text-dark" to="/courses">
              Courses
            </Link>
            <Link to="/faq" className="text-decoration-none ms-5 text-dark">
              FAQ
            </Link>
            <Link to="/blog" className="text-decoration-none ms-5 text-dark">
              Blog
            </Link>
          </Nav>

          <div className="mx-auto">
            {theme ? (
              <FaToggleOff onClick={handleTheme}></FaToggleOff>
            ) : (
              <FaToggleOn onClick={handleTheme}></FaToggleOn>
            )}
          </div>

          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
