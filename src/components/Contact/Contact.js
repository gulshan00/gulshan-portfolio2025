import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Contact() {
  const contactCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    transition: "background-color 0.3s ease",
    width: "100%", // Adjust width for responsiveness
    textAlign: "center", // Center align the card content
  };

  const handleCardHover = (e) => {
    e.target.style.backgroundColor = "#cd5ff8";
  };

  const handleCardLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  const iconSize = 40; // Adjust icon size here

  return (
    <section>
      <Particle />
      <Container className="contact-section">
        <Container className="mt-5">
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.5",
              color: "#cd5ff8",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Thanks for your interest in getting in touch!
            <span
              role="img"
              aria-label="laughing"
              style={{ cursor: "pointer" }}
              className="wave"
              aria-labelledby="wave"
              title="😄"
            >
              😄
            </span>
            <br />
            Reach out to me now for a complimentary consultation!
            <span
              role="img"
              aria-label="love"
              style={{ cursor: "pointer" }}
              className="wave"
              aria-labelledby="wave"
              title="❤️"
            >
              ❤️
            </span>
          </p>

          <Row className="justify-content-center">
            {" "}
         
            <Col md={4} className="mb-4">
              {" "}
           
              <div
                className="contact-info"
                style={contactCardStyle}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <NavLink
                  to="mailto:gulshankiul1810@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineMail size={iconSize} style={{ color: "white" }} />
                  <span style={{ color: "white" }}>
                    gulshankiul1810@gmail.com
                  </span>
                </NavLink>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              {" "}
              {/* Set md to 4 for each column */}
              <div
                className="contact-info"
                style={contactCardStyle}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <NavLink
                  to="tel:+917903074152"
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlinePhone size={iconSize} style={{ color: "white" }} />
                  <span style={{ color: "white" }}>7903074152</span>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <NavLink
                  to="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </NavLink>
              </li>
              <li className="social-icons">
                <NavLink
                  to="https://wa.me/7903074152"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </NavLink>
              </li>
              <li className="social-icons">
                <NavLink
                  to="https://www.linkedin.com/in/gulshan-kumar-64244220a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </NavLink>
              </li>
              <li className="social-icons">
                <NavLink
                  to="https://www.instagram.com/gulshan.sandilya_/?igshid=ZDdkNTZiNTM%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
