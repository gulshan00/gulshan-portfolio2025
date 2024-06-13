// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />

//         <Container className="home-content">

//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> GULSHAN KUMAR</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>
//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>


//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;
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

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
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

          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Button
                variant="primary"
                onClick={handleHireMeClick}
                style={{
                  backgroundColor: "#cd5ff8",
                  borderColor: "#cd5ff8",
                  borderRadius: "25px",
                  padding: "10px 20px",
                  transition: "background-color 0.3s ease, border-color 0.3s ease",
                  zIndex: 10, // Ensure the button is on top
                  position: "relative", // Make sure the button is positioned correctly
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
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
