// src/App.js
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Global.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-overlay"></div>
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}></div>
          ))}
        </div>
        <div className="gradient-sphere-1"></div>
        <div className="gradient-sphere-2"></div>
        <div className="gradient-sphere-3"></div>
      </div>
      
      <Navigation 
        activeSection={activeSection} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;