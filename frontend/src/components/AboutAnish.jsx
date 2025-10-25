// import React from 'react';
// import { motion } from 'framer-motion'; 

// const MotionDiv = motion.div;
// const MotionSection = motion.section;

// // 💡 Imports remain the same
// import AnishImage from '../assets/Anish.png'; 
// import FoundationImage from '../assets/Foundation.png'; 
// import { Heart, Star, Users } from 'lucide-react';

// // === Animation Variants ===
// const containerVariants = {
//   visible: { transition: { staggerChildren: 0.1 } } 
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.3 } }
// };

// const heartBeat = {
//   beat: {
//     scale: [1, 1.2, 1, 1.1, 1], 
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut",
//       times: [0, 0.2, 0.5, 0.7, 1]
//     }
//   }
// };
// // === End Animation Variants ===


// // Mock image placeholder component
// const ImagePlaceholder = () => (
//   <MotionDiv 
//     className="bg-gray-800 w-150 h-160 rounded-xl overflow-hidden relative border border-gray-700 transition-all duration-300" 
//     variants={cardVariants}
//     initial="hidden"
//     animate="visible"
//     style={{ 
//       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.28), 0 0 15px rgba(255,255,255,0.1) inset' 
//     }}
//   >
//     <img 
//         src={AnishImage} 
//         alt="In Loving Memory of Anish Jadhav" 
//         className="w-full h-full object-cover" 
//     />
//   </MotionDiv>
// );

// const TimelineItem = ({ title, content, tag, isPrimary = false }) => (
//   <MotionDiv 
//     className="flex justify-start items-stretch space-x-6 md:space-x-12 my-6 cursor-pointer"
//     initial={{ opacity: 0, x: -50 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     whileHover={{ 
//         scale: 1.02, 
//         rotateX: 1, 
//         boxShadow: "0 10px 20px rgba(0,0,0,0.3)" 
//     }} 
//     viewport={{ once: true, amount: 0.5 }}
//     transition={{ duration: 0.5 }}
//   >
//     <div className="flex-shrink-0 w-24 md:w-32 pt-2">
//       <div className={`
//         px-3 py-2 text-sm font-semibold text-white text-center rounded-xl shadow-lg
//         ${isPrimary ? 'bg-[#656b75]' : 'bg-gray-700'} 
//       `}>
//         {tag}
//       </div>
//     </div>
    
//     <div className="flex-grow p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 transition duration-300 hover:shadow-2xl"> 
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3> 
//       <p className="text-gray-300 leading-relaxed">{content}</p> 
//     </div>
//   </MotionDiv>
// );

// const BubbleBackground = () => (
//     <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
//         <style dangerouslySetInnerHTML={{__html: `
//             @keyframes float {
//                 0% { transform: translateY(0) rotate(0deg); opacity: 1; }
//                 100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
//             }
//             .bubble {
//                 position: absolute;
//                 bottom: -150px;
//                 width: 40px;
//                 height: 40px;
//                 background-color: rgba(101, 107, 117, 0.15);
//                 border-radius: 50%;
//                 animation: float 25s infinite linear;
//             }
//             .bubble:nth-child(1) { left: 10%; animation-duration: 25s; width: 60px; height: 60px; opacity: 0.4; }
//             .bubble:nth-child(2) { left: 40%; animation-duration: 35s; width: 80px; height: 80px; opacity: 0.3; }
//             .bubble:nth-child(3) { left: 70%; animation-duration: 30s; opacity: 0.5; }
//             .bubble:nth-child(4) { left: 20%; animation-duration: 40s; width: 50px; height: 50px; opacity: 0.2; }
//             .bubble:nth-child(5) { left: 85%; animation-duration: 20s; opacity: 0.35; }
//         `}} />
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//     </div>
// );


// const AboutAnish = () => {
//   return (
//     // Main page background
//     <div 
//         className="flex-grow text-white" 
//         style={{ 
//             backgroundImage: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)' 
//         }}
//     > 
      
//         {/* 💡 CHANGE 1: Full-width Hero Container for the Image Background */}
//         <section 
//             className="relative w-full mb-24 min-h-[550px] overflow-hidden" // w-full for full width
//             style={{ 
//                 backgroundImage: `url(${FoundationImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
//             }}
//         >
//           {/* 💡 Overlay for the black/white gradient effect and text readability */}
//           <div 
//             className="absolute inset-0 z-0" 
//             style={{
//                 backgroundImage: 'linear-gradient(90deg, rgba(15, 15, 15, 0.9) 0%, rgba(15, 15, 15, 0.7) 40%, rgba(15, 15, 15, 0.4) 100%)',
//                 mixBlendMode: 'multiply' 
//             }}
//           ></div>
          
//           {/* 💡 CHANGE 2: Content Wrapper to center and constrain content over the full-width background */}
//           <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
//             <div className="grid md:grid-cols-2 gap-12 m-20 mt-5 md:gap-16 items-center">
              
//               {/* Hero Text with Animation (Staggered) */}
//               <MotionDiv 
//                 className="space-y-6"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {/* Horizontal Line above heading */}
//                 <MotionDiv variants={itemVariants} className="w-20 h-1 bg-gray-500 mb-4"></MotionDiv>

//                 <MotionDiv variants={itemVariants}>
//                     <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
//                       In Loving Memory of <span className="block text-white">Anish Jadhav</span> 
//                     </h1>
//                 </MotionDiv>
                
//                 <MotionDiv variants={itemVariants}>
//                     <p className="text-lg text-gray-300 max-w-lg">
//                       Anish Jadhav was more than a beloved son—he was a light in the lives of all who knew him. His spirit, warmth, and dreams continue to inspire the mission of this foundation.
//                     </p>
//                 </MotionDiv>

//                 <MotionDiv variants={itemVariants} className="flex space-x-4 pt-4"> 
//                     <button className="px-8 py-3 bg-[#656b75] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 cursor-pointer">
//                         Learn More
//                     </button>
//                     <button className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 cursor-pointer">
//                         Get Involved
//                     </button>
//                 </MotionDiv>

//               </MotionDiv>
              
//               {/* Image Placeholder on the right */}
//               <div className="flex justify-center md:justify-start">
//                 <div className="w-full max-w-md">
//                   <ImagePlaceholder />
//                 </div>
//               </div>
//             </div> {/* End grid */}
//           </div> {/* End content wrapper */}
//         </section>

//         {/* 💡 CHANGE 3: The rest of the content (Sections 2, 3, 4, 5) needs to be inside a constrained container */}
//         <div className="container mx-auto px-6">
        
//             {/* === Section 2: The Story Behind the Foundation === */}
//             <MotionSection 
//                 className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl" 
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={containerVariants}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(145deg, #1c1c1c 0%, #2a2a2a 100%)', 
//                     border: '1px solid #2f2f2f'
//                 }}
//             >
//             {/* ... (Section 2 content) */}
//             <MotionDiv variants={itemVariants} className="text-center">
//                 <h2 className="text-4xl font-bold text-white text-center mb-12 inline-block px-4 pb-1 mx-auto border-b-2 border-[#656b75]">
//                     The Story Behind the Foundation
//                 </h2>
//             </MotionDiv>
            
//             <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-300">
//                 <MotionDiv variants={itemVariants} className="leading-relaxed">
//                 The Anish Jadhav Memorial Foundation was born from a profound love and an unwavering commitment to honor the memory of **Anish Jadhav**. Established by his father, **Brigadier Kishor Jadhav**, this foundation represents the transformation of personal grief into a powerful force for positive change.
//                 </MotionDiv>
                
//                 <MotionDiv variants={itemVariants} className="leading-relaxed">
//                 Anish was a young man of exceptional character, compassion, and potential. His life, though tragically cut short, left an indelible mark on everyone he encountered. His dreams, his kindness, and his belief in the power of education and opportunity became the cornerstone of what would become this foundation.
//                 </MotionDiv>
                
//                 <MotionDiv 
//                     variants={itemVariants}
//                     className="bg-gray-900 border-l-4 border-[#656b75] p-6 rounded-xl shadow-lg mt-10 cursor-pointer" 
//                     whileHover={{ scale: 1.01, boxShadow: '0 8px 15px rgba(0,0,0,0.3)' }} 
//                 >
//                 <p className="italic text-gray-200">
//                     "In honoring Anish's memory, we create a future filled with hope. Every student we empower, every life we transform, is a living testament to his spirit and the dreams he carried."
//                 </p>
//                 <p className="text-right text-sm font-semibold text-[#656b75] mt-4">
//                     — Brigadier Kishor Jadhav
//                 </p>
//                 </MotionDiv>
//             </div>
//             </MotionSection>

//             {/* --- */}

//             {/* === Section 3: Partnership with NavGurukul (Advanced Background) === */}
//             <MotionSection 
//                 className="mb-24 relative p-10 md:p-16 rounded-3xl shadow-xl overflow-hidden"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 1 }}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 70%, #2f2f2f 100%)', 
//                 }}
//             >
//                 <BubbleBackground />

//                 <div className="max-w-5xl mx-auto text-lg text-gray-300 space-y-6 relative z-10"> 
//                     <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-[#656b75] pb-2"> 
//                     Our Vision in Partnership
//                     </h2>
//                     <p className="leading-relaxed">
//                     In partnership with **NavGurukul**, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth. The partnership ensures that students receive not just education, but a complete transformation—from residential facilities and nutritious meals to world-class instruction and career placement support.
//                     </p>
//                     <p className="leading-relaxed">
//                     Today, the Anish Jadhav Memorial Foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in **programming, business, education, and second-chance opportunities**. Each student who walks through our doors carries forward Anish's legacy, turning dreams into reality and transforming their lives and communities.
//                     </p>
//                 </div>
//             </MotionSection>
            
//             {/* --- */}

//             {/* === Section 4: A Timeline of Impact === */}
//             <MotionSection 
//                 className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl" 
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={containerVariants}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(145deg, #1c1c1c 0%, #2a2a2a 100%)', 
//                     border: '1px solid #2f2f2f'
//                 }}
//             >
//             <h2 className="text-4xl font-bold text-white text-center mb-16"> 
//                 A Timeline of Impact
//             </h2>

//             <div className="max-w-4xl mx-auto relative">
//                 <TimelineItem
//                 tag="The Beginning"
//                 title="Foundation Established"
//                 content="Brigadier Kishor Jadhav establishes the Anish Jadhav Memorial Foundation in loving memory of his son, partnering with NavGurukul to create a lasting impact."
//                 />
                
//                 <TimelineItem
//                 tag="Building Hope"
//                 title="Campus Development"
//                 content="Construction and development of comprehensive residential facilities, creating a nurturing environment for underprivileged youth to learn and grow."
//                 />
                
//                 <TimelineItem
//                 tag="Programs Launch"
//                 title="Four Schools Open"
//                 content="Launch of the School of Programming, School of Business, School of Education, and School of Second Chance, offering diverse pathways to success."
//                 isPrimary={true}
//                 />

//                 <TimelineItem
//                 tag="Today"
//                 title="Transforming Lives"
//                 content="Continuing to empower students with education, skills, and opportunities, creating a ripple effect of positive change across communities."
//                 />
//             </div>
//             </MotionSection>

//             {/* --- */}

//             {/* === Section 5: His Legacy Lives On (Heartbeat) === */}
//             <MotionSection 
//                 className="text-center pt-12 pb-6 rounded-3xl shadow-xl" 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 1 }}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(145deg, #1a1a1a 0%, #0c0c0c 100%)', 
//                     border: '1px solid #1f1f1f'
//                 }}
//             >
//             <h2 className="text-3xl font-bold text-white mb-6 inline-block px-4 pb-1 border-b-2 border-[#656b75]">
//                 His Legacy Lives On
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//                 Every student we educate, every life we transform, every dream we help realize is a tribute to Anish Jadhav. His spirit lives on in the halls of our campus, in the determination of our students, and in the hope we carry forward each day.
//             </p>
//             <div className="flex justify-center mt-8">
//                 <MotionDiv variants={heartBeat} animate="beat">
//                     <Heart className="w-8 h-8 text-yellow-600 fill-yellow-600" />
//                 </MotionDiv>
//             </div>
//             </MotionSection>

//         </div> {/* End container mx-auto for the rest of the content */}
//     </div>
//   );
// };

// export default AboutAnish;

// import React from 'react';
// import { motion } from 'framer-motion'; 

// const MotionDiv = motion.div;
// const MotionSection = motion.section;

// // 💡 UPDATE: FoundationImage import removed as it is no longer used in the component
// import AnishImage from '../assets/Anish.png'; 
// import { Heart, Star, Users } from 'lucide-react';

// // === Animation Variants ===
// const containerVariants = {
//   visible: { transition: { staggerChildren: 0.1 } } 
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.3 } }
// };

// const heartBeat = {
//   beat: {
//     scale: [1, 1.2, 1, 1.1, 1], 
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut",
//       times: [0, 0.2, 0.5, 0.7, 1]
//     }
//   }
// };
// // === End Animation Variants ===


// // Mock image placeholder component
// const ImagePlaceholder = () => (
//   <MotionDiv 
//     // Reduced height slightly since it's no longer filling the background area
//     className="bg-gray-800 w-full h-96 md:h-120 rounded-xl overflow-hidden relative border border-gray-700 transition-all duration-300" 
//     variants={cardVariants}
//     initial="hidden"
//     animate="visible"
//     style={{ 
//       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.28), 0 0 15px rgba(255,255,255,0.1) inset' 
//     }}
//   >
//     <img 
//         src={AnishImage} 
//         alt="In Loving Memory of Anish Jadhav" 
//         className="w-full h-full object-cover" 
//     />
//   </MotionDiv>
// );

// const TimelineItem = ({ title, content, tag, isPrimary = false }) => (
//   <MotionDiv 
//     className="flex justify-start items-stretch space-x-6 md:space-x-12 my-6 cursor-pointer"
//     initial={{ opacity: 0, x: -50 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     whileHover={{ 
//         scale: 1.02, 
//         rotateX: 1, 
//         boxShadow: "0 10px 20px rgba(0,0,0,0.3)" 
//     }} 
//     viewport={{ once: true, amount: 0.5 }}
//     transition={{ duration: 0.5 }}
//   >
//     <div className="flex-shrink-0 w-24 md:w-32 pt-2">
//       <div className={`
//         px-3 py-2 text-sm font-semibold text-white text-center rounded-xl shadow-lg
//         ${isPrimary ? 'bg-[#656b75]' : 'bg-gray-700'} 
//       `}>
//         {tag}
//       </div>
//     </div>
    
//     <div className="flex-grow p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 transition duration-300 hover:shadow-2xl"> 
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3> 
//       <p className="text-gray-300 leading-relaxed">{content}</p> 
//     </div>
//   </MotionDiv>
// );

// const BubbleBackground = () => (
//     <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
//         <style dangerouslySetInnerHTML={{__html: `
//             @keyframes float {
//                 0% { transform: translateY(0) rotate(0deg); opacity: 1; }
//                 100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
//             }
//             .bubble {
//                 position: absolute;
//                 bottom: -150px;
//                 width: 40px;
//                 height: 40px;
//                 background-color: rgba(101, 107, 117, 0.15);
//                 border-radius: 50%;
//                 animation: float 25s infinite linear;
//             }
//             .bubble:nth-child(1) { left: 10%; animation-duration: 25s; width: 60px; height: 60px; opacity: 0.4; }
//             .bubble:nth-child(2) { left: 40%; animation-duration: 35s; width: 80px; height: 80px; opacity: 0.3; }
//             .bubble:nth-child(3) { left: 70%; animation-duration: 30s; opacity: 0.5; }
//             .bubble:nth-child(4) { left: 20%; animation-duration: 40s; width: 50px; height: 50px; opacity: 0.2; }
//             .bubble:nth-child(5) { left: 85%; animation-duration: 20s; opacity: 0.35; }
//         `}} />
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//         <div className="bubble"></div>
//     </div>
// );


// const AboutAnish = () => {
//   return (
//     // Main page background (faded black gradient retained)
//     <div 
//         className="flex-grow text-white" 
//         style={{ 
//             backgroundImage: 'linear-gradient(180deg, #121212 0%, #1f1f1f 100%)' 
//         }}
//     > 
      
//         {/* 💡 HERO SECTION UPDATE: Reverted to a standard contained section with the faded gradient background */}
//         <section 
//             className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl mx-auto container min-h-[500px]" // Added mx-auto container back
//             style={{ 
//                 backgroundImage: 'linear-gradient(145deg, #1f1f1f 0%, #292929 100%)', // Faded dark background for the box
//                 border: '1px solid #333333',
//                 maxWidth: '90%', // Ensures it doesn't touch edges, similar to how it was before
//             }}
//         >
          
//           {/* 💡 Content Wrapper is simplified back inside the container */}
//           <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            
//             {/* Hero Text with Animation (Staggered) */}
//             <MotionDiv 
//               className="space-y-6"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {/* Horizontal Line above heading */}
//               <MotionDiv variants={itemVariants} className="w-20 h-1 bg-gray-500 mb-4"></MotionDiv>

//               <MotionDiv variants={itemVariants}>
//                   <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
//                     In Loving Memory of <span className="block text-[#656b75]">Anish Jadhav</span> 
//                   </h1>
//               </MotionDiv>
              
//               <MotionDiv variants={itemVariants}>
//                   <p className="text-lg text-gray-300 max-w-lg">
//                     Anish Jadhav was more than a beloved son—he was a light in the lives of all who knew him. His spirit, warmth, and dreams continue to inspire the mission of this foundation.
//                   </p>
//               </MotionDiv>

//               <MotionDiv variants={itemVariants} className="flex space-x-4 pt-4"> 
//                   <button className="px-8 py-3 bg-[#656b75] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 cursor-pointer">
//                       Learn More
//                   </button>
//                   <button className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 cursor-pointer">
//                       Get Involved
//                   </button>
//               </MotionDiv>

//               <MotionDiv variants={itemVariants} className="flex space-x-2 pt-2">
//                   <Heart className="w-6 h-6 text-yellow-600 fill-yellow-600" />
//                   <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
//               </MotionDiv>

//             </MotionDiv>
            
//             {/* Image Placeholder on the right */}
//             <div className="flex justify-center md:justify-start">
//               <div className="w-full max-w-md">
//                 <ImagePlaceholder />
//               </div>
//             </div>
//           </div> 
//         </section>

//         {/* 💡 The rest of the content (Sections 2, 3, 4, 5) is now inside the standard container again */}
//         <div className="container mx-auto px-6">
        
//             {/* === Section 2: The Story Behind the Foundation === */}
//             <MotionSection 
//                 className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl" 
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={containerVariants}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(145deg, #1f1f1f 0%, #292929 100%)', 
//                     border: '1px solid #333333' 
//                 }}
//             >
//             {/* ... (Section 2 content) */}
//             <MotionDiv variants={itemVariants} className="text-center">
//                 <h2 className="text-4xl font-bold text-white text-center mb-12 inline-block px-4 pb-1 mx-auto border-b-2 border-[#656b75]">
//                     The Story Behind the Foundation
//                 </h2>
//             </MotionDiv>
            
//             <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-300">
//                 <MotionDiv variants={itemVariants} className="leading-relaxed">
//                 The Anish Jadhav Memorial Foundation was born from a profound love and an unwavering commitment to honor the memory of **Anish Jadhav**. Established by his father, **Brigadier Kishor Jadhav**, this foundation represents the transformation of personal grief into a powerful force for positive change.
//                 </MotionDiv>
                
//                 <MotionDiv variants={itemVariants} className="leading-relaxed">
//                 Anish was a young man of exceptional character, compassion, and potential. His life, though tragically cut short, left an indelible mark on everyone he encountered. His dreams, his kindness, and his belief in the power of education and opportunity became the cornerstone of what would become this foundation.
//                 </MotionDiv>
                
//                 <MotionDiv 
//                     variants={itemVariants}
//                     className="bg-gray-900 border-l-4 border-[#656b75] p-6 rounded-xl shadow-lg mt-10 cursor-pointer" 
//                     whileHover={{ scale: 1.01, boxShadow: '0 8px 15px rgba(0,0,0,0.3)' }} 
//                 >
//                 <p className="italic text-gray-200">
//                     "In honoring Anish's memory, we create a future filled with hope. Every student we empower, every life we transform, is a living testament to his spirit and the dreams he carried."
//                 </p>
//                 <p className="text-right text-sm font-semibold text-[#656b75] mt-4">
//                     — Brigadier Kishor Jadhav
//                 </p>
//                 </MotionDiv>
//             </div>
//             </MotionSection>

//             {/* --- */}

//             {/* === Section 3: Partnership with NavGurukul (Advanced Background) === */}
//             <MotionSection 
//                 className="mb-24 relative p-10 md:p-16 rounded-3xl shadow-xl overflow-hidden"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 1 }}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(135deg, #1f1f1f 0%, #303030 70%, #252525 100%)', 
//                 }}
//             >
//                 <BubbleBackground />

//                 <div className="max-w-5xl mx-auto text-lg text-gray-300 space-y-6 relative z-10"> 
//                     <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-[#656b75] pb-2"> 
//                     Our Vision in Partnership
//                     </h2>
//                     <p className="leading-relaxed">
//                     In partnership with **NavGurukul**, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth. The partnership ensures that students receive not just education, but a complete transformation—from residential facilities and nutritious meals to world-class instruction and career placement support.
//                     </p>
//                     <p className="leading-relaxed">
//                     Today, the Anish Jadhav Memorial Foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in **programming, business, education, and second-chance opportunities**. Each student who walks through our doors carries forward Anish's legacy, turning dreams into reality and transforming their lives and communities.
//                     </p>
//                 </div>
//             </MotionSection>
            
//             {/* --- */}

//             {/* === Section 4: A Timeline of Impact === */}
//             <MotionSection 
//                 className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl" 
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.1 }}
//                 variants={containerVariants}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(145deg, #1f1f1f 0%, #292929 100%)', 
//                     border: '1px solid #333333'
//                 }}
//             >
//             <h2 className="text-4xl font-bold text-white text-center mb-16"> 
//                 A Timeline of Impact
//             </h2>

//             <div className="max-w-4xl mx-auto relative">
//                 <TimelineItem
//                 tag="The Beginning"
//                 title="Foundation Established"
//                 content="Brigadier Kishor Jadhav establishes the Anish Jadhav Memorial Foundation in loving memory of his son, partnering with NavGurukul to create a lasting impact."
//                 />
                
//                 <TimelineItem
//                 tag="Building Hope"
//                 title="Campus Development"
//                 content="Construction and development of comprehensive residential facilities, creating a nurturing environment for underprivileged youth to learn and grow."
//                 />
                
//                 <TimelineItem
//                 tag="Programs Launch"
//                 title="Four Schools Open"
//                 content="Launch of the School of Programming, School of Business, School of Education, and School of Second Chance, offering diverse pathways to success."
//                 isPrimary={true}
//                 />

//                 <TimelineItem
//                 tag="Today"
//                 title="Transforming Lives"
//                 content="Continuing to empower students with education, skills, and opportunities, creating a ripple effect of positive change across communities."
//                 />
//             </div>
//             </MotionSection>

//             {/* --- */}

//             {/* === Section 5: His Legacy Lives On (Heartbeat) === */}
//             <MotionSection 
//                 className="text-center pt-12 pb-6 rounded-3xl shadow-xl" 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 1 }}
//                 style={{ 
//                     backgroundImage: 'linear-gradient(145deg, #1f1f1f 0%, #151515 100%)', 
//                     border: '1px solid #282828'
//                 }}
//             >
//             <h2 className="text-3xl font-bold text-white mb-6 inline-block px-4 pb-1 border-b-2 border-[#656b75]">
//                 His Legacy Lives On
//             </h2>
//             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//                 Every student we educate, every life we transform, every dream we help realize is a tribute to Anish Jadhav. His spirit lives on in the halls of our campus, in the determination of our students, and in the hope we carry forward each day.
//             </p>
//             <div className="flex justify-center mt-8">
//                 <MotionDiv variants={heartBeat} animate="beat">
//                     <Heart className="w-8 h-8 text-yellow-600 fill-yellow-600" />
//                 </MotionDiv>
//             </div>
//             </MotionSection>

//         </div> {/* End container mx-auto for the rest of the content */}
//     </div>
//   );
// };

// export default AboutAnish;

import React from 'react';
import { motion } from 'framer-motion'; 

const MotionDiv = motion.div;
const MotionSection = motion.section;

// 💡 Imports remain the same
import AnishImage from '../assets/Anish.png'; 
import { Heart, Star, Users } from 'lucide-react';

// === Animation Variants ===
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
// === End Animation Variants ===


// Mock image placeholder component
const ImagePlaceholder = () => (
  <MotionDiv 
    // Reduced height slightly since it's no longer filling the background area
    className="bg-gray-800 w-full h-96 md:h-120 rounded-xl overflow-hidden relative border border-gray-700 transition-all duration-300" 
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    style={{ 
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.28), 0 0 15px rgba(255,255,255,0.1) inset' 
    }}
  >
    <img 
        src={AnishImage} 
        alt="In Loving Memory of Anish Jadhav" 
        className="w-full h-full object-cover" 
    />
  </MotionDiv>
);

const TimelineItem = ({ title, content, tag, isPrimary = false }) => (
  <MotionDiv 
    className="flex justify-start items-stretch space-x-6 md:space-x-12 my-6 cursor-pointer"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ 
        scale: 1.02, 
        rotateX: 1, 
        boxShadow: "0 10px 20px rgba(0,0,0,0.3)" 
    }} 
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0 w-24 md:w-32 pt-2">
      <div className={`
        px-3 py-2 text-sm font-semibold text-white text-center rounded-xl shadow-lg
        ${isPrimary ? 'bg-[#656b75]' : 'bg-gray-700'} 
      `}>
        {tag}
      </div>
    </div>
    
    <div className="flex-grow p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 transition duration-300 hover:shadow-2xl"> 
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3> 
      <p className="text-gray-300 leading-relaxed">{content}</p> 
    </div>
  </MotionDiv>
);

const BubbleBackground = () => (
    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-50">
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes float {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
            }
            .bubble {
                position: absolute;
                bottom: -150px;
                width: 40px;
                height: 40px;
                background-color: rgba(101, 107, 117, 0.15);
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


const AboutAnish = () => {
  return (
    // Main page background (faded black gradient retained)
    <div 
        className="flex-grow text-white" 
        style={{ 
            backgroundImage: 'linear-gradient(180deg, #121212 0%, #1f1f1f 100%)' 
        }}
    > 
      
        {/* HERO SECTION CONTAINER */}
        <section 
            className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl mx-auto container min-h-[500px]" 
            style={{ 
                // Using the new, softer gradient base
                backgroundImage: 'linear-gradient(145deg, #242424 0%, #303030 100%)', 
                border: '1px solid #3d3d3d', // Lighter border for definition
                maxWidth: '90%', 
            }}
        >
          
          <div className="grid md:grid-cols-2 gap-12 m-20 mt-5 md:gap-16 items-center">
            
            {/* Hero Text with Animation (Staggered) */}
            <MotionDiv 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Horizontal Line above heading */}
              <MotionDiv variants={itemVariants} className="w-20 h-1 bg-gray-500 mb-4"></MotionDiv>

              <MotionDiv variants={itemVariants}>
                  <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                    In Loving Memory of <span className="block text-[#656b75]">Anish Jadhav</span> 
                  </h1>
              </MotionDiv>
              
              <MotionDiv variants={itemVariants}>
                  <p className="text-lg text-gray-300 max-w-lg">
                    Anish Jadhav was more than a beloved son—he was a light in the lives of all who knew him. His spirit, warmth, and dreams continue to inspire the mission of this foundation.
                  </p>
              </MotionDiv>

              <MotionDiv variants={itemVariants} className="flex space-x-4 pt-4"> 
                  <button className="px-8 py-3 bg-[#656b75] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 cursor-pointer">
                      Learn More
                  </button>
                  <button className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                      Get Involved
                  </button>
              </MotionDiv>

              <MotionDiv variants={itemVariants} className="flex space-x-2 pt-2">
                  <Heart className="w-6 h-6 text-yellow-600 fill-yellow-600" />
                  <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
              </MotionDiv>

            </MotionDiv>
            
            {/* Image Placeholder on the right */}
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-md">
                <ImagePlaceholder />
              </div>
            </div>
          </div> 
        </section>

        {/* The rest of the content (Sections 2, 3, 4, 5) is inside the standard container */}
        <div className="container mx-auto px-6">
        
            {/* === Section 2: The Story Behind the Foundation === */}
            <MotionSection 
                className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                style={{ 
                    backgroundImage: 'linear-gradient(145deg, #242424 0%, #303030 100%)', 
                    border: '1px solid #3d3d3d'
                }}
            >
            <MotionDiv variants={itemVariants} className="text-center">
                <h2 className="text-4xl font-bold text-white text-center mb-12 inline-block px-4 pb-1 mx-auto border-b-2 border-[#656b75]">
                    The Story Behind the Foundation
                </h2>
            </MotionDiv>
            
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-300">
                <MotionDiv variants={itemVariants} className="leading-relaxed">
                The Anish Jadhav Memorial Foundation was born from a profound love and an unwavering commitment to honor the memory of **Anish Jadhav**. Established by his father, **Brigadier Kishor Jadhav**, this foundation represents the transformation of personal grief into a powerful force for positive change.
                </MotionDiv>
                
                <MotionDiv variants={itemVariants} className="leading-relaxed">
                Anish was a young man of exceptional character, compassion, and potential. His life, though tragically cut short, left an indelible mark on everyone he encountered. His dreams, his kindness, and his belief in the power of education and opportunity became the cornerstone of what would become this foundation.
                </MotionDiv>
                
                <MotionDiv 
                    variants={itemVariants}
                    className="bg-gray-900 border-l-4 border-[#656b75] p-6 rounded-xl shadow-lg mt-10 cursor-pointer" 
                    whileHover={{ scale: 1.01, boxShadow: '0 8px 15px rgba(0,0,0,0.3)' }} 
                >
                <p className="italic text-gray-200">
                    "In honoring Anish's memory, we create a future filled with hope. Every student we empower, every life we transform, is a living testament to his spirit and the dreams he carried."
                </p>
                <p className="text-right text-sm font-semibold text-[#656b75] mt-4">
                    — Brigadier Kishor Jadhav
                </p>
                </MotionDiv>
            </div>
            </MotionSection>

            {/* --- */}

            {/* === Section 3: Partnership with NavGurukul (Advanced Background) === */}
            <MotionSection 
                className="mb-24 relative p-10 md:p-16 rounded-3xl shadow-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
                style={{ 
                    backgroundImage: 'linear-gradient(135deg, #242424 0%, #353535 70%, #2b2b2b 100%)', 
                }}
            >
                <BubbleBackground />

                <div className="max-w-5xl mx-auto text-lg text-gray-300 space-y-6 relative z-10"> 
                    <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-[#656b75] pb-2"> 
                    Our Vision in Partnership
                    </h2>
                    <p className="leading-relaxed">
                    In partnership with **NavGurukul**, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth. The partnership ensures that students receive not just education, but a complete transformation—from residential facilities and nutritious meals to world-class instruction and career placement support.
                    </p>
                    <p className="leading-relaxed">
                    Today, the Anish Jadhav Memorial Foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in **programming, business, education, and second-chance opportunities**. Each student who walks through our doors carries forward Anish's legacy, turning dreams into reality and transforming their lives and communities.
                    </p>
                </div>
            </MotionSection>
            
            {/* --- */}

            {/* === Section 4: A Timeline of Impact === */}
            <MotionSection 
                className="mb-24 p-10 md:p-16 rounded-3xl shadow-2xl" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                style={{ 
                    backgroundImage: 'linear-gradient(145deg, #242424 0%, #303030 100%)', 
                    border: '1px solid #3d3d3d'
                }}
            >
            <h2 className="text-4xl font-bold text-white text-center mb-16"> 
                A Timeline of Impact
            </h2>

            <div className="max-w-4xl mx-auto relative">
                <TimelineItem
                tag="The Beginning"
                title="Foundation Established"
                content="Brigadier Kishor Jadhav establishes the Anish Jadhav Memorial Foundation in loving memory of his son, partnering with NavGurukul to create a lasting impact."
                />
                
                <TimelineItem
                tag="Building Hope"
                title="Campus Development"
                content="Construction and development of comprehensive residential facilities, creating a nurturing environment for underprivileged youth to learn and grow."
                />
                
                <TimelineItem
                tag="Programs Launch"
                title="Four Schools Open"
                content="Launch of the School of Programming, School of Business, School of Education, and School of Second Chance, offering diverse pathways to success."
                isPrimary={true}
                />

                <TimelineItem
                tag="Today"
                title="Transforming Lives"
                content="Continuing to empower students with education, skills, and opportunities, creating a ripple effect of positive change across communities."
                />
            </div>
            </MotionSection>

            {/* --- */}

            {/* === Section 5: His Legacy Lives On (Heartbeat) === */}
            <MotionSection 
                className="text-center pt-12 pb-6 rounded-3xl shadow-xl" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                style={{ 
                    backgroundImage: 'linear-gradient(145deg, #202020 0%, #171717 100%)', 
                    border: '1px solid #303030'
                }}
            >
            <h2 className="text-3xl font-bold text-white mb-6 inline-block px-4 pb-1 border-b-2 border-[#656b75]">
                His Legacy Lives On
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Every student we educate, every life we transform, every dream we help realize is a tribute to Anish Jadhav. His spirit lives on in the halls of our campus, in the determination of our students, and in the hope we carry forward each day.
            </p>
            <div className="flex justify-center mt-8">
                <MotionDiv variants={heartBeat} animate="beat">
                    <Heart className="w-8 h-8 text-yellow-600 fill-yellow-600" />
                </MotionDiv>
            </div>
            </MotionSection>

        </div> {/* End container mx-auto for the rest of the content */}
    </div>
  );
};

export default AboutAnish;