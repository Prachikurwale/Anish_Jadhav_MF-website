import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, FaHeart, FaBook, FaUtensils, 
  FaShieldAlt, FaHandshake, FaLightbulb,
  FaBullhorn, FaLeaf
} from 'react-icons/fa';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './StudentLedCampus.module.css';
// import { trackSectionView } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

const MotionDiv = motion.div;
const MotionSection = motion.section;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
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

// Council Card Component
const CouncilCard = ({ council }) => {
  return (
    <MotionDiv 
      className={styles.councilCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <div className={styles.councilHeader}>
        <div className={styles.councilIcon}>
          <council.icon size={32} />
        </div>
        <div className={styles.councilTitle}>
          <h3>{council.name}</h3>
          <p className={styles.councilSubtitle}>{council.subtitle}</p>
        </div>
      </div>

      <div className={styles.councilOverview}>
        <h4>Role Overview</h4>
        <p>{council.overview}</p>
      </div>

      <div className={styles.responsibilitiesSection}>
        <h4>Main Responsibilities</h4>
        <ul className={styles.responsibilitiesList}>
          {council.responsibilities.map((responsibility, idx) => (
            <li key={idx} className={styles.responsibilityItem}>
              <div className={styles.responsibilityHeader}>
                <strong>{responsibility.title}</strong>
              </div>
              <p>{responsibility.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </MotionDiv>
  );
};

// Main Component
const StudentLedCampus = () => {
  const navigate = useNavigate();
  
  // Use analytics hooks
  usePageAnalytics('Student Led Campus');
  useScrollAnalytics();

  // Council data
  const councils = [
    {
      name: "DISCO - Discipline Coordinator",
      subtitle: "Campus Discipline & Student Support",
      icon: FaShieldAlt,
      overview: "The Discipline Coordinator maintains a positive and respectful campus environment, supports council members, listens to student concerns, and acts as a bridge between students and coordinators to ensure issues are handled fairly and on time.",
      responsibilities: [
        {
          title: "Maintaining Campus Discipline",
          description: "Ensure that every student follows the campus rules and regulations with respect and sincerity."
        },
        {
          title: "Creating a Positive Environment",
          description: "Promote a friendly and cooperative atmosphere where every student feels safe, valued, and respected."
        },
        {
          title: "Supporting the Council",
          description: "Assist all council members in maintaining discipline and organizing campus activities effectively."
        }
      ]
    },
    {
      name: "Academic Council",
      subtitle: "Learning & Educational Excellence",
      icon: FaBook,
      overview: "The Academic Council ensures high-quality education and learning experiences for all students. We coordinate study schedules, organize academic activities, and provide academic support to help every student achieve their educational goals.",
      responsibilities: [
        {
          title: "Study Schedule Management",
          description: "Organize and maintain effective study timetables and academic calendars for all programs."
        },
        {
          title: "Academic Support",
          description: "Provide tutoring, study groups, and academic assistance to students who need extra help."
        },
        {
          title: "Educational Activities",
          description: "Organize workshops, seminars, and educational events to enhance learning experiences."
        }
      ]
    },
    {
      name: "Kitchen Council",
      subtitle: "Food Management & Nutrition",
      icon: FaUtensils,
      overview: "The Kitchen Council manages all aspects of campus dining, ensuring nutritious, hygienic, and satisfying meals for all students. We plan menus, manage food resources, and maintain kitchen operations efficiently.",
      responsibilities: [
        {
          title: "Menu Planning",
          description: "Design weekly menus that are nutritious, diverse, and cater to dietary preferences and requirements."
        },
        {
          title: "Food Quality Control",
          description: "Ensure all meals are prepared with high hygiene standards and quality ingredients."
        },
        {
          title: "Resource Management",
          description: "Efficiently manage food supplies, inventory, and kitchen equipment to minimize waste."
        }
      ]
    },
    {
      name: "Health Council",
      subtitle: "Wellness & Medical Support",
      icon: FaHeart,
      overview: "The Health Council focuses on maintaining the physical and mental well-being of all students. We coordinate health checkups, wellness programs, and provide support during medical emergencies.",
      responsibilities: [
        {
          title: "Health Monitoring",
          description: "Organize regular health checkups and maintain health records for all students."
        },
        {
          title: "Mental Wellness",
          description: "Provide mental health support, counseling sessions, and stress management programs."
        },
        {
          title: "Emergency Response",
          description: "Coordinate medical emergencies and ensure quick access to healthcare facilities."
        }
      ]
    },
    {
      name: "Cultural Council",
      subtitle: "Events & Campus Culture",
      icon: FaBullhorn,
      overview: "The Cultural Council brings life to the campus through events, celebrations, and cultural activities. We organize festivals, competitions, and entertainment programs that build community spirit.",
      responsibilities: [
        {
          title: "Event Management",
          description: "Plan and execute campus events, festivals, and cultural celebrations throughout the year."
        },
        {
          title: "Talent Development",
          description: "Identify and nurture student talents through competitions and performance opportunities."
        },
        {
          title: "Community Building",
          description: "Create activities that bring students together and build lasting friendships and connections."
        }
      ]
    },
    {
      name: "Environment Council",
      subtitle: "Sustainability & Campus Care",
      icon: FaLeaf,
      overview: "The Environment Council promotes sustainability and environmental consciousness on campus. We manage waste reduction, green initiatives, and maintain the campus environment.",
      responsibilities: [
        {
          title: "Sustainability Initiatives",
          description: "Implement eco-friendly practices and promote environmental awareness among students."
        },
        {
          title: "Campus Cleanliness",
          description: "Maintain clean and green campus spaces through organized cleaning and gardening activities."
        },
        {
          title: "Waste Management",
          description: "Organize proper waste segregation, recycling programs, and waste reduction initiatives."
        }
      ]
    }
  ];

  return (
    <div className={styles.pageContainer}>

      {/* Philosophy Section */}
      <MotionSection 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.container}>
          <MotionDiv variants={fadeInUp} className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
            <p className={styles.sectionSubtitle}>
              We believe in empowering students to take ownership of their learning environment
            </p>
          </MotionDiv>

          <div className={styles.philosophyGrid}>
            <MotionDiv variants={slideInLeft} className={styles.philosophyCard}>
              <FaUsers className={styles.philosophyIcon} />
              <h3>Student Leadership</h3>
              <p>Every aspect of campus life is managed by students, developing real-world leadership skills and responsibility.</p>
            </MotionDiv>
            
            <MotionDiv variants={fadeInUp} className={styles.philosophyCard}>
              <FaHandshake className={styles.philosophyIcon} />
              <h3>Collaborative Environment</h3>
              <p>Councils work together to ensure all students have a voice in shaping their educational experience.</p>
            </MotionDiv>
            
            <MotionDiv variants={slideInRight} className={styles.philosophyCard}>
              <FaLightbulb className={styles.philosophyIcon} />
              <h3>Holistic Development</h3>
              <p>Beyond academics, we focus on personal growth, life skills, and preparing students for professional success.</p>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Councils Section */}
      <MotionSection 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.container}>
          <MotionDiv variants={fadeInUp} className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Student Councils</h2>
            <p className={styles.sectionSubtitle}>
              Meet the councils that make our campus a thriving, supportive community
            </p>
          </MotionDiv>

          <div className={styles.councilsGrid}>
            {councils.map((council, index) => (
              <CouncilCard key={index} council={council} index={index} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Call to Action */}
      <MotionSection 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.container}>
          <MotionDiv 
            variants={fadeInUp}
            className={styles.ctaSection}
          >
            <h3 className={styles.ctaTitle}>Join Our Student Leadership</h3>
            <p className={styles.ctaText}>
              Become part of our student councils and help shape the campus experience for everyone. 
              Develop leadership skills while making a real impact.
            </p>
            <div className={styles.ctaButtons}>
              <motion.button 
                className={styles.ctaPrimary}
                onClick={() => navigate('/programs')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.button>
              <motion.button 
                className={styles.ctaSecondary}
                onClick={() => navigate('/involved')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  );
};

export default StudentLedCampus;
