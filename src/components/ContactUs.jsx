import React from 'react';
// Icons
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, 
  FaInstagram, FaLinkedinIn, FaPaperPlane, FaMapPin 
} from 'react-icons/fa';
// CSS Module ko import karein
import styles from './ContactUs.module.css';

function ContactUs() {

  // FAQ data (No change)
  const faqs = [
    { 
      q: "How can I apply for admission?", 
      a: "Applications are open throughout the year. Please reach out to us at admissions@ajmf.org with your details and educational background." 
    },
    { 
      q: "Are programs really free for students?", 
      a: "Yes, all our programs are completely free including education, residential facilities, meals, and study materials for eligible students." 
    },
    { 
      q: "Can I visit the campus?", 
      a: "Absolutely! We welcome campus visits. Please contact us in advance to schedule a tour." 
    },
    { 
      q: "How can organizations partner with AJMF?", 
      a: "Organizations can partner through internship programs, job placements, donations, or collaborative initiatives. Contact us to discuss partnership opportunities." 
    }
  ];

  return (
    <div>
      
      {/* ===== SECTION 1: CONTACT FORM & INFO ===== */}
      <section className={`${styles.section} ${styles.sectionBgWhite}`}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h1 className={`${styles.fontHeading} ${styles.pageHeading}`}>
            Contact Us
          </h1>
          <div className={styles.accentBar}></div>
          <p className={`${styles.fontBody} ${styles.pageSubtitle}`}>
            Have questions or want to get involved? We'd love to hear from you. 
            Reach out and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className={`${styles.container} ${styles.gridContainer}`}>
          
          {/* Left Column: Get In Touch */}
          <div className={`${styles.textLeft} ${styles.infoContainer}`}>
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Get In Touch</h2>
            
            {/* Address Block */}
            <div className={styles.infoBlock}>
              <div className={styles.infoIconWrapper}>
                <FaMapMarkerAlt className={styles.infoIcon} />
              </div>
              <div>
                <h3 className={`${styles.fontBody} ${styles.infoTitle}`}>Our Address</h3>
                <p className={`${styles.fontBody} ${styles.infoText}`}>
                  Anish Jadhav Memorial Foundation<br />
                  In Partnership with NavGurukul<br />
                  [Campus Address], India
                </p>
              </div>
            </div>
            
            {/* Email Block */}
            <div className={styles.infoBlock}>
              <div className={styles.infoIconWrapper}>
                <FaEnvelope className={styles.infoIcon} />
              </div>
              <div>
                <h3 className={`${styles.fontBody} ${styles.infoTitle}`}>Email Us</h3>
                <a href="mailto:info@ajmf.org" className={`${styles.fontBody} ${styles.infoLink}`}>info@ajmf.org</a><br />
                <a href="mailto:admissions@ajmf.org" className={`${styles.fontBody} ${styles.infoLink}`}>admissions@ajmf.org</a>
              </div>
            </div>
            
            {/* Call Block */}
            <div className={styles.infoBlock}>
              <div className={styles.infoIconWrapper}>
                <FaPhoneAlt className={styles.infoIcon} />
              </div>
              <div>
                <h3 className={`${styles.fontBody} ${styles.infoTitle}`}>Call Us</h3>
                <p className={`${styles.fontBody} ${styles.infoText}`}>+91 123 456 7890</p>
                <p className={`${styles.fontBody} ${styles.infoSubtext}`}>Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Follow Us Block */}
            <div className={styles.socialsBox}>
              <h3 className={`${styles.fontBody} ${styles.socialsBoxTitle}`}>Follow Us</h3>
              <div className={styles.socialsContainer}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formContainer}>
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading} ${styles.formHeading}`}>Send Us a Message</h2>
            <form className={styles.form}>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Full Name *</label>
                <input type="text" placeholder="Your name" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Email Address *</label>
                <input type="email" placeholder="your.email@example.com" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Phone Number</label>
                <input type="tel" placeholder="Your phone number" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Subject *</label>
                <input type="text" placeholder="What is this regarding?" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Message *</label>
                <textarea rows="5" placeholder="Tell us more..." className={`${styles.fontBody} ${styles.formInput}`}></textarea>
              </div>
              <button type="submit" className={`${styles.fontBody} ${styles.submitButton}`}>
                <FaPaperPlane className={styles.buttonIcon} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: MAP ===== */}
      <section className={`${styles.section} ${styles.sectionBgGray}`}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Find Us On The Map</h2>
          <div className={styles.accentBarLong}></div>
          <div className={`${styles.mapPlaceholder} ${styles.fontBody}`}>
            {/* Yahan par aap Google Maps ka <iframe> code paste kar sakte hain */}
            <FaMapPin className={styles.mapIcon} />
            <span className={styles.mapText}>Map Location Placeholder</span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FAQ ===== */}
      <section className={`${styles.section} ${styles.sectionBgWhite}`}>
        <div className={`${styles.container} ${styles.textCenter} ${styles.faqContainer}`}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Frequently Asked Questions</h2>
          <div className={styles.accentBarLong}></div>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={`${styles.fontBody} ${styles.faqQuestion}`}>{faq.q}</h3>
                <p className={`${styles.fontBody} ${styles.faqAnswer}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactUs;