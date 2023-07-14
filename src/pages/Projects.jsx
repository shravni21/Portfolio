import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// import Blog from "../assets/projects/Blog.png";
// import krypto from "../assets/projects/krypto.png";
import flipnmatch from "../assets/projects/flipnmatch.png"
import scroll from "../assets/projects/3dscroll.png"
import coinnet from "../assets/projects/coinnet.png"
import mytube from "../assets/projects/mytube.png"
import spam from "../assets/projects/spamsleuth.png"
import yummtumm from "../assets/projects/yummytummy.png"
import reflect from "../assets/projects/reflect.png"
import cooking from "../assets/projects/cooking.png"
import portfolio from "../assets/projects/portfolio.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytube}
              isBlog={false}
              title="MyTubeDownloader"
              description="A MERN stack web application that allows users to download YouTube videos in various resolutions. The application is implemented as a browser extension that works with Google Chrome and Firefox."
              ghLink="https://github.com/shravni21/MyTubeDownloader"
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reflect}
              isBlog={false}
              title="Reflect"
              description="An application which allows you to capture and organize your thoughts, ideas, and reflections in a secure and private manner. With its intuitive user interface and seamless integration of the MERN stack."
              ghLink="https://github.com/shravni21/reflect"
              demoLink="https://reflect-sigma.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipnmatch}
              isBlog={false}
              title="Flip-n-Match"
              description=" A classic memory card game built with JavaScript, HTML, and CSS. Test your memory and concentration skills by matching pairs of cards within a deck. Can you find all the matches and complete the game?"
              ghLink="https://github.com/shravni21/Flip-n-Match"
              demoLink="https://flip-n-match.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinnet}
              isBlog={false}
              title="Coinnet"
              description="A React Application Unveiling Comprehensive Cryptocurrency Data, Crypto Market Analysis and Trending Crypto News empowered by Redux Toolkit, Ant Design, and Rapid API Integration."
              ghLink="https://github.com/shravni21/coinnet"
              demoLink="https://coinnet.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scroll}
              isBlog={false}
              title="ReactAnimate3D"
              description="A responsive React website that brings captivating 3D animations using WebGL, Three.js, and GSAP. With realistic 3D models rendered directly in the browser."
              ghLink="https://github.com/shravni21/ReactAnimate3D"
              demoLink="https://apple-iphone-s-website.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio website to showcases my skills and accomplishments. Using React, React Router, and Bootstrap, it offers a seamless user experience."
              ghLink="https://github.com/shravni21/Portfolio"
              demoLink="https://shravni.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yummtumm}
              isBlog={false}
              title="Yummy Tummy"
              description="A React Cart website."
              ghLink="https://github.com/shravni21/YummyTummy"
              demoLink="https://yumtummy.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Spam Sleuth"
              description="A flask ML baesd webapp which detects sms is spam or ham."
              ghLink="https://github.com/shravni21/SpamSleuth"
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cooking}
              isBlog={false}
              title="Easy Cooking"
              description="HTML CSS cooking website."
              ghLink="https://github.com/shravni21/cooking-site"
              demoLink="https://cooking-site-2.shravniwakde.repl.co/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects