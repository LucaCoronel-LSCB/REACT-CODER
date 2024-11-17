import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
  render() {
    const { titulo, subtitulo } = this.props;

    return (
      <header className="header">
        <h1 className="header-title">{titulo}</h1>
        <p className="header-subtitle">{subtitulo}</p>
        <nav className="header-nav">
          <a href="#home" className="header-link">Home</a>
          <a href="#about" className="header-link">About</a>
          <a href="#contact" className="header-link">Contact</a>
        </nav>
      </header>
    ); 
  }
}

export default Header;