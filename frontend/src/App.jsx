import React from 'react';
import Navbar from './components/Navbar'; // (agar .jsx rename kiya hai toh .jsx likhein)
import Footer from './components/Footer'; // (agar .jsx rename kiya hai toh .jsx likhein)

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;