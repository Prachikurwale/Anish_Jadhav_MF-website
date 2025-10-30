import React from 'react';
// Icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// CSS Module ko import karein
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top section with 4 columns */}
        <div className={styles.footerGrid}>
          
          {/* Column 1: About */}
          <div className={styles.footerColumn}>
            <h3 className={styles.logoHeading}>AJMF</h3>
            <p className={styles.aboutText}>
              Anish Jadhav Memorial Foundation - Building a legacy of hope and opportunity for 
              underprivileged youth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.linksHeading}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="/about" className={styles.link}>About Anish</a></li>
              <li><a href="/programs" className={styles.link}>Our Programs</a></li>
              <li><a href="/campus" className={styles.link}>Campus & Facilities</a></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className={styles.footerColumn}>
            <h4 className={styles.linksHeading}>Get Involved</h4>
            <ul className={styles.linksList}>
              <li><a href="/donate" className={styles.link}>Donate</a></li>
              <li><a href="/volunteer" className={styles.link}>Volunteer</a></li>
              <li><a href="/contact" className={styles.link}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className={styles.footerColumn}>
            <h4 className={styles.linksHeading}>Connect With Us</h4>
            <div className={styles.socialsContainer}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom section with divider and copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.madeWith}>
            Made with <span className={styles.heart}>❤️</span> in memory of Anish Jadhav
          </p>
          <p className={styles.copyright}>
            © 2025 Anish Jadhav Memorial Foundation. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;