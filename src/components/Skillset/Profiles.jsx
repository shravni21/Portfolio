import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks
} from "react-icons/si";


const Profiles = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Col xs={4} md={2} className="tech-icons" >
        <SiLeetcode />
        <div className="name">
          <a href="https://www.leetcode.com/shravni_code" className="btn btn-dark">Leetcode</a>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiCodeforces />
        <span className="name">
          <a href="https://codeforces.com/profile/shravni_code" className="btn btn-dark">Codeforces</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiCodechef />
        <span className="name">
          <a href="https://www.codechef.com/users/shr_ni" className="btn btn-dark">Codechef</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <FaHackerrank />
        <span className="name">
          <a href="https://www.hackerrank.com/wakdeshravni1" className="btn btn-dark">HackerRank</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiGeeksforgeeks />
        <span className="name">
          <a href="https://auth.geeksforgeeks.org/user/wakdeshravni1" className="btn btn-dark">GeeksForGeeks</a>
        </span>
      </Col>
    </Row>
  );
}

export default Profiles;
