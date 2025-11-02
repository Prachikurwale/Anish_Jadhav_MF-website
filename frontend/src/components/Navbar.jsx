import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
// CSS Module ko import karein
import styles from './Navbar.module.css';
// Logo import karein
import ajmfLogo from '../assets/AJMF.png'; 

function Navbar() {
  
  // Active/Inactive class set karne ke liye function
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  // Dropdown ke links ke liye function
  const getDropdownLinkClass = ({ isActive }) => {
    return isActive ? `${styles.dropdownLink} ${styles.active}` : styles.dropdownLink;
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

          {/* --- DROPDOWN MENU --- */}
          <div className={styles.dropdown}>
            <span className={styles.navLink}>
              Campus & Facilities
              <FaChevronDown className={styles.dropdownIcon} />
            </span>
            <div className={styles.dropdownMenu}>
              <NavLink 
                to="/campus" 
                className={getDropdownLinkClass}
              >
                Campus & Facilities
              </NavLink>
              <NavLink 
                to="/programs" 
                className={getDropdownLinkClass}
              >
                Our Programs
              </NavLink>
              <NavLink 
                to="/involved" 
                className={getDropdownLinkClass}
              >
                Get Involved
              </NavLink>
            </div>
          </div>
          {/* --- DROPDOWN END --- */}
          
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* --- Naye CTA Buttons --- */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButtonSecondary}>Learn More</button>
          <button className={styles.ctaButtonPrimary}>Get Involved</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;