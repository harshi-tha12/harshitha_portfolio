import React from 'react';
import '../styles/Hero.css';

function Hero() {
  const handleViewResume = () => {
    // Using the exact filename from your public folder
    const resumePath = process.env.PUBLIC_URL + '/Harshitha.Resume_ (2).pdf';
    window.open(resumePath, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Harshitha</span>
          </h1>

          <p className="hero-subtitle">
            Computer Science Postgraduate | Aspiring Software Developer
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={handleViewResume}
            >
              📄 View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;