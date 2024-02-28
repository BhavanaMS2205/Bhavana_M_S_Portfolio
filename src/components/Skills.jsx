import React, { Component } from 'react'
import "./skills.css"
import html from "../images/HTML.png"
import css from "../images/CSS.png"
import js from "../images/JS.png"
import rejs from "../images/React.png"
import nodej from "../images/Node.png"
import sql from "../images/Sql.png"
import python from "../images/Pyton.png"
import CPP from "../images/CPP.png"
import C from "../images/C.png"
import AWS from "../images/AWS.png"

export class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <div className="tech">
        <h1>Technical Skills</h1>
        <div className="program">
          <div className="html">
            <img src={html} alt="" />
            <h2>HTML5</h2>
          </div>
          <div className="css">
            <img src={css} alt="" />
            <h2>CSS3</h2>
          </div>
          <div className="js">
            <img src={js} alt="" />
            <h2>Java Script</h2>
          </div>
          <div className="reactjs">
            <img src={rejs} alt="" />
            <h2>React JS</h2>
          </div>
          <div className="nodejs">
            <img src={nodej} alt="" />
            <h2>Node JS</h2>
          </div>
          <div className="sql">
            <img src={sql} alt="" />
            <h2>SQL</h2>
          </div>
          <div className="c">
            <img src={C} alt="" />
            <h2>C </h2>
          </div>
          <div className="cpp">
            <img src={CPP} alt="" />
            <h2>C++</h2>
          </div>
          <div className="python">
            <img src={python} alt="" />
            <h2>Python</h2>
          </div>
          <div className="aws">
            <img src={AWS} alt="" />
            <h2>AWS Cloud Practitioner</h2>
          </div>
        </div>
      </div>
      <div className="soft">
        <h1>Soft Skills</h1>
        <div className="skil">
         <li>Communication Skills 🗣️</li>
         <li>
Team Collaboration 🤝
</li>
         <li>Adaptability 🔄</li>
         <li>Problem Solving 🧩</li>
         <li>Creativity 🎨</li>
         <li>Time Management ⏰</li>
         <li>Leadership 🏆</li>
         <li>Critical Thinking 🤔</li>
         <li>Interpersonal Skills 🤗</li>
         <li>Emotional Intelligence 😌</li>
         <li>Flexibility 🤸‍♂️</li>
         <li>Conflict Resolution ⚖️</li>
      </div>
      </div>
      </div>
      
    )
  }
}

export default Skills