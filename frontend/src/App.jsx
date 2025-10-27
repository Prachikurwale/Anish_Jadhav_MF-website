import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// --- Friend's Pages ---
import AboutAnish from './components/AboutAnish';
import OurPrograms from './components/OurProgram';

// --- Your Pages ---
import Home from './components/Home';
import CampusAndFacilities from './components/CampusAndFacilities';
import GetInvolved from './components/GetInvolved';
import ContactUs from './components/ContactUs'; // Yeh import sahi hai

function App() {
  return (
    // 💡 UI CHANGE: Ensure the entire app has a dark background
    <div className="App flex flex-col min-h-screen bg-gray-900">
      <CustomCursor />
      <Navbar />

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

          {/* Placeholder R
          {/* YAHAN BADLAAV KIYA GAYA HAI */}
          <Route path="/contact" element={<ContactUs />} /> 
    
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;



