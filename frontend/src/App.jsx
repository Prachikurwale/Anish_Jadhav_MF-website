import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { trackPageView } from './utils/analytics';
import ScrollToTop from './components/ScrollToTop';

import AboutAnish from './components/AboutAnish';
import OurPrograms from './components/OurProgram';
import Home from './components/Home';
import CampusAndFacilities from './components/CampusAndFacilities';
import GetInvolved from './components/GetInvolved';
import ContactUs from './components/ContactUs';
import StudentLedCampus from './components/StudentLedCampus';
import SuccessStories from './components/SuccessStories';

function App() {
  const location = useLocation();

  // Track page views when route changes
  useEffect(() => {
    const getPageName = (pathname) => {
      const routes = {
        '/': 'Home',
        '/campus': 'Campus & Facilities',
        '/involved': 'Get Involved',
        '/about': 'About Anish',
        '/programs': 'Our Programs',
        '/contact': 'Contact Us',
        '/success-stories': 'Success Stories',
        '/student-campus': 'Student Led Campus'
      };
      return routes[pathname] || 'Unknown Page';
    };

    trackPageView(getPageName(location.pathname));
  }, [location]);

  return (
    // 💡 UI CHANGE: Ensure the entire app has a dark background
    <div className="App flex flex-col min-h-screen bg-gray-900">
      <CustomCursor />
      <Navbar />
      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          {/* --- All Routes Go Here --- */}

          {/* Your Pages' Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/campus" element={<CampusAndFacilities />} />
          <Route path="/involved" element={<GetInvolved />} />

          {/* Friend's Pages' Routes */}
          <Route path="/about" element={<AboutAnish />} />
          <Route path="/programs" element={<OurPrograms />} />

          {/* Student Led Campus Route */}
          <Route path="/student-campus" element={<StudentLedCampus />} />

          {/* Success Stories Route */}
          <Route path="/success-stories" element={<SuccessStories />} />

          {/* YAHAN BADLAAV KIYA GAYA HAI */}
          <Route path="/contact" element={<ContactUs />} /> 
    
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;



