import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { NavLink } from "react-router-dom";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
       
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Gulshan Kumar</h3>
        </Col>
         <Col md="4" className="footer-copywright">
        <h3>Made with <span className="heart-animation">❤️</span> by Gulshan Kumar</h3>
      </Col>
       <Col md="4" className="footer-body">
  <ul className="footer-icons">
    <li className="social-icons">
      <a
        href="https://github.com/gulshan00"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        <AiFillGithub />
      </a>
    </li>

    <li className="social-icons">
      <a
        href="https://wa.me/917903074152"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        <AiOutlineWhatsApp />
      </a>
    </li>

    <li className="social-icons">
      <a
        href="https://www.linkedin.com/in/gulshan-kumar-64244220a/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        <FaLinkedinIn />
      </a>
    </li>

    <li className="social-icons">
      <a
        href="https://www.instagram.com/gulshan.sandilya_/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        <AiFillInstagram />
      </a>
    </li>
  </ul>
</Col>

      </Row>
    </Container>
  );
}

export default Footer;
