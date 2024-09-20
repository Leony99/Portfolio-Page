import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

import styles from './Portfolio.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Task Manager API',
    description: 'A RESTful API for managing tasks and projects.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/task-manager-api',
    liveUrl: 'https://task-manager-api.herokuapp.com',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'A web app that displays weather information for multiple cities.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-react.netlify.app',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication and payment integration.',
    technologies: ['Next.js', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/nextjs-ecommerce',
    liveUrl: 'https://nextjs-ecommerce-example.vercel.app',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className={styles.portfolioSection}>
      <h2 className={styles.title}>{'<Portfolio />'}</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <Github className={styles.icon} size={20} />
                <span className={styles.srOnly}>GitHub Repository</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <ExternalLink className={styles.icon} size={20} />
                <span className={styles.srOnly}>Live Demo</span>
              </a>
            </div>
            <span className={styles.projectCardHighlight}></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;