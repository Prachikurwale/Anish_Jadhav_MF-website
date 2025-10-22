import React from 'react';
// In icons ko import karna zaroori hai
import { 
  FaHome, FaBook, FaLaptop, FaUsers, FaUtensils, FaDumbbell, 
  FaBuilding, FaChalkboardTeacher, FaNetworkWired, FaBookOpen, 
  FaHeartbeat, FaWifi 
} from 'react-icons/fa';

function CampusAndFacilities() {

  // Section 1 Gallery Data
  const galleryItems = [
    { icon: <FaHome />, text: "Campus Overview" },
    { icon: <FaBook />, text: "Classroom Learning" },
    { icon: <FaLaptop />, text: "Computer Lab" },
    { icon: <FaUsers />, text: "Student Collaboration" },
    { icon: <FaUtensils />, text: "Dining Hall" },
    { icon: <FaDumbbell />, text: "Recreation Area" },
  ];

  // Section 2 Facilities Data
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

  // Section 3 Schedule Data
  const dailySchedule = [
    { time: "7:00 AM", activity: "Breakfast & Morning Routine" },
    { time: "9:00 AM", activity: "Classes & Workshops" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM", activity: "Practical Sessions & Projects" },
    { time: "6:00 PM", activity: "Sports & Recreation" },
    { time: "7:30 PM", activity: "Dinner" },
    { time: "8:30 PM", activity: "Study Time & Personal Projects" },
  ];

  // Section 3 Support Data
  const studentSupport = [
    { title: "Academic Mentorship", description: "Personal guidance from experienced instructors" },
    { title: "Career Counseling", description: "Help with career planning and job placement" },
    { title: "Peer Learning Groups", description: "Collaborative study and project teams" },
    { title: "Mental Health Support", description: "Professional counseling services available" },
    { title: "Technical Workshops", description: "Regular skill-building sessions" },
    { title: "Community Events", description: "Social gatherings and celebrations" },
  ];


  return (
    <div className="animate-fade-in-up">
      
      {/* ===== SECTION 1: CAMPUS GALLERY ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-4">
            Campus & Facilities
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            A comprehensive residential campus designed to provide students with everything they need to focus 
            on learning, growing, and building their future.
          </p>

          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Campus Gallery
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-200 rounded-lg p-8 flex flex-col items-center justify-center aspect-video 
                           hover:shadow-xl hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="text-gray-600 text-5xl mb-4">{item.icon}</div>
                <h3 className="font-body text-xl font-semibold text-gray-700">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: WORLD-CLASS FACILITIES ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            World-Class Facilities
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Every aspect of our campus is designed to support student success, from academics to wellness.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex items-start space-x-6 hover:shadow-2xl transition duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-300">
                  <span className="text-blue-600 text-3xl">{facility.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-3">{facility.title}</h3>
                  <p className="font-body text-gray-600 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.items.map((item, i) => (
                      <li key={i} className="flex items-center font-body text-gray-700">
                        <span className="text-yellow-600 text-xs mr-3">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: LIVING & LEARNING ===== */}
      <section className="bg-white">
        {/* Blue Banner */}
        <div className="bg-blue-600 text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-4">Living & Learning Together</h2>
            <p className="font-body text-lg max-w-3xl mx-auto mb-10">
              Our residential model creates a tight-knit community where students support each 
              other, learn together, and build lifelong friendships. The campus becomes home, 
              and fellow students become family.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-heading text-5xl font-bold mb-2">100%</h3>
                <p className="font-body text-lg">Free for Students</p>
              </div>
              <div>
                <h3 className="font-heading text-5xl font-bold mb-2">24/7</h3>
                <p className="font-body text-lg">Campus Support</p>
              </div>
              <div>
                <h3 className="font-heading text-5xl font-bold mb-2">All-Inclusive</h3>
                <p className="font-body text-lg">Meals & Amenities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Life Section */}
        <div className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
              Campus Life
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Daily Schedule Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-6">Daily Schedule</h3>
                <div className="space-y-4">
                  {dailySchedule.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="font-body font-semibold text-blue-600 w-24">{item.time}</span>
                      <span className="font-body text-gray-700">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Support Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-yellow-600">
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-6">Student Support</h3>
                <div className="space-y-3">
                  {studentSupport.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-body font-semibold text-gray-800">{item.title}</h4>
                      <p className="font-body text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CampusAndFacilities;