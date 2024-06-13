// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import {
//   AiOutlineMail,
//   AiOutlinePhone,
//   AiFillGithub,
//   AiOutlineWhatsApp,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import Form from "./Form";
// function Contact() {
//   const contactCardStyle = {
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     padding: "20px",
//     transition: "background-color 0.3s ease",
//     width: "100%", // Adjust width for responsiveness
//     textAlign: "center", // Center align the card content
//   };

//   const handleCardHover = (e) => {
//     e.target.style.backgroundColor = "#cd5ff8";
//   };

//   const handleCardLeave = (e) => {
//     e.target.style.backgroundColor = "transparent";
//   };

//   const iconSize = 40; // Adjust icon size here

//   return (
//     <section>
//       <Particle />
//       <Container className="contact-section">
//         <Container className="mt-5">
//           <p
//             style={{
//               fontSize: "18px",
//               lineHeight: "1.5",
//               color: "#cd5ff8",
//               textAlign: "center",
//               marginBottom: "30px",
//             }}
//           >
//             Thanks for your interest in getting in touch!
//             <span
//               role="img"
//               aria-label="laughing"
//               style={{ cursor: "pointer" }}
//               className="wave"
//               aria-labelledby="wave"
//               title="😄"
//             >
//               😄
//             </span>
//             <br />
//             Reach out to me now for a complimentary consultation!
//             <span
//               role="img"
//               aria-label="love"
//               style={{ cursor: "pointer" }}
//               className="wave"
//               aria-labelledby="wave"
//               title="❤️"
//             >
//               ❤️
//             </span>
//           </p>

//           <Row className="justify-content-center">
//             {" "}
         
//             <Col md={4} className="mb-4">
//               {" "}
           
//               <div
//                 className="contact-info"
//                 style={contactCardStyle}
//                 onMouseEnter={handleCardHover}
//                 onMouseLeave={handleCardLeave}
//               >
//                 <NavLink
//                   to="mailto:gulshankiul1810@gmail.com"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <AiOutlineMail size={iconSize} style={{ color: "white" }} />
//                   <span style={{ color: "white" }}>
//                     gulshankiul1810@gmail.com
//                   </span>
//                 </NavLink>
//               </div>
//             </Col>
//             <Col md={4} className="mb-4">
//               {" "}
//               {/* Set md to 4 for each column */}
//               <div
//                 className="contact-info"
//                 style={contactCardStyle}
//                 onMouseEnter={handleCardHover}
//                 onMouseLeave={handleCardLeave}
//               >
//                 <NavLink
//                   to="tel:+917903074152"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <AiOutlinePhone size={iconSize} style={{ color: "white" }} />
//                   <span style={{ color: "white" }}>7903074152</span>
//                 </NavLink>
//               </div>
//             </Col>
//           </Row>
          
//         </Container>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <NavLink
//                   to="https://github.com/yourusername"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://wa.me/7903074152"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiOutlineWhatsApp />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://www.linkedin.com/in/gulshan-kumar-64244220a/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://www.instagram.com/gulshan.sandilya_/?igshid=ZDdkNTZiNTM%3D"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </NavLink>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Contact;



// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import Particle from "../Particle";
// import {
//   AiOutlineMail,
//   AiOutlinePhone,
//   AiFillGithub,
//   AiOutlineWhatsApp,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });

//   const [showAlert, setShowAlert] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowAlert(true);
//     // Handle form submission logic here
//     console.log(formData);
//     setFormData({ name: "", email: "", mobile:"" , message: "" }); // Reset form
//   };

//   const contactCardStyle = {
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     padding: "20px",
//     transition: "background-color 0.3s ease",
//     width: "100%", // Adjust width for responsiveness
//     textAlign: "center", // Center align the card content
//     cursor: "pointer",
//   };

//   const handleCardHover = (e) => {
//     e.target.style.backgroundColor = "#cd5ff8";
//   };

//   const handleCardLeave = (e) => {
//     e.target.style.backgroundColor = "transparent";
//   };

//   const iconSize = 40; // Adjust icon size here

//   const circularInputStyle = {
//     borderRadius: "25px",
//     padding: "10px 20px",
//     border: "1px solid #cd5ff8",
//     transition: "border-color 0.3s ease, box-shadow 0.3s ease",
//     backgroundColor: "#f7f7f7", // Light background for better contrast
//     marginRight: "10px",
//     marginBottom: "10px",
//     flex: 1,
//   };

//   const circularInputFocusStyle = {
//     borderColor: "#a34ecb",
//     boxShadow: "0 0 10px rgba(205, 95, 248, 0.5)",
//   };

//   const submitButtonStyle = {
//     backgroundColor: "#cd5ff8",
//     borderColor: "#cd5ff8",
//     borderRadius: "25px",
//     padding: "10px 20px",
//     transition: "background-color 0.3s ease, border-color 0.3s ease",
//     width: "100%",
//   };

//   const submitButtonHoverStyle = {
//     backgroundColor: "#a34ecb",
//     borderColor: "#a34ecb",
//   };

//   return (
//     <section>
//       <Particle />
//       <Container className="contact-section" style={{ padding: "60px 0" }}>
//         <Container className="mt-5">
//           <p
//             style={{
//               fontSize: "18px",
//               lineHeight: "1.5",
//               color: "#cd5ff8",
//               textAlign: "center",
//               marginBottom: "30px",
//             }}
//           >
//             Thanks for your interest in getting in touch!
//             <span
//               role="img"
//               aria-label="laughing"
//               style={{ cursor: "pointer" }}
//               className="wave"
//               aria-labelledby="wave"
//               title="😄"
//             >
//               😄
//             </span>
//             <br />
//             Reach out to me now for a complimentary consultation!
//             <span
//               role="img"
//               aria-label="love"
//               style={{ cursor: "pointer" }}
//               className="wave"
//               aria-labelledby="wave"
//               title="❤️"
//             >
//               ❤️
//             </span>
//           </p>

//           <Row className="justify-content-center">
//             <Col md={4} className="mb-4">
//               <div
//                 className="contact-info"
//                 style={contactCardStyle}
//                 onMouseEnter={handleCardHover}
//                 onMouseLeave={handleCardLeave}
//               >
//                 <NavLink
//                   to="mailto:gulshankiul1810@gmail.com"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <AiOutlineMail size={iconSize} style={{ color: "white" }} />
//                   <span style={{ color: "white", display: "block" }}>
//                     gulshankiul1810@gmail.com
//                   </span>
//                 </NavLink>
//               </div>
//             </Col>
//             <Col md={4} className="mb-4">
//               <div
//                 className="contact-info"
//                 style={contactCardStyle}
//                 onMouseEnter={handleCardHover}
//                 onMouseLeave={handleCardLeave}
//               >
//                 <NavLink
//                   to="tel:+917903074152"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <AiOutlinePhone size={iconSize} style={{ color: "white" }} />
//                   <span style={{ color: "white", display: "block" }}>
//                     7903074152
//                   </span>
//                 </NavLink>
//               </div>
//             </Col>
//           </Row>
//         </Container>

//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8}>
//               {/* <h2 className="text-center mb-4" style={{ color: "#cd5ff8" }}>
//                 Contact Form
//               </h2> */}
//               {showAlert && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                 >
//                   Your message has been sent successfully!
//                 </Alert>
//               )}
//               <Form   onSubmit={handleSubmit}>
//                 <Row>
//                   <Col>
//                     <Form.Group controlId="formName">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                         required
//                         style={circularInputStyle}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group controlId="formEmail">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Email</Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                         style={circularInputStyle}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group controlId="formEmail">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Mobile Number</Form.Label>
//                       <Form.Control
//                         type="number"
//                         name="mobile"
//                         value={formData.mobile}
//                         onChange={handleChange}
//                         placeholder="Enter your mobile number"
//                         required
//                         style={circularInputStyle}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row className="mt-3">
//                   <Col>
//                     <Form.Group controlId="formMessage">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Message</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={5}
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Enter your message"
//                         required
//                         style={{
//                           ...circularInputStyle,
//                           height: "150px",
//                           resize: "none",
//                         }}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Button
//                   variant="primary"
//                   type="submit"
//                   className="mt-4"
//                   style={submitButtonStyle}
//                   onMouseEnter={(e) => {
//                     Object.assign(e.target.style, submitButtonHoverStyle);
//                   }}
//                   onMouseLeave={(e) => {
//                     Object.assign(e.target.style, submitButtonStyle);
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>

//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <NavLink
//                   to="https://github.com/yourusername"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://wa.me/7903074152"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiOutlineWhatsApp />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://www.linkedin.com/in/gulshan-kumar-64244220a/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://www.instagram.com/gulshan.sandilya_/?igshid=ZDdkNTZiNTM%3D"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </NavLink>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Contact;



// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import Particle from "../Particle";
// import {
//   AiOutlineMail,
//   AiOutlinePhone,
//   AiFillGithub,
//   AiOutlineWhatsApp,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });

//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setShowAlert(true);
//     setAlertMessage("Sending...");

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("mobile", formData.mobile);
//     data.append("message", formData.message);
//     data.append("access_key", "09439a25-b0d2-4625-945a-529d1f8f15e6");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: data,
//       });

//       const result = await response.json();

//       if (result.success) {
//         setAlertMessage("Form Submitted Successfully. I will contact you as soon as possible. Thank you for reaching out! 😊");
//         setFormData({ name: "", email: "", mobile: "", message: "" });
//       } else {
//         console.error("Error", result);
//         setAlertMessage(result.message);
//       }
//     } catch (error) {
//       console.error("Error", error);
//       setAlertMessage("An error occurred while submitting the form.");
//     }
//   };

//   const contactCardStyle = {
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     padding: "20px",
//     transition: "background-color 0.3s ease",
//     width: "100%",
//     textAlign: "center",
//     cursor: "pointer",
//   };

//   const handleCardHover = (e) => {
//     e.target.style.backgroundColor = "#cd5ff8";
//   };

//   const handleCardLeave = (e) => {
//     e.target.style.backgroundColor = "transparent";
//   };

//   const iconSize = 40;

//   const circularInputStyle = {
//     borderRadius: "25px",
//     padding: "10px 20px",
//     border: "1px solid #cd5ff8",
//     transition: "border-color 0.3s ease, box-shadow 0.3s ease",
//     backgroundColor: "#f7f7f7",
//     marginRight: "10px",
//     marginBottom: "10px",
//     flex: 1,
//   };

//   const circularInputFocusStyle = {
//     borderColor: "#a34ecb",
//     boxShadow: "0 0 10px rgba(205, 95, 248, 0.5)",
//   };

//   const submitButtonStyle = {
//     backgroundColor: "#cd5ff8",
//     borderColor: "#cd5ff8",
//     borderRadius: "25px",
//     padding: "10px 20px",
//     transition: "background-color 0.3s ease, border-color 0.3s ease",
//     width: "100%",
//   };

//   const submitButtonHoverStyle = {
//     backgroundColor: "#a34ecb",
//     borderColor: "#a34ecb",
//   };

//   const alertStyle = {
//     backgroundColor: '#cd5ff8',
//     color: 'white',
//   };

//   return (
//     <section>
//       <Particle />
//       <Container className="contact-section" style={{ padding: "60px 0" }}>
//         <Container className="mt-5">
//           <p
//             style={{
//               fontSize: "18px",
//               lineHeight: "1.5",
//               color: "#cd5ff8",
//               textAlign: "center",
//               marginBottom: "30px",
//             }}
//           >
//             Thanks for your interest in getting in touch!
//             <span
//               role="img"
//               aria-label="laughing"
//               style={{ cursor: "pointer" }}
//               className="wave"
//               aria-labelledby="wave"
//               title="😄"
//             >
//               😄
//             </span>
//             <br />
//             Reach out to me now for a complimentary consultation!
//             <span
//               role="img"
//               aria-label="love"
//               style={{ cursor: "pointer" }}
//               className="wave"
//               aria-labelledby="wave"
//               title="❤️"
//             >
//               ❤️
//             </span>
//           </p>

//           <Row className="justify-content-center">
//             <Col md={4} className="mb-4">
//               <div
//                 className="contact-info"
//                 style={contactCardStyle}
//                 onMouseEnter={handleCardHover}
//                 onMouseLeave={handleCardLeave}
//               >
//                 <NavLink
//                   to="mailto:gulshankiul1810@gmail.com"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <AiOutlineMail size={iconSize} style={{ color: "white" }} />
//                   <span style={{ color: "white", display: "block" }}>
//                     gulshankiul1810@gmail.com
//                   </span>
//                 </NavLink>
//               </div>
//             </Col>
//             <Col md={4} className="mb-4">
//               <div
//                 className="contact-info"
//                 style={contactCardStyle}
//                 onMouseEnter={handleCardHover}
//                 onMouseLeave={handleCardLeave}
//               >
//                 <NavLink
//                   to="tel:+917903074152"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <AiOutlinePhone size={iconSize} style={{ color: "white" }} />
//                   <span style={{ color: "white", display: "block" }}>
//                     7903074152
//                   </span>
//                 </NavLink>
//               </div>
//             </Col>
//           </Row>
//         </Container>

//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8}>
//               {showAlert && (
//                 <Alert
//                   // variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                   style={alertStyle}
//                 >
//                   {alertMessage}
//                 </Alert>
//               )}
//               {/* <Form onSubmit={handleSubmit}>
//                 <Row>
//                   <Col>
//                     <Form.Group controlId="formName">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                         required
//                         style={circularInputStyle}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group controlId="formEmail">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Email</Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                         style={circularInputStyle}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group controlId="formMobile">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Mobile Number</Form.Label>
//                       <Form.Control
//                         type="number"
//                         name="mobile"
//                         value={formData.mobile}
//                         onChange={handleChange}
//                         placeholder="Enter your mobile number"
//                         required
//                         style={circularInputStyle}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row className="mt-3">
//                   <Col>
//                     <Form.Group controlId="formMessage">
//                       <Form.Label style={{ color: "#cd5ff8" }}>Message</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         rows={5}
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Enter your message"
//                         required
//                         style={{
//                           ...circularInputStyle,
//                           height: "150px",
//                           resize: "none",
//                         }}
//                         onFocus={(e) => {
//                           Object.assign(e.target.style, circularInputFocusStyle);
//                         }}
//                         onBlur={(e) => {
//                           Object.assign(e.target.style, circularInputStyle);
//                         }}
//                         />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Button
//                   variant="primary"
//                   type="submit"
//                   className="mt-4"
//                   style={submitButtonStyle}
//                   onMouseEnter={(e) => {
//                     Object.assign(e.target.style, submitButtonHoverStyle);
//                   }}
//                   onMouseLeave={(e) => {
//                     Object.assign(e.target.style, submitButtonStyle);
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Form> */}
//               <Form onSubmit={handleSubmit}>
//     <Row>
//       <Col xs={12} md={4}>
//         <Form.Group controlId="formName">
//           <Form.Label style={{ color: "#cd5ff8" }}>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//             style={circularInputStyle}
//             onFocus={(e) => {
//               Object.assign(e.target.style, circularInputFocusStyle);
//             }}
//             onBlur={(e) => {
//               Object.assign(e.target.style, circularInputStyle);
//             }}
//           />
//         </Form.Group>
//       </Col>
//       <Col xs={12} md={4}>
//         <Form.Group controlId="formEmail">
//           <Form.Label style={{ color: "#cd5ff8" }}>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//             style={circularInputStyle}
//             onFocus={(e) => {
//               Object.assign(e.target.style, circularInputFocusStyle);
//             }}
//             onBlur={(e) => {
//               Object.assign(e.target.style, circularInputStyle);
//             }}
//           />
//         </Form.Group>
//       </Col>
//       <Col xs={12} md={4}>
//         <Form.Group controlId="formMobile">
//           <Form.Label style={{ color: "#cd5ff8" }}>Mobile Number</Form.Label>
//           <Form.Control
//             type="number"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             placeholder="Enter your mobile number"
//             required
//             style={circularInputStyle}
//             onFocus={(e) => {
//               Object.assign(e.target.style, circularInputFocusStyle);
//             }}
//             onBlur={(e) => {
//               Object.assign(e.target.style, circularInputStyle);
//             }}
//           />
//         </Form.Group>
//       </Col>
//     </Row>
//     <Row className="mt-3">
//       <Col xs={12}>
//         <Form.Group controlId="formMessage">
//           <Form.Label style={{ color: "#cd5ff8" }}>Message</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={5}
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Enter your message"
//             required
//             style={{
//               ...circularInputStyle,
//               height: "150px",
//               resize: "none",
//             }}
//             onFocus={(e) => {
//               Object.assign(e.target.style, circularInputFocusStyle);
//             }}
//             onBlur={(e) => {
//               Object.assign(e.target.style, circularInputStyle);
//             }}
//           />
//         </Form.Group>
//       </Col>
//     </Row>

//     <Button
//       variant="primary"
//       type="submit"
//       className="mt-4"
//       style={submitButtonStyle}
//       onMouseEnter={(e) => {
//         Object.assign(e.target.style, submitButtonHoverStyle);
//       }}
//       onMouseLeave={(e) => {
//         Object.assign(e.target.style, submitButtonStyle);
//       }}
//     >
//       Submit
//     </Button>
//   </Form>
//             </Col>
//           </Row>
//         </Container>

//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <NavLink
//                   to="https://github.com/yourusername"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://wa.me/7903074152"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiOutlineWhatsApp />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://www.linkedin.com/in/gulshan-kumar-64244220a/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </NavLink>
//               </li>
//               <li className="social-icons">
//                 <NavLink
//                   to="https://www.instagram.com/gulshan.sandilya_/?igshid=ZDdkNTZiNTM%3D"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </NavLink>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(true);
    setAlertMessage("Sending...");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("message", formData.message);
    data.append("access_key", "09439a25-b0d2-4625-945a-529d1f8f15e6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setAlertMessage("Form Submitted Successfully. I will contact you as soon as possible. Thank you for reaching out! 😊");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        console.error("Error", result);
        setAlertMessage(result.message);
      }
    } catch (error) {
      console.error("Error", error);
      setAlertMessage("An error occurred while submitting the form.");
    }
  };

  const contactCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    transition: "background-color 0.3s ease",
    width: "100%",
    textAlign: "center",
    cursor: "pointer",
  };


  const iconSize = 30;

  const circularInputStyle = {
    borderRadius: "25px",
    padding: "10px 20px",
    border: "1px solid #cd5ff8",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#f7f7f7",
    marginRight: "10px",
    marginBottom: "10px",
    flex: 1,
  };

  const circularInputFocusStyle = {
    borderColor: "#a34ecb",
    boxShadow: "0 0 10px rgba(205, 95, 248, 0.5)",
  };

  const submitButtonStyle = {
    backgroundColor: "#cd5ff8",
    borderColor: "#cd5ff8",
    borderRadius: "25px",
    padding: "10px 20px",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
    width: "100%",
  };

  const submitButtonHoverStyle = {
    backgroundColor: "#a34ecb",
    borderColor: "#a34ecb",
  };

  const alertStyle = {
    backgroundColor: '#cd5ff8',
    color: 'white',
  };
  const handleHoverEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };
  
  const handleHoverLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };
  return (
    <section>
      <Particle />
      <Container className="contact-section" style={{ padding: "60px 0" }}>
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

          {/* <Row className="justify-content-center">
            <Col md={4} className="mb-4">
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
                  <span style={{ color: "white", display: "block" }}>
                    gulshankiul1810@gmail.com
                  </span>
                </NavLink>
              </div>
            </Col>
            <Col md={4} className="mb-4">
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
                  <span style={{ color: "white", display: "block" }}>
                    7903074152
                  </span>
                </NavLink>
              </div>
            </Col>
          </Row> */}

          <Row className="justify-content-center">
    <Col md={4} className="mb-4">
      <div
        className="contact-info"
        style={{
          background: "#cd5ff8",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <NavLink
          to="mailto:gulshankiul1810@gmail.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <AiOutlineMail size={iconSize} style={{ color: "white" }} />
          <span style={{ color: "white", display: "block", marginTop: "10px" }}>
            gulshankiul1810@gmail.com
          </span>
        </NavLink>
      </div>
    </Col>
    <Col md={4} className="mb-4">
      <div
        className="contact-info"
        style={{
          background: "#cd5ff8",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <NavLink
          to="tel:+917903074152"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <AiOutlinePhone size={iconSize} style={{ color: "white" }} />
          <span style={{ color: "white", display: "block", marginTop: "10px" }}>
            7903074152
          </span>
        </NavLink>
      </div>
    </Col>
  </Row>
        </Container>

        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              {showAlert && (
                <Alert
                  onClose={() => setShowAlert(false)}
                  dismissible
                  style={alertStyle}
                >
                  {alertMessage}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={4}>
                    <Form.Group controlId="formName">
                      <Form.Label style={{ color: "#cd5ff8" }}>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        style={circularInputStyle}
                        onFocus={(e) => {
                          Object.assign(e.target.style, circularInputFocusStyle);
                        }}
                        onBlur={(e) => {
                          Object.assign(e.target.style, circularInputStyle);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group controlId="formEmail">
                      <Form.Label style={{ color: "#cd5ff8" }}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        style={circularInputStyle}
                        onFocus={(e) => {
                          Object.assign(e.target.style, circularInputFocusStyle);
                        }}
                        onBlur={(e) => {
                          Object.assign(e.target.style, circularInputStyle);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group controlId="formMobile">
                      <Form.Label style={{ color: "#cd5ff8" }}>Mobile Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        required
                        pattern="\d{10}"
                        style={circularInputStyle}
                        onFocus={(e) => {
                          Object.assign(e.target.style, circularInputFocusStyle);
                        }}
                        onBlur={(e) => {
                          Object.assign(e.target.style, circularInputStyle);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs={12}>
                    <Form.Group controlId="formMessage">
                      <Form.Label style={{ color: "#cd5ff8" }}>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                        style={{
                          ...circularInputStyle,
                          height: "150px",
                          resize: "none",
                        }}
                        onFocus={(e) => {
                          Object.assign(e.target.style, circularInputFocusStyle);
                        }}
                        onBlur={(e) => {
                          Object.assign(e.target.style, circularInputStyle);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  variant="primary"
                  type="submit"
                  className="mt-4"
                  style={submitButtonStyle}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, submitButtonHoverStyle);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, submitButtonStyle);
                  }}
                >
                  Submit
                </Button>
              </Form>
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
