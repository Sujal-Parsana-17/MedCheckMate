import React from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>
          <div className="nav-icon">💊</div>
          <span className="nav-title">MedCheckMate</span>
        </div>
        <div className="nav-links">
          <button
            onClick={() => setActiveSection('check')} 
            className={activeSection === 'check' ? 'active' : ''}
          >
            Check Medicine
          </button>
          <button
            onClick={() => setActiveSection('add')} 
            className={activeSection === 'add' ? 'active' : ''}
          >
            Test Medicine
          </button>
          <button
            onClick={() => setActiveSection('about')} 
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
