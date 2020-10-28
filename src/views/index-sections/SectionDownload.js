import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Texto</h2>
              <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href=""
                target="_blank"
              >
                Boton Name
              </Button>
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Pregunta?</h2>
              <p className="description">
               Texto texto texto texto {" "}
                <a className="text-danger" href="#mauro" disabled>
                  Link de pagina
                </a>
                . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              <Button className="btn-round" color="info" href="#mauro" disabled>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Boton Icon Name
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Redes sociales</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#mauro"
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
               Boton a Twitter
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href="#mauro"
                id="tooltip840791273"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" /> Google
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
              Boton a Google
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#mauro"
                id="tooltip68961360"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Boton a Facebook
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="github-bg"
                href="https://github.com/maurodmachado"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-github" /> Star
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
