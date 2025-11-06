// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import styles from './CustomCursor.module.css';

// const MotionCursor = motion.div;

// // --- CONFIGURATION ---
// const TRAIL_LENGTH = 12; // Number of dots in the trail
// const INITIAL_SIZE = 12; // Size of the first dot (main cursor)
// const BASE_COLOR = '#124b33'; // Your preferred dark green color

// // --- Hook to manage the mouse trail logic ---
// const useMouseTrail = (length) => {
//   const [positions, setPositions] = useState(Array(length).fill({ x: -100, y: -100 }));
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     let animationFrame;
//     const history = Array(length).fill({ x: -100, y: -100 });
    
//     // Smoothly update the history based on actual mouse position
//     const updatePositions = (e) => {
//       const { clientX, clientY } = e;
      
//       // The first position is the actual mouse position
//       history[0] = { x: clientX, y: clientY };

//       // Remaining positions lag behind the one before it
//       for (let i = length - 1; i > 0; i--) {
//         const targetX = history[i - 1].x;
//         const targetY = history[i - 1].y;
        
//         // Adjust the lag factor (0.4 for a good trail)
//         const lagFactor = 0.4; 

//         history[i] = {
//           x: history[i].x + (targetX - history[i].x) * lagFactor,
//           y: history[i].y + (targetY - history[i].y) * lagFactor,
//         };
//       }
//       setPositions([...history]);
//     };

//     const animateTrail = () => {
//         // Continuously update the positions for the trail effect
//         updatePositions({ clientX: history[0].x, clientY: history[0].y });
//         animationFrame = requestAnimationFrame(animateTrail);
//     };

//     // Initial setup: Add event listener for actual mouse position
//     window.addEventListener("mousemove", updatePositions);
    
//     // Start the continuous animation loop for smooth trail decay
//     animateTrail();


//     // Event handlers for interactive elements
//     const handleMouseEnter = () => setCursorVariant("hover");
//     const handleMouseLeave = () => setCursorVariant("default");

//     const interactiveElements = document.querySelectorAll(
//       "button, a, input, textarea, .cursor-pointer"
//     );

//     interactiveElements.forEach(el => {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", updatePositions);
//       cancelAnimationFrame(animationFrame);
//       interactiveElements.forEach(el => {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, [length]);

//   return { positions, cursorVariant, setCursorVariant };
// };

// // --- Single Dot Component for the Trail (UPDATED) ---
// const CursorDot = ({ position, index, variant }) => {
//   const size = INITIAL_SIZE * (1 - index * (1 / TRAIL_LENGTH)); // Dots get progressively smaller
//   const opacity = 1 - index * (1 / (TRAIL_LENGTH * 1.5)); // Dots fade out slower than size reduces
  
//   // Define lighter, transparent green color and glow shadow
//   const HOVER_GREEN_BG = 'rgba(133, 218, 136, 0.2)'; // Transparent light green for hover
//   const GLOW_SHADOW = `0 0 10px 2px ${BASE_COLOR}`; // Dark green glow effect

//   // Custom variant logic based on the main cursor's variant
//   const dotVariants = {
//     default: {
//       scale: 1,
//       opacity: opacity * 0.8,
//       backgroundColor: BASE_COLOR,
//       mixBlendMode: 'normal',
//       boxShadow: 'none', // Ensure shadow is off by default
//       transition: { type: "tween", ease: "easeOut", duration: 0.15 + index * 0.03 }
//     },
//     hover: {
//       scale: 2.5 * (1 - index * (1 / (TRAIL_LENGTH * 0.7))),
//       opacity: 1,
//       // Applied transparent green color
//       backgroundColor: HOVER_GREEN_BG, 
//       // Applied dark green glow effect
//       boxShadow: GLOW_SHADOW, 
//       mixBlendMode: 'normal', 
//       transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.3 }
//     }
//   };

//   return (
//     <MotionCursor
//       className={styles.cursor}
//       style={{
//         left: position.x,
//         top: position.y,
//         width: size,
//         height: size,
//       }}
//       variants={dotVariants}
//       animate={variant}
//     />
//   );
// };


// const CustomCursor = () => {
//   const { positions, cursorVariant } = useMouseTrail(TRAIL_LENGTH);

//   return (
//     <>
//       <style>{`
//         body {
//           cursor: none;
//         }
//       `}</style>
      
//       {/* Render a dot for each position in the trail */}
//       {positions.map((position, index) => (
//         <CursorDot
//           key={index}
//           position={position}
//           index={index}
//           variant={cursorVariant}
//         />
//       ))}
//     </>
//   );
// };

// export default CustomCursor;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

const MotionCursor = motion.div;

// --- CONFIGURATION ---
const TRAIL_LENGTH = 12; // Number of dots in the trail
const INITIAL_SIZE = 12; // Size of the first dot (main cursor)
const BASE_COLOR = '#124b33'; // Your preferred dark green color

// --- Hook to manage the mouse trail logic (SIMPLIFIED) ---
// Hover effect logic removed to keep cursor style constant
const useMouseTrail = (length) => {
  // Only track positions now
  const [positions, setPositions] = useState(Array(length).fill({ x: -100, y: -100 })); 

  useEffect(() => {
    let animationFrame;
    const history = Array(length).fill({ x: -100, y: -100 });
    
    const updatePositions = (e) => {
      const { clientX, clientY } = e;
      
      // The first position is the actual mouse position
      history[0] = { x: clientX, y: clientY };

      // Remaining positions lag behind the one before it
      for (let i = length - 1; i > 0; i--) {
        const targetX = history[i - 1].x;
        const targetY = history[i - 1].y;
        
        const lagFactor = 0.4; 

        history[i] = {
          x: history[i].x + (targetX - history[i].x) * lagFactor,
          y: history[i].y + (targetY - history[i].y) * lagFactor,
        };
      }
      setPositions([...history]);
    };

    const animateTrail = () => {
        // Continuously update the positions for the trail effect
        // We use history[0] here to maintain motion even if the mouse stops moving
        updatePositions({ clientX: history[0].x, clientY: history[0].y });
        animationFrame = requestAnimationFrame(animateTrail);
    };

    // Initial setup: Add event listener for actual mouse position
    window.addEventListener("mousemove", updatePositions);
    
    // Start the continuous animation loop for smooth trail decay
    animateTrail();

    return () => {
      window.removeEventListener("mousemove", updatePositions);
      cancelAnimationFrame(animationFrame);
      // Removed all interactive element listeners
    };
  }, [length]);

  // Only return positions, no more variants
  return { positions };
};

// --- Single Dot Component for the Trail (SIMPLIFIED) ---
const CursorDot = ({ position, index }) => { // Removed 'variant' prop
  const size = INITIAL_SIZE * (1 - index * (1 / TRAIL_LENGTH)); 
  const opacity = 1 - index * (1 / (TRAIL_LENGTH * 1.5));
  
  // Only the default style is required now
  const baseStyle = {
    scale: 1,
    opacity: opacity * 0.8,
    backgroundColor: BASE_COLOR,
    boxShadow: 'none',
    transition: { type: "tween", ease: "easeOut", duration: 0.15 + index * 0.03 }
  };

  return (
    <MotionCursor
      className={styles.cursor}
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
      }}
      initial={baseStyle}
      animate={baseStyle} // Always apply the base style, removing hover logic
    />
  );
};


const CustomCursor = () => {
  // Removed cursorVariant from destructuring
  const { positions } = useMouseTrail(TRAIL_LENGTH); 

  return (
    <>
      <style>{`
        body {
          cursor: none;
        }
      `}</style>
      
      {/* Render a dot for each position in the trail */}
      {positions.map((position, index) => (
        <CursorDot
          key={index}
          position={position}
          index={index}
          // Removed variant prop
        />
      ))}
    </>
  );
};

export default CustomCursor;