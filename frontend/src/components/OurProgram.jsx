import React from 'react'
import { motion } from 'framer-motion' 
import { CheckCircle, Code, Briefcase, GraduationCap, RefreshCw, ChevronRight } from 'lucide-react'
import styles from './OurPrograms.module.css'

// IMPORTANT: Ensure these image paths are correct in your project structure
import imgCode from '../assets/campus10.jpeg'; 
import imgBusiness from '../assets/campus16.jpeg';
import imgSecondChance from '../assets/campus13.jpeg';
import imgCareer from '../assets/campus2.jpg'; // Fictional 4th program image

// --- Animation Variants (from your original code) ---
const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const card3DTilt = {
  hidden: { opacity: 0, y: 80, rotateY: 75, transformPerspective: 800 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateY: 0, 
    transformPerspective: 800,
    transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 18, 
        mass: 1.5,
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } 
};

// --- ListSection ---
const ListSection = (props) => {
  const { title, items, icon: Icon } = props;
  if (!items || items.length === 0) return null;

  return (
    <motion.div 
        className={styles.listSection}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
      <h4 className={`${styles.fontHeading} ${styles.listTitle}`}>{title}</h4>
      <motion.ul className={styles.list} variants={containerVariants}>
        {items.map((item, index) => (
          <motion.li key={index} className={styles.listItem} variants={itemVariants}>
            <Icon className={styles.listIcon} />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

// --- Program Card Component (cleaned) ---
const ProgramCard = (props) => {
  const { icon: Icon, title, description, image, isReversed, theme, curriculum, outcomes } = props;
  
  return (
    <motion.div 
        className={`${styles.programCard} ${isReversed ? styles.reversed : ''} ${styles[theme]}`}
        variants={card3DTilt}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
      <div className={styles.programContent}>
          <div className={styles.programHeader}>
            <h3 className={`${styles.fontHeading} ${styles.programTitle}`}>{title}</h3>
            <p className={styles.programText}>{description}</p>

            {/* Apply Now button only for Programming school */}
            {title === "School of Programming" && (
              <a 
                href="https://navgurukul.org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.applyButton}
              >
                Apply Now
              </a>
            )}
          </div>

          {(curriculum?.length > 0 || outcomes?.length > 0) && (
              <div className={styles.programListsContainer}>
                  <ListSection title="Curriculum" items={curriculum} icon={ChevronRight} />
                  <ListSection title="Outcomes" items={outcomes} icon={ChevronRight} />
              </div>
          )}
      </div>
      
      <div className={styles.programImageContainer}>
          {title === "School of Programming" && (
             <div className={styles.programIconFloating}>
                <Code size={40} className={styles.iconImage} /> 
             </div>
          )}
          <div className={styles.redPin} /> 
          <img src={image} alt={`${title} Visual`} className={styles.programImage} />
      </div>
    </motion.div>
  );
};

// --- DATA ---
const PROGRAMS_DATA = [
    {
      icon: Code,
      title: "School of Programming",
      description: "The School of Programming offers a free 24-months course for youth from low-income backgrounds to learn front-end and backend development. Students learn skills in JavaScript, React, Python, and Node.js, along with soft skills like communication and teamwork. No prior education is needed—just interest in coding and creativity.",
      image: imgCode,
      theme: 'themeGreen',
      curriculum: [], outcomes: []
    },
    {
      icon: Briefcase,
      title: "School of Buisness",
      description: "The program is designed for youth above 18 from low-income backgrounds who cannot afford costly education, including school or college dropouts. No prior education is required. Students learn practical business and digital skills such as Google Suite, CRM and Salesforce, digital marketing, and data analytics using SQL and Tableau.",
      image: imgBusiness,
      theme: 'themeBlue',
      curriculum: [], outcomes: []
    },
    {
      icon: RefreshCw,
      title: "School of Second Chance",
      description: "The School of Second Chance is a residential program by NextGen for women who have faced trauma, such as survivors of trafficking, imprisonment, or abandonment. The First Supply Chain School in Pune empowers 10 women by teaching nutrition, multi-cuisine cooking, spoken English, digital literacy, and personality development. The course is self-paced, lasting 12-15 months, with the goal of helping each woman gain skills to earn at least ₹15,000 per month.",
      image: imgSecondChance,
      theme: 'themeOrange',
      curriculum: [], outcomes: []
    },
    {
      icon: GraduationCap,
      title: "School of  Education",
      description: "The School of Education (SOE) is an 18-month, full-time program at NavGurukul, Pune, designed to build next-generation educators. The program is completely free of cost, including food, accommodation, laptop, and Wi-Fi.Through project-based challenges, daily meditation and self-reflection, and fieldwork with NGOs and schools, learners gain real-world experience.",
      image: imgCareer,
      theme: 'themePurple',
      curriculum: [], outcomes: []
    }
];

const OurPrograms = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <section className={styles.programList}>
          {PROGRAMS_DATA.map((program, index) => {
            const isReversed = index % 2 !== 0; 
            return (
                <ProgramCard 
                    key={index} 
                    {...program} 
                    isReversed={isReversed} 
                />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default OurPrograms;