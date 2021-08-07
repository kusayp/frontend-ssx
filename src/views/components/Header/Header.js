import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ssxRoutes from "../../../routes";

const Header = () => {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < ssxRoutes.length; i++) {
      if (
        location.pathname.indexOf(ssxRoutes[i].layout + ssxRoutes[i].path) !==
        -1
      ) {
        return ssxRoutes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="nc-icon nc-palette"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="nav mr-auto">
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#ssx"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">Jon Doe</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#ssx"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="no-icon">Log out</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
