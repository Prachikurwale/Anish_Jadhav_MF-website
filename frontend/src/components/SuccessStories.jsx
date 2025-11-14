import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaGraduationCap, FaBriefcase, FaStar, FaTrophy, 
  FaHeart, FaRocket, FaUsers, FaBookOpen 
} from 'react-icons/fa';
import { ArrowRight, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './SuccessStories.module.css';
import { trackSectionView, trackUserEngagement } from '../utils/analytics';
import { usePageAnalytics, useScrollAnalytics } from '../utils/analyticsHooks';

// Import some images for success stories
import successImg1 from '../assets/campus10.jpeg';
import successImg2 from '../assets/campus12.jpeg';
import successImg3 from '../assets/campus13.jpeg';

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

// Bubble Animation Component (same as Campus page)
const BubbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-50">
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
        background-color: rgba(209, 163, 58, 0.3); 
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

// Counting Stats Component
const CountingStats = ({ target, text }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  let numericTarget = 0;
  let suffix = '';
  
  if (target.includes('+')) {
    numericTarget = parseInt(target);
    suffix = '+';
  } else if (target.includes('%')) {
    numericTarget = parseInt(target);
    suffix = '%';
  } else {
    numericTarget = parseInt(target) || 0;
    suffix = '';
  }

  useEffect(() => {
    if (isInView && numericTarget > 0) {
      controls.start({
        opacity: 1,
        transition: { duration: 1.5, ease: "easeOut" }
      });

      const duration = 2000;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(numericTarget * progress);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, numericTarget, controls]);

  return (
    <div ref={ref} className={styles.statBox}>
      <motion.div 
        className={styles.statNumber}
        animate={controls}
        initial={{ opacity: 0 }}
      >
        {count}{suffix}
      </motion.div>
      <div className={styles.statText}>{text}</div>
    </div>
  );
};

// Success Story Card Component
const SuccessStoryCard = ({ story, index, onReadMore }) => {
  const isReversed = index % 2 !== 0;
  
  return (
    <MotionDiv 
      className={`${styles.storyCard} ${isReversed ? styles.reversed : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.storyImageContainer}>
        <img src={story.image} alt={story.name} className={styles.storyImage} />
        <div className={styles.storyOverlay}>
          <FaGraduationCap className={styles.overlayIcon} />
        </div>
      </div>
      
      <div className={styles.storyContent}>
        <div className={styles.storyHeader}>
          <Quote className={styles.quoteIcon} />
          <h3 className={styles.storyName}>{story.name}</h3>
          <p className={styles.storyTitle}>{story.title}</p>
        </div>
        
        <p className={styles.storyQuote}>"{story.quote}"</p>
        
        <div className={styles.storyDetails}>
          <div className={styles.storyMeta}>
            <span className={styles.storyProgram}>{story.program}</span>
            <span className={styles.storyYear}>{story.year}</span>
          </div>
          
          <motion.button 
            className={styles.readMoreBtn}
            onClick={() => onReadMore(story)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </MotionDiv>
  );
};

// Main Component
const SuccessStories = () => {
  const navigate = useNavigate();
  
  // Use analytics hooks
  usePageAnalytics('Success Stories');
  useScrollAnalytics();

  // Sample success stories data
  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      title: "Software Engineer at TechCorp",
      program: "School of Programming",
      year: "2022",
      quote: "NavGurukul transformed my life completely. From having no coding experience to landing my dream job, the journey has been incredible.",
      image: successImg1,
      fullStory: "Priya came from a small village with no access to computers..."
    },
    {
      id: 2,
      name: "Rahul Kumar",
      title: "Digital Marketing Specialist",
      program: "School of Business",
      year: "2023",
      quote: "The practical approach and real-world projects prepared me for the challenges in the digital marketing industry.",
      image: successImg2,
      fullStory: "Rahul's journey from a high school dropout to a successful professional..."
    },
    {
      id: 3,
      name: "Sneha Patel",
      title: "Community Educator",
      program: "School of Education",
      year: "2022",
      quote: "I learned not just skills, but how to empower others and create positive change in my community.",
      image: successImg3,
      fullStory: "Sneha's passion for education led her to impact hundreds of students..."
    }
  ];

  const handleReadMore = (story) => {
    trackUserEngagement('Story Read More', { storyName: story.name, program: story.program });
    // Here you could navigate to a detailed story page or show a modal
    console.log('Read more about:', story.name);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Banner Section */}
      <MotionSection 
        className={styles.section}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        onViewportEnter={() => trackSectionView('Success Stories Banner', 'Success Stories')}
      >
        <div className={styles.banner}>
          <BubbleBackground /> 
          <div className={styles.container}>
            <MotionDiv variants={fadeInUp}>
              <h1 className={styles.bannerTitle}>Success Stories</h1>
              <p className={styles.bannerText}>
                Meet our graduates who have transformed their lives through education and determination. 
                Their journeys inspire us and show the real impact of our programs.
              </p>
            </MotionDiv>
            
            <div className={styles.statsGrid}>
              {[
                { count: "200+", text: "Lives Transformed" },
                { count: "85%", text: "Employment Rate" },
                { count: "₹25,000", text: "Average Salary" }
              ].map((stat, index) => (
                <MotionDiv 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.statBoxContainer}
                >
                  <CountingStats target={stat.count} text={stat.text} />
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Stories Section */}
      <MotionSection 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.container}>
          <MotionDiv variants={fadeInUp} className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Inspiring Journeys</h2>
            <p className={styles.sectionSubtitle}>
              Read about the incredible transformations of our students and graduates
            </p>
          </MotionDiv>

          <div className={styles.storiesContainer}>
            {successStories.map((story, index) => (
              <SuccessStoryCard 
                key={story.id} 
                story={story} 
                index={index}
                onReadMore={handleReadMore}
              />
            ))}
          </div>

          {/* Call to Action */}
          <MotionDiv 
            variants={fadeInUp}
            className={styles.ctaSection}
          >
            <h3 className={styles.ctaTitle}>Ready to Start Your Success Story?</h3>
            <p className={styles.ctaText}>
              Join thousands of students who have transformed their lives through our programs.
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
                onClick={() => navigate('/contact')}
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

export default SuccessStories;
