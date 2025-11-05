import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaHandsHelping } from 'react-icons/fa';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

import campusImg1 from '../assets/campus1.jpg';
import campusImg2 from '../assets/campus2.jpg';
import campusImg3 from '../assets/campus3.jpg';
import campusImg4 from '../assets/campus4.jpg';
import campusImg5 from '../assets/campus5.jpg';
import campusImg6 from '../assets/campus6.jpg';

const sectionSlideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
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

const cardFlipIn = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    rotateY: -100, 
    transformOrigin: 'left' 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateY: 0, 
    transition: { 
      type: "spring",
      stiffness: 60,
      damping: 15,
      mass: 0.8
    } 
  }
};

const cardHover = {
  hover: { y: -10, scale: 1.03, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" },
  transition: { type: "spring", stiffness: 300 }
};
const bounce = {
  y: ["0%", "-10%", "0%"],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const campusImages = [campusImg1, campusImg2, campusImg3, campusImg4, campusImg5, campusImg6];

const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campusImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.backgroundSlideshow}>
      {campusImages.map((image, index) => (
        <motion.div
          key={image}
          className={styles.slideImage}
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const Marquee = ({ images, direction = 'left' }) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
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
            <img src={imageSrc} alt={`Campus Life ${i + 1}`} className={styles.marqueeImage} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();
  const heroTitle = "Anish Jadhav Memorial Foundation";
  const titleWords = heroTitle.split(" ");
  const marqueeRow1 = campusImages.slice(0, 3);
  const marqueeRow2 = campusImages.slice(3, 6);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <BackgroundSlideshow />
        <div className={styles.heroOverlay}></div>
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
              TORCH BEARER FOR THE NEEDY
            </motion.p>

            <motion.div className={styles.heroButtonsContainer} variants={heroItem}>
              <button
                className={`${styles.fontBody} ${styles.heroButtonPrimary}`}
                onClick={() => navigate('/about')}
              >
                Learn More
              </button>
              <button
                className={`${styles.fontBody} ${styles.heroButtonSecondary}`}
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

      <motion.section
        className={`${styles.section} ${styles.missionSection}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionSlideInUp}
      >
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