// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// // 💡 FIX 1: motion को एक लोकल वेरिएबल में असाइन करें ताकि ESLint इसे यूज्ड माने।
// const MotionCursor = motion.div;

// const cursorVariants = {
//   default: {
//     width: "40px",
//     height: "40px",
//     opacity: 0.7,
//     // Faded Gray Gradient (Building Color: #656b75)
//     backgroundColor: "rgba(101, 107, 117, 0.4)", 
//     backgroundImage: "radial-gradient(circle, rgba(101, 107, 117, 0.5) 0%, rgba(50, 50, 50, 0.4) 100%)",
//     mixBlendMode: 'normal', 
//     transition: { type: "tween", ease: "easeOut", duration: 0.15 }
//   },
//   hover: {
//     width: "65px",
//     height: "65px",
//     opacity: 0.9,
//     scale: 1, 
//     // Hover पर गहरा और अधिक स्पष्ट ग्रेडिएंट
//     backgroundImage: "radial-gradient(circle, rgba(101, 107, 117, 0.8) 0%, rgba(50, 50, 50, 0.7) 100%)",
//     transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.3 }
//   }
// };

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const mouseMove = e => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     const handleMouseEnter = () => setCursorVariant("hover");
//     const handleMouseLeave = () => setCursorVariant("default");

//     // सभी इंटरैक्टिव तत्वों का चयन करें
//     const interactiveElements = document.querySelectorAll(
//       "button, a, input, textarea, .cursor-pointer"
//     );

//     interactiveElements.forEach(el => {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//       interactiveElements.forEach(el => {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   const cursorStyle = {
//     left: mousePosition.x,
//     top: mousePosition.y
//   };

//   return (
//     <>
//       {/* 💡 FIX 2: global styles को React JSX style tag में बदला गया */}
//       <style>{`
//         body {
//           cursor: none;
//         }
//       `}</style>
      
//       {/* मोशन कंपोनेंट जो कर्सर के रूप में कार्य करता है */}
//       <MotionCursor
//         className="fixed top-0 left-0 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
//         style={cursorStyle}
//         variants={cursorVariants}
//         animate={cursorVariant}
//       >
//       </MotionCursor>
//     </>
//   );
// };

// export default CustomCursor;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 💡 FIX 1: motion को एक लोकल वेरिएबल में असाइन करें ताकि ESLint इसे यूज्ड माने।
const MotionCursor = motion.div;

const cursorVariants = {
  default: {
    width: "40px",
    height: "40px",
    opacity: 0.7,
    // 💡 UI UPDATE: Changed gradient for a subtle black/white theme
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
    // 💡 UI UPDATE: More prominent gradient on hover
    backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)",
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.3 }
  }
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    // सभी इंटरैक्टिव तत्वों का चयन करें
    // Since we added `cursor-pointer` to buttons in AboutAnish.jsx, this is reliable.
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

  return (
    <>
      {/* 💡 FIX 2: global styles को React JSX style tag में बदला गया */}
      <style>{`
        body {
          cursor: none;
        }
      `}</style>
      
      {/* मोशन कंपोनेंट जो कर्सर के रूप में कार्य करता है */}
      <MotionCursor
        className="fixed top-0 left-0 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
        style={cursorStyle}
        variants={cursorVariants}
        animate={cursorVariant}
      >
      </MotionCursor>
    </>
  );
};

export default CustomCursor;