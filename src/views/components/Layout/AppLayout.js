import React, { useEffect, useRef } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import ssxRoutes from "../../../routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const AppLayout = () => {
  const location = useLocation();
  const mainPanel = useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    document.scrollingElement.scrollTop = 0;

    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <div className="wrapper">
      <LeftSidebar routes={ssxRoutes} />
      <div className="main-panel" ref={mainPanel}>
        {/* app header */}
        <Header />
        <div className="content">
          <Switch>{getRoutes(ssxRoutes)}</Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
