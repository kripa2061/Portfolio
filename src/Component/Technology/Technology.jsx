import React from "react";
import "./Technology.css";

import css from "../../assets/Icons/CSS.png";
import Html from "../../assets/Icons/HTML.png";
import JS from "../../assets/Icons/JS.png";
import ReactLogo from "../../assets/Icons/React.png";
import NodeJS from "../../assets/Icons/Nodejs.png";
import MongoDB from "../../assets/Icons/MongoDB.png";
import Git from "../../assets/Icons/Git.png";
import GitHub from "../../assets/Icons/GitHub.png";
import Postman from "../../assets/Icons/PostMan.png";
import ExpressJS from "../../assets/Icons/ExpressJS.png"
const technologies = [
  { name: "HTML", icon: <img src={Html} alt="HTML" /> },
  { name: "CSS", icon: <img src={css} alt="CSS" /> },
  { name: "JavaScript", icon: <img src={JS} alt="JavaScript" /> },
  { name: "React", icon: <img src={ReactLogo} alt="React" /> },
  { name: "Express.js", icon: <img src={ExpressJS} alt="React" /> },

  { name: "Node.js", icon: <img src={NodeJS} alt="Node.js" /> },
  { name: "MongoDB", icon: <img src={MongoDB} alt="MongoDB" /> },
  { name: "Git", icon: <img src={Git} alt="Git" /> },
  { name: "GitHub", icon: <img src={GitHub} alt="GitHub" /> },
  { name: "Postman", icon: <img src={Postman} alt="Postman" /> },
];

const Technology = () => {
  return (
    <section className="technology">
      <h2>My Tech Stack</h2>

      <div className="tech-container">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-card">
            <div className="tech-icon">{tech.icon}</div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;