import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
        <div>
        <nav className="navbar">
        <div className="navbar-logo">MiLogo</div>
        <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        
    </div>
  )
}

export default NavBar