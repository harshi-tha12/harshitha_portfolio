import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🚀</span>
          <span>Portfolio</span>
        </div>

        {/* ✅ Example mobile menu button (uses toggleMenu) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
