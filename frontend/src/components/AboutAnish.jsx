import React from 'react';
import { motion } from 'framer-motion'; 
// CSS Module ko import karein
import styles from './AboutAnish.module.css';

const MotionDiv = motion.div;
const MotionSection = motion.section;

// Imports
import AnishImage from '../assets/Anish.png'; 
import FoundationImage from '../assets/Foundation.png'; 
import { Heart } from 'lucide-react'; // Star, Users use nahi ho rahe the

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
const heartBeat = {
  beat: {
    scale: [1, 1.2, 1, 1.1, 1], 
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.7, 1]
    }
  }
};
// === End Animation Variants ===


// Mock image placeholder component
const ImagePlaceholder = () => (
  <MotionDiv 
    className={styles.imagePlaceholder} // 👈 CSS Module
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    style={{ 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.28), 0 0 15px rgba(255,255,255,0.1) inset' 
    }}
  >
    <img 
        src={AnishImage} 
        alt="In Loving Memory of Anish Jadhav" 
        className="" // 👈 img tag par classes ki zaroorat nahi, parent handle kar raha hai
    />
  </MotionDiv>
);

// Timeline Item component
const TimelineItem = ({ title, content, tag, isPrimary = false }) => (
  <MotionDiv 
    className={styles.timelineItem} // 👈 CSS Module
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ 
        scale: 1.02, 
        rotateX: 1, 
        boxShadow: "0 10px 20px rgba(0,0,0,0.3)" 
    }} 
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.timelineTagWrapper}>
      {/* 👈 Conditional CSS Modules */}
      <div className={`
        ${styles.timelineTag}
        ${isPrimary ? styles.tagPrimary : styles.tagDefault} 
      `}>
        {tag}
      </div>
    </div>
    
    <div className={styles.timelineContent}> 
      <h3 className={styles.timelineTitle}>{title}</h3> 
      <p className={styles.timelineText}>{content}</p> 
    </div>
  </MotionDiv>
);

// --- BubbleBackground Component (No Change) ---
// Yeh Tailwind use nahi kar raha tha, isliye ise chhedne ki zaroorat nahi hai.
const BubbleBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes float {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
            }
            .bubble {
                position: absolute;
                bottom: -150px;
                width: 40px;
                height: 40px;
                background-color: rgba(101, 107, 117, 0.15);
                border-radius: 50%;
                animation: float 25s infinite linear;
            }
            .bubble:nth-child(1) { left: 10%; animation-duration: 25s; width: 60px; height: 60px; opacity: 0.4; }
            .bubble:nth-child(2) { left: 40%; animation-duration: 35s; width: 80px; height: 80px; opacity: 0.3; }
            .bubble:nth-child(3) { left: 70%; animation-duration: 30s; opacity: 0.5; }
            .bubble:nth-child(4) { left: 20%; animation-duration: 40s; width: 50px; height: 50px; opacity: 0.2; }
            .bubble:nth-child(5) { left: 85%; animation-duration: 20s; opacity: 0.35; }
        `}} />
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
    </div>
);
// --- End BubbleBackground Component ---


const AboutAnish = () => {
  return (
    <div 
        className={styles.pageContainer} 
        style={{ 
            backgroundImage: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)' 
        }}
    > 
      
        {/* Section 1: Hero */}
        <section 
            className={styles.heroSection} 
            style={{ 
                backgroundImage: `url(${FoundationImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
        >
          {/* Overlay */}
          <div 
            className={styles.heroOverlay}
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(15, 15, 15, 0.9) 0%, rgba(15, 15, 15, 0.7) 40%, rgba(15, 15, 15, 0.4) 100%)',
                mixBlendMode: 'multiply' 
            }}
          ></div>
          
          {/* Content Wrapper */}
          <div className={`${styles.container} ${styles.heroContentWrapper}`}>
            <div className={styles.heroGrid}>
              
              {/* Hero Text */}
              <MotionDiv 
                className={styles.heroTextContainer}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <MotionDiv variants={itemVariants} className={styles.heroAccentLine}></MotionDiv>

                <MotionDiv variants={itemVariants}>
                    <h1 className={styles.heroHeading}>
                      In Loving Memory of <span className={styles.heroHeadingSpan}>Anish Jadhav</span> 
                    </h1>
                </MotionDiv>
                
                <MotionDiv variants={itemVariants}>
                    <p className={styles.heroSubtitle}>
                      Anish Jadhav was more than a beloved son—he was a light in the lives of all who knew him. His spirit, warmth, and dreams continue to inspire the mission of this foundation.
                    </p>
                </MotionDiv>

                <MotionDiv variants={itemVariants} className={styles.heroButtonContainer}> 
                    <button className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>
                        Learn More
                    </button>
                    <button className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
                        Get Involved
                    </button>
                </MotionDiv>

              </MotionDiv>
              
              {/* Image Placeholder */}
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageWrapper}>
                  <ImagePlaceholder />
                </div>
              </div>
            </div> {/* End grid */}
          </div> {/* End content wrapper */}
        </section>

        {/* --- Content Container Start --- */}
        <div className={styles.container}>
        
            {/* === Section 2: The Story === */}
            <MotionSection 
                className={styles.storySection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                style={{ 
                    backgroundImage: 'linear-gradient(145deg, #1c1c1c 0%, #2a2a2a 100%)', 
                    border: '1px solid #2f2f2f'
                }}
            >
              <MotionDiv variants={itemVariants} className={styles.textCenter}>
                  <h2 className={styles.storyHeading}>
                      The Story Behind the Foundation
                  </h2>
              </MotionDiv>
              
              <div className={styles.storyTextContainer}>
                  <MotionDiv variants={itemVariants} className={styles.storyText}>
                  The Anish Jadhav Memorial Foundation was born from a profound love and an unwavering commitment to honor the memory of <strong>Anish Jadhav</strong>. Established by his father, <strong>Brigadier Kishor Jadhav</strong>, this foundation represents the transformation of personal grief into a powerful force for positive change.
                  </MotionDiv>
                  
                  <MotionDiv variants={itemVariants} className={styles.storyText}>
                  Anish was a young man of exceptional character, compassion, and potential. His life, though tragically cut short, left an indelible mark on everyone he encountered. His dreams, his kindness, and his belief in the power of education and opportunity became the cornerstone of what would become this foundation.
                  </MotionDiv>
                  
                  <MotionDiv 
                      variants={itemVariants}
                      className={styles.storyQuote} 
                      whileHover={{ scale: 1.01, boxShadow: '0 8px 15px rgba(0,0,0,0.3)' }} 
                  >
                  <p className={styles.storyQuoteText}>
                      "In honoring Anish's memory, we create a future filled with hope. Every student we empower, every life we transform, is a living testament to his spirit and the dreams he carried."
                  </p>
                  <p className={styles.storyQuoteAuthor}>
                      — Brigadier Kishor Jadhav
                  </p>
                  </MotionDiv>
              </div>
            </MotionSection>

            {/* === Section 3: Partnership === */}
            <MotionSection 
                className={styles.partnershipSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                style={{ 
                    backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 70%, #2f2f2f 100%)', 
                }}
            >
                <BubbleBackground />

                <div className={styles.partnershipContent}> 
                    <h2 className={styles.partnershipHeading}> 
                    Our Vision in Partnership
                    </h2>
                    <p className={styles.partnershipText}>
                    In partnership with <strong>NavGurukul</strong>, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth. The partnership ensures that students receive not just education, but a complete transformation—from residential facilities and nutritious meals to world-class instruction and career placement support.
                    </p>
                    <p className={styles.partnershipText}>
                    Today, the Anish Jadhav Memorial Foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in <strong>programming, business, education, and second-chance opportunities</strong>. Each student who walks through our doors carries forward Anish's legacy, turning dreams into reality and transforming their lives and communities.
                    </p>
                </div>
            </MotionSection>
            
            {/* === Section 4: Timeline === */}
            <MotionSection 
                className={styles.timelineSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                style={{ 
                    backgroundImage: 'linear-gradient(145deg, #1c1c1c 0%, #2a2a2a 100%)', 
                    border: '1px solid #2f2f2f'
                }}
            >
              <h2 className={styles.timelineHeading}> 
                  A Timeline of Impact
              </h2>

              <div className={styles.timelineContainer}>
                  <TimelineItem
                  tag="The Beginning"
                  title="Foundation Established"
                  content="Brigadier Kishor Jadhav establishes the Anish Jadhav Memorial Foundation in loving memory of his son, partnering with NavGurukul to create a lasting impact."
                  />
                  
                  <TimelineItem
                  tag="Building Hope"
                  title="Campus Development"
                  content="Construction and development of comprehensive residential facilities, creating a nurturing environment for underprivileged youth to learn and grow."
                  />
                  
                  <TimelineItem
                  tag="Programs Launch"
                  title="Four Schools Open"
                  content="Launch of the School of Programming, School of Business, School of Education, and School of Second Chance, offering diverse pathways to success."
                  isPrimary={true}
                  />

                  <TimelineItem
                  tag="Today"
                  title="Transforming Lives"
                  content="Continuing to empower students with education, skills, and opportunities, creating a ripple effect of positive change across communities."
                  />
              </div>
            </MotionSection>

            {/* === Section 5: Legacy === */}
            <MotionSection 
                className={styles.legacySection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                style={{ 
                    backgroundImage: 'linear-gradient(145deg, #1a1a1a 0%, #0c0c0c 100%)', 
                    border: '1px solid #1f1f1f'
                }}
            >
              <h2 className={styles.legacyHeading}>
                  His Legacy Lives On
              </h2>
              <p className={styles.legacyText}>
                  Every student we educate, every life we transform, every dream we help realize is a tribute to Anish Jadhav. His spirit lives on in the halls of our campus, in the determination of our students, and in the hope we carry forward each day.
              </p>
              <div className={styles.legacyHeartContainer}>
                  <MotionDiv variants={heartBeat} animate="beat">
                      <Heart className={styles.legacyHeart} />
                  </MotionDiv>
              </div>
            </MotionSection>

        </div> {/* End container */}
    </div>
  );
};

export default AboutAnish;










