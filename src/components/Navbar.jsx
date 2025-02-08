import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            {/* <li>
              <Link to="resume">Resume</Link>
            </li> */}
            {/* <li>
              <Link to="education">Education</Link>
            </li> */}
            <li>
              <Link to="skills">Skills</Link>
            </li>
            <li>
              <Link to="experience">Experience</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="certificates">Certificates</Link>
            </li>
            {/* <li>
              <Link to="contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
