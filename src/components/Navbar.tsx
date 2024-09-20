import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            {'<LC />'}
          </Link>
          <span className={styles.title}>Leony Costa | Dev</span>
        </div>
        <div className={styles.desktopMenu}>
          <NavLink to="/">inicio()</NavLink>
          <NavLink to="/projects">portfolio()</NavLink>
          <NavLink to="/contact">contato()</NavLink>
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
      
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <MobileNavLink to="/" onClick={toggleMenu}>inicio()</MobileNavLink>
          <MobileNavLink to="/projects" onClick={toggleMenu}>portfolio()</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu}>contato()</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className={styles.navLink}>
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ to: string; onClick: () => void; children: React.ReactNode }> = ({ to, onClick, children }) => (
  <Link to={to} className={styles.mobileNavLink} onClick={onClick}>
    {children}
  </Link>
);

export default Navbar;