import React, { useState } from 'react';
// Icons ko import karein
import { 
  FaDollarSign, FaUsers, FaHandshake, FaCheckCircle, 
  FaHeart, FaEnvelope 
} from 'react-icons/fa';

function GetInvolved() {
  // Donation amount ko track karne ke liye state
  const [selectedAmount, setSelectedAmount] = useState(null);
  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  // Section 1 Data
  const involvementOptions = [
    {
      icon: <FaDollarSign />,
      title: "Make a Donation",
      description: "Your financial contribution directly supports student education, residential facilities, and program development.",
      points: [
        "Sponsor a student's education",
        "Support campus infrastructure",
        "Fund new programs and resources",
        "Receive tax benefits"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Become a Volunteer",
      description: "Share your time, skills, and expertise to mentor students and support our programs.",
      points: [
        "Mentor students in your field",
        "Conduct workshops and seminars",
        "Provide career guidance",
        "Make a direct personal impact"
      ]
    },
    {
      icon: <FaHandshake />,
      title: "Partner With Us",
      description: "Organizations can partner to provide internships, job placements, and resources for our students.",
      points: [
        "Access talented graduates",
        "Corporate social responsibility",
        "Campus recruitment opportunities",
        "Collaborative programs"
      ]
    }
  ];

  // Section 3 Data
  const impactExamples = [
    { amount: 500, description: "Provides study materials for one student for a month" },
    { amount: 2500, description: "Covers meals for one student for a month" },
    { amount: 10000, description: "Supports complete monthly expenses for one student" },
    { amount: 50000, description: "Sponsors a student's education for six months" },
  ];

  return (
    <div className="animate-fade-in-up">
      
      {/* ===== SECTION 1: GET INVOLVED ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl font-bold text-gray-800 mb-4">
            Get Involved
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Join us in honoring Anish's legacy by empowering underprivileged youth with education and 
            opportunities. Every contribution makes a lasting difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {involvementOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-8 border-t-4 border-blue-600 transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 border-2 border-blue-300">
                  <span className="text-blue-600 text-3xl">{option.icon}</span>
                </div>
                <h2 className="font-heading text-2xl font-semibold text-gray-800 text-center mb-4">{option.title}</h2>
                <p className="font-body text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-3">
                  {option.points.map((point, i) => (
                    <li key={i} className="flex items-center font-body text-gray-700">
                      <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: MAKE A DONATION FORM ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Make a Donation
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Your donation goes directly to supporting student education and campus operations.
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-12 text-left">
            <h3 className="font-heading text-3xl font-semibold text-gray-800 text-center mb-8">
              Select Donation Amount
            </h3>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-3 px-4 font-body font-semibold border-2 rounded-lg transition duration-300
                    ${selectedAmount === amount 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                    }`}
                >
                  ₹{amount.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            <p className="font-body text-gray-500 text-center mb-2">Or Enter Custom Amount</p>
            <input
              type="number"
              placeholder="Enter amount in ₹"
              className="w-full p-4 font-body border-2 border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
              onClick={() => setSelectedAmount(null)} // Custom amount select karte hi button deselect ho jayega
            />

            <div className="space-y-6">
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full p-4 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Email Address</label>
                <input type="email" placeholder="your.email@example.com" className="w-full p-4 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="font-body font-semibold text-gray-700 mb-2 block">Phone Number</label>
                <input type="tel" placeholder="Your phone number" className="w-full p-4 font-body border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out mt-10 flex items-center justify-center text-lg">
              <FaHeart className="mr-3" />
              Complete Donation
            </button>
            <p className="font-body text-gray-500 text-center mt-6 text-sm">
              All donations are tax-deductible. You will receive a receipt for your records.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: YOUR IMPACT & VOLUNTEER ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Your Impact
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {impactExamples.map((impact, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <h3 className="font-heading text-4xl font-bold text-blue-600 mb-4">
                  ₹{impact.amount.toLocaleString('en-IN')}
                </h3>
                <p className="font-body text-gray-600">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Blue Banner */}
        <div className="bg-blue-600 text-white py-20 px-6 text-center rounded-lg shadow-xl">
          <div className="container mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Interested in Volunteering or Partnership?
            </h2>
            <p className="font-body text-lg max-w-3xl mx-auto mb-10 text-blue-100">
              We'd love to hear from you. Get in touch to learn more about how you can contribute your time, 
              skills, or resources to support our mission.
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center mx-auto text-lg">
              <FaEnvelope className="mr-3" />
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default GetInvolved;