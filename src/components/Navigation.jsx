// src/components/Navigation.js
import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Misha Malik</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('home');}}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('about');}}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}>Skills</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}>Experience</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}>Projects</a></li>
            <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('education');}}>Education</a></li>
            <li><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('certifications');}}>Certifications</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>Contact</a></li>
          </ul>
        </nav>
       
      </div>
    </header>
  );
};

export default Navigation;