import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="education-container">

        <div className="edu-card">
          <h3>Bachelor in Information Management (BIM)</h3>
          <p className="school">Nagarjuna College of Information Technology</p>
          <p className="year">2022 - Present</p>
          <p>
            Currently pursuing BIM with focus on programming, web development,
            database systems, and information technology fundamentals. Building
            MERN stack projects and improving full-stack development skills.
          </p>
        </div>

        <div className="edu-card">
          <h3>Higher Secondary (+2) – Management</h3>
          <p className="school">Management Stream</p>
          <p className="year">Completed</p>
          <p>
            Studied management subjects including business studies, economics,
            and accountancy, which helped develop analytical and organizational
            thinking.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;