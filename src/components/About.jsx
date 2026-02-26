import React from 'react';
import '../styles/About.css';

function About() {

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Software Engineer skilled in React.js, Flutter, Node.js, and Python with hands-on experience in developing
scalable web and mobile applications. Strong foundation in full-stack development, cloud integration, and
AI-based systems. Passionate about building reliable and innovative solutions that enhance user
experiences.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h2 className="section-sub-title">Education</h2>
                <h3>Master of Science (Computer Science)</h3>
                <p>Mahatma Gandhi Memorial College, Udupi
                    CGPA: 8.53 | 2023 – 2025
                </p>
                <h3>Bachelor of Science </h3>
                <p>Vijaya College, Mulki
                    CGPA: 8.99 | 2020 – 2023
                </p>
              </div>   
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-card">
              <h2>Experience:</h2>
              <p>I completed a 6-month internship as a Web Developer Intern at Infapp Business Solutions, Udupi, where I developed a Helpdesk Ticket
Management System using React.js, Firebase, and Node.js. The system included AI-powered features for smart
issue resolution and prioritization, improving efficiency in IT support operations. Applied unit testing and
debugging to ensure reliability and error-free performance</p>
            </div>
          </div>
        </div>
      
      
      </div>
    </section>
    
  );
}

export default About;