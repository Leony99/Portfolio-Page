import React from 'react';
import { Github, Linkedin, Mail,  } from 'lucide-react';

import { personalData } from '../data/PersonalData';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Contato</h2>
          <ul className={styles.contactList}>
            {/*<li className={styles.contactItem}>
              <Phone size={18} className={styles.icon} />
              <a href={`https://wa.me/${personalData.phone}`} target="_blank"
              className={styles.link}>{personalData.phone}</a>
            </li>*/}
            <li className={styles.contactItem}>
              <Mail size={18} className={styles.icon} />
              <a href={`mailto:${personalData.email}`} className={styles.link}>{personalData.email}</a>
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <p className={styles.credit}>
            feito por{' '}
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className={styles.creditLink}>
            {personalData.name}
            </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;