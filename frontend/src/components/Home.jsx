import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaHandsHelping, FaCode, FaBriefcase, FaGraduationCap, FaRedoAlt } from 'react-icons/fa';
import ajmfLogo from '../assets/AJMF.png';
// CSS Module ko import karein
import styles from './Home.module.css';

// --- Animation Variants (Yeh waise hi rahenge) ---
const sectionSlideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};
const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};
const heroWord = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
// --- End Animation Variants ---


function Home() {
  const heroTitle = "Anish Jadhav Memorial Foundation";
  const titleWords = heroTitle.split(" ");

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    // Poore page ka container
    <div className={styles.pageContainer}>

      {/* ===== HERO SECTION START ===== */}
      <section className={styles.heroSection}>
        
        <video
          ref={videoRef}
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        />
        <div className={styles.heroOverlay}></div>

        <div className={`${styles.container} ${styles.heroContent}`}>
        
          <motion.div 
            className={styles.heroTextContainer}
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            
            <motion.h1 
              className={`${styles.fontHeading} ${styles.heroHeading}`}
              variants={heroContainer}
            >
              {titleWords.map((word, index) => (
                <motion.span 
                  key={index} 
                  className={styles.heroHeadingSpan}
                  variants={heroWord}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              className={`${styles.fontBody} ${styles.heroSubtitle}`}
              variants={heroItem}
            >
              A Legacy of Hope. A Future of Opportunity.
            </motion.p>
            
            <motion.div 
              className={styles.heroButtonsContainer}
              variants={heroItem}
            >
              <button className={`${styles.fontBody} ${styles.heroButton} ${styles.heroButtonPrimary}`}>
                Learn More
              </button>
              <button className={`${styles.fontBody} ${styles.heroButton} ${styles.heroButtonSecondary}`}>
                Get Involved
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.heroImageContainer}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src={ajmfLogo} 
              alt="AJMF Logo"
              className={styles.heroImage} 
            />
          </motion.div>

        </div>
      </section>
      {/* ===== HERO SECTION END ===== */}
      

      {/* ===== OUR MISSION SECTION START ===== */}
      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Our Mission</h2>
          <div className={styles.sectionAccentGreen}></div>
          
          <motion.div 
            className={styles.cardGrid3}
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div 
              className={styles.card}
              variants={sectionSlideInUp}
            >
              <div className={styles.missionIconWrapper}>
                <FaEye className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Vision</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                To empower underprivileged youth with education and skills to transform their lives and communities.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className={styles.card}
              variants={sectionSlideInUp}
            >
              <div className={styles.missionIconWrapper}>
                <FaHeart className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Values</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                Built on compassion, excellence, and the enduring memory of Anish Jadhav's spirit and dreams.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className={styles.card}
              variants={sectionSlideInUp}
            >
              <div className={styles.missionIconWrapper}>
                <FaHandsHelping className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Impact</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                Creating lasting change through partnerships with NavGurukul and dedication to educational excellence.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.missionInfoBox}
            variants={sectionSlideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className={`${styles.fontBody} ${styles.missionInfoText}`}>
              The Anish Jadhav Memorial Foundation was established by <strong>Brigadier Kishor Jadhav</strong> in loving memory of his son, Anish. In partnership with NavGurukul, we provide comprehensive residential education programs that equip underprivileged youth with the skills, knowledge, and opportunities they need to build successful careers and meaningful lives.
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* ===== OUR MISSION SECTION END ===== */}
      

      {/* ===== OUR PROGRAMS SECTION START ===== */}
      <motion.section 
        className={`${styles.section} ${styles.programsSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Our Programs</h2>
          <div className={styles.sectionAccentCyan}></div>
          <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
            Four transformative schools designed to unlock potential and create opportunities
          </p>

          <motion.div 
            className={styles.cardGrid4}
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Program Card 1 */}
            <motion.div 
              className={styles.card}
              variants={sectionSlideInUp}
            >
              <div className={styles.programIconWrapper}>
                <FaCode className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>School of Programming</h3>
              <p className={`${styles.fontBody} ${styles.programCardText}`}>
                Master modern programming languages and frameworks to build a career in software development.
              </p>
              <div className={styles.tagContainer}>
                <span className={styles.tag}>Javascript</span>
                <span className={styles.tag}>React.js</span>
                <span className={styles.tag}>Python</span>
              </div>
            </motion.div>

            {/* Program Card 2 */}
            <motion.div 
              className={styles.card}
              variants={sectionSlideInUp}
            >
              <div className={styles.programIconWrapper}>
                <FaBriefcase className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>School of Business</h3>
              <p className={`${styles.fontBody} ${styles.programCardText}`}>
                Develop entrepreneurial skills and business acumen to create opportunities and drive innovation.
              </p>
              <div className={styles.tagContainer}>
                <span className={styles.tag}>Business Strategy</span>
                <span className={styles.tag}>Marketing</span>
              </div>
            </motion.div>

            {/* Program Card 3 */}
            <motion.div 
              className={styles.card}
              variants={sectionSlideInUp}
            >
              <div className={styles.programIconWrapper}>
                <FaGraduationCap className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>School of Education</h3>
              <p className={`${styles.fontBody} ${styles.programCardText}`}>
                Transform lives through education and empower the next generation of learners and educators.
              </p>
              <div className={styles.tagContainer}>
                <span className={styles.tag}>Teaching Methods</span>
                <span className={styles.tag}>Curriculum</span>
              </div>
            </motion.div>

            {/* Program Card 4 */}
            <motion.div 
              className={styles.card}
              variants={sectionSlideInUp}
            >
              <div className={styles.programIconWrapper}>
                <FaRedoAlt className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>School of Second Chance</h3>
              <p className={`${styles.fontBody} ${styles.programCardText}`}>
                A fresh start for those seeking to rebuild their future with new skills and opportunities.
              </p>
              <div className={styles.tagContainer}>
                <span className={styles.tag}>Career Transition</span>
                <span className={styles.tag}>Mentorship</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* ===== OUR PROGRAMS SECTION END ===== */}
      

      {/* ===== CAMPUS LIFE SECTION START ===== */}
      <motion.section 
        className={`${styles.section} ${styles.campusSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Campus Life</h2>
          <div className={styles.sectionAccentAmber}></div>
          <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
            A nurturing residential environment where students thrive
          </p>

          <motion.div 
            className={styles.campusCardGrid}
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[...Array(6)].map((_, i) => ( 
              <motion.div 
                key={i} 
                className={styles.campusImagePlaceholder}
                variants={sectionSlideInUp}
              >
                <svg className={styles.placeholderIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            className={`${styles.fontBody} ${styles.campusButton}`}
            variants={sectionSlideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Explore Our Campus 
            <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </motion.button>
        </div>
      </motion.section>
      {/* ===== CAMPUS LIFE SECTION END ===== */}

    </div>
  );
}

export default Home;


