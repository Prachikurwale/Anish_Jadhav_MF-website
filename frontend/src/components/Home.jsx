import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaHeart, FaHandsHelping, FaTimes } from 'react-icons/fa'; 
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

// Images
import campusImg1 from '../assets/campus1.jpg';
import campusImg2 from '../assets/campus2.jpg';
import campusImg3 from '../assets/campus3.jpg';
import campusImg4 from '../assets/campus4.jpg'; // Hero Background
import campusImg5 from '../assets/campus5.jpg';
import campusImg6 from '../assets/campus6.jpg';

// --- Animation Variants (No Change) ---
const sectionSlideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};
const heroContainerVariants = {
  visible: { transition: { staggerChildren: 0.1 } } 
};
const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const cardFlipIn = {
  hidden: { opacity: 0, y: 30, rotateY: -100, transformOrigin: 'left' },
  visible: { 
    opacity: 1, y: 0, rotateY: 0, 
    transition: { type: "spring", stiffness: 60, damping: 15, mass: 0.8 } 
  }
};
const cardHover = {
  hover: { y: -10, scale: 1.03, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" },
  transition: { type: "spring", stiffness: 300 }
};
const bounce = {
  y: ["0%", "-10%", "0%"],
  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
};

const allCampusImages = [campusImg1, campusImg2, campusImg3, campusImg4, campusImg5, campusImg6];

// --- Bubble Background (Mission - No Change) ---
const BubbleBackground = () => (
  <div className={styles.bubbleContainer} aria-hidden="true">
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
  </div>
);

// --- Marquee (Campus Life - UPDATED) ---
const Marquee = ({ images, direction = 'left' }) => {
  const marqueeVariants = {
    animate: {
      // 🌟 BUG FIX: -100% ko -50% kar diya hai
      x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
      },
    },
  };

  return (
    <div className={styles.marqueeContainer}>
      <motion.div
        className={styles.marquee}
        variants={marqueeVariants}
        animate="animate"
      >
        {[...images, ...images].map((imageSrc, i) => (
          <div key={i} className={styles.marqueeImageWrapper}>
            <img src={imageSrc} alt={`Campus Life ${i + 1}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Home Component ---
function Home() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const marqueeRow1 = allCampusImages.slice(0, 3);
  const marqueeRow2 = allCampusImages.slice(3, 6);
=======
  const heroTitle = "Anish Jadhav Memorial Foundation";
  const titleWords = heroTitle.split(" ");

  const marqueeRow1 = campusImages.slice(0, 3);
  const marqueeRow2 = campusImages.slice(3, 6);
>>>>>>> origin/main


  return (
    <div className={styles.pageContainer}>
      
      {/* --- HERO SECTION (No Change) --- */}
      <section 
        className={styles.heroSection} 
        style={{ 
          backgroundImage: `url(${campusImg4})`, 
        }}
      >
        <div className={styles.heroOverlay}></div>
        
        <div className={`${styles.container} ${styles.heroContentWrapper}`}>
          <motion.div 
            className={styles.heroTextContainer}
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroItemVariants} className={styles.heroAccentLine}></motion.div>

            <motion.h1 variants={heroItemVariants} className={styles.heroHeading}>
              Anish Jadhav 
              <span className={styles.heroHeadingSpan}>Memorial Foundation</span>
            </motion.h1>
            
            <motion.p variants={heroItemVariants} className={styles.heroSubtitle}>
              TORCH BEARER FOR THE NEEDY
            </motion.p>

            <motion.div variants={heroItemVariants} className={styles.heroButtonContainer}> 
              <button
                className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
                onClick={() => navigate('/about')}
              >
                Learn More
              </button>
              <button
                className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
                onClick={() => navigate('/involved')}
              >
                Get Involved
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div className={styles.scrollDownIcon} animate={bounce}>
          <ChevronDown size={30} />
        </motion.div>
      </section>

      {/* --- MISSION SECTION (No Change) --- */}
      <motion.section
        className={`${styles.section} ${styles.missionSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionSlideInUp}
      >
        <BubbleBackground />
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>Our Mission</h2>
          <div className={styles.sectionAccent}></div>

          <motion.div
            className={styles.cardGrid3}
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className={styles.card}
              variants={cardFlipIn}
              {...cardHover}
              style={{ "--stagger-delay": "0s" }}
            >
              <div className={`${styles.decoCircle} ${styles.decoCircle1}`}></div>
              <div className={styles.missionIconWrapper}>
                <FaEye className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Vision</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                To empower underprivileged youth with education and skills to transform their lives and communities.
              </p>
              <div className={`${styles.decoLine} ${styles.decoLine1}`}></div>
            </motion.div>

            <motion.div 
              className={styles.card}
              variants={cardFlipIn}
              {...cardHover}
              style={{ "--stagger-delay": "0.15s" }}
            >
              <div className={styles.missionIconWrapper}>
                <FaHeart className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Values</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                Built on compassion, excellence, and the enduring memory of Anish Jadhav's spirit and dreams.
              </p>
              <div className={`${styles.decoCircle} ${styles.decoCircle2}`}></div>
            </motion.div>

            <motion.div 
              className={styles.card}
              variants={cardFlipIn}
              {...cardHover}
              style={{ "--stagger-delay": "0.3s" }}
            >
              <div className={styles.missionIconWrapper}>
                <FaHandsHelping className={styles.icon} />
              </div>
              <h3 className={`${styles.fontHeading} ${styles.cardHeading}`}>Our Impact</h3>
              <p className={`${styles.fontBody} ${styles.cardText}`}>
                Creating lasting change through partnerships with NavGurukul and dedication to educational excellence.
              </p>
              <div className={`${styles.decoLine} ${styles.decoLine2}`}></div>
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

      {/* --- CAMPUS SECTION (No Change) --- */}
      <section className={`${styles.section} ${styles.campusSection}`}>
        <div className={`${styles.decoCircle} ${styles.decoCircle3}`}></div>
        <div className={`${styles.decoLine} ${styles.decoLine3}`}></div>
        <div className={styles.sectionContainer} style={{ maxWidth: '100%', padding: 0 }}>
          <div style={{ padding: '0 1.5rem', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>A Glimpse of Campus Life</h2>
            <div className={styles.sectionAccent}></div>
            <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
              A nurturing residential environment where students learn, grow, and thrive together.
            </p>
          </div>
          <div className={styles.marqueeWrapper}>
            <Marquee images={marqueeRow1} direction="left" />
            <Marquee images={marqueeRow2} direction="right" />
          </div>
          <motion.button
            className={`${styles.fontBody} ${styles.campusButton}`}
            variants={sectionSlideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => navigate('/campus')}
          >
            Explore Our Campus
            <ArrowRight className={styles.buttonIcon} />
          </motion.button>
        </div>
      </section>
      
    </div>
  );
}

export default Home;