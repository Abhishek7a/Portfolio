import React from "react";

export default function Skill() {
  return (
    <div>
      <section className="skills" id="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <span>HTML</span>{" "}
              <div className="progress">
                <div className="progress-bar" style={{width: "90%"}}></div>
              </div>
            </div>
             <div className="skill">
              <span>React.Js</span>{" "}
              <div className="progress">
                <div className="progress-bar" style={{width: "95%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>CSS</span>{" "}
              <div className="progress">
                <div className="progress-bar" style={{width: "70%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>MySQL</span>{" "}
              <div className="progress">
                <div className="progress-bar" style={{width: "85%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>{" "}
              <div className="progress">
                <div className="progress-bar" style={{width: "90%"}}></div>
              </div>
            </div>
            <div className="skill">
              <span>MongoDB</span>{" "}
              <div className="progress">
                <div className="progress-bar" style={{width: "80%"}}></div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </div>
  );
}
