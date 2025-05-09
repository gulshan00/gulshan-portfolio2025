import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}>
            Hello Everyone, I'm <span className="purple">Gulshan Kumar</span>.
            <br />
            I am a frontend developer with 1+ year of professional experience at Pairbytes Company in Delhi, where I contributed to building responsive and user-friendly web applications.
            <br />
            Currently, I am exploring new opportunities in frontend development while also enhancing my skill set by learning backend technologies, including Node.js, Express.js, and MongoDB.
            <br />
            <br />
            I hold a Bachelor's degree in Computer Science Engineering from Sambhram Institute of Technology, Bangalore, graduating in 2023.
            <br />
            <br />
            Outside of work, I enjoy engaging in a variety of creative and recreational activities.
          </p> */}
          <p style={{ textAlign: "justify" }}>
    Hello Everyone, I'm <span className="purple">Gulshan Kumar</span>.
    <br />
    I am a frontend developer with 2 years of professional experience, specializing in building responsive and user-friendly web applications.
    <br />
    
    <br />
    <br />
    I hold a Bachelor's degree in Computer Science Engineering from Sambhram Institute of Technology, Bangalore, graduating in 2023.
    <br />
    <br />
    Outside of work, I enjoy engaging in a variety of creative and recreational activities.
</p>


          <ul>
            <li className="about-activity">
              <ImPointRight
                style={{ cursor: "pointer" }}
                className="wave"
                aria-labelledby="wave"
              />{" "}
              Exploring coding challenges and side projects
            </li>
            <li className="about-activity">
              <ImPointRight
                style={{ cursor: "pointer" }}
                className="wave"
                aria-labelledby="wave"
              />{" "}
              Gaming
            </li>
            <li className="about-activity">
              <ImPointRight
                style={{ cursor: "pointer" }}
                className="wave"
                aria-labelledby="wave"
              />{" "}
              Traveling and discovering new places
            </li>
          </ul>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
