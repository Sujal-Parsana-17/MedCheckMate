import React, { useState, useEffect } from 'react'
import MedicineSafetyTest from './components/MedicineSafetyTest'
import MedicineInfo from './components/MedicineInfo'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'check':
        return <MedicineInfo />;
      case 'add':
        return <MedicineSafetyTest />;
      case 'about':
        return <About />;
      default:
        return (
          <div className="home-page">
            <section className="hero">
              <h1>Welcome to MedCheckMate</h1>
              <p className="hero-description">
                Your trusted companion for medicine safety testing and verification.
                Ensure the quality and safety of medications with our comprehensive testing platform.
              </p>
              <div className="cta-buttons">
                <button 
                  className="cta-button primary-button"
                  onClick={() => setActiveSection('check')}
                >
                  <span>🔍 Check Medicine</span>
                </button>
                <button 
                  className="cta-button secondary-button"
                  onClick={() => setActiveSection('add')}
                >
                  <span>➕ Add Medicine</span>
                </button>
              </div>
            </section>

            <section className="features">
              <h2>Why Choose MedCheckMate?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🔍</div>
                  <h3>Quick Verification</h3>
                  <p>Instantly verify medicine authenticity and safety status with our advanced database.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⚡</div>
                  <h3>Real-time Testing</h3>
                  <p>Get immediate results from our comprehensive medicine testing platform.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🛡️</div>
                  <h3>Safety First</h3>
                  <p>Ensure your medications meet all safety standards and quality requirements.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📱</div>
                  <h3>Easy to Use</h3>
                  <p>Simple and intuitive interface for hassle-free medicine verification.</p>
                </div>
              </div>
            </section>

            <section className="how-it-works">
              <h2>How It Works</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Enter Details</h3>
                  <p>Input medicine information or scan the barcode</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Quick Analysis</h3>
                  <p>Our system analyzes the medicine details</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Get Results</h3>
                  <p>Receive detailed safety and quality report</p>
                </div>
              </div>
            </section>

            <section className="cta-section">
              <h2>Ready to Get Started?</h2>
              <p>Join thousands of users who trust MedCheckMate for their medicine safety needs.</p>
              <button 
                className="cta-button primary-button"
                onClick={() => setActiveSection('check')}
              >
                <span>🚀 Start Checking Now</span>
              </button>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {renderContent()}
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-icon">💊</span>
            <span>MedCheckMate</span>
          </div>
          <p className="footer-description">
            MedCheckMate helps you verify medicine quality and safety,
            ensuring you make informed healthcare decisions.
          </p>
          <p className="footer-love">Made with ❤️ for better healthcare</p>
          <p className="footer-copyright">© 2024 MedCheckMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
