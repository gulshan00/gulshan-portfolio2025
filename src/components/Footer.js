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
              <NavLink to="https://github.com/gulshan00" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </NavLink>
            </li>
            <li className="social-icons">
              <NavLink to="https://wa.me/917903074152" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiOutlineWhatsApp />
              </NavLink>
            </li>
            <li className="social-icons">
              <NavLink to="https://www.linkedin.com/in/gulshan-kumar-64244220a/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </NavLink>
            </li>
            <li className="social-icons">
              <NavLink to="https://www.instagram.com/gulshan.sandilya_/?igshid=ZDdkNTZiNTM%3D" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </NavLink>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
