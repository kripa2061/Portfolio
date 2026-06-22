import React from 'react'
import profile from '../assets/Profile.jpg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="image">
                    <img src={profile} alt="Kripa" />
                </div>
                <div className="about-me">
                    <h1>
                        <span>Hi, I'm Kripa Bastola </span>
                    </h1>
                    <p >
                        I enjoy building web applications and learning new technologies.
                        Currently looking for a Full-Stack Development Internship.
                    </p>
                </div>
                <div className="header-button">
                    <a href="#contact"><div className="button1"> <button>Connect With me</button></div></a>
                    <a href="/Kripa_Resume.pdf" download><div className="button2">  <button>Download Resume</button></div></a>
                </div>
            </div>
        </div>
    )
}

export default Header
