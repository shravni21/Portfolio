import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Shravni Wakde </span>
              and I'm from <span className="yellow"> Nanded , India</span>
              <br />
              <br />
              I recently Completed my 3rd year in Bachelor's degree in Information Technology.
              <br />
              <br />
              As a
              <b className="yellow"> Full-Stack </b>developer,
              I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />
              I have a passion for working
              with <b className="yellow">Node.js, MongoDB,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js, Three.js</b>
              </i>
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript, </b>
              as well as have knowledge in programming languages such as C,
              <b className="yellow"> C++ and Python.</b>
              <br />
              <br />I am also interested in building new
              <b className="yellow"> Web Technologies and Products, </b>
              as well as exploring areas related to
              <b className="yellow"> Technology.</b>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shravni21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discordapp.com/users/882868574841102387"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="discord"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shravni-wakde-127bb9216/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/shravni_wakde"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About