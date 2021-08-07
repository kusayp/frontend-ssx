import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer px-0 px-lg-3">
        <Container fluid>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              SecondSTAX (SSX)

            </p>
        </Container>
      </footer>
    );
}

export default Footer;
