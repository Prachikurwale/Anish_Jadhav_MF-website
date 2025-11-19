import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // FaYoutube जोड़ा गया
 
import styles from './Footer.module.css';
import ajmfLogo from '../assets/AJMF.jpeg'; // मान लीजिए यह आपका लोगो है

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          
          {/* Main Footer Content - 4 Columns in CSS Grid */}
          <div className={styles.footerGrid}>
            
            {/* Column 1: Logo and Socials */}
            <div className={styles.logoSocialsColumn}>
              <div className={styles.logoSection}>
                <img src={ajmfLogo} alt="AJMF Logo" className={styles.mainFooterLogo} />
{/*                 <p className={styles.schoolName}>
                  The Anish Jadhav<br/>Memorial Foundation
                </p> */}
              </div>
              
              {/* Social Icons */}
              <div className={styles.socialsContainer}>
                <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" className={styles.socialLink} aria-label="YouTube"><FaYoutube /></a> {/* FaYoutube का उपयोग किया */}
              </div>
            </div>

            {/* Column 2: ABOUT Links */}
            <div className={styles.linksBlock}> {/* .linksColumnsGroup हटा दिया गया */}
              <h4 className={styles.linksHeading}>ABOUT</h4>
              <ul className={styles.linksList}>
                <li><a href="/about" className={styles.link}>About Anish</a></li>
                <li><a href="/campus" className={styles.link}>Campus & Facilities</a></li>
                
                <li><a href="/contact" className={styles.link}>Contact Us</a></li>
              </ul>
            </div>
            
            {/* Column 3: GET INVOLVED Links */}
            <div className={styles.linksBlock}>
              <h4 className={styles.linksHeading}>GET INVOLVED</h4>
              <ul className={styles.linksList}>
                <li><a href="/donate" className={styles.link}>Donate</a></li>
                <li><a href="/volunteer" className={styles.link}>Volunteer</a></li>
                <li><a href="/faq" className={styles.link}>FAQs</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className={styles.contactColumn}>
              <h4 className={styles.linksHeading}>CONTACT</h4>
              <div className={styles.contactInfo}>
                <p>Pune, Maharashtra, India</p>
                <p>Pin Code: 411047</p>
                <p className={styles.contactPhone}>+91 12345 67890</p>
                <p className={styles.contactEmail}>info@ajmf.org</p>
              </div>
            </div>
          </div>
          
          

       
          
        </div>
      </footer>

      {/* Bottom Bar: Copyright and Powered By (Matching screenshot content) */}
       
        <div className={styles.footerBottomContent}>
          <p className={styles.copyright}>
            © Copyright 2025  Anish Jadhav Memorial Foundation. All rights reserved. {/* Updated to match screenshot text */}
          </p>
         
       
      </div>
    </div>
  );
}

export default Footer;