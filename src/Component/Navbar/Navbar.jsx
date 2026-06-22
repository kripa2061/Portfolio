import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container">

        <div className="name">
          <h2>Kripa.</h2>
        </div>

        {/* DESKTOP NAV */}
        <div className="nav-desktop">
          <a className={active === "home" ? "active" : ""} href="#home" onClick={() => setActive("home")}>Home</a>
          <a className={active === "about" ? "active" : ""} href="#about" onClick={() => setActive("about")}>About</a>
          <a className={active === "projects" ? "active" : ""} href="#projects" onClick={() => setActive("projects")}>Projects</a>
          <a className={active === "contact" ? "active" : ""} href="#contact" onClick={() => setActive("contact")}>Contact</a>
          <a className={active === "education" ? "active" : ""} href="#education" onClick={() => setActive("education")}>Education</a>
        </div>

        <div className="contact-button">
          <a href="#contact"><button>Connect with me</button></a>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(true)}>
          <FaBars />
        </div>
      </div>

      {/* OVERLAY */}
      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

      {/* MOBILE DRAWER */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <FaTimes className="close" onClick={() => setOpen(false)} />

        <a href="#home" onClick={() => { setActive("home"); setOpen(false); }}>Home</a>
        <a href="#about" onClick={() => { setActive("about"); setOpen(false); }}>About</a>
        <a href="#projects" onClick={() => { setActive("projects"); setOpen(false); }}>Projects</a>
        <a href="#contact" onClick={() => { setActive("contact"); setOpen(false); }}>Contact</a>
        <a href="#education" onClick={() => { setActive("education"); setOpen(false); }}>Education</a>
      </div>
    </>
  );
};

export default Navbar;