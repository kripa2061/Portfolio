import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [navbar, setNavbar] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (value) => {
    setNavbar(value)
    setMenuOpen(false) // close menu after click (mobile)
  }

  return (
    <div className="container">
      <div className="name">
        <h2>Kripa.</h2>
      </div>

      {/* hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* nav links */}
      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          <a href="#home"><li onClick={() => handleClick("home")} className={navbar === "home" ? "active" : ""}>Home</li></a>
          <a href="#about"><li onClick={() => handleClick("about")} className={navbar === "about" ? "active" : ""}>About</li></a>
          <a href="#projects"><li onClick={() => handleClick("projects")} className={navbar === "projects" ? "active" : ""}>Projects</li></a>
          <a href="#contact"><li onClick={() => handleClick("contact")} className={navbar === "contact" ? "active" : ""}>Contact</li></a>
          <a href="#education"><li onClick={() => handleClick("education")} className={navbar === "education" ? "active" : ""}>Education</li></a>
        </ul>
      </div>

      <div className="contact-button">
        <a href="#contact"><button>Connect with me</button></a>
      </div>
    </div>
  )
}

export default Navbar