import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gulshan Kumar </span>
            from <span className="purple">Bihar, India.</span>
            <br />
            I am currently employed as an SDE-1 in a frontend developer role at
            Pairbytes Company in Delhi.
            <br />
            I graduated with a B.E. in Computer Science Engineering from
            Sambhram Institute of Technology (Bengalore) in 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight
                style={{ cursor: "pointer" }}
                className="wave"
                aria-labelledby="wave"
              />{" "}
              Playing With coding
            </li>
            <li className="about-activity">
              <ImPointRight
                style={{ cursor: "pointer" }}
                className="wave"
                aria-labelledby="wave"
              />{" "}
              Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight
                style={{ cursor: "pointer" }}
                className="wave"
                aria-labelledby="wave"
              />{" "}
              Travelling
            </li>
          </ul>

          {/* <p
            style={{ color: "#8A2BE2", fontStyle: "italic", fontSize: "1.2em" }}
          >
            "Innovate to create meaningful impact!"
          </p>
          <footer
            className="blockquote-footer"
            style={{ color: "#8A2BE2", fontSize: "1em" }}
          >
            Gulshan Kumar
          </footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
