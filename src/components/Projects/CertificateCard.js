import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
const CertificateCard = ({ imgPath, isBlog, title, description, techStack, onClick }) => {
  return (
    <Card className="project-card-view">
      <div style={{ position: "relative" }}>
        <Card.Img variant="top" src={imgPath} alt={title} />
        <div style={{ position: "absolute", top: "0", right: "0", zIndex: 1 }}>
          <Button variant="light" onClick={onClick}>
            <AiOutlineEye/>
          </Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title style={{ color: "#cd5ff8" }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <div>
          {techStack && (
            <Card.Text className="tech-stack">
              <span style={{ color: "#cd5ff8", fontWeight: "bold", marginRight: "5px" }}>Tech Stack:</span>
              {techStack.map((tech, index) => (
                <span key={index} style={{ marginRight: "5px" }}>{tech}</span>
              ))}
            </Card.Text>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CertificateCard;
