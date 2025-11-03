import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'; // FaYoutube और FaTwitter जोड़ा
 
import styles from './Footer.module.css';
import ajmfLogo from '../assets/AJMF.jpeg'; // मान लीजिए यह आपका लोगो है

function Footer() {
  return (
    // Outer container for the main dark background and the curved shape
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          
          {/* Main Footer Content - 3 Columns */}
          <div className={styles.footerGrid}>
            
            {/* Column 1: Logo, Socials, and "About" Links */}
            <div className={styles.logoAndLinksColumn}>
              <div className={styles.logoSocialsGroup}>
                {/* Logo Section */}
                <div className={styles.logoSection}>
                  {/* Replace with your actual logo component or image */}
                  <img src={ajmfLogo} alt="AJMF Logo" className={styles.mainFooterLogo} />
                  <p className={styles.schoolName}>
                    The Anish Jadhav<br/>Memorial Foundation
                  </p>
                </div>
                
                {/* Social Icons (SFS footer se match karne ke liye) */}
                <div className={styles.socialsContainer}>
                  <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedinIn /></a>
                  {/* Add other socials as needed, like YouTube (FaYoutube) */}
                  <a href="#" className={styles.socialLink} aria-label="Twitter"><FaTwitter /></a> 
                  <a href="#" className={styles.socialLink} aria-label="YouTube"><FaYoutube /></a> 
                </div>
              </div>
              
              {/* About Links (SFS footer ke "About" section ko yahan shift kiya) */}
              <div className={styles.linksBlock}>
                <h4 className={styles.linksHeading}>ABOUT</h4>
                <ul className={styles.linksList}>
                  <li><a href="/about" className={styles.link}>About Anish</a></li>
                  <li><a href="/campus" className={styles.link}>Campus & Facilities</a></li>
                  <li><a href="/careers" className={styles.link}>Careers</a></li>
                  <li><a href="/contact" className={styles.link}>Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Column 2: Get Involved Links (Original: GET INVOLVED) */}
            <div className={styles.linksColumn}>
              <h4 className={styles.linksHeading}>GET INVOLVED</h4>
              <ul className={styles.linksList}>
                <li><a href="/donate" className={styles.link}>Donate</a></li>
                <li><a href="/volunteer" className={styles.link}>Volunteer</a></li>
                <li><a href="/blog" className={styles.link}>Blog / News</a></li> 
                <li><a href="/faq" className={styles.link}>FAQs</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Info (Original: CONTACT) */}
            <div className={styles.contactColumn}>
              <h4 className={styles.linksHeading}>CONTACT</h4>
              <div className={styles.contactInfo}>
                <p>Pune, Maharashtra, India</p>
                <p>Pin Code: 411001</p>
                <p className={styles.contactPhone}>(+91) 123 456 7890</p>
                <p className={styles.contactEmail}>info@ajmf.org</p>
              </div>
            </div>
            
          </div>
          
          {/* Horizontal Rule */}
          <hr className={styles.footerSeparator} />

          {/* Non-Discrimination Statement (or equivalent policy statement) */}
          <div className={styles.statementSection}>
            <h4 className={styles.statementHeading}>OUR VISION STATEMENT</h4>
            <p className={styles.statementText}>
              The Anish Jadhav Memorial Foundation is committed to fostering a community
              that celebrates creativity, innovation, and learning in a safe and supportive
              environment. We strive to empower students to achieve their highest potential
              and contribute positively to society, regardless of background or circumstance.
            </p>
          </div>

        </div>
      </footer>

      {/* Bottom Bar: Copyright and Powered By */}
      <div className={styles.footerBottomBar}>
        <div className={styles.footerBottomContent}>
          <p className={styles.copyright}>
            © Copyright 2025 Anish Jadhav Memorial Foundation. All rights reserved.
          </p>
          <p className={styles.poweredBy}>
            Made with <span style={{ color: 'red' }}>❤️</span> in memory of Anish
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;