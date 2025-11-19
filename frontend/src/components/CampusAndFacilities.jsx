import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaBuilding, FaChalkboardTeacher, FaUtensils, FaDumbbell, 
  FaHeartbeat, FaWifi, FaBookOpen,FaLaptop, FaSolarPanel
} from 'react-icons/fa';
import styles from './CampusAndFacilities.module.css';
import { trackSectionView, trackFacilityInteraction } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

import campusVideo from '../assets/Anish Jadhav Memorial Foundation Skilling Institue.mp4'; 

 
import independenceDayVideo from '../assets/Independence Day Celebrations 2024.mp4';
import womansDayImage from '../assets/womans-Day.jpg';
import healthcareCampVideo from '../assets/Health Camp 30 July 24.mp4';
import infosysVisitVideo from '../assets/Infosys Visit  video 1.mp4';
import exercisePhoto from '../assets/Excercise 5.jpg';
 import hackathonsPhoto from '../assets/Programming Hackathon.jpeg';
import sisterLucyVideo from '../assets/Visit Sister Lucy Founder Maher.mp4';
import mitStudentsVideo from '../assets/VID_20240125_124807798.mp4';


const MotionDiv = motion.div;
const MotionSection = motion.section;

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
const cardSlideIn = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 50,
      damping: 18,
      mass: 1.2,
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

// 🌟 Naya 'Activity Row' component
const ActivityRow = ({ title, description, mediaType, mediaSrc, isReversed }) => {
  return (
    <motion.div
      className={`${styles.activityRow} ${isReversed ? styles.reversed : ''}`}
      variants={cardSlideIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={styles.activityMediaContainer}>
        {mediaType === 'video' ? (
          <video
            className={styles.activityMedia}
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={mediaSrc}
            alt={title}
            className={styles.activityMedia}
          />
        )}
      </div>
      <div className={styles.activityContentContainer}>
        <h3 className={styles.activityTitle}>{title}</h3>
        <p className={styles.activityDescription}>{description}</p>
      </div>
    </motion.div>
  );
};


function CampusAndFacilities() {
  usePageAnalytics('Campus & Facilities');
  useScrollAnalytics('Campus & Facilities');
  
  const facilities = [
    { icon: <FaChalkboardTeacher />, title: "Training & Conference", description: "8 state-of-the-art training rooms, plus a mini auditorium and conference hall for events." },
    { icon: <FaBuilding />, title: "Student Accommodation", description: "Comfortable and secure dormitories for 150 students and accommodation for 10 instructors." },
    { icon: <FaUtensils />, title: "Kitchen & Dining", description: "A fully functional kitchen and a spacious dining hall serving nutritious meals." },
    { icon: <FaBookOpen />, title: "Admin & Learning", description: "Includes reception, administrative office, staff room, and a well-stocked library." },
    { icon: <FaSolarPanel />, title: "Eco-Friendly Campus", description: "Sustainable features like STP, Solar Power, Rainwater Harvesting, and energy-efficient windows." },
    { icon: <FaLaptop />, title: "Digital Access", description: "Provision of laptops, high-speed internet, mentorship, English classes, and mental health counselling." },
    { icon: <FaDumbbell />, title: "Sports & Recreation", description: "A large playground for outdoor activities and promoting a healthy, active lifestyle." },
  ];
  
  // 🌟 Naya data array
  const eventsAndActivitiesData = [
    {
      title: "Independence Day Celebration",
      description: "Honoring the nation's spirit with flag hoisting, cultural programs, and patriotic fervor displayed by our students and staff.",
      mediaType: 'video',
      mediaSrc: independenceDayVideo
    },
    {
      title: "Infosys Campus Visit",
      description: "Our students gained invaluable industry exposure during an insightful visit to the Infosys campus, interacting with professionals.",
      mediaType: 'video',
      mediaSrc: infosysVisitVideo
    },
    {
      title: "Meetup with MIT USA Students",
      description: "A collaborative session where our students exchanged ideas, culture, and technical knowledge with peers from MIT, USA.",
      mediaType: 'video',
      mediaSrc: mitStudentsVideo
    },
    {
      title: "Women's Day",
      description: "Celebrating the strength and achievements of women within our community and beyond with special workshops and talks.",
      mediaType: 'images',
      mediaSrc: womansDayImage
    },
    {
      title: "Community Healthcare Camp",
      description: "Our commitment to wellness in action. A free healthcare camp providing essential check-ups and medical advice.",
      mediaType: 'video',
      mediaSrc: healthcareCampVideo
    },
    {
      title: "Visit from Sister Lucy",
      description: "A blessed and inspiring day as students and staff interact with Sister Lucy, sharing moments of joy and wisdom.",
      mediaType: 'video',
      mediaSrc: sisterLucyVideo
    },
    {
      title: "Daily Exercise & Wellness",
      description: "Physical well-being is core to our philosophy. Students engaging in daily exercise routines to stay fit and focused.",
      mediaType: 'photo',
      mediaSrc: exercisePhoto
    },
    {
      title: "Intensive Hackathons",
      description: "Fueling innovation and teamwork. Students deep in concentration during one of our weekend-long hackathons.",
      mediaType: 'photo',
      mediaSrc: hackathonsPhoto
    },
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
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      <MotionSection 
        className={`${styles.section} ${styles.relativePosition} ${styles.lightBg}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('Events & Activities', 'Campus & Facilities')}
      >
        <div className={`${styles.container} ${styles.textCenter} ${styles.contentAboveBackground}`}>
          <MotionDiv variants={fadeInUp}>
            <h2 className={styles.sectionHeading}>
              Events & Activities
            </h2>
            <div className={styles.accentBar}></div>
            <p className={styles.sectionSubtitle}>
              Learning beyond classrooms. We focus on holistic development through events, sports, and community activities.
            </p>
          </MotionDiv>

          <MotionDiv 
            className={styles.activityGrid}
            variants={cardStaggerContainer}
          >
            {eventsAndActivitiesData.map((activity, index) => (
              <ActivityRow 
                key={index} 
                title={activity.title}
                description={activity.description}
                mediaType={activity.mediaType}
                mediaSrc={activity.mediaSrc}
                isReversed={index % 2 !== 0}
              />
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

    </MotionDiv>
  );
}

export default CampusAndFacilities;