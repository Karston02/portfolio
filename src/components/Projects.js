import React from 'react'
import './Projects.css'
import movieSnap from '../images/movie-snap.png'
import portfolioSnap from '../images/portfolio-snap.png'
import blackjackSnap from '../images/blackjack-snap.png'
import JavaOriginalWordmark from 'devicons-react/lib/icons/JavaOriginalWordmark';
import Css3OriginalWordmark from 'devicons-react/lib/icons/Css3OriginalWordmark';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import ReactOriginalWordmark from 'devicons-react/lib/icons/ReactOriginalWordmark';
import ThreejsOriginalWordmark from 'devicons-react/lib/icons/ThreejsOriginalWordmark';

const movieAppDesc = "MovieHub is a simplified movie search engine that utilizes OMDb's API. This website was built to practice responsiveness and API collaboration."
const portfolioDesc = "This website! I made this from scratch whilst simulatenously learning ThreeJS! The intent is to showcase my capabilities and qualifications."
const blackjackDesc = "My friend and I collaborated to make a blackjack trainer as a passion project. It teaches basic blackjack strategy and utilized React and Java."
function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-inner-container">
        <div className="project-card">
          <img src={movieSnap} alt="MovieHub Image" />
          <div className="project-info">
            <div className="project-name">
              <h3>MovieHub</h3>
              <div className="project-languages">
                <div className="language-box"><ReactOriginalWordmark size={25}/></div>
                <div className="language-box"><Css3OriginalWordmark size={25}/></div>
                <div className="language-box"><JavascriptOriginal size={25}/></div>
              </div>
            </div>
            <p>{movieAppDesc}</p>
            <div className="project-buttons">
              <a href="https://www.project1-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/project1-source" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={portfolioSnap} alt="Portfolio Image" />
          <div className="project-info">
            <div className="project-name">
              <h3>Personal Website</h3>
              <div className="project-languages">
                <div className="language-box"><ReactOriginalWordmark size={25}/></div>
                <div className="language-box"><ThreejsOriginalWordmark size={25} color="white"/></div>
                <div className="language-box"><JavascriptOriginal size={25}/></div>
                <div className="language-box"><Css3OriginalWordmark size={25}/></div>
              </div>
            </div>
            <p>{portfolioDesc}</p>
            <div className="project-buttons">
              <a href="https://www.project2-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/project2-source" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={blackjackSnap} alt="Blackjack Trainer Image" />
          <div className="project-info">
            <div className="project-name">
              <h3>Blackjack Trainer</h3>
              <div className="project-languages">
                <div className="language-box"><JavaOriginalWordmark size={25}/></div>
                <div className="language-box"><ReactOriginalWordmark size={25}/></div>
                <div className="language-box"><JavascriptOriginal size={25}/></div>
              </div>
            </div>
            <p>{blackjackDesc}</p>
            <div className="project-buttons">
              <a href="https://www.project3-demo.com" target="_blank" rel="noopener noreferrer">IN PROGRESS</a>
              <a href="https://github.com/project3-source" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects