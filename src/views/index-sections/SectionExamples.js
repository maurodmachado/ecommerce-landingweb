import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import {Link} from 'react-router-dom';
// core components
import LandingPage from 'assets/img/examples/landing-page.png';
import ProfilePage from 'assets/img/examples/profile-page.png';

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={LandingPage}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                target="_blank"
              >
               <Link to="/landing-page" className="link">Landing Page</Link> 
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={ProfilePage}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                target="_blank"
              >
                <Link to="/profile-page" className="link">Profile Page</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
