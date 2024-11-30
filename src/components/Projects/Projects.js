import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
// import Footer from "../footer/Footer"; 
// import "../footer/footerstyle.css"; 
import TextShadowComponent from "./cityNighteffect"

function Projects() {
  return (
    <div className="footer-wrapper">
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <TextShadowComponent/>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
