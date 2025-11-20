import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaHandsHelping } from 'react-icons/fa'; 
import { ChevronDown, ArrowRight, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

// Using your provided imports
import campusImg25  from '../assets/campus25.jpeg';
import campusImg4 from '../assets/campus10.jpeg'; // We'll use this for the main hero image
import FoundationImage from '../assets/AJMF_0324.jpg'; // We'll use this as the Author image placeholder

// --- Animation Variants ---
const baseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, delay: 1.5 } }
};


// --- Hero Section Component (UNCHANGED) ---
const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <motion.section 
            className={styles.modernHeroSection} 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
            <div className={styles.heroContent}>
                
                <motion.p 
                    className={styles.studioText}
                    variants={baseVariants}
                >
                  
                </motion.p> 

               <motion.h1 
                    className={styles.modernTitle} 
                    variants={baseVariants}
                >
                    Anish Jadhav
                </motion.h1>
                <motion.h1 
                    className={styles.modernTitleBlue}
                    variants={baseVariants}
                    transition={{ delay: 0.15 }}
                >
                    Memorial
                </motion.h1>
                <motion.h1 
                    className={styles.modernTitle}
                    variants={baseVariants}
                    transition={{ delay: 0.3 }}
                >
                    Foundation
                </motion.h1>
                
                {/* === NEW: Subtitle (TORCH BEARER) === */}
                <motion.p 
                    className={styles.modernSubtitle} // Deep Blue Styling
                    variants={baseVariants}
                    transition={{ delay: 0.45 }}
                >
                    TORCH BEARER FOR THE NEEDY
                </motion.p>
                

                <motion.div 
                    className={styles.modernAuthorInfo} // Founder Info Styling
                    variants={baseVariants}
                    transition={{ delay: 0.6 }}
                >
                    <img 
                        src={FoundationImage}
                        alt="Brigadier (Dr) Kishor Jadhav" 
                        className={styles.modernAuthorImage}
                    />
                    <div className={styles.modernAuthorText}>
                        <p className={styles.modernAuthorName}>Brigadier (Dr) Kishor Jadhav, Ph D</p>
                        <p className={styles.modernAuthorTitle}>Founder of Anish Jadhav Memorial Foundation</p>
                    </div>
                </motion.div>
                
                {/* === NEW: Learn More Button === */}
                <motion.button
                    className={styles.learnMoreButton} 
                    variants={buttonVariants}
                    transition={{ delay: 0.8 }}
                    onClick={() => navigate('/about')}
                >
                    Learn more
                </motion.button>
            </div>
            
            <div className={styles.modernHeroImageContainer}>
                <img 
                    src={campusImg4} 
                    alt="Anish Jadhav Memorial Foundation Team" 
                    className={styles.modernHeroImage}
                />
            </div>
        </motion.section>
    );
};


const MissionVisionSection = () => {
    return (
        <section className={styles.missionVisionSection}>
            
            {/* The Top Text Block (motion.div) has been removed here */}

            {/* Vison and Mission Cards Container */}
            <div className={styles.cardsContainer}>
                
                {/* Vision Card */}
                <motion.div 
                    className={styles.missionVisionCard}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className={styles.cardTitle}>VISION</h2>
                    <p className={styles.cardText}>
                        To enable a dignified life for
underprivileged communities by
focusing on skill development ,
capacity building, and
sustainable growth.
                    </p>
                </motion.div>
                
                {/* Mission Card */}
                <motion.div 
                    className={styles.missionVisionCard}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h2 className={styles.cardTitle}>MISSION</h2>
                    <p className={styles.cardText}>
                        AJMF aims to enhance
 employment opportunities
 and entrepreneurship through
 various social and educational
 programs that promote skill
 development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

// --- Main Home Component (Updated to include MissionVisionSection) ---
const Home = () => {
    return (
        <div className={styles.pageContainer}>
            <HeroSection /> 
            {/* === ADDED: Mission and Vision Section === */}
            <MissionVisionSection />
            <FounderSection />
           <PedagogySection /> 
            
            <VisionInPartnershipSection />
        </div>
    );
};

// --- NEW: Founder Information Component ---
const FounderImage = FoundationImage; // Assuming this import holds the image of Brigadier Jadhav

const FounderSection = () => {
    return (
        <section className={styles.founderSection}>
            <div className={styles.founderContainer}>
                
                {/* Left Side: Image */}
                <div className={styles.founderImageContainer}>
                    <img 
                        src={FounderImage} 
                        alt="Brigadier (Dr) Kishor Jadhav" 
                        className={styles.founderImage}
                    />
                </div>
                
                {/* Right Side: Header and Short Info */}
                <div className={styles.founderInfo}>
                    <h2 className={styles.founderNameTitle}>Brigadier (Dr) Kishor Jadhav</h2>
                    <p className={styles.founderRole}>Founder of Anish Jadhav Memorial Foundation</p>
                    
                    {/* Main Description */}
                    <p className={styles.founderDescription}>
                       The Anish Jadhav Memorial Foundation was established by Brigadier Kishor Jadhav in loving memory of his son, Anish. In partnership with NavGurukul, we provide comprehensive residential education programs that equip underprivileged youth with the skills, knowledge, and opportunities they need to build successful careers and meaningful lives.
                    </p>
                </div>
            </div>
            
            
             
        </section>
 
    );
};

// some changes




const PedagogySection = () => {

    return (

        <motion.section 

            className={styles.pedagogySection}

            initial="hidden"

            whileInView="visible"

            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}

            viewport={{ once: true, amount: 0.1 }}

        >

            <motion.h2 className={styles.pedagogyTitle} variants={baseVariants}>

                RESIDENTIAL COURSES - PEDAGOGY

            </motion.h2>

            <motion.p className={styles.pedagogyText} variants={baseVariants} transition={{ delay: 0.2 }}>

                At our campus, we follow a unique, innovative, and effective learning approach that goes beyond traditional education.

                Students not only gain new skills but also learn how to learn—an essential ability in a rapidly evolving world driven by

                AI. Instead of full-time teachers, we emphasize self-learning, guided by a structured system of peer mentorship,

                industry mentors, and facilitators who act as learning coaches to support and enhance the process.

                Learning at Anish Jadhav Memorial Foundation is not limited to academics. Our student-driven campus provide

                opportunities for real-world leadership and collaboration through the Student Council System, where learners actively

                manage campus responsibilities. This experience helps them develop essential life skills such as communication,

                negotiation, problem-solving, and teamwork, ensuring they are not just job-ready but also equipped to navigate life

                with confidence and independence.

            </motion.p>

        </motion.section>

    );

};







// --- NEW: Vision in Partnership Section Component ---
const VisionInPartnershipSection = () => {
    return (
        <motion.section 
            className={styles.visionPartnershipSection}
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className={styles.visionPartnershipContent}>
                {/* Left Column */}
                <div className={styles.visionPartnershipLeft}>
                    <motion.h2 className={styles.visionPartnershipTitle} variants={baseVariants}>
                        Our Vision in Partnership
                    </motion.h2>

                    <motion.p className={styles.visionPartnershipText} variants={baseVariants} transition={{ delay: 0.1 }}>
                        In partnership with <span className={styles.navgurukulHighlight}>NavGurukul</span>, a pioneering organization committed to providing residential
                        education to underprivileged youth, the foundation has created a comprehensive ecosystem of
                        learning and growth. The partnership ensures that students receive not just education, but a
                        complete transformation.
                    </motion.p>

                    <motion.p className={styles.visionPartnershipText} variants={baseVariants} transition={{ delay: 0.2 }}>
                        This includes residential facilities, nutritious meals, world-class instruction, and career placement
                        support. Today, the foundation stands as a beacon of hope, offering four specialized schools that
                        provide pathways to success in <span className={styles.highlightGreen}>programming, business, education, and second-chance
                        opportunities.</span>
                    </motion.p>

                    
                </div>

                {/* Right Column */}
                <div className={styles.visionPartnershipRight}>
                    {/* Image Block */}
                    <motion.div className={styles.visionPartnershipImageContainer} variants={baseVariants} transition={{ delay: 0.4 }}>
                        <img src={campusImg25} alt="NavGurukul Students" className={styles.visionPartnershipImage} />
                    </motion.div>

                     
                </div>
            </div>
        </motion.section>
    );
};

export default Home;