import React, { createContext, useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaToggleOn, FaToggleOff, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleToogleDark = () => {
    document.body.classList.add("bg-dark");
    document.body.classList.remove("bg-light");
    setTheme(!theme);
  };
  const handleToogleLight = () => {
    document.body.classList.add("bg-light");
    document.body.classList.remove("bg-dark");
    setTheme(!theme);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={theme ? "light" : "info"}
      variant={theme ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Free<span className="text-black fs-4">Dom</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            <Link
              to="/"
              className="text-decoration-none  text-dark fw-bold btn "
            >
              Home
            </Link>
            <Link
              className="text-decoration-none text-dark fw-bold btn "
              to="/courses"
            >
              Courses
            </Link>
            <Link
              to="/faq"
              className="text-decoration-none  text-dark fw-bold btn "
            >
              FAQ
            </Link>
            <Link
              to="/blog"
              className="text-decoration-none  text-dark fw-bold btn "
            >
              Blog
            </Link>
          </Nav>

          <Nav>
            <>
              {user?.uid ? (
                <>
                  {/* <button onClick={handleLogOut}>Log Out</button> */}
                  <Button
                    onClick={handleLogOut}
                    variant="light"
                    className="fw-bold"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="info" className="mx-2 ">
                    <Link
                      to="/login"
                      className="text-decoration-none  text-dark fw-bold"
                    >
                      Login
                    </Link>
                  </Button>{" "}
                  <Button variant="warning" className="mx-2">
                    {" "}
                    <Link
                      to="/signup"
                      className="text-decoration-none text-dark fw-bold"
                    >
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Nav.Link className="text-decoration-none ms-5 text-dark">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUser style={{ height: "30px" }}></FaUser>
                )}
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
          <Nav className="ms-5">
            <div className="mx-auto">
              {theme ? (
                <FaToggleOn
                  style={{ width: "60px" }}
                  onClick={handleToogleLight}
                ></FaToggleOn>
              ) : (
                <FaToggleOff
                  style={{ width: "60px" }}
                  onClick={handleToogleDark}
                ></FaToggleOff>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
