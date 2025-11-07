import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Mail, Phone, Facebook, Twitter, 
  Instagram, Linkedin, Send, Map, ChevronDown 
} from 'lucide-react';
import styles from './ContactUs.module.css';

// --- Animation Variants (Less Aggressive) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const itemSlideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 20 } }
};
const itemSlideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 20 } }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};
const faqAnswerVariant = {
  hidden: { opacity: 0, height: 0, marginTop: 0, paddingTop: 0, borderTopWidth: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto', 
    marginTop: '0.5rem', 
    paddingTop: '1rem',
    borderTopWidth: '1px',
    transition: { duration: 0.4, ease: 'easeInOut' } // Thoda fast
  }
};

function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false); // New state for map

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
    <div className={styles.pageWrapper}>
      
      {/* ===== SECTION 1: HEADER (MOTION KE SAATH) ===== */}
      <motion.section 
        className={`${styles.section} ${styles.headerSection}`}
        initial="hidden"
        animate="visible" // Ab page load hote hi animate hoga
        variants={fadeInUp}
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h1 className={`${styles.fontHeading} ${styles.pageHeading}`}>
            Contact Us
          </h1>
          <div className={styles.accentBar}></div>
          <motion.p variants={fadeInUp} className={`${styles.fontBody} ${styles.pageSubtitle}`}>
            Have <strong>questions</strong> or want to <strong>get involved</strong>? We'd love to hear from you. 
            Reach out and we'll respond as soon as possible.
          </motion.p>
        </div>
      </motion.section>

      {/* ===== SECTION 2: CONTACT FORM & INFO (MOTION KE SAATH) ===== */}
      <section className={`${styles.section} ${styles.sectionBgWhite}`}>
        <div className={`${styles.container} ${styles.gridContainer}`}>
          
          <motion.div 
            className={`${styles.textLeft} ${styles.infoContainer}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 variants={itemSlideInLeft} className={`${styles.fontHeading} ${styles.sectionHeading}`}>Get In Touch</motion.h2>
            
            {/* ... (All infoBlocks remain motion.div) ... */}
            <motion.div className={styles.infoBlock} variants={itemSlideInLeft}>
              <div className={styles.infoIconWrapper}>
                <MapPin className={styles.infoIcon} />
              </div>
              <div>
                <h3 className={`${styles.fontBody} ${styles.infoTitle}`}>Our Address</h3>
                <p className={`${styles.fontBody} ${styles.infoText}`}>
                  Anish Jadhav Memorial Foundation<br />
                  In Partnership with NavGurukul<br />
                  [Campus Address], India
                </p>
              </div>
            </motion.div>
            
            <motion.div className={styles.infoBlock} variants={itemSlideInLeft}>
              <div className={styles.infoIconWrapper}>
                <Mail className={styles.infoIcon} />
              </div>
              <div>
                <h3 className={`${styles.fontBody} ${styles.infoTitle}`}>Email Us</h3>
                <a href="mailto:info@ajmf.org" className={`${styles.fontBody} ${styles.infoLink}`}>info@ajmf.org</a><br />
                <a href="mailto:admissions@ajmf.org" className={`${styles.fontBody} ${styles.infoLink}`}>admissions@ajmf.org</a>
              </div>
            </motion.div>
            
            <motion.div className={styles.infoBlock} variants={itemSlideInLeft}>
              <div className={styles.infoIconWrapper}>
                <Phone className={styles.infoIcon} />
              </div>
              <div>
                <h3 className={`${styles.fontBody} ${styles.infoTitle}`}>Call Us</h3>
                <p className={`${styles.fontBody} ${styles.infoText}`}>+91 123 456 7890</p>
                <p className={`${styles.fontBody} ${styles.infoSubtext}`}>Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </motion.div>

            <motion.div className={styles.socialsBox} variants={itemSlideInLeft}>
              <h3 className={`${styles.fontBody} ${styles.socialsBoxTitle}`}>Follow Us</h3>
              <div className={styles.socialsContainer}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                {/* ... (Other social links) ... */}
              </div>
            </motion.div>
          </motion.div>

          {/* Form Container */}
          <motion.div 
            className={styles.formContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemSlideInRight}
          >
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading} ${styles.formHeading}`}>Send Us a Message</h2>
            {/* Form elements remain motion-less for stability */}
            <form className={styles.form}>
              {/* ... (Form inputs and button) ... */}
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Full Name *</label>
                <input type="text" placeholder="Your name" className={`${styles.fontBody} ${styles.formInput}`} required />
              </div>
              {/* ... (Other inputs) ... */}
              <button type="submit" className={`${styles.fontBody} ${styles.submitButton}`}>
                <Send className={styles.buttonIcon} size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 3: MAP (NON-MOTION SECTION, LAZY LOADED) ===== */}
      <section 
        className={`${styles.section} ${styles.sectionBgGray}`}
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Find Us On The Map</h2>
          <div className={styles.accentBarLong}></div>
          
          <div className={styles.mapPlaceholder}>
            {!mapLoaded ? (
                <motion.div 
                    className={styles.mapClickToLoad} 
                    onClick={() => setMapLoaded(true)}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Map size={30} className={styles.mapLoadIcon} />
                    <p className={`${styles.fontBody}`}>Click to **Load Map**</p>
                </motion.div>
            ) : (
                <iframe 
                    // Replace with your actual Google Maps embed link
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            )}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FAQ (Accordion - NON-MOTION SECTION) ===== */}
      <section 
        className={`${styles.section} ${styles.sectionBgWhite}`}
      >
        <div className={`${styles.container} ${styles.textCenter} ${styles.faqContainer}`}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Frequently Asked Questions</h2>
          <div className={styles.accentBarLong}></div>
          
          <div className={styles.faqList}>
            <AnimatePresence>
              {faqs.map((faq, index) => (
                <div // Changed from motion.div to standard div
                  key={index} 
                  className={styles.faqItem}
                >
                  <div 
                    className={styles.faqQuestion} 
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className={`${styles.fontBody}`}>{faq.q}</h3>
                    <motion.div // Only the icon retains motion for visual feedback
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={styles.faqIcon} />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        key="answer"
                        className={styles.faqAnswerContainer}
                        variants={faqAnswerVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <p className={`${styles.fontBody} ${styles.faqAnswer}`}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactUs;