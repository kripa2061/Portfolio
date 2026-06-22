import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [navbar,setNavbar]=useState("Home")
  return (
    <div>
      <div className="container">
        <div className="name">
            <h2>Kripa.</h2>
        </div>
        <div className="navbar">
            <ul>
             <a href='#home'><li onClick={()=>setNavbar("home")} className={navbar==='home'?'active':" "}>Home</li></a> 
              <a href='#about'>  <li onClick={()=>setNavbar("about")} className={navbar==='about'?'active':" "}>About</li></a>  
              <a href='#projects'>   <li onClick={()=>setNavbar("projects")} className={navbar==='project'?'active':" "}>Projects</li></a> 
               <a href='#contact'>  <li onClick={()=>setNavbar("contact")} className={navbar==='contact'?'active':" "}>Contact</li></a> 
                <a href='#education'><li onClick={()=>setNavbar("education")} className={navbar==='education'?'active':" "}>Education</li></a>  
            </ul>
        </div>
        <div className="contact-button">
              <a href='#contact'> <button>Connect with me</button></a> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
