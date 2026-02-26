import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python','JavaScript', 'C/C++', 'SQL']
    },
    {
      category: 'Frontend Development',
      skills: ['React.js', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend & Databases',
      skills: ['Hive', 'Firebase','Node.js']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'REST APIs']
    },
    {
      category: 'AI/ML',
      skills: ['CNN Models', 'Model Evaluation', 'TensorFlow', 'Scikit-learn', 'PyTorch']
    }

  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;