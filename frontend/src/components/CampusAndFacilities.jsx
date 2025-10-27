import React from 'react';
// 💡 Framer Motion import for animations
import { motion } from 'framer-motion';
// In icons ko import karna zaroori hai
import { 
  FaHome, FaBook, FaLaptop, FaUsers, FaUtensils, FaDumbbell, 
  FaBuilding, FaChalkboardTeacher, FaNetworkWired, FaBookOpen, 
  FaHeartbeat, FaWifi 
} from 'react-icons/fa';

// Use motion components
const MotionDiv = motion.div;
const MotionSection = motion.section;

// === Animation Variants ===
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

// Helper component for Facility Icons (to apply consistent styling)
const FacilityIcon = ({ icon }) => (
    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#656b75] flex items-center justify-center border-2 border-[#5a6067] shadow-xl">
        <span className="text-white text-3xl">{icon}</span>
    </div>
);

// Helper component for Gallery Items
const GalleryItem = ({ item, index }) => (
  <MotionDiv 
    key={index} 
    className="rounded-lg p-8 flex flex-col items-center justify-center aspect-video cursor-pointer"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 20px rgba(0,0,0,0.5), inset 0 0 15px rgba(255,255,255,0.05)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
    }}
    // 💡 UI UPDATE: Deep Black/Dark-Gray for gallery boxes
    style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
  >
    <div className="text-[#656b75] text-5xl mb-4">{item.icon}</div>
    <h3 className="font-body text-xl font-semibold text-white">{item.text}</h3>
  </MotionDiv>
);


function CampusAndFacilities() {

  // Section 1 Gallery Data (Data remains the same)
  const galleryItems = [
    { icon: <FaHome />, text: "Campus Overview" },
    { icon: <FaBook />, text: "Classroom Learning" },
    { icon: <FaLaptop />, text: "Computer Lab" },
    { icon: <FaUsers />, text: "Student Collaboration" },
    { icon: <FaUtensils />, text: "Dining Hall" },
    { icon: <FaDumbbell />, text: "Recreation Area" },
  ];

  // Section 2 Facilities Data (Data remains the same)
  const facilities = [
    { icon: <FaBuilding />, title: "Residential Facilities", description: "Comfortable, safe dormitories with modern amenities. Students live on campus in a supportive community environment.", items: ["Shared and private rooms", "Climate-controlled spaces", "24/7 security", "Housekeeping services"] },
    { icon: <FaChalkboardTeacher />, title: "Modern Classrooms", description: "State-of-the-art learning spaces equipped with the latest technology and designed for collaborative learning.", items: ["Smart boards", "Comfortable seating", "Natural lighting", "Audio-visual equipment"] },
    { icon: <FaLaptop />, title: "Computer Labs", description: "Fully-equipped computer labs with high-speed internet and industry-standard software for hands-on learning.", items: ["Latest hardware", "Software licenses", "High-speed internet", "24/7 lab access"] },
    { icon: <FaBookOpen />, title: "Library & Study Spaces", description: "A comprehensive library with both physical and digital resources, plus quiet study areas for focused learning.", items: ["Extensive book collection", "Digital resources", "Study rooms", "Reading areas"] },
    { icon: <FaUtensils />, title: "Dining Hall", description: "Nutritious, balanced meals served three times daily in a spacious dining facility that accommodates all students.", items: ["Healthy meals", "Vegetarian options", "Clean environment", "Community dining"] },
    { icon: <FaDumbbell />, title: "Recreation & Sports", description: "Sports facilities and recreational areas for physical fitness and leisure activities to maintain work-life balance.", items: ["Indoor games", "Outdoor sports", "Fitness equipment", "Recreation room"] },
    { icon: <FaHeartbeat />, title: "Health & Wellness", description: "On-campus health facilities and counseling services to ensure student well-being and mental health support.", items: ["Medical care", "Counseling services", "Wellness programs", "First-aid"] },
    { icon: <FaWifi />, title: "High-Speed Internet", description: "Campus-wide high-speed WiFi connectivity enabling students to access learning resources anytime, anywhere.", items: ["24/7 connectivity", "Multiple access points", "Secure network", "Technical support"] },
  ];

  // Section 3 Schedule Data (Data remains the same)
  const dailySchedule = [
    { time: "7:00 AM", activity: "Breakfast & Morning Routine" },
    { time: "9:00 AM", activity: "Classes & Workshops" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM", activity: "Practical Sessions & Projects" },
    { time: "6:00 PM", activity: "Sports & Recreation" },
    { time: "7:30 PM", activity: "Dinner" },
    { time: "8:30 PM", activity: "Study Time & Personal Projects" },
  ];

  // Section 3 Support Data (Data remains the same)
  const studentSupport = [
    { title: "Academic Mentorship", description: "Personal guidance from experienced instructors" },
    { title: "Career Counseling", description: "Help with career planning and job placement" },
    { title: "Peer Learning Groups", description: "Collaborative study and project teams" },
    { title: "Mental Health Support", description: "Professional counseling services available" },
    { title: "Technical Workshops", description: "Regular skill-building sessions" },
    { title: "Community Events", description: "Social gatherings and celebrations" },
  ];


  return (
    // 💡 UI UPDATE: Main page background set to the soft dark gradient (Faded Black)
    <MotionDiv 
        className="flex-grow text-white" 
        style={{ backgroundImage: 'linear-gradient(180deg, #1f1f1f 0%, #2b2b2b 100%)' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      
      {/* ===== SECTION 1: CAMPUS GALLERY ===== */}
      <MotionSection 
        className="py-20 px-6" // Background already handled by the main div
        variants={containerVariants} 
      >
        <div className="container mx-auto text-center">
          
          <MotionDiv variants={itemVariants}>
            <h1 className="font-heading text-5xl font-bold text-white mb-4">
              Campus & Facilities
            </h1>
            {/* 💡 UI UPDATE: Accent line color change */}
            <div className="w-24 h-1 bg-[#656b75] mx-auto mb-8"></div>
            <p className="font-body text-lg text-gray-400 max-w-3xl mx-auto mb-16">
              A comprehensive residential campus designed to provide students with everything they need to focus 
              on learning, growing, and building their future.
            </p>
          </MotionDiv>

          <MotionDiv variants={itemVariants}>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Campus Gallery
            </h2>
            {/* 💡 UI UPDATE: Accent line color change */}
            <div className="w-24 h-1 bg-[#656b75] mx-auto mb-12"></div>
          </MotionDiv>

          {/* GALLERY GRID */}
          <MotionDiv variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} item={item} index={index} />
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ===== SECTION 2: WORLD-CLASS FACILITIES ===== */}
      <MotionSection 
        className="py-20 px-6" // Background already handled by the main div
        variants={containerVariants}
      >
        <div className="container mx-auto text-center">
          <MotionDiv variants={itemVariants}>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              World-Class Facilities
            </h2>
            {/* 💡 UI UPDATE: Accent line color change */}
            <div className="w-24 h-1 bg-[#656b75] mx-auto mb-8"></div>
            <p className="font-body text-lg text-gray-400 max-w-3xl mx-auto mb-16">
              Every aspect of our campus is designed to support student success, from academics to wellness.
            </p>
          </MotionDiv>

          {/* FACILITIES GRID */}
          <MotionDiv variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {facilities.map((facility, index) => (
              <MotionDiv 
                key={index} 
                className="rounded-lg shadow-lg p-8 flex items-start space-x-6 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
                // 💡 UI UPDATE: Deep Black/Dark-Gray for facility cards
                style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
              >
                <FacilityIcon icon={facility.icon} />
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-3">{facility.title}</h3>
                  <p className="font-body text-gray-400 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.items.map((item, i) => (
                      <li key={i} className="flex items-center font-body text-gray-300">
                        {/* 💡 UI UPDATE: Bullet color change (using theme accent) */}
                        <span className="text-[#656b75] text-xs mr-3">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ===== SECTION 3: LIVING & LEARNING ===== */}
      <MotionSection variants={containerVariants}>
        {/* Blue Banner -> THEME ACCENT BANNER */}
        <div 
          className="text-white py-16 px-6 text-center"
          // 💡 UI UPDATE: Theme accent color gradient
          style={{ backgroundImage: 'linear-gradient(135deg, #656b75 0%, #4a5057 100%)' }}
        >
          <div className="container mx-auto">
            <MotionDiv variants={itemVariants}>
              <h2 className="font-heading text-4xl font-bold mb-4">Living & Learning Together</h2>
              <p className="font-body text-lg max-w-3xl mx-auto mb-10">
                Our residential model creates a tight-knit community where students support each 
                other, learn together, and build lifelong friendships. The campus becomes home, 
                and fellow students become family.
              </p>
            </MotionDiv>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat Boxes */}
              {[
                { count: "100%", text: "Free for Students" },
                { count: "24/7", text: "Campus Support" },
                { count: "All-Inclusive", text: "Meals & Amenities" }
              ].map((stat, index) => (
                <MotionDiv key={index} variants={itemVariants}>
                  <h3 className="font-heading text-5xl font-bold mb-2">{stat.count}</h3>
                  <p className="font-body text-lg">{stat.text}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        {/* Campus Life Section */}
        <div className="py-20 px-6">
          <div className="container mx-auto text-center">
            <MotionDiv variants={itemVariants}>
              <h2 className="font-heading text-4xl font-bold text-white mb-4">
                Campus Life
              </h2>
              {/* 💡 UI UPDATE: Accent line color change */}
              <div className="w-24 h-1 bg-[#656b75] mx-auto mb-12"></div>
            </MotionDiv>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Daily Schedule Card */}
              <MotionDiv 
                className="rounded-lg shadow-lg p-8 border-t-4 border-[#656b75] cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
                // 💡 UI UPDATE: Deep Black/Dark-Gray for card
                style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
              >
                <h3 className="font-heading text-2xl font-semibold text-white mb-6">Daily Schedule</h3>
                <div className="space-y-4">
                  {dailySchedule.map((item, index) => (
                    <div key={index} className="flex items-center">
                      {/* 💡 UI UPDATE: Text color change */}
                      <span className="font-body font-semibold text-[#656b75] w-24">{item.time}</span>
                      <span className="font-body text-gray-300">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </MotionDiv>

              {/* Student Support Card */}
              <MotionDiv 
                className="rounded-lg shadow-lg p-8 border-t-4 border-[#656b75] cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}
                // 💡 UI UPDATE: Deep Black/Dark-Gray for card
                style={{ backgroundImage: 'linear-gradient(145deg, #121212 0%, #1a1a1a 100%)', border: '1px solid #282828' }}
              >
                <h3 className="font-heading text-2xl font-semibold text-white mb-6">Student Support</h3>
                <div className="space-y-3">
                  {studentSupport.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-body font-semibold text-white">{item.title}</h4>
                      <p className="font-body text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>

    </MotionDiv>
  );
}

export default CampusAndFacilities;
