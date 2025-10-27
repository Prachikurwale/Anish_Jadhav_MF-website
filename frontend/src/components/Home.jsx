import React from 'react';
// Framer Motion ko import karein
import { motion } from 'framer-motion';
// Aapke puraane icons
import { FaEye, FaHeart, FaHandsHelping, FaCode, FaBriefcase, FaGraduationCap, FaRedoAlt } from 'react-icons/fa';
// Screenshot ke liye naye icons
import { FaStar, FaArrowRight, FaUserFriends } from 'react-icons/fa';
import ajmfLogo from '../assets/AJMF.png'; // Aapka logo import


// --- Animation Variants (Top-Level Websites jaisa) ---
const sectionSlideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Har card ke beech 0.2s ka delay
    }
  }
};
// --- End Animation Variants ---


function Home() {
  return (
    // Poore page ka default background white rakhte hain
    <div className="bg-white">

      {/* ===== HERO SECTION START (Aapka Naya Design + Purana Text) ===== */}
      <section className="bg-gray-700 py-16 px-6">
        <div className="container mx-auto">
          {/* Yeh screenshot waala dark rounded box hai */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden min-h-[70vh]">
            
            {/* 1. Background Color (gray-600) */}
            <div className="absolute inset-0 z-0 bg-gray-600"></div>

            {/* 3. Content Container (Animation ke saath) */}
            <motion.div 
              className="relative z-20 h-full flex flex-col md:flex-row items-center justify-between gap-12 p-12 md:p-20 min-h-[70vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
            
              {/* === LEFT SIDE: TEXT CONTENT (Aapka Purana Text) === */}
              <motion.div 
                className="md:w-1/2 text-white text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                
                {/* HEADING (Aapka Purana Text) */}
                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
                  Anish Jadhav <br /> Memorial Foundation
                </h1>
                
                {/* SUBHEADING (Aapka Purana Text) */}
                <p className="font-body text-xl md:text-2xl text-gray-300 mb-10">
                  A Legacy of Hope. A Future of Opportunity.
                </p>
                
                {/* BUTTONS (Screenshot jaisa style) */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-body font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out flex items-center justify-center">
                    Learn More
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-body font-bold text-lg py-3 px-8 rounded-lg transform hover:-translate-y-1 transition duration-300 ease-in-out flex items-center justify-center">
                    Get Involved
                  </button>
                </div>
              </motion.div>

              {/* === RIGHT SIDE: AJMF LOGO (Animated) === */}
              <motion.div 
                className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Yahan aapka AJMF.png logo hai */}
                <img 
                  src={ajmfLogo} 
                  alt="AJMF Logo"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain" 
                />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== HERO SECTION END ===== */}
      

      {/* ===== OUR MISSION SECTION START (Naya Style) ===== */}
      <motion.section 
        className="py-20 px-6 bg-gray-800" // Dark background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div 
              className="p-8 bg-gray-700 rounded-lg shadow-lg" // Dark card
              variants={sectionSlideInUp}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-6">
                <FaEye className="text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="font-body text-gray-300">
                To empower underprivileged youth with education and skills to transform their lives and communities.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="p-8 bg-gray-700 rounded-lg shadow-lg" // Dark card
              variants={sectionSlideInUp}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="font-body text-gray-300">
                Built on compassion, excellence, and the enduring memory of Anish Jadhav's spirit and dreams.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="p-8 bg-gray-700 rounded-lg shadow-lg" // Dark card
              variants={sectionSlideInUp}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-6">
                <FaHandsHelping className="text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Our Impact</h3>
              <p className="font-body text-gray-300">
                Creating lasting change through partnerships with NavGurukul and dedication to educational excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Box */}
          <motion.div 
            className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
            variants={sectionSlideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-body text-gray-300 leading-relaxed">
              The Anish Jadhav Memorial Foundation was established by <strong className="font-semibold text-white">Brigadier Kishor Jadhav</strong> in loving memory of his son, Anish. In partnership with NavGurukul, we provide comprehensive residential education programs that equip underprivileged youth with the skills, knowledge, and opportunities they need to build successful careers and meaningful lives. Our foundation is more than an educational institution—it's a beacon of hope, transforming grief into purpose and creating a lasting legacy that touches countless lives.
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* ===== OUR MISSION SECTION END ===== */}
      

      {/* ===== OUR PROGRAMS SECTION START (Naya Style) ===== */}
      <motion.section 
        className="py-20 px-6 bg-gray-900" // Alag dark background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">Our Programs</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>
          <p className="font-body text-lg text-gray-300 mb-12">
            Four transformative schools designed to unlock potential and create opportunities
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Program Card 1 */}
            <motion.div 
              className="p-8 bg-gray-800 rounded-lg shadow-lg" // Dark card
              variants={sectionSlideInUp}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-6">
                <FaCode className="text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">School of Programming</h3>
              <p className="font-body text-gray-300 mb-4">
                Master modern programming languages and frameworks to build a career in software development.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Javascript</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">React.js</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Node.js</span>
              </div>
            </motion.div>

            {/* Program Card 2 */}
            <motion.div 
              className="p-8 bg-gray-800 rounded-lg shadow-lg" // Dark card
              variants={sectionSlideInUp}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-6">
                <FaBriefcase className="text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">School of Business</h3>
              <p className="font-body text-gray-300 mb-4">
                Develop entrepreneurial skills and business acumen to create opportunities and drive innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Business Strategy</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Finance</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Marketing</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Management</span>
              </div>
            </motion.div>

            {/* Program Card 3 */}
            <motion.div 
              className="p-8 bg-gray-800 rounded-lg shadow-lg" // Dark card
              variants={sectionSlideInUp}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">School of Education</h3>
              <p className="font-body text-gray-300 mb-4">
                Transform lives through education and empower the next generation of learners and educators.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Teaching Methods</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Curriculum Design</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Child Psychology</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Education Tech</span>
              </div>
            </motion.div>

            {/* Program Card 4 */}
            <motion.div 
              className="p-8 bg-gray-800 rounded-lg shadow-lg" // Dark card
              variants={sectionSlideInUp}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-6">
                <FaRedoAlt className="text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">School of Second Chance</h3>
              <p className="font-body text-gray-300 mb-4">
                A fresh start for those seeking to rebuild their future with new skills and opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Career Transition</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Skill Development</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Mentorship</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Life Skills</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* ===== OUR PROGRAMS SECTION END ===== */}
      

      {/* ===== CAMPUS LIFE SECTION START (Naya Style) ===== */}
      <motion.section 
        className="py-20 px-6 bg-gray-800" // Dark background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionSlideInUp}
      >
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">Campus Life</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="font-body text-lg text-gray-300 mb-12">
            A nurturing residential environment where students thrive
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={cardStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[...Array(6)].map((_, i) => ( 
              <motion.div 
                key={i} 
                className="p-6 bg-gray-700 rounded-lg shadow-lg aspect-video flex items-center justify-center 
                                   hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                variants={sectionSlideInUp}
              >
                {/* Placeholder icon */}
                <svg className="w-1/3 h-1/3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            className="mt-16 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center mx-auto"
            variants={sectionSlideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Explore Our Campus 
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </motion.button>
        </div>
      </motion.section>
      {/* ===== CAMPUS LIFE SECTION END ===== */}

    </div>
  );
}

export default Home;



