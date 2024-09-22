import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { personalData } from '../data/PersonalData';

import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAndScrollToSection = (sectionId:string) => {
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 600);
  };

  const menuVariants = {
    closed: {
      height: 0,
      transition: {
        when: "afterChildren",
      }
    },
    open: {
      height: 'auto',
      transition: {
        when: "beforeChildren",
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            {'<Dev />'}
          </Link>
          <span className={styles.title}>{personalData.name}</span>
        </div>
        <div className={styles.desktopMenu}>
          <Link className={styles.navLink} to="/" 
          onClick={() => scrollToSection('portfolioSection')}>Portfólio()</Link>
          <Link className={styles.navLink}  to="/"  
          onClick={() => scrollToSection('experienceSection')}>Experiência()</Link>
          <Link className={styles.navLink} to="/"  
          onClick={() => scrollToSection('footer')}>Contato()</Link>
        </div>
        <div className={styles.mobileMenuToggle}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            {isMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div variants={linkVariants}>
              <Link className={styles.mobileNavLink} to="/"
              onClick={() => toggleAndScrollToSection('portfolioSection')}>Portfólio()</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link className={styles.mobileNavLink} to="/"
              onClick={() => toggleAndScrollToSection('experienceSection')}>Experiência()</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link className={styles.mobileNavLink} to="/"
              onClick={() => toggleAndScrollToSection('footer')}>Contato()</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;