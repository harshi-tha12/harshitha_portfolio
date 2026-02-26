import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Fake Image Detection',
      description: `Developed a CNN-based Fake Image Detection model to classify images as real or AI-generated. Built a Streamlit web app for real-time image classification, allowing users to upload and analyze images instantly. The model detects fake images by learning unique patterns and inconsistencies.`,
      tags: ['Python', 'CNN model', 'Streamlit', 'ML'],
      link: 'https://github.com/harshi-tha12/fake_image_detection',
    },
    {
      id: 2,
      title: 'Helpmate:Ticket Management System',
      description: 'The system included AI-powered features for smart issue resolution and prioritization, improving efficiency in IT support operations.',
      tags: ['React.js', 'Node.js', 'AI'],
      link: 'https://github.com/harshi-tha12/helpmate',
    },
    {
      id: 3,
      title: 'Taskeeper',
      description: `Developed a Flutter-based task management app using Hive database for local storage. The app allows users to add, edit, delete, and strike out completed tasks, with each task recorded along with its date and time for better tracking and organization.`,
      tags: ['Flutter', 'Hive'],
      link: 'https://github.com/harshi-tha12/flutter_project_taskeeper',
    },
    {
      id: 4,
      title: 'Weather App',
      description: `Developed a Weather App using React.js, providing users with real-time weather information and forecasts. The application features an intuitive interface that allows users to search for locations and view detailed weather data.`,
      tags: ['React.js', 'API', 'CSS'],
      link: 'https://github.com/harshi-tha12/weather_app',
    },
    

  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;