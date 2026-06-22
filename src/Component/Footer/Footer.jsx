import React from "react";
import "./Footer.css";

import Instagram from "../../assets/Social/Instagram.png";
import Github from "../../assets/Social/Github.png";
import Facebook from "../../assets/Social/Facebook.png";
import Linkedin from "../../assets/Social/Linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Kripa Bastola</h3>

        <p className="footer-text">
          Full-Stack Developer | MERN Stack Enthusiast
        </p>

        <div className="social-links">
          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/kripa-bastola-40a816318"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>

          <a
            href="https://www.instagram.com/kripa0034/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>

          <a
            href="https://www.facebook.com/kripa.bastola.2025/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;