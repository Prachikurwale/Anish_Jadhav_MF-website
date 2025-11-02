import React from 'react';
// Framer Motion
import { motion } from 'framer-motion';
// Icons
import { CheckCircle, Code, Briefcase, GraduationCap, RefreshCw } from 'lucide-react';
// CSS Module
import styles from './OurPrograms.module.css';

// --- Animation Variants (No change) ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

// === Reusable component for List Sections ===
const ListSection = (props) => {
  const { title, items, icon: Icon } = props;

  return (
    <div className={styles.listSection}>
      <h4 className={`${styles.fontHeading} ${styles.listTitle}`}>
        {title}
      </h4>
      <motion.ul 
        className={styles.list}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
    </div>
  );
};

// === Reusable component for the four individual School Cards ===
const ProgramCard = (props) => {
  const { icon: Icon, title, tagline, description, duration, residential, curriculum, outcomes } = props;
  
  return (
    <div className={styles.programCard}>
      
      {/* School Description (Left/Right) */}
      <div className={styles.programDescription}>
        <div className={styles.programIconWrapper}>
          <Icon className={styles.programIcon} />
        </div>
        
        <h3 className={`${styles.fontHeading} ${styles.programTitle}`}>{title}</h3>
        <p className={`${styles.fontHeading} ${styles.programTagline}`}>{tagline}</p>
        <p className={styles.programText}>{description}</p>
        
        <div className={styles.programDetails}>
          <span className={styles.programDetailItem}>
            <CheckCircle className={styles.programDetailIcon} /> {duration}
          </span>
          <span className={styles.programDetailItem}>
            <CheckCircle className={styles.programDetailIcon} /> {residential}
          </span>
        </div>
      </div>
      
      {/* Curriculum & Outcomes (Right/Left) */}
      <div className={styles.programLists}>
        <ListSection title="Curriculum Highlights" items={curriculum} icon={CheckCircle} />
        <ListSection title="Program Outcomes" items={outcomes} icon={CheckCircle} />
      </div>

    </div>
  );
};

// --- Data (No change) ---
const PROGRAMS_DATA = [
    {
      icon: Code,
      title: "School of Programming",
      tagline: "Build the Future with Code",
      description: "Our flagship program transforms complete beginners into skilled software developers ready for the tech industry. Learn in-demand programming languages and modern development practices through hands-on projects and mentorship.",
      duration: "12-18 months",
      residential: "Residential",
      curriculum: [
        "JavaScript Fundamentals & ES6+", "React & Modern Frontend Development",  
        "Node.js & Backend Development",  "Git & Version Control", 
        "Data Structures & Algorithms"
      ],
      outcomes: [
        "Full-stack web development capabilities", "Portfolio of real-world projects", "Industry-recognized certifications", "Job placement assistance"
      ]
    },
    // ... (baaki data waise hi rahega) ...
  {
    icon: Briefcase,
    title: "School of Business",
    tagline: "Entrepreneurship & Leadership",
    description: "Develop the business acumen and entrepreneurial mindset needed to create opportunities and drive innovation. Learn from industry experts and build practical business skills.",
    duration: "10-14 months",
    residential: "Residential",
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
    curriculum: [
      "Designing basics", "Textile skills", "Product making", "Financial acumen and marketing", 
      "Digital tools and industry learning"
    ],
    outcomes: [
      "Renewed career path", "Practical job skills", "Confidence & life skills", "Continued mentorship support"
    ]
  }
];

// === Main Component ===
const OurPrograms = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        
        {/* === Header Section === */}
        <motion.section 
          className={styles.headerSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h1 className={`${styles.fontHeading} ${styles.headerHeading}`}>
            Our Programs
          </h1>
          <p className={styles.headerSubtitle}>
            Four specialized schools designed to unlock potential and create pathways to success. Each program combines rigorous academics with practical skills and comprehensive support.
          </p>
        </motion.section>

        {/* === Programs Grid/List === */}
        <section className={styles.programList}>
          {PROGRAMS_DATA.map((program, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                variants={isReversed ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <ProgramCard {...program} />
              </motion.div>
            );
          })}
        </section>

        {/* === Call to Action Banner === */}
        <motion.section 
          className={styles.ctaBanner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className={`${styles.fontHeading} ${styles.ctaHeading}`}>
            Ready to Transform Your Future?
          </h2>
          <p className={styles.ctaText}>
            All programs are completely free for eligible students and include residential facilities, meals, and comprehensive support.
          </p>
          <button className={styles.ctaButton}>
            Apply Now
          </button>
        </motion.section>

      </div>
    </div>
  );
};

export default OurPrograms;