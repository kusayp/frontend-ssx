import React from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

const LeftSidebar = ({ color, image, routes }) => {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar">
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <div
            className="simple-text logo-max mx-3"
          >
            <div className="logo-img">
              <img
                src={require("../../assets/img/logo.png").default}
                alt="..."
              />
            </div>
          </div>
          <a className="simple-text" href="#a">
            SecondSTAX
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.layout + prop.path)
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={prop.icon}></i>
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
