import React, { useState } from 'react';
import { Terminal, Calendar, MapPin, Briefcase, Code } from 'lucide-react';

import type { Experience } from '../data/Experiences';
import { experiences } from '../data/Experiences';

import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);
  const [command, setCommand] = useState<string>('');

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = command.toLowerCase().trim();
      if (cmd === 'ls' || cmd === 'list') {
        setActiveExperience(null);
      } else if (cmd.startsWith('view ')) {
        const experienceId = parseInt(cmd.split(' ')[1]);
        const experience = experiences.find(exp => exp.id === experienceId);
        if (experience) {
          setActiveExperience(experience);
        }
      }
      setCommand('');
    }
  };

  return (
    <section className={styles.terminalSection} id='experienceSection'>
      <h2 className={styles.title}>{'<Terminal de experiências />'}</h2>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={`${styles.terminalButton} ${styles.red}`}></div>
          <div className={`${styles.terminalButton} ${styles.yellow}`}></div>
          <div className={`${styles.terminalButton} ${styles.green}`}></div>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.welcomeMessage}>Welcome to the Experience Terminal. Type 'ls' or 'list' to see all experiences, or 'view [id]' to see details.</p>
          {!activeExperience ? (
            <ul className={styles.experienceList}>
              {experiences.map(exp => (
                <li key={exp.id}>
                  <span className={styles.experienceId}>{exp.id}</span>:({exp.duration}) {exp.company} - {exp.position}
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.experienceDetails}>
              <h3 className={styles.companyName}>{activeExperience.company}</h3>
              <p className={styles.position}>{activeExperience.position}</p>
              <div className={styles.metaInfo}>
                <Calendar className={styles.icon} size={16} />
                <span>{activeExperience.duration}</span>
              </div>
              <div className={styles.metaInfo}>
                <MapPin className={styles.icon} size={16} />
                <span>{activeExperience.location}</span>
              </div>
              <ul className={styles.responsibilities}>
                {activeExperience.responsibilities.map((resp, index) => (
                  <li key={index}>
                    <Briefcase className={styles.icon} size={16} />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.metaInfo}>
                <Code className={styles.icon} size={16} />
                <span>{activeExperience.stack}</span>
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
            onKeyPress={handleCommand}
            className={styles.input}
            placeholder="Type a command..."
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;