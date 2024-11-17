import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Productos</li>
        <li className="nav-item">Servicios</li>
        <li className="nav-item">Nosotros</li>
        <li className="nav-item">Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar