import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
 
import styles from './Footer.module.css';
import ajmfLogo from '../assets/AJMF.png';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      
      
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            
           
             

            
            <div className={styles.footerColumn}>
              <h4 className={styles.linksHeading}>About</h4>
              <ul className={styles.linksList}>
                <li><a href="/about" className={styles.link}>About Anish</a></li>
                <li><a href="/campus" className={styles.link}>Campus & Facilities</a></li>
              </ul>
            </div>

           
            <div className={styles.footerColumn}>
              <h4 className={styles.linksHeading}>Resources</h4>
              <ul className={styles.linksList}>
                <li><a href="#" className={styles.link}>Blog</a></li>
                <li><a href="#" className={styles.link}>FAQs</a></li>
                <li><a href="#" className={styles.link}>Showcase</a></li>
              </ul>
            </div>

         
            <div className={styles.footerColumn}>
              <h4 className={styles.linksHeading}>Get Involved</h4>
              <ul className={styles.linksList}>
                <li><a href="/involved" className={styles.link}>Donate</a></li>
                <li><a href="/involved" className={styles.link}>Volunteer</a></li>
                <li><a href="/contact" className={styles.link}>Contact Us</a></li>
              </ul>
            </div>

            
            <div className={styles.footerColumn}>
              <h4 className={styles.linksHeading}>Connect</h4>
              <div className={styles.contactInfo}>
                <p>Pune, Maharashtra, India</p>
                <p>(+91) 123 456 7890</p>
                <p>info@ajmf.org</p>
              </div>
              <div className={styles.socialsContainer}>
                <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" className={styles.socialLink} aria-label="Twitter"><FaTwitter /></a>
                <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

           
        </div>
      </footer>

       
      <div className={styles.footerBottomBar}>
        <div className={styles.footerBottomContent}>
          <div className={styles.logoAndCopyright}>
            <img src={ajmfLogo} alt="AJMF" className={styles.footerLogo} />
            <p className={styles.copyright}>
              © 2025 Anish Jadhav Memorial Foundation. All rights reserved.
            </p>
          </div>
          <p className={styles.poweredBy}>
            Made with ❤️ in memory of Anish
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;