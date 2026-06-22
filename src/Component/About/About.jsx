import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">

        {/* Left side */}
        <div className="about-left">
          <h2>About Me</h2>

          <p className="intro">
            I’m a Full-Stack Developer focused on building clean, responsive
            and user-friendly web applications using the MERN stack.
          </p>

          <p>
            I enjoy turning ideas into real projects, especially UI-focused
            products where design and functionality meet. I’m currently
            improving my skills in React and backend development while building
            real projects.
          </p>

          <p>
            I’m looking for an internship where I can contribute to real-world
            products, learn from experienced developers, and grow as a
            professional engineer.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat">
              <h3>MERN</h3>
              <p>Stack Focus</p>
            </div>

            <div className="stat">
              <h3>Intern</h3>
              <p>Ready</p>
            </div>
          </div>
        </div>

        {/* Right side
        <div className="about-right">
          <div className="skill-box">
            <h3>Frontend</h3>
            <p>React • JavaScript • HTML • CSS</p>
          </div>

          <div className="skill-box">
            <h3>Backend</h3>
            <p>Node.js • Express</p>
          </div>

          <div className="skill-box">
            <h3>Database</h3>
            <p>MongoDB</p>
          </div>

          <div className="skill-box">
            <h3>Tools</h3>
            <p>Git • GitHub • VS Code</p>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default About;