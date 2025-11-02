import React from 'react';
import { motion } from 'framer-motion';
// Naye icons add kiye
import { 
  FaEye, FaHeart, FaHandsHelping, FaCode, FaBriefcase, 
  FaGraduationCap, FaRedoAlt, FaUsers, FaHospital 
} from 'react-icons/fa';
// CSS Module ko import karein
import styles from './Home.module.css';
import campusImg1 from '../assets/campus1.jpg';
import campusImg2 from '../assets/campus2.jpg';
import campusImg3 from '../assets/campus3.jpg';
import campusImg4 from '../assets/campus4.jpg';
import campusImg5 from '../assets/campus5.jpg';
import campusImg6 from '../assets/campus6.jpg';

// --- Animation Variants ---
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
      staggerChildren: 0.1, // Har word ke beech 0.1s delay
      delayChildren: 0.3,
    }
  }
};

// --- NAYA "TOP CLASS" ANIMATION ---
const heroWord = {
  hidden: { 
    opacity: 0, 
    y: 50, // Neeche se fly karega
    filter: 'blur(10px)' // Blur se start hoga
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)', // Un-blur hoga
    transition: { type: "spring", stiffness: 100, damping: 12 }
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

  const campusImages = [
    campusImg1, 
    campusImg2, 
    campusImg3, 
    campusImg4, 
    campusImg5, 
    campusImg6
  ];

  return (
    <div className={styles.pageContainer}>

      {/* ===== HERO SECTION START ===== */}
      <section className={styles.heroSection}>
        <div className={`${styles.container} ${styles.heroContent}`}>
        
          {/* Left Side: Text Content */}
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
                  variants={heroWord} // Naya animation yahan apply hoga
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
              <button className={`${styles.fontBody} ${styles.heroButtonPrimary}`}>
                Learn More
              </button>
              <button className={`${styles.fontBody} ${styles.heroButtonSecondary}`}>
                Get Involved
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Collage */}
          <motion.div 
            className={styles.heroImageCollage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={`${styles.collageItem} ${styles.item1}`}></div>
            <div className={`${styles.collageItem} ${styles.item2}`}></div>
            <div className={`${styles.collageItem} ${styles.item3}`}></div>
            <div className={`${styles.collageItem} ${styles.item4}`}></div>
            <div className={`${styles.collageItem} ${styles.item5}`}></div>
          </motion.div>

        </div>
      </section>
      {/* ===== HERO SECTION END ===== */}
      
      {/* ===== OUR MISSION SECTION START ===== */}
      <motion.section 
        className={`${styles.section} ${styles.sectionWithPattern}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className={`${styles.pattern} ${styles.pattern1}`}></div>
        
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Our Mission</h2>
          <div className={styles.sectionAccentBlue}></div>
          
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
              <div className={`${styles.missionIconWrapper} ${styles.iconBgBlue}`}>
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
              <div className={`${styles.missionIconWrapper} ${styles.iconBgYellow}`}>
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
              <div className={`${styles.missionIconWrapper} ${styles.iconBgGreen}`}>
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
          <div className={styles.sectionAccentBlue}></div>
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
            {/* --- POORA CODE YAHAN ADD KIYA GAYA HAI --- */}
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
                Master modern programming languages...
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
                Develop entrepreneurial skills...
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
                Transform lives through education...
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
                A fresh start for those seeking...
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
        {/* Naye colorful patterns */}
        <div className={`${styles.pattern} ${styles.pattern2}`}></div>

        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Campus Life</h2>
          <div className={styles.sectionAccentBlue}></div>
          <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
            A nurturing residential environment where students thrive
          </p>

          {/* --- YEH NAYA CODE HAI --- */}
          <motion.div 
            className={styles.campusCardGrid}
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Humne 'campusImages' array ko map kiya */}
            {campusImages.map((imageSrc, i) => ( 
              <motion.div 
                key={i} 
                className={styles.campusImagePlaceholder}
                variants={sectionSlideInUp}
              >
                {/* SVG ki jagah <img> tag daala */}
                <img 
                  src={imageSrc} 
                  alt={`Campus Life ${i + 1}`} 
                  className={styles.campusImage} 
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            className={`${styles.fontBody} ${styles.heroButtonPrimary}`} // CTA button style
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