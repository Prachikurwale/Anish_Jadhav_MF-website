import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaBook, FaLaptop, FaUsers, FaUtensils, FaDumbbell, 
  FaBuilding, FaChalkboardTeacher, FaBookOpen, 
  FaHeartbeat, FaWifi 
} from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './CampusAndFacilities.module.css';
import { trackSectionView, trackFacilityInteraction, trackUserEngagement } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

import campusImg1 from '../assets/campus1.jpg';
import campusImg2 from '../assets/campus2.jpg';
import campusImg3 from '../assets/campus7.png';
import campusImg4 from '../assets/campus6.jpg';
import campusImg5 from '../assets/campus10.jpeg';
import campusImg6 from '../assets/campus12.jpeg';

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
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};
const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
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
const sectionSlideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
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

const BubbleBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-50">
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

const allCampusImages = [campusImg1, campusImg2, campusImg3, campusImg4, campusImg5, campusImg6];

const Marquee = ({ images, direction = 'left' }) => {
  const marqueeVariants = {
    animate: {
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


function CampusAndFacilities() {
  usePageAnalytics('Campus & Facilities');
  useScrollAnalytics('Campus & Facilities');
  const navigate = useNavigate();
  
  const marqueeRow1 = allCampusImages.slice(0, 3);
  const marqueeRow2 = allCampusImages.slice(3, 6);

  const facilities = [
    { icon: <FaBuilding />, title: "Residential Facilities", description: "Comfortable, safe dormitories with modern amenities. Students live on campus in a supportive community environment.", items: ["Shared and private rooms", "Climate-controlled spaces", "24/7 security", "Housekeeping services"] },
    { icon: <FaChalkboardTeacher />, title: "Modern Classrooms", description: "State-of-the-art learning spaces equipped with the latest technology and designed for collaborative learning.", items: ["Smart boards", "Comfortable seating", "Natural lighting", "Audio-visual equipment"] },
    { icon: <FaUtensils />, title: "Dining Hall", description: "Nutritious, balanced meals served three times daily in a spacious dining facility that accommodates all students.", items: ["Healthy meals", "Vegetarian options", "Clean environment", "Community dining"] },
    { icon: <FaDumbbell />, title: "Recreation & Sports", description: "Sports facilities and recreational areas for physical fitness and leisure activities to maintain work-life balance.", items: ["Indoor games", "Outdoor sports", "Fitness equipment", "Recreation room"] },
    { icon: <FaHeartbeat />, title: "Health & Wellness", description: "On-campus health facilities and counseling services to ensure student well-being and mental health support.", items: ["Medical care", "Counseling services", "Wellness programs", "First-aid"] },
    { icon: <FaWifi />, title: "High-Speed Internet", description: "Campus-wide high-speed WiFi connectivity enabling students to access learning resources anytime, anywhere.", items: ["24/7 connectivity", "Multiple access points", "Secure network", "Technical support"] },
  ];
  const dailySchedule = [
    { time: "7:00 AM", activity: "Breakfast & Morning Routine" },
    { time: "9:00 AM", activity: "Classes & Workshops" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM", activity: "Practical Sessions & Projects" },
    { time: "6:00 PM", activity: "Sports & Recreation" },
    { time: "7:30 PM", activity: "Dinner" },
    { time: "8:30 PM", activity: "Study Time & Personal Projects" },
  ];
  const studentSupport = [
    { title: "Academic Mentorship", description: "Personal guidance from experienced instructors" },
    { title: "Career Counseling", description: "Help with career planning and job placement" },
    { title: "Peer Learning Groups", description: "Collaborative study and project teams" },
    { title: "Mental Health Support", description: "Professional counseling services available" },
    { title: "Technical Workshops", description: "Regular skill-building sessions" },
    { title: "Community Events", description: "Social gatherings and celebrations" },
  ];

  return (
    <MotionDiv 
        className={styles.pageContainer} 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      
      <section className={`${styles.section} ${styles.campusSection}`}>
        <div className={`${styles.decoCircle} ${styles.decoCircle3}`}></div>
        <div className={`${styles.decoLine} ${styles.decoLine3}`}></div>
        <div className={styles.sectionContainer} style={{ maxWidth: '100%', padding: 0 }}>
          <div style={{ padding: '0 1.5rem', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>A Glimpse of Campus Life</h2>
            <div className={styles.accentBar}></div>
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
          </motion.button>
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

      <MotionSection 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('Living & Learning', 'Campus & Facilities')}
      >
        <div className={styles.banner}>
          <BubbleBackground /> 
          <div className={styles.container}>
            <MotionDiv variants={fadeInUp}>
              <h2 className={styles.bannerTitle}>Living & Learning Together</h2>
              <p className={styles.bannerText}>
                Our residential model creates a tight-knit community where students support each 
                other, learn together, and build lifelong friendships. The campus becomes home, 
                and fellow students become family.
              </p>
            </MotionDiv>
            
            <div className={styles.statsGrid}>
              {[
                { count: "100%", text: "Free for Students" },
                { count: "24/7", text: "Campus Support" },
                { count: "All-Inclusive", text: "Meals & Amenities" }
              ].map((stat, index) => (
                <MotionDiv 
                  key={index} 
                  variants={sectionSlideInUp}
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => trackUserEngagement('stat_view', { stat_type: stat.count })}
                  onHoverStart={() => trackUserEngagement('stat_hover', { stat_type: stat.count })}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: 0.5 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <CountingStats target={stat.count} text={stat.text} />
                  </motion.div>
                  
                  <motion.p 
                    className={styles.statText}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.text}
                  </motion.p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.campusLifeSection}>
          <div className={`${styles.container} ${styles.textCenter}`}>
            <MotionDiv 
              variants={fadeInUp}
              onViewportEnter={() => trackSectionView('Campus Life', 'Campus & Facilities')}
            >
              <h2 className={styles.sectionHeading}>
                Campus Life
              </h2>
              <div className={styles.accentBarMedium}></div>
            </MotionDiv>
            
            <div className={styles.campusLifeGrid}>
              <MotionDiv 
                className={styles.campusLifeCard}
                variants={slideInLeft}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <h3 className={styles.cardTitle}>Daily Schedule</h3>
                <div className={styles.scheduleList}>
                  {dailySchedule.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className={styles.scheduleItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className={styles.scheduleTime}>{item.time}</span>
                      <span className={styles.scheduleActivity}>{item.activity}</span>
                    </motion.div>
                  ))}
                </div>
              </MotionDiv>

              <MotionDiv 
                className={styles.campusLifeCard}
                variants={slideInRight}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <h3 className={styles.cardTitle}>Student Support</h3>
                <div className={styles.supportList}>
                  {studentSupport.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className={styles.supportItemTitle}>{item.title}</h4>
                      <p className={styles.supportItemDesc}>{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>

    </MotionDiv>
  );
}

export default CampusAndFacilities;