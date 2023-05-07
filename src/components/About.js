import React from "react";
import "./About.css";
import moonMan from "../images/moon-man.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const aboutMe =
  "Hello! I'm Karston Kuciemba. I have a passion for programming and problem-solving! I'm currently studying Computer Science and Economics at the University of Texas at Austin. I have always been fascinated with how technology can be used to improve people's lives. I am currently looking for Software or Web Development Internships!";
const beyondCode =
  "Aside from programming, I enjoy spending my free time with my family and friends. I am also an avid Liverpool supporter and love to watch soccer as often as I can! I have played soccer my entire life. I am also a passionate cook... though my burnt food says I have much to learn.";
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
          <Canvas className="stack" camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[7, 2, 3]}/>
            <Sphere args={[1, 100, 200]} scale={1.4}>
              <MeshDistortMaterial
                color="#B629CF"
                attach="material"
                distort={0.5}
                speed={2.5}
              />
            </Sphere>
          </Canvas>
          <img className="stack" src={moonMan} />
        </div>
      </div>
    </section>
  );
}

export default About;
