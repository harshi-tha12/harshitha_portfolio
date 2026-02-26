import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="social-links-container">
            <a href="https://www.linkedin.com/in/harshitha-314896276/" target="_blank" rel="noopener noreferrer" className="social-card">
              <span className="social-icon">💼</span>
              <h3>LinkedIn</h3>
              <p>harshitha</p>
            </a>
            
            <a href="https://github.com/harshi-tha12" target="_blank" rel="noopener noreferrer" className="social-card">
              <span className="social-icon">🐙</span>
              <h3>GitHub</h3>
              <p>harshi-tha12</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;