import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Profiles from "../components/Skillset/Profiles";

import Particle from '../components/Particle'
import pdf from "../assets/shravni.pdf"

import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {

    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ display: "flex", justifyContent: "center", position: "relative", flexDirection: "row" }}>
          <h2 className="project-heading"> Resume </h2>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <br /><br /><br />
        <Container>

          <h1 className="project-heading">
            Coding <strong className="yellow">Profiles </strong>
          </h1>

          <Profiles />

        </Container>
      </Container>
    </div>
  )
}

export default Resume