import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutAnish.module.css';

const MotionDiv = motion.div;
const MotionSection = motion.section;

import AnishImage from '../assets/Anish2.png';
import FoundationImage from '../assets/Anish2.png';
import { Heart, Quote, Star } from 'lucide-react';

import campusImg1 from '../assets/Anish2.png';
import campusImg2 from '../assets/Anish2.png';
import BrigadierJadhav from '../assets/campus.png';

const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.3 } }
};
const heartBeat = {
    beat: {
        scale: [1, 1.2, 1, 1.1, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.7, 1]
        }
    }
};

const BubbleBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
        <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes float {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
            }
            .bubble {
                position: absolute;
                bottom: -150px;

                width: 40px;
                height: 40px;
                background-color: rgba(209, 163, 58, 0.3); 
                border-radius: 50%;
                animation: float 25s infinite linear;
            }
            .bubble:nth-child(1) { left: 10%; animation-duration: 25s; width: 60px; height: 60px; opacity: 0.4; }
            .bubble:nth-child(2) { left: 40%; animation-duration: 35s; width: 80px; height: 80px; opacity: 0.3; }
            .bubble:nth-child(3) { left: 70%; animation-duration: 30s; opacity: 0.5; }
            .bubble:nth-child(4) { left: 20%; animation-duration: 40s; width: 50px; height: 50px; opacity: 0.2; }
            .bubble:nth-child(5) { left: 85%; animation-duration: 20s; opacity: 0.35; }
        `}} />
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
    </div>
);

const QuoteSection = () => {
    const quoteText = `"Currently Anish Jadhav Memorial Foundation has collaborated with Navgurukul Foundation to
provide free residential education and employability
opportunities in Software Engineering and Digital Marketing
to 150 underprivileged girls at Anish Jadhav Memorial Foundation Skilling Institute."`;
    const author = "Target Beneficiaries";
    const designation = "Youth from underprivileged or low-income backgrounds who cannot afford expensive college education. Girls from humble backgrounds, with parents in jobs such as maids, auto-drivers, laborers, and brick kiln workers. Underprivileged Graduates struggling to find suitable employment due to lack of industry-specific skills.";

    const imageAnimate = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
    };

    const cardHover = {
        hover: {
            scale: 1.05,
            y: -10,
            boxShadow: "0 30px 60px rgba(241, 241, 241, 0.35)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    return (
        <MotionSection
            className={styles.quoteSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className={styles.quoteGrid}>

                <MotionDiv
                    variants={itemVariants}
                    className={styles.quoteImageContainer}
                    whileHover="hover"
                    animate="visible"
                    initial="hidden"
                >
                    <MotionDiv
                        variants={imageAnimate}
                        className={styles.imageWrapperAnimated}
                    >
                        <img
                            src={BrigadierJadhav}
                            alt={author}
                            className={styles.quoteImage}
                        />
                    </MotionDiv>

                    <MotionDiv
                        className={styles.quoteBox}
                        variants={cardHover}
                    >
                        <Quote className={styles.quoteIcon} />
                        <p className={styles.quoteText}>{quoteText}</p>
                        <p className={styles.quoteAuthor}>{author}</p>
                        <p className={styles.quoteDesignation}>{designation}</p>
                    </MotionDiv>
                </MotionDiv>

                <MotionDiv variants={itemVariants} className={styles.quoteContentContainer}>
                    <h2 className={styles.quoteHeading}>
                        The Story Behind the Foundation
                    </h2>

                    <p className={styles.quoteParagraph}>
                        The Anish Jadhav Memorial Foundation
                        (AJMF) is a non-profit NGO established
                        in memory of <strong>Anish Jadhav</strong>, the only
                        child of <strong>Brigadier Kishor and Mrs. Neeta
                            Jadhav </strong>.
                        Anish worked with Nikon India’s Core
                        Technical Team before his untimely
                        passing.
                        AJMF, registered under the Bombay Public
                        Trust Act of 1950, is dedicated to providing
                        skills training to the underprivileged across
                        India.
                    </p>
                    <ul className={styles.quoteParagraph}>
                        <li>India faces a significant skills gap between the requirements
                            of industries and the capabilities of its workforce.</li>

                        <li>Contributing factors include inadequate training facilities,
                            outdated curricula, and limited engagement with industries.</li>
                        <li>As a result, many skilled individuals remain unemployed.</li>
                        To bridge this gap, AJMF focuses on mapping local skill
                        <li>demands and tailoring its training programs to meet these
                            specific needs, fostering local ecosystems for jobs and
                            entrepreneurship.</li>
                    </ul>

                    <div className={styles.quoteInfoBox}>
                        <h3 className={styles.quoteInfoTitle}>
                            Past Initiative
                        </h3>
                        <p className={styles.quoteInfoText}>
                            In 2019, AJMF partnered with the Anudip Foundation to train over 200 underprivileged youths in Pune, resulting in successful placements in ITes and BFSI sectors.
                        </p>
                    </div>

                    <div className={styles.quoteDesignElement1} />
                    <div className={styles.quoteDesignElement2} />
                </MotionDiv>
            </div>
        </MotionSection>
    );
};


const VisionAndLegacySection = () => {

    const backgroundShapeAnimate = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2.5, ease: "easeOut", delay: 0.1 } }
    };

    const boxAnimate = {
        hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 40,
                damping: 18,
                delay: 0.5
            }
        }
    };

    return (
        <MotionSection
            className={styles.visionLegacySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <MotionDiv
                className={styles.visionBackgroundShape}
                variants={backgroundShapeAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            />

            <BubbleBackground />

            <div className={styles.visionLegacyGrid}>

                <MotionDiv variants={itemVariants} className={styles.visionContentContainer}>
                    <h2 className={styles.visionHeading}>
                        About Anish Jadhav
                    </h2>

                    <p className={styles.visionParagraph}>
                        The Anish Jadhav Memorial Foundation was born from a profound love and an unwavering commitment to honor the memory of Anish Jadhav. Established by his father, Brigadier Kishor Jadhav, this foundation represents the transformation of personal grief into a powerful force for positive change.
                    </p>
                    <p className={styles.visionParagraph}>
                        Anish was a young man of exceptional character, compassion, and potential. His life, though tragically cut short, left an indelible mark on everyone he encountered. His dreams, his kindness, and his belief in the power of education and opportunity became the cornerstone of what would become this foundation.
                    </p>

                    <div className={styles.visionPartnershipCTA}>
                        <Star className={styles.partnershipIcon} />
                        <p>Join us in carrying forward Anish's dreams and empowering the next generation of leaders.</p>
                    </div>
                </MotionDiv>

                <MotionDiv variants={itemVariants} className={styles.visionImageContainerRight}>

                    <div className={styles.visionImageWrapper}>
                        <img src={FoundationImage} alt="Foundation Vision" className={styles.visionImage} />
                    </div>

                    <MotionDiv className={styles.visionLegacyBox} variants={boxAnimate}>
                        <motion.div variants={heartBeat} animate="beat">
                            <Heart className={styles.legacyHeartIcon} />
                        </motion.div>
                        <h3 className={styles.legacyBoxTitle}>His Legacy Lives On</h3>
                        <p className={styles.legacyBoxText}>
                            Every student we educate, every life we transform, every dream we help realize is a tribute to Anish Jadhav. His spirit lives on in the determination of our students.
                        </p>
                    </MotionDiv>

                </MotionDiv>

            </div>
        </MotionSection>
    );
};


const AboutAnish = () => {
    return (
        <div className={styles.pageContainer}>

            <section className={styles.heroSection}>

                <MotionDiv
                    className={styles.heroBackgroundShape}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2.10, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
                />

                <div className={`${styles.container} ${styles.heroContentWrapper}`}>
                    <div className={styles.heroGrid}>

                        <MotionDiv
                            className={styles.heroTextContainer}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <MotionDiv variants={itemVariants}>
                                <h1 className={styles.heroHeading}>
                                    In Loving Memory of <span className={styles.heroHeadingSpan}>Anish Jadhav</span>
                                </h1>
                            </MotionDiv>

                            <MotionDiv variants={itemVariants}>
                                <p className={styles.heroSubtitle}>
                                    Anish Jadhav was more than a beloved son—he was a light in the lives of all who knew him. His spirit, warmth, and dreams continue to inspire the mission of this foundation.
                                </p>
                            </MotionDiv>
                        </MotionDiv>

                        <MotionDiv
                            className={styles.heroImageCollage}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <MotionDiv className={styles.imageWrapper1} variants={cardVariants}>
                                <img src={AnishImage} alt="Anish Jadhav" />
                            </MotionDiv>
                            <MotionDiv className={styles.imageWrapper2} variants={cardVariants}>
                                <img src={campusImg1} alt="Foundation Work 1" />
                            </MotionDiv>
                            <MotionDiv className={styles.imageWrapper3} variants={cardVariants}>
                                <img src={campusImg2} alt="Foundation Work 2" />
                            </MotionDiv>
                        </MotionDiv>

                    </div>
                </div>
            </section>

            <div className={styles.container}>

                <VisionAndLegacySection />

                <QuoteSection />



            </div>
        </div>
    );
};

export default AboutAnish;