import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- Friend's Pages ---
import AboutAnish from './components/AboutAnish'; // Note: Adjust this path if it's different
import OurPrograms from './components/OurProgram'; // Note: Adjust this path if it's different

// --- Your Pages ---
import Home from './components/Home';
import CampusAndFacilities from './components/CampusAndFacilities';
import GetInvolved from './components/GetInvolved';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />

      {/* This main tag ensures the footer stays at the bottom */}
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

          {/* Placeholder Routes */}
          <Route path="/contact" element={<div className='p-10 text-xl'>Contact Us Page</div>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;