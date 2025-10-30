import React, { useState } from 'react';
// Icons
import { 
  FaDollarSign, FaUsers, FaHandshake, FaCheckCircle, 
  FaHeart, FaEnvelope 
} from 'react-icons/fa';
// CSS Module ko import karein
import styles from './GetInvolved.module.css';

function GetInvolved() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const presetAmounts = [500, 1000, 2500, 5000, 10000];

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

  const impactExamples = [
    { amount: 500, description: "Provides study materials for one student for a month" },
    { amount: 2500, description: "Covers meals for one student for a month" },
    { amount: 10000, description: "Supports complete monthly expenses for one student" },
    { amount: 50000, description: "Sponsors a student's education for six months" },
  ];

  return (
    <div>
      
      {/* ===== SECTION 1: GET INVOLVED ===== */}
      <section className={`${styles.section} ${styles.sectionBgWhite}`}>
        <div className={styles.sectionContainer}>
          <h1 className={`${styles.fontHeading} ${styles.pageHeading}`}>
            Get Involved
          </h1>
          <div className={styles.accentBar}></div>
          <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
            Join us in honoring Anish's legacy by empowering underprivileged youth with education and 
            opportunities. Every contribution makes a lasting difference.
          </p>

          <div className={styles.involvementGrid}>
            {involvementOptions.map((option, index) => (
              <div key={index} className={styles.involvementCard}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{option.icon}</span>
                </div>
                <h2 className={`${styles.fontHeading} ${styles.cardHeading}`}>{option.title}</h2>
                <p className={`${styles.fontBody} ${styles.cardDescription}`}>{option.description}</p>
                <ul className={styles.pointsList}>
                  {option.points.map((point, i) => (
                    <li key={i} className={`${styles.fontBody} ${styles.pointItem}`}>
                      <FaCheckCircle className={styles.pointIcon} />
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
      <section className={`${styles.section} ${styles.sectionBgGray}`}>
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>
            Make a Donation
          </h2>
          <div className={styles.accentBar}></div>
          <p className={`${styles.fontBody} ${styles.sectionSubtitle}`}>
            Your donation goes directly to supporting student education and campus operations.
          </p>

          <div className={styles.formContainer}>
            <h3 className={`${styles.fontHeading} ${styles.formHeading}`}>
              Select Donation Amount
            </h3>
            
            <div className={styles.amountGrid}>
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`
                    ${styles.presetButton} 
                    ${selectedAmount === amount ? styles.presetButtonActive : ''}
                  `}
                >
                  ₹{amount.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            <p className={`${styles.fontBody} ${styles.formSubheading}`}>Or Enter Custom Amount</p>
            <input
              type="number"
              placeholder="Enter amount in ₹"
              className={`${styles.fontBody} ${styles.formInput}`}
              onClick={() => setSelectedAmount(null)}
            />

            <div>
              <div className={styles.formGroup}>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Full Name</label>
                <input type="text" placeholder="Your name" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
              <div className={styles.formGroup}>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Email Address</label>
                <input type="email" placeholder="your.email@example.com" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
              <div className={styles.formGroup}>
                <label className={`${styles.fontBody} ${styles.formLabel}`}>Phone Number</label>
                <input type="tel" placeholder="Your phone number" className={`${styles.fontBody} ${styles.formInput}`} />
              </div>
            </div>

            <button className={`${styles.fontBody} ${styles.donateButton}`}>
              <FaHeart className={styles.donateButtonIcon} />
              Complete Donation
            </button>
            <p className={`${styles.fontBody} ${styles.formFooterText}`}>
              All donations are tax-deductible. You will receive a receipt for your records.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: YOUR IMPACT & VOLUNTEER ===== */}
      <section className={`${styles.section} ${styles.sectionBgWhite}`}>
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.fontHeading} ${styles.sectionHeading}`}>
            Your Impact
          </h2>
          <div className={styles.accentBarLong}></div>
          
          <div className={styles.impactGrid}>
            {impactExamples.map((impact, index) => (
              <div key={index} className={styles.impactCard}>
                <h3 className={`${styles.fontHeading} ${styles.impactAmount}`}>
                  ₹{impact.amount.toLocaleString('en-IN')}
                </h3>
                <p className={`${styles.fontBody} ${styles.impactDescription}`}>{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Blue Banner */}
        <div className={styles.banner}>
          <div className={styles.container}>
            <h2 className={`${styles.fontHeading} ${styles.bannerHeading}`}>
              Interested in Volunteering or Partnership?
            </h2>
            <p className={`${styles.fontBody} ${styles.bannerText}`}>
              We'd love to hear from you. Get in touch to learn more about how you can contribute your time, 
              skills, or resources to support our mission.
            </p>
            <button className={`${styles.fontBody} ${styles.bannerButton}`}>
              <FaEnvelope className={styles.bannerButtonIcon} />
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default GetInvolved;