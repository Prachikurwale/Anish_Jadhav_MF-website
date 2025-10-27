import React from 'react';
// Framer Motion ko import karein
import { motion } from 'framer-motion';
import { CheckCircle, Code, Briefcase, GraduationCap, RefreshCw } from 'lucide-react';

// --- Animation Variants ---
// Section ke liye slide-in-up effect
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// Program cards ke liye slide-in effects
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

// List items ke liye stagger effect
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

// === Reusable component for displaying Curriculum or Outcomes lists ===
const ListSection = (props) => {
  const { title, items, icon: Icon } = props;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
      {/* Style Change: Naya border-left style */}
      <h4 className="text-xl font-bold text-gray-800 mb-5 border-l-4 border-purple-500 pl-4">
        {title}
      </h4>
      <motion.ul 
        className="space-y-3"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start text-gray-600" // Style Change: text-gray-600
            variants={itemVariants}
          >
            {/* Style Change: Icon color ko purple kiya */}
            <Icon className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1 mr-2" />
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
  
  // Is component se 'isReversed' hata diya, hum isse parent mein handle karenge
  
  return (
    // 'contentOrder' ko parent mein handle kiya jayega
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-10 my-10 border-b border-gray-200 last:border-b-0">
      
      {/* School Description (Left/Right) */}
      <div className="md:w-1/2 space-y-4">
        {/* Style Change: Icon color ko purple theme kiya */}
        <div className="p-4 bg-purple-100 rounded-full w-fit shadow-md">
          <Icon className="w-8 h-8 text-purple-700" />
        </div>
        
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        {/* Style Change: Tagline ko purple kiya */}
        <p className="text-xl font-semibold text-purple-600">{tagline}</p>
        {/* Style Change: Description ko text-gray-600 kiya */}
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        {/* Details Tag */}
        <div className="flex space-x-6 text-sm font-medium pt-3 text-gray-600">
          <span className="flex items-center">
            {/* Style Change: Icon color ko purple kiya */}
            <CheckCircle className="w-4 h-4 mr-1 text-purple-500" /> {duration}
          </span>
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-1 text-purple-500" /> {residential}
          </span>
        </div>
      </div>

      {/* Curriculum & Outcomes (Right/Left) */}
      <div className="md:w-1/2 space-y-8">
        <ListSection title="Curriculum Highlights" items={curriculum} icon={CheckCircle} />
        <ListSection title="Program Outcomes" items={outcomes} icon={CheckCircle} />
      </div>

    </div>
  );
};

// --- Data (Koi badlaav nahi) ---
const PROGRAMS_DATA = [
  // ... (Aapka poora data jaisa tha waisa hi rahega) ...
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
    <div className="flex-grow bg-gray-50 overflow-x-hidden"> {/* Overflow hidden taaki slide-in animation sahi dikhe */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* === Header Section (Animation Added) === */}
        <motion.section 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants} // Slide-in-up animation
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Our Programs
          </h1>
          {/* Style Change: text-gray-600 */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four specialized schools designed to unlock potential and create pathways to success. Each program combines rigorous academics with practical skills and comprehensive support.
          </p>
        </motion.section>

        {/* === Programs Grid/List (Animation Added) === */}
        <section>
          {PROGRAMS_DATA.map((program, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                // Animation: Har card ko alag direction se slide-in karein
                variants={isReversed ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Jab 20% dikhe tab animate ho
              >
                <ProgramCard 
                  {...program}
                  // isReversed prop ko ProgramCard se hatakar yahan logic daal diya
                  // taaki 'contentOrder' class ProgramCard ke andar apply ho
                />
              </motion.div>
            );
          })}
        </section>

        {/* === Call to Action Banner (Animation & Style Added) === */}
        <motion.section 
          className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-700 p-12 md:p-16 rounded-3xl shadow-2xl text-center" // Style Change: Gradient background
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants} // Slide-in-up animation
        >
          {/* Style Change: text-white */}
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Future?
          </h2>
          {/* Style Change: text-purple-100 */}
          <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
            All programs are completely free for eligible students and include residential facilities, meals, and comprehensive support.
          </p>
          <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </motion.section>

      </div>
    </div>
  );
};

export default OurPrograms;