import React from 'react';

function Navbar() {
  // This array holds your navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Anish", path: "/about" },
    { name: "Our Programs", path: "/programs" },
    { name: "Campus & Facilities", path: "/campus" },
    { name: "Get Involved", path: "/involved" },
    { name: "Contact Us", path: "/contact" },
  ];

  // This would ideally come from your router, but we'll hardcode "Home" as active for this example.
  const activePage = "Home"; 

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Anish Jadhav Memorial Foundation
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`
                text-gray-600 hover:text-blue-600
                ${activePage === link.name 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : ''
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;