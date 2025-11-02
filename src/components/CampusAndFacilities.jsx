import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
// Icons
import { 
  FaHome, FaBook, FaLaptop, FaUsers, FaUtensils, FaDumbbell, 
  FaBuilding, FaChalkboardTeacher, FaNetworkWired, FaBookOpen, 
  FaHeartbeat, FaWifi 
} from 'react-icons/fa';
// CSS Module ko import karein
import styles from './CampusAndFacilities.module.css';

// Use motion components
const MotionDiv = motion.div;
const MotionSection = motion.section;

// === Animation Variants (No change) ===
const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } } 
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.3 } }
};
// === End Animation Variants ===

// Helper component for Facility Icons
const FacilityIcon = ({ icon }) => (
    <div className={styles.facilityIconWrapper}>
        <span className={styles.facilityIcon}>{icon}</span>
    </div>
);

// Helper component for Gallery Items
const GalleryItem = ({ item, index }) => (
  <MotionDiv 
    key={index} 
    className={styles.galleryItem}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 20px rgba(0,0,0,0.5), inset 0 0 15px rgba(255,255,255,0.05)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
    }}
    // Inline styles ko waise hi rakhein
    style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
  >
    <div className={styles.galleryIcon}>{item.icon}</div>
    <h3 className={`${styles.fontBody} ${styles.galleryText}`}>{item.text}</h3>
  </MotionDiv>
);


function CampusAndFacilities() {

  // --- Data (No change) ---
  const galleryItems = [
    { icon: <FaHome />, text: "Campus Overview" },
    { icon: <FaBook />, text: "Classroom Learning" },
    { icon: <FaLaptop />, text: "Computer Lab" },
    { icon: <FaUsers />, text: "Student Collaboration" },
    { icon: <FaUtensils />, text: "Dining Hall" },
    { icon: <FaDumbbell />, text: "Recreation Area" },
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
        style={{ backgroundImage: 'linear-gradient(180deg, #1f1f1f 0%, #2b2b2b 100%)' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      
      {/* ===== SECTION 1: CAMPUS GALLERY ===== */}
      <MotionSection 
        className={styles.section}
        variants={containerVariants} 
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          
          <MotionDiv variants={itemVariants}>
            <h1 className={`${styles.fontHeading} ${styles.pageHeading}`}>
              Campus & Facilities
            </h1>
            <div className={styles.accentBar}></div>
            <p className={`${styles.fontBody} ${styles.pageSubtitle}`}>
              A comprehensive residential campus designed to provide students with everything they need to focus 
              on learning, growing, and building their future.
            </p>
          </MotionDiv>

          <MotionDiv variants={itemVariants}>
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>
              Campus Gallery
            </h2>
            <div className={styles.accentBarMedium}></div>
          </MotionDiv>

          {/* GALLERY GRID */}
          <MotionDiv variants={containerVariants} className={styles.galleryGrid}>
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} item={item} index={index} />
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ===== SECTION 2: WORLD-CLASS FACILITIES ===== */}
      <MotionSection 
        className={styles.section}
        variants={containerVariants}
      >
        <div className={`${styles.container} ${styles.textCenter}`}>
          <MotionDiv variants={itemVariants}>
            <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>
              World-Class Facilities
            </h2>
            <div className={styles.accentBar}></div>
            <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
              Every aspect of our campus is designed to support student success, from academics to wellness.
            </p>
          </MotionDiv>

          {/* FACILITIES GRID */}
          <MotionDiv variants={containerVariants} className={styles.facilitiesGrid}>
            {facilities.map((facility, index) => (
              <MotionDiv 
                key={index} 
                className={styles.facilityCard}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
                style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
              >
                <FacilityIcon icon={facility.icon} />
                <div>
                  <h3 className={`${styles.fontHeading} ${styles.facilityTitle}`}>{facility.title}</h3>
                  <p className={`${styles.fontBody} ${styles.facilityDescription}`}>{facility.description}</p>
                  <ul className={styles.facilityList}>
                    {facility.items.map((item, i) => (
                      <li key={i} className={`${styles.fontBody} ${styles.facilityListItem}`}>
                        <span className={styles.facilityListBullet}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ===== SECTION 3: LIVING & LEARNING ===== */}
      <MotionSection variants={containerVariants}>
        {/* Banner */}
        <div 
          className={styles.banner}
          style={{ backgroundImage: 'linear-gradient(135deg, #656b75 0%, #4a5057 100%)' }}
        >
          <div className={styles.container}>
            <MotionDiv variants={itemVariants}>
              <h2 className={`${styles.fontHeading} ${styles.bannerTitle}`}>Living & Learning Together</h2>
              <p className={`${styles.fontBody} ${styles.bannerText}`}>
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
                <MotionDiv key={index} variants={itemVariants}>
                  <h3 className={`${styles.fontHeading} ${styles.statCount}`}>{stat.count}</h3>
                  <p className={`${styles.fontBody} ${styles.statText}`}>{stat.text}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        {/* Campus Life Section */}
        <div className={styles.campusLifeSection}>
          <div className={`${styles.container} ${styles.textCenter}`}>
            <MotionDiv variants={itemVariants}>
              <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>
                Campus Life
              </h2>
              <div className={styles.accentBarMedium}></div>
            </MotionDiv>
            
            <div className={styles.campusLifeGrid}>
              {/* Daily Schedule Card */}
              <MotionDiv 
                className={styles.campusLifeCard}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
                style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
              >
                <h3 className={`${styles.fontHeading} ${styles.cardTitle}`}>Daily Schedule</h3>
                <div className={styles.scheduleList}>
                  {dailySchedule.map((item, index) => (
                    <div key={index} className={styles.scheduleItem}>
                      <span className={`${styles.fontBody} ${styles.scheduleTime}`}>{item.time}</span>
                      <span className={`${styles.fontBody} ${styles.scheduleActivity}`}>{item.activity}</span>
                    </div>
                  ))}
                </div>
              </MotionDiv>

              {/* Student Support Card */}
              <MotionDiv 
                className={styles.campusLifeCard}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
                style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
              >
                <h3 className={`${styles.fontHeading} ${styles.cardTitle}`}>Student Support</h3>
                <div className={styles.supportList}>
                  {studentSupport.map((item, index) => (
                    <div key={index}>
                      <h4 className={`${styles.fontBody} ${styles.supportItemTitle}`}>{item.title}</h4>
                      <p className={`${styles.fontBody} ${styles.supportItemDesc}`}>{item.description}</p>
                    </div>
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