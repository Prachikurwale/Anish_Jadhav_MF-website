import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
// CSS Module ko import karein
import styles from './Navbar.module.css';
// Logo import karein
import ajmfLogo from '../assets/AJMF.jpeg';

function Navbar() {

  // Active/Inactive class set karne ke liye function
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <nav className={styles.navbar}>

      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          {/* Logo Image */}
          <img src={ajmfLogo} alt="AJMF Logo" className={styles.logoImage} />
          {/* Aap text bhi rakh sakti hain */}
          {/* Anish Jadhav Memorial Foundation */}
        </NavLink>

        {/* Navigation Links */}
        <div className={styles.linksContainer}>

          <NavLink to="/" className={getNavLinkClass} end>
            Home
          </NavLink>

          <NavLink to="/about" className={getNavLinkClass}>
            About Anish
          </NavLink>

          <NavLink
            to="/campus"
            className={getNavLinkClass}
          >
            Campus & Facilities
          </NavLink>

          <NavLink
            to="/programs"
            className={getNavLinkClass}
          >
            Our Programs
          </NavLink>

          <NavLink to="/student-campus" className={getNavLinkClass}>
            Student Led Campus
          </NavLink>

          <NavLink to="/contact" className={getNavLinkClass}>
            Contact Us
          </NavLink>
        </div>

        <div className={styles.ctaContainer}>
          <NavLink
            to="/involved" 
            className={`${styles.ctaButtonPrimary} ${styles.ctaNavLink}`} 
          >
            Get Involved
          </NavLink>
          <NavLink
            to="/success-stories"
            className={`${styles.ctaButtonSecondary} ${styles.ctaNavLink}`}
          >
            Success Stories
          </NavLink>
          
        </div>

      </div>
    </nav>
  );
}

export default Navbar;