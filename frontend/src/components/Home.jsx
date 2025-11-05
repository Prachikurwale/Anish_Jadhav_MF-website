import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaHandsHelping } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation hook
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const heroContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};
const heroWord = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 100, damping: 12 } }
};
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function Home() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const heroTitle = "Anish Jadhav Memorial Foundation";
  const titleWords = heroTitle.split(" ");
  const campusImages = [campusImg1, campusImg2, campusImg3, campusImg4, campusImg5, campusImg6];
   
  return (
    <div className={styles.pageContainer}>
      {/* 🌟 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <motion.div className={styles.heroTextContainer} variants={heroContainer} initial="hidden" animate="visible">
            <motion.h1 className={`${styles.fontHeading} ${styles.heroHeading}`} variants={heroContainer}>
              {titleWords.map((word, index) => (
                <motion.span key={index} className={styles.heroHeadingSpan} variants={heroWord}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className={`${styles.fontBody} ${styles.heroSubtitle}`} variants={heroItem}>
              A Legacy of Hope. A Future of Opportunity.
            </motion.p>

            {/* ✅ CLICKABLE BUTTONS */}
            <motion.div className={styles.heroButtonsContainer} variants={heroItem}>
              <button
                className={`${styles.fontBody} ${styles.heroButtonPrimary}`}
                onClick={() => navigate('/about')} // 🔗 Navigates to AboutAnish.jsx
              >
                Learn More
              </button>

              <button
                className={`${styles.fontBody} ${styles.heroButtonSecondary}`}
                onClick={() => navigate('/involved')} // 🔗 Navigates to GetInvolved.jsx
              >
                Get Involved
              </button>
            </motion.div>
          </motion.div>

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

      {/* 🌍 OUR MISSION */}
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
            <motion.div className={styles.card} variants={sectionSlideInUp}>
              <div className={`${styles.missionIconWrapper} ${styles.iconBgBlue}`}>
                <FaEye className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Vision</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                To empower underprivileged youth with education and skills to transform their lives and communities.
              </p>
            </motion.div>

            <motion.div className={styles.card} variants={sectionSlideInUp}>
              <div className={`${styles.missionIconWrapper} ${styles.iconBgYellow}`}>
                <FaHeart className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Values</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                Built on compassion, excellence, and the enduring memory of Anish Jadhav's spirit and dreams.
              </p>
            </motion.div>

            <motion.div className={styles.card} variants={sectionSlideInUp}>
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

      {/* 🏫 CAMPUS LIFE */}
      <motion.section
        className={`${styles.section} ${styles.campusSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className={`${styles.pattern} ${styles.pattern2}`}></div>
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Campus Life</h2>
          <div className={styles.sectionAccentBlue}></div>
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
            {campusImages.map((imageSrc, i) => (
              <motion.div key={i} className={styles.campusImagePlaceholder} variants={sectionSlideInUp}>
                <img src={imageSrc} alt={`Campus Life ${i + 1}`} className={styles.campusImage} />
              </motion.div>
            ))}
          </motion.div>

          {/* ✅ Explore Button Navigates to Campus Page */}
          <motion.button
            className={`${styles.fontBody} ${styles.heroButtonPrimary}`}
            variants={sectionSlideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => navigate('/campus')} // 🔗 Navigates to CampusAndFacilities.jsx
          >
            Explore Our Campus
            <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
