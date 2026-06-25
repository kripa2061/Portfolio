import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Nyra Fashion",
    description:
      "A full-stack fashion platform that helps users discover outfits, browse fashion products, and create stylish looks.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/kripa2061/nyra-ecommerce",
    demo: "https://womendressing.onrender.com",
  },
  {
    title: "Movie Ticket Booking",
    description:
      "A movie ticket booking application where users can browse movies, select seats, and reserve tickets online.",
    tech: ["React", "CSS"],
    github: "https://github.com/kripa2061/MOVIE_TICKET_BOOKING_MERN",
  },
  {
    title: "Food Ordering",
    description:
      "A food ordering platform that allows users to explore menus, place orders, and manage their cart seamlessly.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/kripa2061/Food-Ordering",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <p>
        Some projects I've built while learning and practicing web development.
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((t) => (
                  <span className="tech-badge" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-filled"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
