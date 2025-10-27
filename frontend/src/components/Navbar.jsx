import React from 'react';
import { NavLink } from 'react-router-dom'; 

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Anish", path: "/about" }, 
    { name: "Our Programs", path: "/programs" }, // 💡 नया लिंक
    { name: "Campus & Facilities", path: "/campus" },
    { name: "Get Involved", path: "/involved" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-black shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - Link to Home */}
        <NavLink to="/" className="text-2xl font-bold text-gray-800">
          Anish Jadhav Memorial Foundation
        </NavLink>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-gray-600 hover:text-white-600 transition duration-150 
                ${isActive
                  ? 'text-blue-600 border-b-2 border-white-600 font-semibold' 
                  : ''
                }
              `}
              end={link.path === "/"} 
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;