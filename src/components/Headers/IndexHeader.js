/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Background from '../../assets/img/antoine-barres.jpg'; // quitar ../../ para build
import FogLow from '../../assets/img/fog-low.png';
import Clouds from '../../assets/img/clouds.png';
import Slim from '../../assets/img/cateam-logo.png';

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{backgroundImage: "url(" + Background + ")"}}
        // style={{
        //   backgroundImage:
        //     "url(" + require("assets/img/antoine-barres.jpg") + ")",
        // }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Título</h1>
              <div className="fog-low">
                <img alt="..." src={FogLow} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={FogLow} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Descripción corta de la página
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + Clouds + ")",
          }}
        />
        <h6 className="category category-absolute">
          Diseñado por {"Mauro Machado"}
          
            <img
              alt="..."
              className="cateam-logo"
              src={Slim}
            />
          
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
