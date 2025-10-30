import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
// CSS Module ko import karein
import styles from './Navbar.module.css';

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
          Anish Jadhav Memorial Foundation
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
            {/* Dropdown Trigger */}
            <span className={styles.navLink}>
              Campus & Facilities
              <FaChevronDown className={styles.dropdownIcon} />
            </span>
            
            {/* Dropdown Box */}
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

          {/* FIXED: 'Contact Us' ab main link hai, 
            dropdown link nahi 
          */}
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact Us
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;