import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

import { interestOrder, projects } from '../data/Projects';

import styles from './Portfolio.module.css';

const PortfolioSection: React.FC = () => {
  return (
    <section className={styles.portfolioSection} id='portfolioSection'>
      <h2 className={styles.title}>{'<Portfólio />'}</h2>
      <div className={styles.projectGrid}>
        {projects
        .sort((a, b) => interestOrder.indexOf(a.interest) - interestOrder.indexOf(b.interest))
        .map((project) => (
          <div key={project.id} className={`${styles.projectCard} ${styles[project.interest]}`}>
            <h3 className={styles.projectTitle}>
              {project.title}
            </h3>
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
              {project.liveUrl && 
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <ExternalLink className={styles.icon} size={20} />
                <span className={styles.srOnly}>Live Demo</span>
              </a>}
            </div>
            <span className={styles.projectCardHighlight}></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;