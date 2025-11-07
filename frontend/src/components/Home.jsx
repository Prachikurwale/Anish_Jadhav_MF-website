import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaHandsHelping } from 'react-icons/fa'; 
import { ChevronDown, ArrowRight, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

import campusImg4 from '../assets/campus4.jpg';
import FoundationImage from '../assets/Foundation.png'; 

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

const MotionDiv = motion.div;
const MotionSection = motion.section;

const BubbleBackground = () => (
  <div className={styles.bubbleContainer} aria-hidden="true">
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
  </div>
);

const VisionBubbleBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes float {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
            }
            .bubble {
                position: absolute;
                bottom: -150px;
                width: 40px;
                height: 40px;
                background-color: rgba(209, 163, 58, 0.3); 
                border-radius: 50%;
                animation: float 25s infinite linear;
            }
            .bubble:nth-child(1) { left: 10%; animation-duration: 25s; width: 60px; height: 60px; opacity: 0.4; }
            .bubble:nth-child(2) { left: 40%; animation-duration: 35s; width: 80px; height: 80px; opacity: 0.3; }
            .bubble:nth-child(3) { left: 70%; animation-duration: 30s; opacity: 0.5; }
            .bubble:nth-child(4) { left: 20%; animation-duration: 40s; width: 50px; height: 50px; opacity: 0.2; }
            .bubble:nth-child(5) { left: 85%; animation-duration: 20s; opacity: 0.35; }
        `}} />
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
    </div>
);

const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } } 
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const heartBeat = {
  beat: {
    scale: [1, 1.2, 1, 1.1, 1], 
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.7, 1]
    }
  }
};

const VisionAndLegacySection = () => {
    
    const backgroundShapeAnimate = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2.5, ease: "easeOut", delay: 0.1 } } 
    };

    const boxAnimate = {
      hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
      visible: { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0, 
          transition: { 
              type: "spring", 
              stiffness: 40,
              damping: 18,
              delay: 0.5 
          } 
      }
  };

    return (
        <MotionSection 
            className={styles.visionLegacySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <MotionDiv 
                className={styles.visionBackgroundShape}
                variants={backgroundShapeAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            />
            
            <VisionBubbleBackground />

            <div className={styles.visionLegacyGrid}>
                
                <MotionDiv variants={itemVariants} className={styles.visionContentContainer}>
                    <h2 className={styles.visionHeading}>
                        Our Vision in Partnership
                    </h2>

                    <p className={styles.visionParagraph}>
                        In partnership with <strong>NavGurukul</strong>, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth. The partnership ensures that students receive not just education, but a complete transformation.
                    </p>
                    <p className={styles.visionParagraph}>
                        This includes residential facilities, nutritious meals, world-class instruction, and career placement support. Today, the foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in <strong>programming, business, education, and second-chance opportunities</strong>.
                    </p>

                    <div className={styles.visionPartnershipCTA}>
                        <Star className={styles.partnershipIcon} />
                        <p>Join us in carrying forward Anish's dreams and empowering the next generation of leaders.</p>
                    </div>
                </MotionDiv>

                <MotionDiv variants={itemVariants} className={styles.visionImageContainerRight}> 
                    
                    <div className={styles.visionImageWrapper}>
                        <img src={FoundationImage} alt="Foundation Vision" className={styles.visionImage} />
                    </div>

                    <MotionDiv className={styles.visionLegacyBox} variants={boxAnimate}>
                        <motion.div variants={heartBeat} animate="beat">
                            <Heart className={styles.legacyHeartIcon} />
                        </motion.div>
                        <h3 className={styles.legacyBoxTitle}>His Legacy Lives On</h3>
                        <p className={styles.legacyBoxText}>
                            Every student we educate, every life we transform, every dream we help realize is a tribute to Anish Jadhav. His spirit lives on in the determination of our students.
                        </p>
                    </MotionDiv>

                </MotionDiv>

            </div>
        </MotionSection>
    );
};


function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      
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
      
      <VisionAndLegacySection />
      
    </div>
  );
}

export default Home;