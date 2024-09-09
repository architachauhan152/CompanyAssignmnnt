import React from 'react';
import './Projects.css'; // You can style it using a separate CSS file

const Projects = () => {
  const projectList = [
    {
      name: 'Weather App',
      description: 'A React-based weather forecasting app that uses OpenWeather API to fetch current weather conditions.',
      link: 'https://github.com/weather-app'
    },
    {
      name: 'E-commerce Platform',
      description: 'An online shopping platform built using React and Node.js with payment gateway integration.',
      link: 'https://github.com/e-commerce-platform'
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience. Built with React.',
      link: 'https://github.com/portfolio-website'
    }
  ];

  return (
    <section id="projects">
      <h3>Projects</h3>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
