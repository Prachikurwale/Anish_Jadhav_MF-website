import React from 'react';
import { CheckCircle, Code, Briefcase, GraduationCap, RefreshCw } from 'lucide-react';

// Reusable component for displaying Curriculum or Outcomes lists
const ListSection = (props) => {
  // 💡 FIX 1: प्रॉप को डीस्ट्रक्चर करें ताकि ESLint 'Icon' को यूज्ड समझे
  const { title, items, icon: Icon } = props;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
      <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-600">
            {/* Icon प्रॉप का उपयोग यहाँ किया जा रहा है */}
            <Icon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1 mr-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Reusable component for the four individual School Cards
const ProgramCard = (props) => {
  // 💡 FIX 2: प्रॉप को डीस्ट्रक्चर करें ताकि ESLint 'Icon' को यूज्ड समझे
  const { icon: Icon, title, tagline, description, duration, residential, curriculum, outcomes, isReversed = false } = props;
  
  // Decide the layout order based on isReversed prop
  const contentOrder = isReversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex flex-col ${contentOrder} items-center gap-8 md:gap-12 py-10 my-10 border-b border-gray-200 last:border-b-0`}>
      
      {/* School Description (Left/Right) */}
      <div className="md:w-1/2 space-y-4">
        <div className="p-4 bg-yellow-100 rounded-full w-fit shadow-md">
          {/* Icon प्रॉप का उपयोग यहाँ किया जा रहा है */}
          <Icon className="w-8 h-8 text-yellow-700" />
        </div>
        
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-xl font-semibold text-blue-600">{tagline}</p>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        
        {/* Details Tag */}
        <div className="flex space-x-6 text-sm font-medium pt-3 text-gray-600">
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-1 text-blue-500" /> {duration}
          </span>
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-1 text-blue-500" /> {residential}
          </span>
        </div>
      </div>

      {/* Curriculum & Outcomes (Right/Left) */}
      <div className="md:w-1/2 space-y-8">
        {/* ListSection में Icon प्रॉप को CheckCircle आइकन दिया गया है */}
        <ListSection title="Curriculum Highlights" items={curriculum} icon={CheckCircle} />
        <ListSection title="Program Outcomes" items={outcomes} icon={CheckCircle} />
      </div>

    </div>
  );
};

const PROGRAMS_DATA = [
  {
    icon: Code,
    title: "School of Programming",
    tagline: "Build the Future with Code",
    description: "Our flagship program transforms complete beginners into skilled software developers ready for the tech industry. Learn in-demand programming languages and modern development practices through hands-on projects and mentorship.",
    duration: "12-18 months",
    residential: "Residential",
    curriculum: [
      "JavaScript Fundamentals & ES6+", "React & Modern Frontend Development", "Python Programming", 
      "Node.js & Backend Development", "Database Design & SQL", "Git & Version Control", 
      "Web APIs & RESTful Services", "Data Structures & Algorithms", "Testing & Debugging", "Professional Development Practices"
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
      "Business Strategy & Planning", "Financial Management & Accounting", "Marketing & Brand Development", 
      "Operations Management", "Leadership & Team Building", "Digital Marketing & Social Media", 
      "Sales & Customer Relations", "Business Analytics", "Entrepreneurship Fundamentals", "Project Management"
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
      "Pedagogy & Teaching Methods", "Curriculum Design & Development", "Child Psychology & Development", 
      "Classroom Management", "Educational Technology", "Assessment & Evaluation", 
      "Inclusive Education", "Subject-Specific Training", "Communication Skills", "Educational Leadership"
    ],
    outcomes: [
      "Teaching certification", "Practical classroom experience", "Digital teaching capabilities", "Placement in educational institutions"
    ]
  },
  {
    icon: RefreshCw,
    title: "School of Second Chance",
    tagline: "Rebuild, Relearn, Restart",
    description: "A transformative program for those seeking to restart their career journey. Regardless of your background or past circumstances, this program offers a supportive environment to acquire new skills and opportunities.",
    duration: "Flexible (6-16 months)",
    residential: "Residential",
    curriculum: [
      "Career Assessment & Planning", "Foundational Skill Development", "Digital Literacy", 
      "Communication & Soft Skills", "Industry-Specific Training", "Historical Literacy", 
      "Life Skills & Wellness", "Mentorship Program", "Job Readiness Training", "Personal Development"
    ],
    outcomes: [
      "Renewed career path", "Practical job skills", "Confidence & life skills", "Continued mentorship support"
    ]
  }
];

const OurPrograms = () => {
  return (
    <div className="flex-grow bg-gray-50">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* === Header Section === */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four specialized schools designed to unlock potential and create pathways to success. Each program combines rigorous academics with practical skills and comprehensive support.
          </p>
        </section>

        {/* === Programs Grid/List === */}
        <section>
          {PROGRAMS_DATA.map((program, index) => (
            <ProgramCard 
              key={index}
              {...program}
              // Alternate layout for better visual flow (like the screenshot)
              isReversed={index % 2 !== 0} 
            />
          ))}
        </section>

        {/* === Call to Action Banner === */}
        <section className="mt-20 bg-blue-600 p-12 md:p-16 rounded-3xl shadow-2xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            All programs are completely free for eligible students and include residential facilities, meals, and comprehensive support.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </section>

      </div>
    </div>
  );
};

export default OurPrograms;