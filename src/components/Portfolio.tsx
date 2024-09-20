import React, { useState } from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';
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
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/nextjs-ecommerce',
    liveUrl: 'https://nextjs-ecommerce-example.vercel.app',
  },
];

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [command, setCommand] = useState<string>('');

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = command.toLowerCase().trim();
      if (cmd === 'ls' || cmd === 'list') {
        setActiveProject(null);
      } else if (cmd.startsWith('view ')) {
        const projectId = parseInt(cmd.split(' ')[1]);
        const project = projects.find(p => p.id === projectId);
        if (project) {
          setActiveProject(project);
        }
      }
      setCommand('');
    }
  };

  return (
    <section className={styles.terminalSection}>
      <h2 className={styles.title}>{'<PortfolioTerminal />'}</h2>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={`${styles.terminalButton} ${styles.red}`}></div>
          <div className={`${styles.terminalButton} ${styles.yellow}`}></div>
          <div className={`${styles.terminalButton} ${styles.green}`}></div>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.welcomeMessage}>Welcome to the Portfolio Terminal. Type 'ls' or 'list' to see all projects, or 'view [id]' to see details.</p>
          {!activeProject ? (
            <ul className={styles.projectList}>
              {projects.map(project => (
                <li key={project.id}>
                  <span className={styles.projectId}>{project.id}</span>: {project.title}
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>{activeProject.title}</h3>
              <p className={styles.projectDescription}>{activeProject.description}</p>
              <div className={styles.techStack}>
                {activeProject.technologies.map(tech => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <Github className={styles.icon} size={16} />
                  GitHub
                </a>
                <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <ExternalLink className={styles.icon} size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          )}
        </div>
        <div className={styles.terminalInput}>
          <Terminal className={styles.terminalIcon} size={20} />
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyUp={handleCommand}
            className={styles.input}
            placeholder="Type a command..."
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;