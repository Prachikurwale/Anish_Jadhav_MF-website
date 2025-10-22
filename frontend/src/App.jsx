import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Outlet ko import karein
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      
      <Navbar />

      {/* 2. <Outlet> ko ek <main> tag mein daalein */}
      {/* Outlet ki jagah par aapka Home.jsx component dikhega */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;