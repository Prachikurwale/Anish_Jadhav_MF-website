import React from 'react';
// Zaroori icons ko import karein
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, 
  FaInstagram, FaLinkedinIn, FaPaperPlane, FaMapPin 
} from 'react-icons/fa';

function ContactUs() {

  // FAQ data ke liye ek array
  const faqs = [
    { 
      q: "How can I apply for admission?", 
      a: "Applications are open throughout the year. Please reach out to us at admissions@ajmf.org with your details and educational background." 
    },
    { 
      q: "Are programs really free for students?", 
      a: "Yes, all our programs are completely free including education, residential facilities, meals, and study materials for eligible students." 
    },
    { 
      q: "Can I visit the campus?", 
      a: "Absolutely! We welcome campus visits. Please contact us in advance to schedule a tour." 
    },
    { 
      q: "How can organizations partner with AJMF?", 
      a: "Organizations can partner through internship programs, job placements, donations, or collaborative initiatives. Contact us to discuss partnership opportunities." 
    }
  ];

  return (
    <div className="animate-fade-in-up">
      
      {/* ===== SECTION 1: CONTACT FORM & INFO ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you. 
            Reach out and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-start">
          
          {/* Left Column: Get In Touch */}
          <div className="text-left space-y-8">
            <h2 className="font-heading text-4xl font-semibold text-gray-800">Get In Touch</h2>
            
            {/* Address Block */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-body text-xl font-semibold text-gray-800">Our Address</h3>
                <p className="font-body text-gray-600">
                  Anish Jadhav Memorial Foundation<br />
                  In Partnership with NavGurukul<br />
                  [Campus Address], India
                </p>
              </div>
            </div>
            
            {/* Email Block */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-body text-xl font-semibold text-gray-800">Email Us</h3>
                <a href="mailto:info@ajmf.org" className="font-body text-blue-600 hover:underline">info@ajmf.org</a><br />
                <a href="mailto:admissions@ajmf.org" className="font-body text-blue-600 hover:underline">admissions@ajmf.org</a>
              </div>
            </div>
            
            {/* Call Block */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaPhoneAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-body text-xl font-semibold text-gray-800">Call Us</h3>
                <p className="font-body text-gray-600">+91 123 456 7890</p>
                <p className="font-body text-gray-500 text-sm">Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Follow Us Block */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-body text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="font-heading text-4xl font-semibold text-gray-800 text-center mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Full Name *</label>
                <input type="text" placeholder="Your name" className="w-full p-3 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Email Address *</label>
                <input type="email" placeholder="your.email@example.com" className="w-full p-3 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Phone Number</label>
                <input type="tel" placeholder="Your phone number" className="w-full p-3 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Subject *</label>
                <input type="text" placeholder="What is this regarding?" className="w-full p-3 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Message *</label>
                <textarea rows="5" placeholder="Tell us more..." className="w-full p-3 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center text-lg">
                <FaPaperPlane className="mr-3" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: MAP ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">Find Us On The Map</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-12"></div>
          <div className="mt-12 bg-gray-200 rounded-lg shadow-md h-96 flex items-center justify-center text-gray-500 font-body">
            {/* Yahan par aap Google Maps ka <iframe> code paste kar sakte hain */}
            <FaMapPin className="text-gray-400 text-5xl" />
            <span className="ml-4 text-xl">Map Location Placeholder</span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FAQ ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-12"></div>
          
          <div className="space-y-6 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-body text-xl font-semibold text-gray-800">{faq.q}</h3>
                <p className="font-body text-gray-600 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactUs;