 import React from 'react';
import { motion } from 'framer-motion'; 
import { Code, Briefcase, ChevronRight, Zap } from 'lucide-react'; // Added Zap for impact
import styles from './SuccessStories.module.css'; // Renamed CSS file for clarity

// --- Animation Variants (Kept for nice transition) ---
const card3DTilt = {
  hidden: { opacity: 0, y: 80, rotateY: 5, transformPerspective: 800 }, 
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

const quoteVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
};


// --- Success Story Data ---
const PREETI_STORY = {
  title: "Meet Preeti: Coding Her Own Future",
  introduction: "Preeti grew up in a small village in Maharashtra, where finishing school felt like the biggest achievement possible. The idea of working in a big city tech company seemed like an impossible dream. But Preeti had a quiet determination to change her path.",
  transformationHeader: "The Transformation at NavGurukul",
  transformationBody: "She joined the Anish Jadhav Memorial Foundation (NavGurukul) School of Programming. The environment was different: student-led, focused on self-learning, and completely free of cost. Preeti didn't just learn to code; she learned problem-solving, teamwork, and, most importantly, confidence.",
  quote: "When I started, I didn't even know how to use a laptop properly. NavGurukul gave me the tools, the support, and the belief that I could learn anything. It wasn't just about Python or JavaScript; it was about building my life.",
  quoteAuthor: "— Preeti",
  jobHeader: "Landing the Dream Job",
  jobBody: "After 18 months of intensive, hands-on learning, Preeti was ready. NavGurukul’s placement assistance program helped prepare her for interviews, focusing on both technical skills and soft skills. Today, Preeti works as a **Junior Software Developer** at a leading tech firm in Pune.",
  conclusion: "Her journey is a powerful reminder: **Where you start doesn't determine where you finish.** With dedication and the right opportunity, anyone can transition from a challenging background to a thriving career in technology.",
  callToAction: "Are you ready to write your own success story? The journey starts here."
};


const SuccessStoryCard = ({ story }) => {
    return (
        <motion.div 
            className={styles.storyCard}
            variants={card3DTilt}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className={styles.storyImageContainer}>
                 {/* Replace this with an actual image of a student or coding environment */}
                <div className={styles.imagePlaceholder}>
                    <Code size={64} className={styles.iconLarge} />
                    <p>Preeti's Journey</p>
                </div>
            </div>

            <div className={styles.storyContent}>
                <h2 className={styles.mainHeading}>🌟 Success Story: From Village Life to Software Developer</h2>
                
                {/* Introduction */}
                <h3 className={styles.storyTitle}>{story.title}</h3>
                <p className={styles.storyText}>{story.introduction}</p>

                {/* Transformation */}
                <h3 className={styles.storySubtitle}>{story.transformationHeader}</h3>
                <p className={styles.storyText}>{story.transformationBody}</p>

                {/* Quote Section */}
                <motion.blockquote 
                    className={styles.storyQuote}
                    variants={quoteVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <ChevronRight size={24} className={styles.quoteIcon} />
                    <p className={styles.quoteText}>{story.quote}</p>
                    <p className={styles.quoteAuthor}>{story.quoteAuthor}</p>
                </motion.blockquote>

                {/* Job Outcome */}
                <h3 className={styles.storySubtitle}>{story.jobHeader}</h3>
                <p className={styles.storyText} dangerouslySetInnerHTML={{ __html: story.jobBody }} />

                {/* Conclusion */}
                <p className={styles.storyText}>{story.conclusion}</p>

                {/* Call to Action */}
                <div className={styles.callToAction}>
                    <p>{story.callToAction}</p>
                    <button className={styles.applyButton}>
                        Learn More <Zap size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};


const SuccessStoriesSection = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <SuccessStoryCard story={PREETI_STORY} />
            </div>
        </div>
    );
};

export default SuccessStoriesSection;