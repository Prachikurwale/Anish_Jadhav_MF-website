import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// इंपोर्ट किए गए कॉम्पोनेंट्स
import AboutAnish from './components/AboutAnish';
import OurPrograms from './components/OurProgram'; // 💡 नया इंपोर्ट

// होम पेज के लिए एक साधारण कॉम्पोनेंट 
const Home = () => <div className="flex-grow flex items-center justify-center p-10 text-4xl font-bold text-gray-700">Welcome to the Foundation Home Page</div>

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<AboutAnish />} /> {/* About Anish page */}
        
        {/* 💡 नया रूट यहाँ जोड़ा गया */}
        <Route path="/programs" element={<OurPrograms />} /> 
        {/* ... अन्य राउट्स */}
        <Route path="/campus" element={<div className='flex-grow p-10 text-xl'>Campus & Facilities Page</div>} />
        <Route path="/involved" element={<div className='flex-grow p-10 text-xl'>Get Involved Page</div>} />
        <Route path="/contact" element={<div className='flex-grow p-10 text-xl'>Contact Us Page</div>} />


      <Footer />
    </div>
  );
}

export default App;
