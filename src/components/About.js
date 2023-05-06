import React from "react";
import "./About.css";
import moonMan from "../images/moon-man.png";

const aboutMe =
  "Hello! I'm Karston Kuciemba. I have a passion for programming and problem-solving! I'm currently studying Computer Science and Economics at the University of Texas at Austin. I have always been fascinated with how technology can be used to improve people's lives. I am currently looking for Software or Web Development Internships!";
const beyondCode = "Aside from programming, I enjoy spending my free time with my family and friends. I am also an avid Liverpool supporter and love to watch soccer as often as I can! I have played soccer my entire life. I am also a passionate cook... though my burnt food says I have much to learn."
function About() {
  return (
    <section className="about-container">
      <div className="about-inner-container">
        <div className="aboutme-flex aboutme-text">
          <h1>About Myself</h1>
          <p className="pad">{aboutMe}</p>
          <h1>Beyond The Code</h1>
          <p>{beyondCode}</p>
        </div>
        <div className="aboutme-flex aboutme-design">
          <img src={moonMan}></img>
        </div>
      </div>
    </section>
  );
}

export default About;
