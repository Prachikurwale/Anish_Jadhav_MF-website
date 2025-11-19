import React from 'react';
import { motion } from 'framer-motion'; 
import { DollarSign, Users, Briefcase, HeartHandshake, Zap } from 'lucide-react'; 

// CSS Module ko import karein (Assuming the same CSS structure/variables)
import styles from './GetInvolved.module.css'; 

const MotionDiv = motion.div;
const MotionSection = motion.section;

// Imports (Reuse the assets and variants from the AboutAnish component)
import FoundationImage from '../assets/campus6.jpg'; 

// === Animation Variants (Reusing the existing variants) ===
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

// Custom Card Component for Get Involved actions - UPDATED FOR SCREENSHOT UI
const ActionCard = ({ title, description, buttonText, link }) => (
    <MotionDiv 
        // styles.actionCard में ही slanted background और yellow color apply होगा
        className={styles.actionCard} 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ 
            scale: 1.02, // Slanted effect के कारण scale 1.02 किया
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' // Updated shadow for skewed card
        }} 
        viewport={{ once: true, amount: 0.3 }}
    >
        {/* IconCircle element removed to match the image */}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {/* Button: Zap icon removed, style now controlled solely by CSS */}
        <a href={link} className={styles.cardButton}>
            {buttonText}
        </a>
    </MotionDiv>
);

// Timeline Item component (Reused from AboutAnish.js)
// Assuming TimelineItem is defined in the same file or imported correctly.
const TimelineItem = ({ title, content, tag, tagColorClass }) => (
    <MotionDiv 
      className={styles.timelineItem} 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
      }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.timelineTagWrapper}>
        <div className={`${styles.timelineTag} ${tagColorClass}`}> 
          {tag}
        </div>
      </div>
      
      <div className={styles.timelineContent}> 
        <h3 className={styles.timelineTitle}>{title}</h3> 
        <p className={styles.timelineText}>{content}</p> 
      </div>
    </MotionDiv>
  );

// BubbleBackground Component (Reused from AboutAnish.js)
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
          background-color: rgba(82, 177, 68, 0.3); 
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


const GetInvolved = () => {
  return (
    <div className={styles.pageContainer}> 
      
      {/* Section 1: Hero - Get Involved (UNCHANGED) */}
      <section 
        className={styles.heroSection} 
        style={{ 
          backgroundImage: `url(${FoundationImage})`, // Using Foundation image for a different feel
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Overlay adjusted for a deep blue/purple tint on the image */}
        <div 
          className={styles.heroOverlay}
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(30, 0, 60, 0.8) 0%, rgba(51, 18, 75, 0.7) 40%, rgba(51, 18, 75, 0.4) 100%)',
            mixBlendMode: 'multiply' 
          }}
        ></div>
        
        <div className={`${styles.container} ${styles.heroContentWrapper}`}>
          <div className={styles.heroGrid} style={{ gridColumn: '1 / -1' }}>
            <MotionDiv 
              className={styles.heroTextContainer}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ gridColumn: '1 / -1' }} 
            >
              <MotionDiv variants={itemVariants} className={styles.heroAccentLine}></MotionDiv>

              <MotionDiv variants={itemVariants}>
                <h1 className={styles.heroHeading}>
                  Be the Change. <span className={styles.heroHeadingSpan}>Get Involved</span> 🤝
                </h1>
              </MotionDiv>
              
              <MotionDiv variants={itemVariants}>
                <p className={styles.heroSubtitle}>
                  Your commitment, whether through time, resources, or expertise, is the driving force behind Anish's legacy. Join us in transforming lives and building a brighter future.
                </p>
              </MotionDiv>

              <MotionDiv variants={itemVariants} className={styles.heroButtonContainer}> 
                <a href="#donate" className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>
                  Donate Today
                </a>
                <a href="#volunteer" className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
                  Become a Volunteer
                </a>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* --- Content Container Start --- */}
      <div className={styles.container}>
      
        {/* === Section 2: Ways to Give (Cards) === */}
        <MotionSection 
            className={styles.storySection} // Reusing storySection styling for padding
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <MotionDiv variants={itemVariants} className={styles.textCenter} id="donate">
                <h2 className={styles.storyHeading}>
                    Ways You Can Make an Impact
                </h2>
                <p className={styles.sectionSubtitle}>
                    Every action fuels a dream. Choose the path that speaks to you.
                </p>
            </MotionDiv>

            <MotionDiv 
                className={styles.actionCardGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <ActionCard
                    title="Financial Donation"
                    description="Provide scholarships, fund residential facilities, and cover operational costs for our students."
                    buttonText="Donate Now"
                    link="/donate"
                />
                <ActionCard
                    title="Volunteer Your Time"
                    description="Mentor students, teach a workshop, or assist with campus logistics. Your time is invaluable."
                    buttonText="Join US"
                    link="/volunteer"
                />
                <ActionCard
                    title="Corporate Partnership"
                    description="Partner with us for CSR activities, placement opportunities, or sponsored programs."
                    buttonText="Partner"
                    link="/partnerships"
                />
            </MotionDiv>

        </MotionSection>

        {/* === Section 3: Volunteer Roles (Timeline format - UNCHANGED) === */}
        <MotionSection 
            className={styles.timelineSection} // Reusing timelineSection styling
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            id="volunteer"
        >
            <h2 className={styles.timelineHeading}> 
                Volunteer Roles: Lend Your Expertise
            </h2>

            <div className={styles.timelineContainer}>
                <TimelineItem
                    tag="Education"
                    title="Subject Mentor"
                    content="Provide one-on-one or group mentoring in technical skills (coding, data) or soft skills (communication, interview prep)."
                    tagColorClass={styles.tagBlue}
                />
                
                <TimelineItem
                    tag="Support"
                    title="Residential Assistant"
                    content="Help manage residential life, organize recreational activities, and ensure a supportive environment on campus."
                    tagColorClass={styles.tagPurple}
                />
                
                <TimelineItem
                    tag="Strategy"
                    title="Project Consultant"
                    content="Offer professional advice on fundraising strategy, digital marketing, or administrative process improvement."
                    tagColorClass={styles.tagOrange}
                />

                <TimelineItem
                    tag="Placement"
                    title="Career Coach"
                    content="Conduct mock interviews, review resumes, and connect students with entry-level job opportunities in your network."
                    tagColorClass={styles.tagGreen}
                />
            </div>
        </MotionSection>
        
        {/* === Section 4: Partnership Impact (Reusing Partnership Section - UNCHANGED) === */}
        <MotionSection 
            className={styles.partnershipSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
        >
            <BubbleBackground />

            <div className={styles.partnershipContent}> 
                <h2 className={styles.partnershipHeading}> 
                Join Hands in Partnership ❤️
                </h2>
                <p className={styles.partnershipText}>
                The Anish Jadhav Memorial Foundation thrives on strong collaborations. By partnering with us, you directly contribute to sustainable change, providing not just education, but an entire ecosystem of support, including housing, food, and career placement for marginalized youth.
                </p>
                <p className={styles.partnershipText}>
                We welcome institutions, corporations, and community groups to explore bespoke partnership models, ensuring mutual growth and maximum impact on our students' futures.
                </p>
                <a href="/contact" className={`${styles.heroButton} ${styles.heroButtonPrimary}`} style={{ marginTop: '20px' }}>
                    Discuss Partnership
                </a>
            </div>
        </MotionSection>

      </div> {/* End container */}
    </div>
  );
};

export default GetInvolved;