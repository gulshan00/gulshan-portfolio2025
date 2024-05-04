// import React from 'react';
// import ProjectCard from "./ProjectCards";
// import { Container, Row, Col } from "react-bootstrap";
// import Ibm from "../../Assets/../Assets/Ibm.png";
// import Solar from "../../Assets/../Assets/Solar.png";
// function Certificate() {
//   return (
//   <>
//       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={Solar}
//               isBlog={false}
//               title="Full Stack Developer"
//               description="A project for ordering food online. Users can browse through various food items, add them to their cart, and place orders for delivery or pickup."
//               // ghLink=""
//               // demoLink="https://g-restaurant-eight.vercel.app/"
//               techStack={[
//                 "Html",
//                 "Css",
//                 "JS",
//                 "Nodes",
//               ]}
//             />
//           </Col>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={Ibm}
//               isBlog={false}
//               title="AI & ML"
//               description="A project to search and display images based on user input. Users can search for images by typing keywords, and the application will fetch and display relevant images."
//               // ghLink=""
//               // demoLink="https://image-search-engine-seo.vercel.app/"
//               techStack={[
//                 "Ai & Ml",
//               ]}
//               titleColor="#cd5ff8"
//             />
//           </Col>

        
//         </Row>
//   </>
//   );
// }

// export default Certificate;



// import React from 'react';
// import ProjectCard from "./ProjectCards";
// import { Container, Row, Col } from "react-bootstrap";
// import Ibm from "../../Assets/../Assets/Ibm.png";
// import Solar from "../../Assets/../Assets/Solar.png";

// function Certificate() {
//   return (
//     <>
//       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//         <Col md={4} className="project-card">
//           <ProjectCard
//             imgPath={Solar}
//             isBlog={false}
//             title="Full Stack Developer"
//             description="As a Full Stack Developer, I contributed to the development of an e-commerce food website where users can conveniently order food online, browse through various food items, add them to their cart, and place orders for delivery or pickup."
//             // ghLink=""
//             // demoLink="https://g-restaurant-eight.vercel.app/"
//             techStack={[
//               "HTML",
//               "CSS",
//               "JavaScript",
//               "Node.js",
//             ]}
//           />
//         </Col>
//         <Col md={4} className="project-card">
//           <ProjectCard
//             imgPath={Ibm}
//             isBlog={false}
//             title="AI & ML"
//             description="In the AI & ML domain, I worked on a project involving an AI-based fitness tracker. This project utilized machine learning algorithms to track and analyze fitness metrics, providing users with personalized insights and recommendations for improving their fitness routines."
//             // ghLink=""
//             // demoLink="https://image-search-engine-seo.vercel.app/"
//             techStack={[
//               "AI & ML",
//             ]}
//             titleColor="#cd5ff8"
//           />
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default Certificate;


import React, { useState } from 'react';
import { Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Ibm from "../../Assets/../Assets/Ibm.png";
import Solar from "../../Assets/../Assets/Solar.png";
import CertificateCard from './CertificateCard';
function Certificate() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const handleImgClick = (imgPath) => {
    setModalImg(imgPath);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImg(null);
  };

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={Solar}
            isBlog={false}
            title="Full Stack Developer"
            description="As a Full Stack Developer, I contributed to the development of an e-commerce food website where users can conveniently order food online, browse through various food items, add them to their cart, and place orders for delivery or pickup."
            techStack={[
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
            ]}
            onClick={() => handleImgClick(Solar)}
          />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={Ibm}
            isBlog={false}
            title="AI & ML"
            description="In the AI & ML domain, I worked on a project involving an AI-based fitness tracker. This project utilized machine learning algorithms to track and analyze fitness metrics, providing users with personalized insights and recommendations for improving their fitness routines."
            techStack={[
              "AI & ML",
            ]}
            titleColor="#cd5ff8"
            onClick={() => handleImgClick(Ibm)}
          />
        </Col>
      </Row>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          {modalImg && <img src={modalImg} alt="Full size" style={{ maxWidth: "100%" }} />}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Certificate;
