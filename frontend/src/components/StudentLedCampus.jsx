// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaUsers, FaHeart, FaBook, FaUtensils, 
//   FaShieldAlt, FaHandshake, FaLightbulb,
//   FaBullhorn, FaDumbbell, FaBuilding, FaGlobe,
//   FaLaptop, FaUserPlus, FaLanguage, FaBriefcase
// } from 'react-icons/fa';
// import { ArrowRight, Users, Target, Heart } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import styles from './StudentLedCampus.module.css';
// // import { trackSectionView } from '../utils/analytics';
// import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

// // Import council images
// import discoImg from '../assets/DISCO.jpeg';
// import academicImg from '../assets/T&P.jpeg';
// import kitchenImg from '../assets/KitchenC.jpeg';
// import healthImg from '../assets/HealthC.jpeg';
// import workoutImg from '../assets/WorkoutC.jpeg';
// import facilityImg from '../assets/FM.jpeg';
// import outreachImg from '../assets/Outreach.jpeg';
// import itImg from '../assets/IT.jpeg';
// import onboardingImg from '../assets/campus11.jpeg';
// import englishImg from '../assets/EnglishC.jpeg';
// import placementImg from '../assets/PlacementC.jpeg';
// import culturalImg from '../assets/CultureC.jpeg';

// const MotionDiv = motion.div;
// const MotionSection = motion.section;

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

// const slideInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

// const slideInRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1
//     }
//   }
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1,
//     transition: { 
//       type: "spring", 
//       stiffness: 100, 
//       damping: 15,
//       duration: 0.6 
//     } 
//   }
// };

// // Council Card Component
// const CouncilCard = ({ council, index }) => {
//   return (
//     <MotionDiv 
//       className={styles.councilCard}
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       whileHover={{ 
//         scale: 1.02,
//         boxShadow: "0 20px 40px rgba(18, 75, 51, 0.15)",
//         transition: { duration: 0.3 }
//       }}
//     >
//       {/* Council Image Section */}
//       <div className={styles.councilImageSection}>
//         <img 
//           src={council.image} 
//           alt={`${council.name} representative`} 
//           className={styles.councilImage} 
//         />
//         <div className={styles.councilImageOverlay}>
//           <council.icon size={28} className={styles.overlayIcon} />
//         </div>
//       </div>

//       {/* Council Content Section */}
//       <div className={styles.councilContentSection}>
//         <div className={styles.councilHeader}>
//           <div className={styles.councilNumber}>
//             {(index + 1).toString().padStart(2, '0')}.
//           </div>
//           <div className={styles.councilTitleContainer}>
//             <h3 className={styles.councilTitle}>{council.name}</h3>
//             <p className={styles.councilSubtitle}>{council.subtitle}</p>
//           </div>
//         </div>

//         <div className={styles.councilDescription}>
//           <p>{council.overview}</p>
//         </div>

//         <div className={styles.responsibilitiesSection}>
//           <h4 className={styles.responsibilitiesTitle}>Key Responsibilities</h4>
//           <ul className={styles.responsibilitiesList}>
//             {council.responsibilities.map((responsibility, idx) => (
//               <li key={idx} className={styles.responsibilityItem}>
//                 <div className={styles.responsibilityBullet}>•</div>
//                 <div className={styles.responsibilityContent}>
//                   <strong>{responsibility.title}:</strong>
//                   <span> {responsibility.description}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </MotionDiv>
//   );
// };

// // Main Component
// const StudentLedCampus = () => {
//   const navigate = useNavigate();
  
//   // Use analytics hooks
//   usePageAnalytics('Student Led Campus');
//   useScrollAnalytics();

//   // Council data
//   const councils = [
//     {
//       name: "DISCO - Discipline Coordinator",
//       subtitle: "Campus Discipline & Student Support",
//       icon: FaShieldAlt,
//       image: discoImg,
//       overview: "The Discipline Coordinator maintains a positive and respectful campus environment, supports council members, listens to student concerns, and acts as a bridge between students and coordinators to ensure issues are handled fairly and on time.",
//       responsibilities: [
//         {
//           title: "Maintaining Campus Discipline",
//           description: "Ensure that every student follows the campus rules and regulations with respect and sincerity."
//         },
//         {
//           title: "Creating a Positive Environment",
//           description: "Promote a friendly and cooperative atmosphere where every student feels safe, valued, and respected."
//         },
//         {
//           title: "Supporting the Council",
//           description: "Assist all council members in maintaining discipline and organizing campus activities effectively."
//         }
//       ]
//     },
//     {
//       name: "Academic Coordinator",
//       subtitle: "Learning & Educational Excellence",
//       icon: FaBook,
//       image: academicImg,
//       overview: "The Academic Council ensures high-quality education and learning experiences for all students. We coordinate study schedules, organize academic activities, and provide academic support to help every student achieve their educational goals.",
//       responsibilities: [
//         {
//           title: "Study Schedule Management",
//           description: "Organize and maintain effective study timetables and academic calendars for all programs."
//         },
//         {
//           title: "Academic Support",
//           description: "Provide tutoring, study groups, and academic assistance to students who need extra help."
//         },
//         {
//           title: "Educational Activities",
//           description: "Organize workshops, seminars, and educational events to enhance learning experiences."
//         }
//       ]
//     },
//     {
//       name: "Kitchen Coordinator",
//       subtitle: "Food Management & Nutrition",
//       icon: FaUtensils,
//       image: kitchenImg,
//       overview: "The Kitchen Coordinator manages all aspects of campus dining, ensuring nutritious, hygienic, and satisfying meals for all students. We plan menus, manage food resources, and maintain kitchen operations efficiently.",
//       responsibilities: [
//         {
//           title: "Menu Planning",
//           description: "Design weekly menus that are nutritious, diverse, and cater to dietary preferences and requirements."
//         },
//         {
//           title: "Food Quality Control",
//           description: "Ensure all meals are prepared with high hygiene standards and quality ingredients."
//         },
//         {
//           title: "Resource Management",
//           description: "Efficiently manage food supplies, inventory, and kitchen equipment to minimize waste."
//         }
//       ]
//     },
//     {
//       name: "Health Coordinator",
//       subtitle: "Wellness & Medical Support",
//       icon: FaHeart,
//       image: healthImg,
//       overview: "The Health Coordinator focuses on maintaining the physical and mental well-being of all students. We coordinate health checkups, wellness programs, and provide support during medical emergencies.",
//       responsibilities: [
//         {
//           title: "Health Monitoring",
//           description: "Organize regular health checkups and maintain health records for all students."
//         },
//         {
//           title: "Mental Wellness",
//           description: "Provide mental health support, counseling sessions, and stress management programs."
//         },
//         {
//           title: "Emergency Response",
//           description: "Coordinate medical emergencies and ensure quick access to healthcare facilities."
//         }
//       ]
//     },
//     {
//       name: "Workout Coordinator",
//       subtitle: "Fitness & Physical Activities",
//       icon: FaDumbbell,
//       image: workoutImg,
//       overview: "The Workout Coordinator promotes physical fitness and wellness among students by organizing exercise programs, sports activities, and maintaining fitness facilities on campus.",
//       responsibilities: [
//         {
//           title: "Fitness Programs",
//           description: "Organize daily workout sessions, yoga classes, and fitness challenges for all students."
//         },
//         {
//           title: "Sports Activities",
//           description: "Plan and coordinate sports tournaments, team games, and recreational activities."
//         },
//         {
//           title: "Equipment Management",
//           description: "Maintain and organize fitness equipment, sports gear, and exercise facilities."
//         }
//       ]
//     },
//     {
//       name: "Facility Manager",
//       subtitle: "Infrastructure & Campus Maintenance",
//       icon: FaBuilding,
//       image: facilityImg,
//       overview: "The Facility Manager ensures that all campus infrastructure is well-maintained, functional, and provides a comfortable learning environment for students.",
//       responsibilities: [
//         {
//           title: "Infrastructure Maintenance",
//           description: "Oversee regular maintenance of buildings, utilities, and campus facilities."
//         },
//         {
//           title: "Resource Allocation",
//           description: "Manage allocation and usage of campus resources like classrooms, study areas, and common spaces."
//         },
//         {
//           title: "Safety & Security",
//           description: "Ensure campus safety protocols are followed and security measures are in place."
//         }
//       ]
//     },
//     {
//       name: "Outreach Coordinator",
//       subtitle: "Community & External Relations",
//       icon: FaGlobe,
//       image: outreachImg,
//       overview: "The Outreach Coordinator builds connections with external organizations, manages community relations, and represents the campus in various outreach programs and partnerships.",
//       responsibilities: [
//         {
//           title: "Community Engagement",
//           description: "Develop and maintain relationships with local communities and organizations."
//         },
//         {
//           title: "Partnership Development",
//           description: "Establish partnerships with companies, NGOs, and educational institutions for student benefit."
//         },
//         {
//           title: "External Representation",
//           description: "Represent the campus at external events, conferences, and community meetings."
//         }
//       ]
//     },
//     {
//       name: "IT Coordinator",
//       subtitle: "Technology & Digital Infrastructure",
//       icon: FaLaptop,
//       image: itImg,
//       overview: "The IT Coordinator manages all technology-related aspects of campus life, ensuring smooth digital operations and providing technical support to students and staff.",
//       responsibilities: [
//         {
//           title: "Technical Support",
//           description: "Provide IT support to students and staff for laptops, software, and network issues."
//         },
//         {
//           title: "Digital Infrastructure",
//           description: "Maintain campus WiFi, computers, and digital learning platforms."
//         },
//         {
//           title: "Technology Training",
//           description: "Conduct training sessions on new software, tools, and digital literacy programs."
//         }
//       ]
//     },
//     {
//       name: "Onboarding Coordinator",
//       subtitle: "New Student Integration & Orientation",
//       icon: FaUserPlus,
//       image: onboardingImg,
//       overview: "The Onboarding Coordinator ensures smooth integration of new students into campus life by organizing orientation programs and providing ongoing support during their transition.",
//       responsibilities: [
//         {
//           title: "Orientation Programs",
//           description: "Design and conduct comprehensive orientation sessions for new students."
//         },
//         {
//           title: "Mentorship Program",
//           description: "Pair new students with experienced mentors for guidance and support."
//         },
//         {
//           title: "Integration Support",
//           description: "Help new students adapt to campus culture, rules, and academic expectations."
//         }
//       ]
//     },
//     {
//       name: "English Coordinator",
//       subtitle: "Language Development & Communication",
//       icon: FaLanguage,
//       image: englishImg,
//       overview: "The English Coordinator focuses on improving English language skills of students through various programs, workshops, and practice sessions to enhance their communication abilities.",
//       responsibilities: [
//         {
//           title: "Language Classes",
//           description: "Organize English speaking, writing, and grammar improvement sessions for students."
//         },
//         {
//           title: "Communication Skills",
//           description: "Conduct workshops on public speaking, presentation skills, and professional communication."
//         },
//         {
//           title: "Practice Sessions",
//           description: "Arrange conversation clubs, debate sessions, and group discussions in English."
//         }
//       ]
//     },
//     {
//       name: "Placement Coordinator",
//       subtitle: "Career Development & Job Placement",
//       icon: FaBriefcase,
//       image: placementImg,
//       overview: "The Placement Coordinator helps students prepare for their careers by organizing placement drives, interview preparation sessions, and connecting students with potential employers.",
//       responsibilities: [
//         {
//           title: "Job Placement Drives",
//           description: "Organize campus recruitment events and connect students with hiring companies."
//         },
//         {
//           title: "Career Counseling",
//           description: "Provide guidance on career paths, resume building, and interview preparation."
//         },
//         {
//           title: "Industry Connections",
//           description: "Build relationships with industry partners and alumni to create job opportunities."
//         }
//       ]
//     },
//     {
//       name: "Cultural Coordinator",
//       subtitle: "Events & Campus Culture",
//       icon: FaBullhorn,
//       image: culturalImg,
//       overview: "The Cultural Coordinator brings life to the campus through events, celebrations, and cultural activities. We organize festivals, competitions, and entertainment programs that build community spirit.",
//       responsibilities: [
//         {
//           title: "Event Management",
//           description: "Plan and execute campus events, festivals, and cultural celebrations throughout the year."
//         },
//         {
//           title: "Talent Development",
//           description: "Identify and nurture student talents through competitions and performance opportunities."
//         },
//         {
//           title: "Community Building",
//           description: "Create activities that bring students together and build lasting friendships and connections."
//         }
//       ]
//     }
//   ];

//   return (
//     <div className={styles.pageContainer}>

//       {/* Philosophy Section */}
//       <MotionSection 
//         className={styles.section}
//         initial="hidden"
//         whileInView="visible"
//         variants={containerVariants}
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         <div className={styles.container}>
//           <MotionDiv variants={fadeInUp} className={styles.sectionHeader}>
//             <h2 className={styles.sectionTitle}>Our Philosophy</h2>
//             <p className={styles.sectionSubtitle}>
//               We believe in empowering students to take ownership of their learning environment
//             </p>
//           </MotionDiv>

//           <div className={styles.philosophyGrid}>
//             <MotionDiv variants={slideInLeft} className={styles.philosophyCard}>
//               <FaUsers className={styles.philosophyIcon} />
//               <h3>Student Leadership</h3>
//               <p>Every aspect of campus life is managed by students, developing real-world leadership skills and responsibility.</p>
//             </MotionDiv>
            
//             <MotionDiv variants={fadeInUp} className={styles.philosophyCard}>
//               <FaHandshake className={styles.philosophyIcon} />
//               <h3>Collaborative Environment</h3>
//               <p>Councils work together to ensure all students have a voice in shaping their educational experience.</p>
//             </MotionDiv>
            
//             <MotionDiv variants={slideInRight} className={styles.philosophyCard}>
//               <FaLightbulb className={styles.philosophyIcon} />
//               <h3>Holistic Development</h3>
//               <p>Beyond academics, we focus on personal growth, life skills, and preparing students for professional success.</p>
//             </MotionDiv>
//           </div>
//         </div>
//       </MotionSection>

//       {/* Councils Section */}
//       <MotionSection 
//         className={styles.section}
//         initial="hidden"
//         whileInView="visible"
//         variants={containerVariants}
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         <div className={styles.container}>
//           <MotionDiv variants={fadeInUp} className={styles.sectionHeader}>
//             <h2 className={styles.sectionTitle}>Student Councils</h2>
//             <p className={styles.sectionSubtitle}>
//               Meet the councils that make our campus a thriving, supportive community
//             </p>
//           </MotionDiv>

//           <div className={styles.councilsGrid}>
//             {councils.map((council, index) => (
//               <CouncilCard key={index} council={council} index={index} />
//             ))}
//           </div>
//         </div>
//       </MotionSection>

//       {/* Call to Action */}
//       <MotionSection 
//         className={styles.section}
//         initial="hidden"
//         whileInView="visible"
//         variants={containerVariants}
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         <div className={styles.container}>
//           <MotionDiv 
//             variants={fadeInUp}
//             className={styles.ctaSection}
//           >
//             <h3 className={styles.ctaTitle}>Join Our Student Leadership</h3>
//             <p className={styles.ctaText}>
//               Become part of our student councils and help shape the campus experience for everyone. 
//               Develop leadership skills while making a real impact.
//             </p>
//             <div className={styles.ctaButtons}>
//               <motion.button 
//                 className={styles.ctaPrimary}
//                 onClick={() => navigate('/programs')}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore Programs
//               </motion.button>
//               <motion.button 
//                 className={styles.ctaSecondary}
//                 onClick={() => navigate('/involved')}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get in Touch
//               </motion.button>
//             </div>
//           </MotionDiv>
//         </div>
//       </MotionSection>
//     </div>
//   );
// };

// export default StudentLedCampus;


import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, FaHeart, FaBook, FaUtensils, 
  FaShieldAlt, FaHandshake, FaLightbulb,
  FaBullhorn, FaDumbbell, FaBuilding, FaGlobe,
  FaLaptop, FaUserPlus, FaLanguage, FaBriefcase
} from 'react-icons/fa';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './StudentLedCampus.module.css';
// import { trackSectionView } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

// Import council images
import discoImg from '../assets/DISCO.jpeg';
import academicImg from '../assets/T&P.jpeg';
import kitchenImg from '../assets/KitchenC.jpeg';
import healthImg from '../assets/HealthC.jpeg';
import workoutImg from '../assets/WorkoutC.jpeg';
import facilityImg from '../assets/FM.jpeg';
import outreachImg from '../assets/Outreach.jpeg';
import itImg from '../assets/IT.jpeg';
import onboardingImg from '../assets/Onboarding.jpeg';
import englishImg from '../assets/EnglishC.jpeg';
import placementImg from '../assets/PlacementC.jpeg';
import culturalImg from '../assets/CultureC.jpeg';

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

// Container for staggering children animations
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

// Main card variant (used in the CouncilCard wrapper)
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

// New variant for internal content (e.g., Council description/responsibilities)
const contentSlideIn = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

// Council Card Component
const CouncilCard = ({ council, index }) => {
  return (
    <MotionDiv 
      className={styles.councilCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(18, 75, 51, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Council Image Section */}
      <MotionDiv 
        className={styles.councilImageSection}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img 
          src={council.image} 
          alt={`${council.name} representative`} 
          className={styles.councilImage} 
        />
        <div className={styles.councilImageOverlay}>
          <council.icon size={28} className={styles.overlayIcon} />
        </div>
      </MotionDiv>

      {/* Council Content Section */}
      <MotionDiv 
        className={styles.councilContentSection}
        variants={containerVariants} // Use container variant for staggering inner elements
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MotionDiv variants={contentSlideIn} className={styles.councilHeader}>
          <div className={styles.councilNumber}>
            {(index + 1).toString().padStart(2, '0')}.
          </div>
          <div className={styles.councilTitleContainer}>
            <h3 className={styles.councilTitle}>{council.name}</h3>
            <p className={styles.councilSubtitle}>{council.subtitle}</p>
          </div>
        </MotionDiv>

        <MotionDiv variants={contentSlideIn} className={styles.councilDescription}>
          <p>{council.overview}</p>
        </MotionDiv>

        <MotionDiv variants={contentSlideIn} className={styles.responsibilitiesSection}>
          <h4 className={styles.responsibilitiesTitle}>Key Responsibilities</h4>
          <ul className={styles.responsibilitiesList}>
            {/* Staggering the list items */}
            {council.responsibilities.map((responsibility, idx) => (
              <motion.li 
                key={idx} 
                className={styles.responsibilityItem}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className={styles.responsibilityBullet}>•</div>
                <div className={styles.responsibilityContent}>
                  <strong>{responsibility.title}:</strong>
                  <span> {responsibility.description}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </MotionDiv>
      </MotionDiv>
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
      image: discoImg,
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
      name: "Academic Coordinator",
      subtitle: "Learning & Educational Excellence",
      icon: FaBook,
      image: academicImg,
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
      name: "Kitchen Coordinator",
      subtitle: "Food Management & Nutrition",
      icon: FaUtensils,
      image: kitchenImg,
      overview: "The Kitchen Coordinator manages all aspects of campus dining, ensuring nutritious, hygienic, and satisfying meals for all students. We plan menus, manage food resources, and maintain kitchen operations efficiently.",
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
      name: "Health Coordinator",
      subtitle: "Wellness & Medical Support",
      icon: FaHeart,
      image: healthImg,
      overview: "The Health Coordinator focuses on maintaining the physical and mental well-being of all students. We coordinate health checkups, wellness programs, and provide support during medical emergencies.",
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
      name: "Workout Coordinator",
      subtitle: "Fitness & Physical Activities",
      icon: FaDumbbell,
      image: workoutImg,
      overview: "The Workout Coordinator promotes physical fitness and wellness among students by organizing exercise programs, sports activities, and maintaining fitness facilities on campus.",
      responsibilities: [
        {
          title: "Fitness Programs",
          description: "Organize daily workout sessions, yoga classes, and fitness challenges for all students."
        },
        {
          title: "Sports Activities",
          description: "Plan and coordinate sports tournaments, team games, and recreational activities."
        },
        {
          title: "Equipment Management",
          description: "Maintain and organize fitness equipment, sports gear, and exercise facilities."
        }
      ]
    },
    {
      name: "Facility Manager",
      subtitle: "Infrastructure & Campus Maintenance",
      icon: FaBuilding,
      image: facilityImg,
      overview: "The Facility Manager ensures that all campus infrastructure is well-maintained, functional, and provides a comfortable learning environment for students.",
      responsibilities: [
        {
          title: "Infrastructure Maintenance",
          description: "Oversee regular maintenance of buildings, utilities, and campus facilities."
        },
        {
          title: "Resource Allocation",
          description: "Manage allocation and usage of campus resources like classrooms, study areas, and common spaces."
        },
        {
          title: "Safety & Security",
          description: "Ensure campus safety protocols are followed and security measures are in place."
        }
      ]
    },
    {
      name: "Outreach Coordinator",
      subtitle: "Community & External Relations",
      icon: FaGlobe,
      image: outreachImg,
      overview: "The Outreach Coordinator builds connections with external organizations, manages community relations, and represents the campus in various outreach programs and partnerships.",
      responsibilities: [
        {
          title: "Community Engagement",
          description: "Develop and maintain relationships with local communities and organizations."
        },
        {
          title: "Partnership Development",
          description: "Establish partnerships with companies, NGOs, and educational institutions for student benefit."
        },
        {
          title: "External Representation",
          description: "Represent the campus at external events, conferences, and community meetings."
        }
      ]
    },
    {
      name: "IT Coordinator",
      subtitle: "Technology & Digital Infrastructure",
      icon: FaLaptop,
      image: itImg,
      overview: "The IT Coordinator manages all technology-related aspects of campus life, ensuring smooth digital operations and providing technical support to students and staff.",
      responsibilities: [
        {
          title: "Technical Support",
          description: "Provide IT support to students and staff for laptops, software, and network issues."
        },
        {
          title: "Digital Infrastructure",
          description: "Maintain campus WiFi, computers, and digital learning platforms."
        },
        {
          title: "Technology Training",
          description: "Conduct training sessions on new software, tools, and digital literacy programs."
        }
      ]
    },
    {
      name: "Onboarding Coordinator",
      subtitle: "New Student Integration & Orientation",
      icon: FaUserPlus,
      image: onboardingImg,
      overview: "The Onboarding Coordinator ensures smooth integration of new students into campus life by organizing orientation programs and providing ongoing support during their transition.",
      responsibilities: [
        {
          title: "Orientation Programs",
          description: "Design and conduct comprehensive orientation sessions for new students."
        },
        {
          title: "Mentorship Program",
          description: "Pair new students with experienced mentors for guidance and support."
        },
        {
          title: "Integration Support",
          description: "Help new students adapt to campus culture, rules, and academic expectations."
        }
      ]
    },
    {
      name: "English Coordinator",
      subtitle: "Language Development & Communication",
      icon: FaLanguage,
      image: englishImg,
      overview: "The English Coordinator focuses on improving English language skills of students through various programs, workshops, and practice sessions to enhance their communication abilities.",
      responsibilities: [
        {
          title: "Language Classes",
          description: "Organize English speaking, writing, and grammar improvement sessions for students."
        },
        {
          title: "Communication Skills",
          description: "Conduct workshops on public speaking, presentation skills, and professional communication."
        },
        {
          title: "Practice Sessions",
          description: "Arrange conversation clubs, debate sessions, and group discussions in English."
        }
      ]
    },
    {
      name: "Placement Coordinator",
      subtitle: "Career Development & Job Placement",
      icon: FaBriefcase,
      image: placementImg,
      overview: "The Placement Coordinator helps students prepare for their careers by organizing placement drives, interview preparation sessions, and connecting students with potential employers.",
      responsibilities: [
        {
          title: "Job Placement Drives",
          description: "Organize campus recruitment events and connect students with hiring companies."
        },
        {
          title: "Career Counseling",
          description: "Provide guidance on career paths, resume building, and interview preparation."
        },
        {
          title: "Industry Connections",
          description: "Build relationships with industry partners and alumni to create job opportunities."
        }
      ]
    },
    {
      name: "Cultural Coordinator",
      subtitle: "Events & Campus Culture",
      icon: FaBullhorn,
      image: culturalImg,
      overview: "The Cultural Coordinator brings life to the campus through events, celebrations, and cultural activities. We organize festivals, competitions, and entertainment programs that build community spirit.",
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
            {/* Adjusted philosophy card variants for a unified look */}
            <MotionDiv 
              variants={fadeInUp} 
              transition={{ delay: 0.2 }}
              className={styles.philosophyCard}
            >
              <FaUsers className={styles.philosophyIcon} />
              <h3>Student Leadership</h3>
              <p>Every aspect of campus life is managed by students, developing real-world leadership skills and responsibility.</p>
            </MotionDiv>
            
            <MotionDiv 
              variants={fadeInUp} 
              transition={{ delay: 0.4 }}
              className={styles.philosophyCard}
            >
              <FaHandshake className={styles.philosophyIcon} />
              <h3>Collaborative Environment</h3>
              <p>Councils work together to ensure all students have a voice in shaping their educational experience.</p>
            </MotionDiv>
            
            <MotionDiv 
              variants={fadeInUp} 
              transition={{ delay: 0.6 }}
              className={styles.philosophyCard}
            >
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
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Explore Programs
              </motion.button>
              <motion.button 
                className={styles.ctaSecondary}
                onClick={() => navigate('/involved')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
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