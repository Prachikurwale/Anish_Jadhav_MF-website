import React, { useEffect, useState, useRef } from 'react';
// Framer Motion
import { motion, useInView, useAnimation } from 'framer-motion';
// Icons
import { 
  FaHome, FaBook, FaLaptop, FaUsers, FaUtensils, FaDumbbell, 
  FaBuilding, FaChalkboardTeacher, FaNetworkWired, FaBookOpen, 
  FaHeartbeat, FaWifi 
} from 'react-icons/fa';
// CSS Module ko import karein
import styles from './CampusAndFacilities.module.css';
// Analytics
import { trackSectionView, trackFacilityInteraction, trackGalleryInteraction, trackUserEngagement } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

// === Image Imports ===
import campusOverviewImg from '../assets/Foundation.png';
import classroomLearningImg from '../assets/image.jpeg';
import computerLabImg from '../assets/image3.jpeg';
import studentCollaborationImg from '../assets/image2.jpeg';
import diningHallImg from '../assets/image3.jpeg';
import recreationAreaImg from '../assets/image2.jpeg';

// Use motion components
const MotionDiv = motion.div;
const MotionSection = motion.section;

// === CountingStats Component (Kept as is) ===
const CountingStats = ({ target, text }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();
    
    // Determine the numeric value and suffix
    let numericTarget = 0;
    let suffix = text;
    
    if (target === "100%") {
        numericTarget = 100;
        suffix = "%";
    } else {
        numericTarget = null;
    }

    // Effect for the counting animation
    useEffect(() => {
        if (isInView && numericTarget !== null) {
            controls.start({
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
            });

            const duration = 2000; // 2 seconds
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
// === END CountingStats Component ===


// === Animation Variants ===
const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } } 
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
  hidden: { 
    opacity: 0, 
    y: 50, 
    filter: 'blur(10px)' 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)', 
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
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
const galleryItemReveal = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95
  },
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
// === End Animation Variants ===

// Helper component for Facility Icons
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

// Helper component for Gallery Items (Updated with Hover Wipe Animation)
const GalleryItem = ({ item, index }) => (
  <MotionDiv 
    key={index} 
    className={styles.galleryItem}
    variants={galleryItemReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
    }}
    onViewportEnter={() => trackGalleryInteraction(item.text, 'view')}
    onHoverStart={() => trackGalleryInteraction(item.text, 'hover')}
    onClick={() => trackGalleryInteraction(item.text, 'click')}
  >
    {/* 🟢 Wipe Overlay for Initial Reveal (Video look) and Hover Cover */}
    <motion.div 
        className={styles.galleryWipeOverlay}
        initial={{ scaleY: 1 }} // Start covered 

        // 1. Initial Reveal (on page scroll/load)
        whileInView={{ 
            scaleY: 0, 
            transition: { 
                duration: 1.2, 
                ease: [0.19, 1, 0.22, 1], 
                delay: index * 0.1 
            }
        }}
        
        // 2. Hover Effect (when mouse is over the card) - Reverses the wipe
        whileHover={{
            scaleY: 1, 
            transition: {
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1],
            }
        }}
        viewport={{ once: true, amount: 0.3 }}
    />
    
    {/* Background Image Div */}
    <div 
        className={styles.galleryImage}
        style={{ backgroundImage: `url(${item.image})` }}
    />
    
    {/* Overlay Content */}
    <div className={styles.galleryContentOverlay}>
        <motion.div 
          className={styles.galleryIcon}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -10, 10, 0],
            opacity: 0, // Fade out icon when covered
            transition: { duration: 0.3 }
          }}
        >
          {item.icon}
        </motion.div>
        <motion.h3 
          className={styles.galleryText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            opacity: 0, // Fade out text when covered
            y: 30,
            transition: { duration: 0.3 }
          }}
        >
          {item.text}
        </motion.h3>
        
        {/* Text that appears over the hover wipe */}
        <motion.h4
            className={styles.galleryHoverText}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ 
                opacity: 1, 
                y: 0, 
                transition: { delay: 0.3, duration: 0.3 } 
            }}
        >
            View Details
        </motion.h4>
    </div>
  </MotionDiv>
);


function CampusAndFacilities() {
  // Analytics tracking
  usePageAnalytics('Campus & Facilities');
  useScrollAnalytics('Campus & Facilities');

  // Split the hero title into words for animation
  const heroTitle = "Campus & Facilities";
  const titleWords = heroTitle.split(" ");

  // --- Data ---
  const galleryItems = [
    { icon: <FaHome />, text: "Campus Overview", image: campusOverviewImg },
    { icon: <FaBook />, text: "Classroom Learning", image: classroomLearningImg },
    { icon: <FaLaptop />, text: "Computer Lab", image: computerLabImg },
    { icon: <FaUsers />, text: "Student Collaboration", image: studentCollaborationImg },
    { icon: <FaUtensils />, text: "Dining Hall", image: diningHallImg },
    { icon: <FaDumbbell />, text: "Recreation Area", image: recreationAreaImg },
  ];
  const facilities = [
    { icon: <FaBuilding />, title: "Residential Facilities", description: "Comfortable, safe dormitories with modern amenities. Students live on campus in a supportive community environment.", items: ["Shared and private rooms", "Climate-controlled spaces", "24/7 security", "Housekeeping services"] },
    { icon: <FaChalkboardTeacher />, title: "Modern Classrooms", description: "State-of-the-art learning spaces equipped with the latest technology and designed for collaborative learning.", items: ["Smart boards", "Comfortable seating", "Natural lighting", "Audio-visual equipment"] },
    { icon: <FaLaptop />, title: "Computer Labs", description: "Fully-equipped computer labs with high-speed internet and industry-standard software for hands-on learning.", items: ["Latest hardware", "Software licenses", "High-speed internet", "24/7 lab access"] },
    { icon: <FaBookOpen />, title: "Library & Study Spaces", description: "A comprehensive library with both physical and digital resources, plus quiet study areas for focused learning.", items: ["Extensive book collection", "Digital resources", "Study rooms", "Reading areas"] },
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
  // --- End Data ---


  return (
    <MotionDiv 
        className={styles.pageContainer} 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      
      {/* ===== SECTION 1: HERO SECTION - White Background ===== */}
      <MotionSection 
        className={styles.heroSection}
        variants={containerVariants} 
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          
          <MotionDiv variants={heroContainer}>
            <h1 className={styles.pageHeading}>
              {titleWords.map((word, index) => (
                <motion.span 
                  key={index} 
                  className={styles.heroHeadingSpan}
                  variants={heroWord}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </MotionDiv>
          
          <MotionDiv variants={itemVariants}>
            <div className={styles.accentBar}></div>
            <p className={styles.pageSubtitle}>
              A comprehensive residential campus designed to provide students with everything they need to focus 
              on learning, growing, and building their future.
            </p>
          </MotionDiv>

        </div>
      </MotionSection>

      {/* --- Section 2: CAMPUS GALLERY - Light Background Color --- */}
      <MotionSection 
        className={`${styles.section} ${styles.lightBg}`} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('Campus Gallery', 'Campus & Facilities')}
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          
          <MotionDiv variants={fadeInUp}>
            <h2 className={styles.sectionHeading}>
              Campus Gallery
            </h2>
            <div className={styles.accentBarMedium}></div>
          </MotionDiv>

          {/* GALLERY GRID */}
          <MotionDiv variants={cardStaggerContainer} className={styles.galleryGrid}>
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} item={item} index={index} />
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* --- Section 3: WORLD-CLASS FACILITIES - White Background Color --- */}
      <MotionSection 
        className={styles.section} // Default white/light background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('World-Class Facilities', 'Campus & Facilities')}
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          <MotionDiv variants={fadeInUp}>
            <h2 className={styles.sectionHeading}>
              World-Class Facilities
            </h2>
            <div className={styles.accentBar}></div>
            <p className={styles.sectionSubtitle}>
              Every aspect of our campus is designed to support student success, from academics to wellness.
            </p>
          </MotionDiv>

          {/* FACILITIES GRID */}
          <MotionDiv variants={cardStaggerContainer} className={styles.facilitiesGrid}>
            {facilities.map((facility, index) => (
              <MotionDiv 
                key={index} 
                className={styles.facilityCard}
                variants={facilityCardVariants}
                // Enhanced Hover effect
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

      {/* ===== SECTION 4: LIVING & LEARNING - Dark Primary BG Banner ===== */}
      <MotionSection 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('Living & Learning', 'Campus & Facilities')}
      >
        {/* Banner (Dark BG) */}
        <div className={styles.banner}>
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
              {/* Stat Boxes */}
              {[
                { count: "100%", text: "Free for Students" },
                { count: "24/7", text: "Campus Support" },
                { count: "All-Inclusive", text: "Meals & Amenities" }
              ].map((stat, index) => (
                <MotionDiv 
                  key={index} 
                  variants={sectionSlideInUp}
                  // Enhanced Hover effect on stat boxes
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

        {/* Campus Life Section - Light Background Color */}
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
              {/* Daily Schedule Card */}
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

              {/* Student Support Card */}
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