
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.cateam.com"
                  target="_blank"
                >
                  CaTeam
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Footer 1
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Footer 2
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by CaTeam
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
