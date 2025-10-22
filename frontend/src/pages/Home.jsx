import React from 'react';
import { FaEye, FaHeart, FaHandsHelping, FaCode, FaBriefcase, FaGraduationCap, FaRedoAlt } from 'react-icons/fa';

function Home() {
  return (
    // Ek main container, taaki aap ek se zyada section rakh sakein
    <div>
      {/* ===== HERO SECTION START ===== */}
      <section className="bg-gradient-to-br from-white to-gray-50 min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          
          {/* Left Side: Image/Icon Placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center shadow-xl p-2
                        before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-yellow-600 before:border-opacity-50">
            <svg className="w-2/3 h-2/3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Right Side: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
              Anish Jadhav <br /> Memorial Foundation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A Legacy of Hope. A Future of Opportunity.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center mx-auto md:mx-0">
              Learn Our Story 
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>

        </div>
      </section>
      {/* ===== HERO SECTION END ===== */}
      

      {/* ===== AAPKA AGLA SECTION YAHAN SE SHURU HOGA ===== */}
      

   

      {/* ===== OUR MISSION SECTION START ===== */}
      <section className="py-16 px-6 bg-white animate-fade-in-up">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4 animate-slide-in-down">Our Mission</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-12 animate-grow-width"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-zoom-in">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 border-2 border-blue-300">
                <FaEye className="text-blue-600 text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="font-body text-gray-600">
                To empower underprivileged youth with education and skills to transform their lives and communities.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-zoom-in animation-delay-100">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6 border-2 border-yellow-300">
                <FaHeart className="text-yellow-600 text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">Our Values</h3>
              <p className="font-body text-gray-600">
                Built on compassion, excellence, and the enduring memory of Anish Jadhav's spirit and dreams.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-zoom-in animation-delay-200">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 border-2 border-blue-300">
                <FaHandsHelping className="text-blue-600 text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">Our Impact</h3>
              <p className="font-body text-gray-600">
                Creating lasting change through partnerships with NavGurukul and dedication to educational excellence.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-4xl mx-auto animate-fade-in">
            <p className="font-body text-gray-700 leading-relaxed">
              The Anish Jadhav Memorial Foundation was established by <strong className="font-semibold text-gray-800">Brigadier Kishor Jadhav</strong> in loving memory of his son, Anish. In partnership with NavGurukul, we provide comprehensive residential education programs that equip underprivileged youth with the skills, knowledge, and opportunities they need to build successful careers and meaningful lives. Our foundation is more than an educational institution—it's a beacon of hope, transforming grief into purpose and creating a lasting legacy that touches countless lives.
            </p>
          </div>
        </div>
      </section>
      

   

      {/* ===== OUR PROGRAMS SECTION START ===== */}
      <section className="py-16 px-6 bg-gray-100 animate-fade-in-up animation-delay-300">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4 animate-slide-in-down">Our Programs</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-12 animate-grow-width"></div>
          <p className="font-body text-lg text-gray-600 mb-12 animate-fade-in animation-delay-400">
            Four transformative schools designed to unlock potential and create opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Program Card 1: School of Programming */}
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-zoom-in">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 border-2 border-blue-300">
                <FaCode className="text-blue-600 text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">School of Programming</h3>
              <p className="font-body text-gray-600 mb-4">
                Master modern programming languages and frameworks to build a career in software development.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Javascript</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">React.js</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Node.js</span>
              </div>
            </div>

            {/* Program Card 2: School of Business */}
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-zoom-in animation-delay-100">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 border-2 border-blue-300">
                <FaBriefcase className="text-blue-600 text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">School of Business</h3>
              <p className="font-body text-gray-600 mb-4">
                Develop entrepreneurial skills and business acumen to create opportunities and drive innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Business Strategy</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Finance</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Marketing</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Management</span>
              </div>
            </div>

            {/* Program Card 3: School of Education */}
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-zoom-in animation-delay-200">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 border-2 border-blue-300">
                <FaGraduationCap className="text-blue-600 text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">School of Education</h3>
              <p className="font-body text-gray-600 mb-4">
                Transform lives through education and empower the next generation of learners and educators.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Teaching Methods</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Curriculum Design</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Child Psychology</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Education Tech</span>
              </div>
            </div>

            {/* Program Card 4: School of Second Chance */}
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-zoom-in animation-delay-300">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 border-2 border-blue-300">
                <FaRedoAlt className="text-blue-600 text-3xl" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">School of Second Chance</h3>
              <p className="font-body text-gray-600 mb-4">
                A fresh start for those seeking to rebuild their future with new skills and opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Career Transition</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Skill Development</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Mentorship</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">Life Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* ===== CAMPUS LIFE SECTION START ===== */}
      <section className="py-16 px-6 bg-white animate-fade-in-up animation-delay-600">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4 animate-slide-in-down">Campus Life</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-4 animate-grow-width"></div>
          <p className="font-body text-lg text-gray-600 mb-12 animate-fade-in">
            A nurturing residential environment where students thrive
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => ( // 6 placeholder images create kar rahe hain
              <div key={i} className="p-6 bg-gray-100 rounded-lg shadow-md aspect-video flex items-center justify-center 
                                   hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 animate-zoom-in animation-delay-fast">
                <svg className="w-1/3 h-1/3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {/* Real images yahan <img src="..." alt="..." /> se replace kar sakte hain */}
              </div>
            ))}
          </div>

          <button className="mt-16 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center mx-auto animate-fade-in animation-delay-slow">
            Explore Our Campus 
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </section>
      {/* ===== CAMPUS LIFE SECTION END ===== */}

    </div>
  );
}

export default Home;









