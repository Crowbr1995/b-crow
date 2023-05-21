import React, { useRef } from "react";

import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact"

export const Header = () => {
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
  
    return (
        <>
        <div className="navbar">
            <h2 className="navbar-name">Bryan Crow</h2>
            <div className="navbar-nav">
                <button className="top-btn"
                    onClick={() => {
                        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>About Me</button>
                <button className="top-btn"
                    onClick={() => {
                        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>Projects</button>
                <button className="top-btn"
                    onClick={() => {
                        contactRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>Contact</button>
            </div>
        </div>
        <div className="shape"></div>
        <div className="hero-container">
            <div className="hero-text">
                <div className="wrapper">
                    <h1>Beautifully Crafted Websites</h1>
                </div>
                <div className="home-container">
                    <a href="https://github.com/Crowbr1995" target="_blank">
                        <img className="hero-icon gh-icon" src="./images/gh.png" alt="GitHub" title="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/bryan-crow-b2385b26b/" target="_blank">
                        <img className="hero-icon li-icon" src="./images/li.png" alt="LinkedIn" title="LinkedIn"/>
                    </a>
                    <a href="https://profile.indeed.com/document/view" download="file.pdf" target="_blank">
                        <img className="hero-icon res-icon" src="./images/resume.png" alt="Resume" title="Resume"/>
                    </a>
                 </div>
             </div>
             <div className="logo-container">
                <img className="logo" src="./images/portfolio-logo.svg" alt="logo" />
             </div>
         </div>
            <div ref={skillsRef}>
              <Skills />      
            </div>
            <div>
              <Projects projectsRef={projectsRef}/>      
            </div>
            <div>
                <Contact contactRef={contactRef}/>
            </div>
         </>
    )
}