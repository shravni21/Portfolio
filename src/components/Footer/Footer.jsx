import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";


import { FaLinkedinIn, FaDiscord } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Made with 💜</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright ©{year} <a href="https://github.com/shravni21">Shravni21</a></span>

        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/shravni21"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discordapp.com/users/882868574841102387"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="discord"
              >
                <FaDiscord />

              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shravni-wakde-127bb9216/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/shravni_wakde"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer