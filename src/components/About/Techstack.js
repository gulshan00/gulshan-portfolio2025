import React from "react";
import { Col, Row } from "react-bootstrap";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import js from "../../Assets/js.png";
import react from "../../Assets/react.png";
import tailwind from "../../Assets/tailwind-css.png";
import bootstrap from "../../Assets/bootstrap.png";
import material from "../../Assets/material-ui.png";
import chakra from "../../Assets/chakra.png";
import redux from "../../Assets/redux.png";
import git from "../../Assets/git.png";
import python from "../../Assets/python.png";
import github from "../../Assets/github.png";
import postman from "../../Assets/postman.png";
import nodes from "../../Assets/nodes.svg";
import mongodb from "../../Assets/mongodb.svg";
import express from "../../Assets/express.png";
import next from "../../Assets/next.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={css} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>CSS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={js} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bootstrap} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>BOOTSTRAP </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={react} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>REACT JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={next} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>NEXT JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tailwind} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>TAILWIND CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={material} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>MATERIAL UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={chakra} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>CHAKRA UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={redux} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>REDUX</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={python} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>PYTHON</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>GIT</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>POSTMAN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={github} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>GITHUB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={nodes} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>Nodes</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={mongodb} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}> MongoDB</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={express} className="img-fluid" alt="avatar" style={{ width: "50%", height: "50%" }} />
        <p style={{ width: "100%", textAlign: "center" }}>Express</p>
      </Col> */}
    </Row>
  );
}

export default Techstack;
