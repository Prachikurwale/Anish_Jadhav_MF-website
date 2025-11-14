import React from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars 
import { CheckCircle, Code, Briefcase, GraduationCap, RefreshCw, ChevronRight } from 'lucide-react'
import styles from './OurPrograms.module.css'

// IMPORTANT: Ensure these image paths are correct in your project structure
import imgCode from '../assets/campus10.jpeg'; 
import imgBusiness from '../assets/campus16.jpeg';
import imgSecondChance from '../assets/campus13.jpeg';
import imgCareer from '../assets/campus2.jpg'; // Fictional 4th program image
import imgFinance from '../assets/campus12.jpeg';
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

 
const ListSection = (props) => {
    const { title, items } = props;
    if (!items || items.length === 0) return null;

    // Join all list items into a single, continuous text block
    const continuousText = items.join(" "); // Use a space or a dot-space (". ") for separation

    return (
        <motion.div 
            className={styles.listSection}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h4 className={`${styles.fontHeading} ${styles.listTitle}`}>{title}</h4>
            <motion.p className={styles.listText} variants={itemVariants}>
                {continuousText}
            </motion.p>
        </motion.div>
    );
};
// Note: This replaces the <ul> and <li> tags with a single <p> tag.

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

 // --- DATA (Updated to match screenshot text structure) ---
const PROGRAMS_DATA = [
    // 1. School of Programming (Updated to screenshot content)
    {
      icon: Code,
      title: "School of Programming",
      description: "Ever dreamed of building the next big app? Unlock your potential to code for the digital world. Learn front-end & back-end development to turn your creativity into real-life projects.",
      image: imgCode, // Ensure this path is correct
      theme: 'themeGreen',
      curriculum: [
        "Student-led, self-paced 18-months programming course.",
        "Front-end and development: Web and Mobile development in JavaScript, React.js, and Android.",
        "Back-end development: Python, Node.js, Javascript",
        "Soft skills: English speaking, teamwork, emotional intelligence, and leadership skills",
        "Hands-on projects: Clone projects for products such as WhatsApp and Facebook",
        "Co-curricular Activities: Participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits."
      ],
      outcomes: [
        "Students will get 100% assistance for securing job in roles such as:",
        "Entry-level Software Developer, Front-End Developer, Back-End Developer,",
        "Python Developer, JavaScript Developer, Testing & QA engineer"
      ]
    },

    // 2. School of Business (Updated to screenshot content)
    {
      icon: Briefcase,
      title: "School of Business", 
      description: "Ever pictured yourself as a business person? With skills in Google Suite, CRM, Digital Marketing, and Data Analytics, we prepare you for a digital-first economy.",
      image: imgBusiness, // Ensure this path is correct
      theme: 'themeBlue',
      curriculum: [
        "Student-led, self-paced business course.",
        "Introduction to Google Suite: Learning advanced Google Sheets, slides, and forms",
        "Introduction: Customer Relationship Management & Salesforce",
        "Digital Marketing: Website building, Social media marketing & SEO",
        "Data Analytics: Statistics, SQL queries, Tableau",
        "Co-curricular Activities: Participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits."
      ],
      outcomes: [
        "Students will get 100% assistance for securing jobs in roles such as:",
        "Customer Relationship Representative, CRM Associate, Salesforce Associate & Operations Associate"
      ]
    },

    // 3. School of Second Chance (Keep existing data)
   {
  icon: RefreshCw,
  title: "School of Second Chance",
  description: "The School of Second Chance is a residential program for women who have faced trauma—survivors of trafficking, imprisonment, or abandonment. The program empowers women with culinary, life, and livelihood skills to achieve dignity, confidence, and financial independence.",
  image: imgSecondChance,
  theme: 'themeOrange',
  curriculum: [
    "Culinary Skills (Super Chef Training): Basic to advanced cooking techniques, Indian, Continental, bakery items, hygiene, safety, kitchen discipline, food plating and presentation, running a small catering business.",
    "Life Skills & Confidence Building: Communication skills, self-awareness, emotional wellbeing, decision-making, problem-solving, teamwork, leadership, managing stress, and handling trauma.",
    "Professional & Livelihood Skills: Workplace readiness, time management, responsibility, resume building, interview preparation, customer handling, professionalism.",
    "Financial Literacy: Basic budgeting, saving and managing money, introduction to small business planning.",
    "Entrepreneurship Support: How to start a small food business, pricing, packaging, marketing, support for setting up micro-enterprises."
  ],
  outcomes: [
    "Become a Super Chef with strong culinary skills and hands-on kitchen experience.",
    "Rebuild confidence and learn to express themselves without fear.",
    "Gain financial independence through employable skills and income opportunities.",
    "Develop leadership qualities and become role models in their communities.",
    "Break the cycle of trauma and move forward with dignity and self-belief.",
    "Access livelihood support, internships, and entrepreneurship guidance.",
    "Become ready for employment in restaurants, cafés, and catering services.",
    "Build healthy relationships and learn essential life skills for reintegration."
  ]
},

    // 4. School of Education (Keep existing data)
    {
        icon: GraduationCap,
        title: "School of Education",
        description: "The School of Education (SOE) is an 18-month, full-time program at NavGurukul, Pune, designed to build next-generation educators. The program is completely free of cost, including food, accommodation, laptop, and Wi-Fi.Through project-based challenges, daily meditation and self-reflection, and fieldwork with NGOs and schools, learners gain real-world experience.",
        image: imgCareer, 
        theme: 'themePurple',
        curriculum: [], 
        outcomes: []
    },
    
    // School of Finance (Keep existing data)
    {
        icon: Briefcase,
        title: "School of Finance",
        description: "Fascinated by the financial world? Master the arts of Accounting, Taxation, and Tally to unlock new opportunities in the finance sector.",
        image: imgFinance, 
        theme: 'themePink', 
        curriculum: [
            "Student-led, self-paced finance course.",
            "1. Financial Accounting: Learning accounting, cost accounting, management accounting",
            "2. Learning Taxation: Learning Direct Tax, computation of income of individual, firm & company",
            "3. Learning Tally: User interface and company management, ledgers, payment voucher & financial reports",
            "Co-curricular Activities: Participate in voting for student council, running student councils, maintaining health & hygiene, cooking, sports, recreational & field visits."
        ],
        outcomes: [
            "Students will get 100% assistance for securing jobs in finance roles such as:",
            "Accountants and analysts"
        ]
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
};export default OurPrograms;