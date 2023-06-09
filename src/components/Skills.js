import React from 'react'
import './Skills.css'
import SkillCircle from './SkillCircle'
import JavaOriginalWordmark from 'devicons-react/lib/icons/JavaOriginalWordmark';
import PythonOriginalWordmark from 'devicons-react/lib/icons/PythonOriginalWordmark';
import Html5OriginalWordmark from 'devicons-react/lib/icons/Html5OriginalWordmark';
import Css3OriginalWordmark from 'devicons-react/lib/icons/Css3OriginalWordmark';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import ReactOriginalWordmark from 'devicons-react/lib/icons/ReactOriginalWordmark';

function Skills() {
  return (
        <div className="skills-container">
          <h1 className="skills-title">Languages & Technologies</h1>
          <div className="skills-inner-container">
            <div className="skill-box">
              <div className="skills-item">
                <SkillCircle className="stack"/>
                <JavaOriginalWordmark className="stack icon-sizing" size={80}/>
              </div>
              <div className="skills-item">
                <SkillCircle className="stack"/>
                <PythonOriginalWordmark className="stack icon-sizing" size={80}/>
              </div>
              <div className="skills-item">
                <SkillCircle className="stack"/>
                <Html5OriginalWordmark className="stack icon-sizing" size={80}/>
              </div>
              <div className="skills-item">
                <SkillCircle /> 
                <Css3OriginalWordmark className="stack icon-sizing" size={80}/> 
              </div>
              <div className="skills-item">
                <SkillCircle className="stack"/>
                <JavascriptOriginal className="stack icon-sizing" size={80}/>
              </div>
              <div className="skills-item">
                <SkillCircle className="stack"/>
                <ReactOriginalWordmark className="stack icon-sizing" size={80}/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Skills