import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import solar from "../../Assets/Projects/solar.png";
import weather from "../../Assets/Projects/weather.png";
import img from "../../Assets/Projects/image.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import restaurant from "../../Assets/Projects/restaurants.png";
import green from "../../Assets/Projects/green.png";
import traveller from "../../Assets/Projects/traveller.png";
import busico from "../../Assets/Projects/busico.png";

import Certificate from "./Certificate";

function Projects() {
  const [activeTab, setActiveTab] = useState("Project");

  const handleTabChange = (tab) => {
    console.log("Tab clicked:", tab);
    setActiveTab(tab);
  };
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Some of <strong className="purple">My Projects / Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Explore some of the projects and Certificate I've been involved in
          recently.
        </p>
        <div className="tabs">
          <button
            className={activeTab === "Project" ? "active" : ""}
            onClick={() => handleTabChange("Project")}
          >
            Projects
          </button>
          <button
            className={activeTab === "Certificate" ? "active" : ""}
            onClick={() => handleTabChange("Certificate")}
          >
            Certificate
          </button>
        </div>

        {activeTab === "Project" && (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={busico}
                isBlog={false}
                title="Busico Template"
                description="A template for a modern and stylish e-commerce website, featuring a sleek design and smooth user experience."
                ghLink=""
                demoLink="https://gulshan-ecommerce-website.vercel.app/"
                techStack={["React JS", "Tailwind CSS", "JavaScript"]}
                titleColor="#cd5ff8"
              />

            </Col> */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={green}
                isBlog={false}
                title="Greenvibe-website"
                description="Explore Greenvibe-website to find eco-friendly images, raising awareness and encouraging action for a sustainable future. Join us in the movement for a greener world!"
                ghLink=""
                demoLink="https://gulshan-greenvibe.vercel.app/"
                techStack={["Html", "Css", "JavaScript", "", ""]}
                titleColor="#cd5ff8"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={img}
                isBlog={false}
                title="Image-Search-Engine"
                description="A project to search and display images based on user input. Users can search for images by typing keywords, and the application will fetch and display relevant images."
                ghLink=""
                demoLink="https://image-search-engine-seo.vercel.app/"
                techStack={[
                  "React.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "Axios",
                  " Api",
                ]}
                titleColor="#cd5ff8"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={restaurant}
                isBlog={false}
                title="Online-Food-Ordering"
                description="A project for ordering food online. Users can browse through various food items, add them to their cart, and place orders for delivery or pickup."
                ghLink=""
                demoLink="https://g-restaurant-eight.vercel.app/"
                techStack={[
                  "React.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "Material UI",
                ]}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weather}
                isBlog={false}
                title="Weather"
                description="A project to display weather information for different locations. Users can search for a city and view current weather conditions, temperature, humidity, and wind speed."
                ghLink=""
                demoLink="https://weather-app-yu52.vercel.app/"
                techStack={["Html", "Css", "JavaScript", "Api"]}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={solar}
                isBlog={false}
                title="Divya Solar Power"
                description="A project to monitor and manage solar power generation systems. Users can view real-time data on solar panel efficiency, energy production, and environmental impact."
                ghLink=""
                demoLink="https://pb-dppl.web.app/"
                techStack={[
                  "React.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "Axios",
                  "Api",
                  "Material UI",
                ]}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={traveller}
                isBlog={false}
                title="Traveller"
                description="Your go-to destination for seamless trip planning and vacation exploration. Discover new adventures, manage itineraries effortlessly, and access valuable resources for an unforgettable travel experience."
                ghLink=""
                demoLink="https://gulshan-travellers.vercel.app/"
                techStack={[
                  "Html",
                  "Css",
                  "JavaScript",
                  "",
                  "",
                  "",
                ]}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Portfolio"
                description="A project to showcase personal or professional work and accomplishments. Users can view details about skills, projects, experience, and contact information."
                ghLink=""
                techStack={["React.js", "Tailwind CSS", "JavaScript"]}
                demoLink="https://pb-dppl.web.app/"
              />
            </Col>
          </Row>
        )}

        {activeTab === "Certificate" && (
          <div>
            <Certificate />
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
