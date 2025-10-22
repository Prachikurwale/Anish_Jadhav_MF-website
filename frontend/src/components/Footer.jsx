import React from 'react';
// Import icons from the library
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        
        {/* Top section with 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">AJMF</h3>
            <p>
              Anish Jadhav Memorial Foundation - Building a legacy of hope and opportunity for 
              underprivileged youth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Anish</a></li>
              <li><a href="/programs" className="hover:text-white">Our Programs</a></li>
              <li><a href="/campus" className="hover:text-white">Campus & Facilities</a></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="/donate" className="hover:text-white">Donate</a></li>
              <li><a href="/volunteer" className="hover:text-white">Volunteer</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom section with divider and copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            Made with <span className="text-red-500">❤️</span> in memory of Anish Jadhav
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 Anish Jadhav Memorial Foundation. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;