import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Mail, Phone, Facebook, Twitter, 
  Instagram, Linkedin, Send, Map, ChevronDown 
} from 'lucide-react';
import styles from './ContactUs.module.css';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemSlideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};
const itemSlideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null);

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
      
      {/* ===== SECTION 1: HEADER ===== */}
      <motion.section 
        className={`${styles.section} ${styles.headerSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h1 className={`${styles.fontHeading} ${styles.pageHeading}`}>
            Contact Us
          </h1>
          <div className={styles.accentBar}></div>
          <p className={`${styles.fontBody} ${styles.pageSubtitle}`}>
            Have <strong>questions</strong> or want to <strong>get involved</strong>? We'd love to hear from you. 
            Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </motion.section>

      {/* ===== SECTION 2: CONTACT FORM & INFO ===== */}
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
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.formContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemSlideInRight}
          >
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading} ${styles.formHeading}`}>Send Us a Message</h2>
            <form className={styles.form}>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Full Name *</label>
                <input type="text" placeholder="Your name" className={`${styles.fontBody} ${styles.formInput}`} required />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Email Address *</label>
                <input type="email" placeholder="your.email@example.com" className={`${styles.fontBody} ${styles.formInput}`} required />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Phone Number</label>
                <input type="tel" placeholder="Your phone number" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Subject *</label>
                <input type="text" placeholder="What is this regarding?" className={`${styles.fontBody} ${styles.formInput}`} required />
              </div>
              <div>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Message *</label>
                <textarea rows="5" placeholder="Tell us more..." className={`${styles.fontBody} ${styles.formInput}`} required></textarea>
              </div>
              <button type="submit" className={`${styles.fontBody} ${styles.submitButton}`}>
                <Send className={styles.buttonIcon} size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 3: MAP ===== */}
      <motion.section 
        className={`${styles.section} ${styles.sectionBgGray}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Find Us On The Map</h2>
          <div className={styles.accentBarLong}></div>
          
          {/* 🌟 CHANGE: Placeholder ko aapke <iframe> se replace kar diya hai */}
          <div className={styles.mapPlaceholder}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.36338856939!2d73.93373277598678!3d18.602718166658224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c5e94895b787%3A0x1f5e8bbeb5cbb3c1!2sAnish%20Jadhav%20Memorial%20Foundation!5e0!3m2!1sen!2sin!4v1762403691094!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* ===== SECTION 4: FAQ (Accordion) ===== */}
      <motion.section 
        className={`${styles.section} ${styles.sectionBgWhite}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <div className={`${styles.container} ${styles.textCenter} ${styles.faqContainer}`}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Frequently Asked Questions</h2>
          <div className={styles.accentBarLong}></div>
          
          <div className={styles.faqList}>
            <AnimatePresence>
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className={styles.faqItem}
                  variants={fadeInUp}
                >
                  <div 
                    className={styles.faqQuestion} 
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className={`${styles.fontBody}`}>{faq.q}</h3>
                    <motion.div
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

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

export default ContactUs;