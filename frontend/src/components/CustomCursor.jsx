import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// 1. CSS Module ko import karein
import styles from './CustomCursor.module.css';

// FIX 1: motion ko ek Local variable mein assign karein
const MotionCursor = motion.div;

// --- Isme koi change nahi ---
const cursorVariants = {
  default: {
    width: "40px",
    height: "40px",
    opacity: 0.7,
    backgroundColor: "rgba(200, 200, 200, 0.09)", 
    backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.3) 100%)",
    mixBlendMode: 'normal', 
    transition: { type: "tween", ease: "easeOut", duration: 0.15 }
  },
  hover: {
    width: "65px",
    height: "65px",
    opacity: 0.9,
    scale: 1, 
    backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)",
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.3 }
  }
};

const CustomCursor = () => {
  // --- Is logic mein koi change nahi ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, .cursor-pointer"
    );

    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const cursorStyle = {
    left: mousePosition.x,
    top: mousePosition.y
  };
  // --- Yahan tak koi change nahi ---


  return (
    <>
      {/* Yeh global style hai, isko aise hi rehne dein */}
      <style>{`
        body {
          cursor: none;
        }
      `}</style>
      
      {/* 2. Tailwind class ko CSS module se badal diya */}
      <MotionCursor
        className={styles.cursor}
        style={cursorStyle}
        variants={cursorVariants}
        animate={cursorVariant}
      >
      </MotionCursor>
    </>
  );
};

export default CustomCursor;