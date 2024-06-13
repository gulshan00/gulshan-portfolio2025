import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate("/contact");
  };

  const handleResumeClick = () => {
    navigate("/resume"); // Adjust this path as needed
  };

  return (
    <section style={{ position: "relative", zIndex: 1 }}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{ position: "relative", zIndex: 2 }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> GULSHAN KUMAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <Row className="">
                <Col className="d-flex justify-content-start">
                  <Button
                    variant="primary"
                    onClick={handleHireMeClick}
                    style={{
                      backgroundColor: "#cd5ff8",
                      borderColor: "#cd5ff8",
                      borderRadius: "25px",
                      padding: "10px 20px",
                      transition: "background-color 0.3s ease, border-color 0.3s ease",
                      zIndex: 3,
                      position: "relative",
                      marginRight: "10px",
                      marginLeft:"40px"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#a34ecb";
                      e.target.style.borderColor = "#a34ecb";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#cd5ff8";
                      e.target.style.borderColor = "#cd5ff8";
                    }}
                  >
                    Hire Me
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleResumeClick}
                    style={{
                      backgroundColor: "#ff8c00",
                      borderColor: "#ff8c00",
                      borderRadius: "25px",
                      padding: "10px 20px",
                      transition: "background-color 0.3s ease, border-color 0.3s ease",
                      zIndex: 3,
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#e67300";
                      e.target.style.borderColor = "#e67300";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#ff8c00";
                      e.target.style.borderColor = "#ff8c00";
                    }}
                  >
                    Resume
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
