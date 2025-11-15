


import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaBuilding, FaChalkboardTeacher, FaUtensils, FaDumbbell, 
  FaHeartbeat, FaWifi 
} from 'react-icons/fa';
import styles from './CampusAndFacilities.module.css';
import { trackSectionView, trackFacilityInteraction } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

import campusVideo from '../assets/Anish Jadhav Memorial Foundation Skilling Institue.mp4'; 

const MotionDiv = motion.div;
const MotionSection = motion.section;

const CountingStats = ({ target, text }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();
    
    let numericTarget = 0;
    let suffix = text;
    
    if (target === "100%") {
        numericTarget = 100;
        suffix = "%";
    } else {
        numericTarget = null;
    }

    useEffect(() => {
        if (isInView && numericTarget !== null) {
            controls.start({
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
            });

            const duration = 2000;
            const startTime = performance.now();

            const step = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(1, elapsedTime / duration);
                const currentValue = Math.floor(progress * numericTarget);

                setCount(currentValue);

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        } else if (isInView && numericTarget === null) {
            controls.start({ opacity: 1, transition: { duration: 0.8 } });
        }
    }, [isInView, numericTarget, controls]);

    const displayValue = numericTarget !== null ? `${count}${suffix}` : target;

    return (
        <motion.h3 
            ref={ref}
            className={styles.statCount}
            initial={{ opacity: 0 }}
            animate={controls}
        >
            {displayValue}
        </motion.h3>
    );
};

const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } } 
};
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};
const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
const facilityCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      duration: 0.6 
    } 
  }
};

const FlowingDotsBackground = () => (
    <div className={`${styles.backgroundAnimation} ${styles.dotsBackground}`}>
        <div className={styles.dotFlow}></div>
        <div className={styles.dotFlow}></div>
        <div className={styles.dotFlow}></div>
    </div>
);

const FacilityIcon = ({ icon }) => (
    <motion.div 
        className={styles.facilityIconWrapper}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.1 
        }}
        viewport={{ once: true }}
        whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
        }}
    >
        <motion.span 
            className={styles.facilityIcon}
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
        >
            {icon}
        </motion.span>
    </motion.div>
);

function CampusAndFacilities() {
  usePageAnalytics('Campus & Facilities');
  useScrollAnalytics('Campus & Facilities');
  
  const facilities = [
    { icon: <FaBuilding />, title: "Residential Facilities", description: "Comfortable, safe dormitories with modern amenities. Students live on campus in a supportive community environment.", items: ["Shared and private rooms", "Climate-controlled spaces", "24/7 security", "Housekeeping services"] },
    { icon: <FaChalkboardTeacher />, title: "Modern Classrooms", description: "State-of-the-art learning spaces equipped with the latest technology and designed for collaborative learning.", items: ["Smart boards", "Comfortable seating", "Natural lighting", "Audio-visual equipment"] },
    { icon: <FaUtensils />, title: "Dining Hall", description: "Nutritious, balanced meals served three times daily in a spacious dining facility that accommodates all students.", items: ["Healthy meals", "Vegetarian options", "Clean environment", "Community dining"] },
    { icon: <FaDumbbell />, title: "Recreation & Sports", description: "Sports facilities and recreational areas for physical fitness and leisure activities to maintain work-life balance.", items: ["Indoor games", "Outdoor sports", "Fitness equipment", "Recreation room"] },
    { icon: <FaHeartbeat />, title: "Health & Wellness", description: "On-campus health facilities and counseling services to ensure student well-being and mental health support.", items: ["Medical care", "Counseling services", "Wellness programs", "First-aid"] },
    { icon: <FaWifi />, title: "High-Speed Internet", description: "Campus-wide high-speed WiFi connectivity enabling students to access learning resources anytime, anywhere.", items: ["24/7 connectivity", "Multiple access points", "Secure network", "Technical support"] },
  ];

  return (
    <MotionDiv 
        className={styles.pageContainer} 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      
      <section className={`${styles.campusSection}`}>
        <video 
          className={styles.videoElement}
          src={campusVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}></div>

        <div className={`${styles.container} ${styles.campusSectionContainer}`}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>A Glimpse of Campus Life</h2>
          <div className={styles.accentBar}></div>
          <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
            A nurturing residential environment where students learn, grow, and thrive together.
          </p>
        </div>
      </section>

      <MotionSection 
        className={`${styles.section} ${styles.relativePosition}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('World-Class Facilities', 'Campus & Facilities')}
      >
        <FlowingDotsBackground /> 
        
        <div className={`${styles.container} ${styles.textCenter} ${styles.contentAboveBackground}`}>
          <MotionDiv variants={fadeInUp}>
            <h2 className={styles.sectionHeading}>
              Facilities
            </h2>
            <div className={styles.accentBar}></div>
            <p className={styles.sectionSubtitle}>
              Every aspect of our campus is designed to support student success, from academics to wellness.
            </p>
          </MotionDiv>

          <MotionDiv variants={cardStaggerContainer} className={styles.facilitiesGrid}>
            {facilities.map((facility, index) => (
              <MotionDiv 
                key={index} 
                className={styles.facilityCard}
                variants={facilityCardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)",
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                onViewportEnter={() => trackFacilityInteraction(facility.title, 'view')}
                onHoverStart={() => trackFacilityInteraction(facility.title, 'hover')}
                onClick={() => trackFacilityInteraction(facility.title, 'click')}
              >
                <FacilityIcon icon={facility.icon} />
                <div>
                  <motion.h3 
                    className={styles.facilityTitle}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {facility.title}
                  </motion.h3>
                  <motion.p 
                    className={styles.facilityDescription}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {facility.description}
                  </motion.p>
                  <motion.ul 
                    className={styles.facilityList}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {facility.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className={styles.facilityListItem}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <span className={styles.facilityListBullet}>◆</span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

    </MotionDiv>
  );
}

export default CampusAndFacilities;