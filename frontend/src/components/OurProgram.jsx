import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Code, Briefcase, GraduationCap, RefreshCw, ChevronRight } from 'lucide-react'
import styles from './OurPrograms.module.css'

import imgCode from '../assets/program_code.jpg'; 
import imgBusiness from '../assets/program_business.jpg';
import imgEducation from '../assets/program_education.jpg';
import imgSecondChance from '../assets/program_second_chance.jpg';

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const headerVariants = {
  hidden: { opacity: 0, y: -40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 50,
      damping: 17,
      delay: 0.3,
    } 
  }
};

// 🌟 CHANGE: Animation ko thoda smooth kiya
const card3DTilt = {
  hidden: { opacity: 0, y: 80, rotateY: 75, transformPerspective: 800 }, // 100 se 75 kiya
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateY: 0, 
    transformPerspective: 800,
    transition: { 
        type: "spring", 
        stiffness: 50,  // Thoda tight kiya
        damping: 18,  // Bounce kam kiya
        mass: 1.5,
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } 
};

const ListSection = (props) => {
  const { title, items, icon: Icon } = props;

  return (
    <motion.div 
        className={styles.listSection}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
      <h4 className={`${styles.fontHeading} ${styles.listTitle}`}>
        {title}
      </h4>
      <motion.ul 
        className={styles.list}
        variants={containerVariants}
      >
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className={styles.listItem}
            variants={itemVariants}
          >
            <Icon className={styles.listIcon} />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const ProgramCard = (props) => {
  const { icon: Icon, title, tagline, description, duration, residential, curriculum, outcomes, image, isReversed, theme } = props;
  
  return (
    <motion.div 
        className={`${styles.programCard} ${isReversed ? styles.reversed : ''} ${styles[theme]}`}
        variants={card3DTilt}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
      
      <div className={styles.programImageContainer}>
          <img src={image} alt={`${title} Visual`} className={styles.programImage} />
          <div className={styles.programIconFloating}>
             <Icon className={styles.programIcon} />
          </div>
          <div className={styles.programBgShape1} />
          <div className={styles.programBgShape2} />
      </div>
      
      <div className={styles.programContent}>
          
          <div className={styles.programHeader}>
            <h3 className={`${styles.fontHeading} ${styles.programTitle}`}>{title}</h3>
            <p className={`${styles.fontHeading} ${styles.programTagline}`}>{tagline}</p>
          </div>
          
          <p className={styles.programText}>{description}</p>
          
          <div className={styles.programDetails}>
            {/* 🌟 CHANGE: Asterisks (**) ko <strong> se replace kiya */}
            <span className={styles.programDetailItem}>
              <CheckCircle className={styles.programDetailIcon} /> <strong>Duration:</strong> {duration}
            </span>
            <span className={styles.programDetailItem}>
              <CheckCircle className={styles.programDetailIcon} /> <strong>Setup:</strong> {residential}
            </span>
          </div>

          <div className={styles.programListsContainer}>
             <ListSection title="Curriculum Highlights" items={curriculum} icon={ChevronRight} />
             <ListSection title="Program Outcomes" items={outcomes} icon={ChevronRight} />
          </div>

      </div>

    </motion.div>
  );
};

const PROGRAMS_DATA = [
    {
      icon: Code,
      title: "School of Programming",
      tagline: "Build the Future with Code",
      description: "Our flagship program transforms complete beginners into skilled software developers ready for the tech industry. Learn in-demand programming languages and modern development practices through hands-on projects and mentorship.",
      duration: "12-18 months",
      residential: "Residential",
      image: imgCode,
      theme: 'themeGreen', 
      curriculum: [
        "JavaScript Fundamentals & ES6+", "React & Modern Frontend Development",  
        "Node.js & Backend Development",  "Git & Version Control", 
        "Data Structures & Algorithms"
      ],
      outcomes: [
        "Full-stack web development capabilities", "Portfolio of real-world projects", "Industry-recognized certifications", "Job placement assistance"
      ]
    },
  {
    icon: Briefcase,
    title: "School of Business",
    tagline: "Entrepreneurship & Leadership",
    description: "Develop the business acumen and entrepreneurial mindset needed to create opportunities and drive innovation. Learn from industry experts and build practical business skills.",
    duration: "10-14 months",
    residential: "Residential",
    image: imgBusiness,
    theme: 'themeGold', 
    curriculum: [
      "Business Strategy & Planning",  "Marketing & Brand Development", 
      "Leadership & Team Building", "Digital Marketing & Social Media", 
       "Business Analytics"
    ],
    outcomes: [
      "Business management expertise", "Entrepreneurial skill set", "Real business plan development", "Internship opportunities"
    ]
  },
  {
    icon: GraduationCap,
    title: "School of Education",
    tagline: "Empower Through Teaching",
    description: "Transform lives by becoming an educator. Learn modern teaching methodologies, curriculum design, and educational technology to inspire and educate the next generation.",
    duration: "12 months",
    residential: "Residential",
    image: imgEducation,
    theme: 'themeGreen', 
    curriculum: [
      "Teaching Methods", "Curriculum Design & Development", 
      "Classroom Management", "Educational Technology", 
      "Inclusive Education", "Communication Skills"
    ],
    outcomes: [
      "Teaching certification", "Practical classroom experience", "Digital teaching capabilities", "Placement in educational institutions"
    ]
  },
  {
    icon: RefreshCw,
    title: "School of Second Chance",
    tagline: "Rebuild, Relearn, Restart",
    description: "A transformative program for those seeking to restart their career journey. SOSC offering 52-week courses to help young people from challenging background learn, grow, and build meaningful careers",
    duration: "Flexible (6-16 months)",
    residential: "Residential",
    image: imgSecondChance,
    theme: 'themeGold', 
    curriculum: [
      "Designing basics", "Textile skills", "Product making", "Financial acumen and marketing", 
      "Digital tools and industry learning"
    ],
    outcomes: [
      "Renewed career path", "Practical job skills", "Confidence & life skills", "Continued mentorship support"
    ]
  }
];

const OurPrograms = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        
        <motion.section 
          className={styles.headerSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h1 className={`${styles.fontHeading} ${styles.headerHeading}`}>
            Our Specialized Schools
          </h1>
          <p className={styles.headerSubtitle}>
            Four specialized programs designed to unlock the full potential of every student. We combine <strong>rigorous academics, hands-on skills, and comprehensive residential support</strong> to guarantee career pathways.
          </p>
        </motion.section>

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