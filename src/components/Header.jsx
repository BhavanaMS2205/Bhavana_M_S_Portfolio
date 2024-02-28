import React, { Component } from 'react';
import './header.css';
import Home from './Home';
import About from './About'
import Skills from './Skills';
import Project from './Project';
import Contact from "./contact"
import Projects from './projects';

export default class Header extends Component {
  render() {
    return (
       <div class="container">
          <div className="navi">
              <div className='Header'>
                  <h2>Portfolio.</h2>
              </div>
              <div className="navbar">
                    <ul >
                      <a href="#home"> <li className="list">Home</li></a>
                      <a href="#about"> <li className="list">About</li></a>
                      <a href="#skills"> <li className="list">Skills</li></a>
                      <a href="#project"> <li className="list list1">Project and <br /> Certification</li></a>
                      <a href="#contact"> <li className="list">Contact</li></a>
               
                    </ul>
              </div>
            </div>
        <Home id="home"></Home>
        <About id="about"></About>
        <Skills id="skills"></Skills>
        <Projects id="project"></Projects>
        <Contact></Contact>
        </div>
      
    )
  }
}
