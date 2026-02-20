// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";
// import Button from "../ui/Button";
// import GlassCard from "../ui/GlassCard";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   const partnerLogos = [
//     {
//       name: "Reva University",
//       logo: "/logos/reva.png",
//     },
//     {
//       name: "LeadSpotting",
//       logo: "/logos/leadspotting.png",
//     },
//     {
//       name: "AWS Startups",
//       logo: "/logos/aws-startups.png",
//     },
//     {
//       name: "Startup India",
//       logo: "/logos/startup-india.png",
//     },
//     {
//       name: "NVIDIA",
//       logo: "/logos/nvidia.png",
//     },
//     {
//       name: "Make in India",
//       logo: "/logos/make-in-india.png",
//     },
//   ];

//   {
//     /* Animation Variants */
//   }
//   const blurEffect = {
//     hidden: { filter: "blur(10px)", opacity: 0 },
//     visible: { filter: "blur(0px)", opacity: 1 },
//   };

//   return (
//     <>
//       <SectionWrapper className="relative pt-32 pb-20 overflow-hidden bg-black">
//         {/* 🔥 AMBIENT TOP GLOW (#7AC5B4) */}
//         <div
//           className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[600px] rounded-full pointer-events-none z-0"
//           style={{
//             background: "radial-gradient(circle, #7AC5B4 0%, transparent 70%)",
//             opacity: 0.25,
//             filter: "blur(0px)",
//           }}
//         ></div>

//         {/* --- Circuit Lines SVG Background (Moved to the very top) --- */}
//         <div className="absolute top-12 left-0 w-full h-[400px] z-0 pointer-events-none">
//           {/* CSS Style for the independent dash animations */}
//           <style>
//             {`
//               .circuit-base {
//                 stroke: #333;
//                 stroke-width: 1.5;
//               }
//               .circuit-glow {
//                 stroke: white;
//                 stroke-width: 2;

//                 /* Dash is 8 units long, gap is 112 units (Total 120) */
//                 stroke-dasharray: 8 112;
//                 opacity: 0.9;
//               }

//               /* Give each line a slightly different speed and delay so they move independently */
//               .glow-1 { animation: circuitFlow 4s linear infinite; }
//               .glow-2 { animation: circuitFlow 5s linear infinite 1.5s; }
//               .glow-3 { animation: circuitFlow 4.5s linear infinite 0.5s; }
//               .glow-4 { animation: circuitFlow 5.5s linear infinite 2s; }

//               /* Animate from just outside the start (10) to just outside the end (-110) */
//               @keyframes circuitFlow {
//                 0% { stroke-dashoffset: 10; }
//                 100% { stroke-dashoffset: -110; }
//               }
//             `}
//           </style>
//           <svg
//             className="w-full h-full"
//             viewBox="0 0 1440 400"
//             fill="none"
//             preserveAspectRatio="xMidYMin slice"
//           >
//             {/* --- Left Side --- */}
//             <g>
//                 {/* Base Lines */}
//                 <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-base" />
//                 <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-base" />

//                 {/* Animated Glowing Traces (using pathLength="100" so 8% is strictly proportional to each line) */}
//                 <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-glow glow-1" pathLength="100" />
//                 <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-glow glow-2" pathLength="100" />

//                 {/* Nodes */}
//                 <circle cx="320" cy="100" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
//                 <circle cx="280" cy="120" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
//             </g>

//             {/* --- Right Side --- */}
//             <g>
//                 {/* Base Lines */}
//                 <path d="M1540 40 L 1250 40 L 1150 120 H 1050" className="circuit-base" />
//                 <path d="M1540 60 L 1280 60 L 1180 140 H 1100" className="circuit-base" />

//                 {/* Animated Glowing Traces */}
//                 <path d="M1540 40 L 1250 40 L 1150 120 H 1050" className="circuit-glow glow-3" pathLength="100" />
//                 <path d="M1540 60 L 1280 60 L 1180 140 H 1100" className="circuit-glow glow-4" pathLength="100" />

//                 {/* Nodes */}
//                 <circle cx="1050" cy="120" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
//                 <circle cx="1100" cy="140" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
//             </g>
//           </svg>
//         </div>

//         {/* Top Brand Image */}
//         <div className="relative z-10 flex justify-center pt-16 mb-12">
//           <img
//             src="/brand.png" // <-- replace with your image path
//             alt="CTRL FAKE"
//             className="object-cover h-2 pointer-events-none select-none md:h-5 lg:h-5"
//           />
//         </div>
//         {/* Main Heading Block */}
//         <div className="relative z-10 px-4 text-center">
//           <motion.h1
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ staggerChildren: 0.1 }}
//             className="
//                 uppercase
//                 text-white
//                 font-['Oswald']
//                 font-[600]
//                 text-[90px]
//                 leading-[90px]
//                 tracking-[-6px]
//                 md:text-[220px]
//                 md:leading-[220px]
//                 md:tracking-[-10px]
//               "
//             style={{
//               textShadow: "0px 0px 100px rgba(255,255,255,0.5)",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {Array.from("AI-POWERED").map((char, index) => (
//               <motion.span
//                 key={index}
//                 variants={blurEffect}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="inline-block"
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>
//         </div>

//         {/* Background VERIFICATION Watermark */}
//         <div className="absolute inset-0 z-0 flex items-center justify-center mt-32 select-none mt-pointer-events-none">
//           <h1
//             className="
//                   uppercase
//                   font-oswald
//                   font-[650]
//                   text-center
//                   text-[90px]
//                   leading-[90px]
//                   tracking-[-6px]
//                   md:text-[220px]
//                   md:leading-[220px]
//                   md:tracking-[-10px]
//                 "
//             style={{
//               backgroundImage:
//                 "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 100%)",
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               display: "inline-block",
//               whiteSpace: "nowrap",
//             }}
//           >
//             VERIFICATION
//           </h1>
//         </div>

//         {/* Badge - Exact padding and backdrop */}
//         <div className="relative z-10 flex items-start justify-center mt-10 translate-y-36">
//           <div className="flex items-center gap-4 px-4 py-2 text-sm text-gray-300 border rounded-[60px] shadow-2xl bg-white/5 backdrop-blur-md border-white/10 mt-0">
//             {/* Small Circular Image */}
//             <div className="relative flex items-start w-8 h-8 rounded-full">
//               {/* Soft teal glow */}
//               <div className="absolute rounded-full bg-teal-400/20 blur-md"></div>

//               {/* Image wrapper */}
//               <img
//                 src="/badge.png"
//                 alt="AI"
//                 className="relative z-10 object-contain h-30 w-30"
//               />

//               {/* Subtle border ring */}
//             </div>

//             {/* Badge Text */}
//             <span className="font-semibold font-grotesk">
//               Real-Time AI Generated and Deep Fake Detection
//             </span>
//           </div>
//         </div>

//         {/* Description - Centered and spaced exactly */}
//        <p
//   className="relative z-10 max-w-2xl px-4 mx-auto mt-40 text-center translate-y-[1.2rem] framer-text"
//   style={{
//     fontFamily: '"Space Grotesk", sans-serif',
//     fontWeight: 300,
//     fontSize: "14px",
//     lineHeight: "140%",
//     letterSpacing: "0px",
//     color: "#ffffff",
//   }}
// >
//   From Deepfake detection to AI-generated Data analysis, explore how our
//   technology ensures authenticity and protects your media from digital
//   deception.
// </p>

//         {/* Buttons - Gap and positioning match */}
//         <div className="relative z-10 flex justify-center gap-6 px-4 mt-12">
//           {" "}
//           {/* Increased gap-6, mt-12 */}
//           <Button variant="primary" size="lg" className="px-8 py-4 text-lg">
//             {" "}
//             {/* Larger padding */}
//             Start Protecting Now →
//           </Button>
//           <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
//             Learn More
//           </Button>
//         </div>

//         {/* Floating Cards - Exact positions/sizes from screenshot pixel measurements */}

//         {/* LEFT UPLOAD CARD */}
//         <div className="absolute hidden lg:block left-[10%] top-[30%] translate-x-10 w-[260px] z-20 animate-floatLeft transform-gpu will-change-transform">
//           <div
//             className="
//               relative
//               w-full
//               p-4
//               rounded-[32px]
//               bg-[#09090b]
//               backdrop-blur-[45px]
//               border border-white/30
//               shadow-[0_35px_100px_rgba(0,0,0,0.8)]
//               font-sans
//               isolate
//             "
//           >
//             {/* Glass Gradient Overlay (NO blur here) */}
//             <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] pointer-events-none"></div>

//             {/* === BACKGROUND WIREFRAME BOXES === */}

//             {/* Box 1 */}
//             <div className="absolute top-4 left-4 right-4 bottom-[76px] border-[1.2px] border-white/20 rounded-[16px] pointer-events-none z-10"></div>

//             {/* Box 2 */}
//             <div className="absolute top-[124px] bottom-4 left-8 right-8 border-[1.2px] border-white/20 rounded-[16px] pointer-events-none z-10"></div>

//             {/* === FOREGROUND CONTENT === */}
//             <div className="relative z-20 flex flex-col w-full h-full">
//               {/* Upload Media Title */}
//               <div className="px-6 pt-5 pb-3">
//                 <p className="text-[14px] text-white/90 tracking-wide font-medium">
//                   Upload Media*
//                 </p>
//               </div>

//               {/* Dropdown */}
//               <div className="px-6 pb-4">
//                 <div className="rounded-[16px] p-[1px] bg-gradient-to-r from-[#9d4edd] via-[#f77f00] to-[#9d4edd]">
//                   <div className="flex items-center justify-between rounded-[15px] bg-[#121214] px-4 py-2.5 cursor-pointer">
//                     <span className="text-[13px] text-white/80">
//                       Select File
//                     </span>
//                     <span className="mb-1 text-lg leading-none text-white/60">
//                       ⌄
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="flex items-center gap-3 pl-12 pr-6 py-2.5 cursor-pointer group relative z-20">
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="transition-colors text-white/50 group-hover:text-white/80"
//                 >
//                   <rect x="3" y="3" width="18" height="18" rx="2"></rect>
//                   <circle cx="8.5" cy="8.5" r="1.5"></circle>
//                   <polyline points="21 15 16 10 5 21"></polyline>
//                 </svg>
//                 <span className="text-[13px] text-white/60 group-hover:text-white/90 transition-colors">
//                   Image
//                 </span>
//               </div>

//               {/* Video (Active) */}
//               <div className="relative z-30 flex items-center gap-3 px-4 py-2.5 mx-5 my-1.5 bg-opacity-50 bg-[#494848] border border-white/20 rounded-[16px] cursor-pointer shadow-sm">
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-white/90"
//                 >
//                   <polygon points="23 7 16 12 23 17 23 7"></polygon>
//                   <rect x="1" y="5" width="15" height="14" rx="2"></rect>
//                 </svg>
//                 <span className="text-[13px] text-white/90">Video</span>
//               </div>

//               {/* Audio */}
//               <div className="flex items-center gap-3 pl-12 pr-6 py-2.5 cursor-pointer group relative z-20">
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="transition-colors text-white/50 group-hover:text-white/80"
//                 >
//                   <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
//                   <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
//                   <line x1="12" y1="19" x2="12" y2="23"></line>
//                   <line x1="8" y1="23" x2="16" y2="23"></line>
//                 </svg>
//                 <span className="text-[13px] text-white/60 group-hover:text-white/90 transition-colors">
//                   Audio
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* LEFT SCANNING CARD */}
//         <div className="absolute hidden lg:block left-[15%] top-[65%] translate-x-20 w-[270px] h-[270px] z-20 animate-floatDeep transform-gpu will-change-transform">
//           <div
//             className="
//       relative
//       w-full
//       h-full
//       p-5
//       rounded-[20px]
//       bg-[#09090b]
//       border border-white/30
//       shadow-[0_40px_120px_rgba(0,0,0,0.75)]
//       backdrop-blur-[45px]
//       font-sans
//       isolate
//     "
//           >
//             {/* Glass Gradient Overlay */}
//             <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] pointer-events-none"></div>

//             {/* === CONNECTING LINES === */}
//             {/* Height increased to 190px to accommodate the third line drop */}
//             <div className="absolute left-[46px] top-[46px] w-[24px] h-[190px] z-10 pointer-events-none">
//               <div className="absolute top-0 left-0 w-full h-[63px] border-l-[1.5px] border-b-[1.5px] border-white/25 rounded-bl-[12px]"></div>
//               <div className="absolute top-0 left-0 w-full h-[121px] border-l-[1.5px] border-b-[1.5px] border-white/25 rounded-bl-[12px]"></div>
//               {/* New 3rd Line (calculated 121px + 58px increment based on your flex gaps) */}
//               <div className="absolute top-0 left-0 w-full h-[179px] border-l-[1.5px] border-b-[1.5px] border-white/25 rounded-bl-[12px]"></div>
//             </div>

//             {/* === FOREGROUND CONTENT === */}
//             <div className="relative z-20 flex flex-col gap-[16px]">
//               {/* 1. Scanning Box */}
//               <div className="flex items-center p-1.5 pr-4 w-full rounded-[14px] border border-white/20 bg-[#121214]">
//                 <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-white/70"
//                   >
//                     <path d="M4 7V4h3"></path>
//                     <path d="M17 4h3v3"></path>
//                     <path d="M20 17v3h-3"></path>
//                     <path d="M7 20H4v-3"></path>
//                   </svg>
//                 </div>
//                 <span className="ml-4 text-[14px] font-medium text-white/90">
//                   Scanning...
//                 </span>
//               </div>

//               {/* 2. Progress Box */}
//               <div className="w-[calc(100%-50px)] ml-[50px] rounded-[14px] p-[1px] bg-gradient-to-r from-[#ffd166] via-[#f77f00] to-[#9d4edd]">
//                 <div className="flex items-center justify-between rounded-[13px] bg-[#0c0c0e] px-4 py-[10px]">
//                   <span className="text-[13px] text-white/85">Progress:</span>

//                   <div className="flex items-center gap-2">
//                     <div className="flex h-[12px] gap-[2px]">
//                       <div className="w-[12px] bg-white rounded-[1px]"></div>
//                       <div className="w-[12px] bg-white rounded-[1px]"></div>
//                       <div className="w-[28px] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:3px_3px] rounded-[1px]"></div>
//                     </div>
//                     <span className="text-[13px] text-white/90 w-[3ch] text-right">
//                       60%
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* 3. Estimated Time Box */}
//               <div className="w-[calc(100%-50px)] ml-[50px] rounded-[14px] border border-white/20 bg-[#0c0c0e] px-4 py-[10px]">
//                 <span className="text-[13px] text-white/85">
//                   Estimated Time: 8s
//                 </span>
//               </div>

//               {/* 4. NEW Extra Status Box */}
//               <div className="w-[calc(100%-50px)] ml-[50px] rounded-[14px] border border-white/20 bg-[#0c0c0e] px-4 py-[10px]">
//                 <span className="text-[13px] text-white/85">
//                   Status: Validating...
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT DETECTION CARD */}
//         <div className="absolute hidden lg:block right-[8%] top-[30%] w-[270px] h-[270px] z-20 animate-floatRight transform-gpu will-change-transform">
//           <div
//             className="
//       relative
//       w-full
//       h-full
//       p-5
//       rounded-[20px]
//       bg-[#09090b]
//       border border-white/30
//       shadow-[0_40px_120px_rgba(0,0,0,0.75)]
//       backdrop-blur-[45px]
//       font-sans
//       isolate
//     "
//           >
//             {/* Glass Gradient Overlay */}
//             <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] pointer-events-none"></div>

//             {/* === FOREGROUND CONTENT === */}
//             <div className="relative z-20 flex flex-col gap-[28px]">
//               {/* 1. Detection Results */}
//               <div className="rounded-[14px] p-[1px] bg-gradient-to-r from-[#ffd166] via-[#f77f00] to-[#9d4edd]">
//                 <div className="flex items-center p-1.5 pr-4 rounded-[13px] bg-[#0c0c0e]">
//                   <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-white/70"
//                     >
//                       <path d="M4 7V4h3"></path>
//                       <path d="M17 4h3v3"></path>
//                       <path d="M20 17v3h-3"></path>
//                       <path d="M7 20H4v-3"></path>
//                       <circle cx="12" cy="10" r="2"></circle>
//                       <path d="M10 14a2 2 0 0 0-2 2v1h8v-1a2 2 0 0 0-2-2h-4z"></path>
//                     </svg>
//                   </div>
//                   <span className="ml-4 text-[14px] font-medium text-white/90">
//                     Detection Results
//                   </span>
//                 </div>
//               </div>

//               {/* 2. Deepfake Probability */}
//               <div className="flex items-center p-1.5 pr-4 rounded-[14px] border border-white/20 bg-[#0c0c0e]">
//                 <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-white/60"
//                   >
//                     <path d="M4 7V4h3"></path>
//                     <path d="M17 4h3v3"></path>
//                     <path d="M20 17v3h-3"></path>
//                     <path d="M7 20H4v-3"></path>
//                   </svg>
//                 </div>
//                 <span className="ml-4 text-[14px] font-medium text-white/90">
//                   Deepfake Probability 85%
//                 </span>
//               </div>

//               {/* 3. High Confidence */}
//               <div className="flex items-center p-1.5 pr-4 rounded-[14px] border border-white/20 bg-[#0c0c0e]">
//                 <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-white/60"
//                   >
//                     <line x1="4" y1="21" x2="4" y2="14"></line>
//                     <line x1="4" y1="10" x2="4" y2="3"></line>
//                     <line x1="12" y1="21" x2="12" y2="12"></line>
//                     <line x1="12" y1="8" x2="12" y2="3"></line>
//                     <line x1="20" y1="21" x2="20" y2="16"></line>
//                     <line x1="20" y1="12" x2="20" y2="3"></line>
//                     <line x1="1" y1="14" x2="7" y2="14"></line>
//                     <line x1="9" y1="8" x2="15" y2="8"></line>
//                     <line x1="17" y1="16" x2="23" y2="16"></line>
//                   </svg>
//                 </div>
//                 <span className="ml-4 text-[14px] font-medium text-white/90">
//                   High Confidence
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT BOTTOM SUMMARY CARD */}
//         <div className="absolute hidden lg:block right-[15%] top-[62%] w-[270px] h-[270px] z-20 animate-floatSlow">
//           <div
//             className="
//       relative
//       w-full
//       h-full
//       p-5
//       rounded-[20px]
//       bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
//       backdrop-blur-[45px]
//       border border-white/30
//       shadow-[0_40px_120px_rgba(0,0,0,0.75)]
//       isolate
//     "
//           >
//             {/* ===== HEADER ===== */}
//             <div className="flex items-center gap-3 mb-5">
//               <div className="w-12 h-12 rounded-[12px] flex items-center justify-center bg-white/5 border border-white/20">
//                 <svg
//                   width="18"
//                   height="18"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   className="text-white/70"
//                 >
//                   <path d="M4 4H14V14H4Z" />
//                   <path d="M14 4L20 10V20H4V14" />
//                 </svg>
//               </div>

//               <div className="text-[16px] text-white/90 tracking-wide">
//                 Summary Report
//               </div>
//             </div>

//             {/* Divider Line */}
//             <div className="h-[1px] bg-white/15 mb-5 -mx-5"></div>

//             {/* ===== STATUS BOX ===== */}
//             <div className="mb-4">
//               <div className="rounded-[14px] p-[1px] bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500">
//                 <div className="rounded-[13px] bg-[#0f0f10] px-4 py-3 text-[14px] text-white/85">
//                   Status: FAKE
//                 </div>
//               </div>
//             </div>

//             {/* ===== SECTIONS BOX ===== */}
//             <div>
//               <div className="rounded-[14px] bg-[#0f0f10] border border-white/15 px-4 py-3 text-[14px] text-white/80">
//                 Sections Analyzed: 5
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Partner Logos - Exact grid and spacing */}
//       </SectionWrapper>
//       {/* Partner Logos */}
//       <div className="relative z-10 flex justify-center mt-16">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
//           {partnerLogos.map((partner, index) => (
//             <div
//               key={index}
//               className="
//           w-[220px]
//           px-6 py-6
//           flex flex-col items-center justify-center gap-4
//           text-sm
//           font-semibold
//           text-gray-200
//           bg-gradient-to-br from-white/10 to-white/5
//           border border-white/15
//           rounded-xl
//           backdrop-blur-xl
//           shadow-[0_10px_40px_rgba(0,0,0,0.6)]
//           hover:scale-105
//           hover:bg-white/15
//           transition-all duration-300
//           text-center
//         "
//             >
//               <img
//                 src={partner.logo}
//                 alt={partner.name}
//                 className={`object-contain h-16 opacity-80 ${partner.name === "NVIDIA" ? "h-16" : "h-10"}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default React.memo(HeroSection);













import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import { motion } from "framer-motion";

const HeroSection = () => {
  const partnerLogos = [
    { name: "Reva University", logo: "/logos/reva.png" },
    { name: "LeadSpotting", logo: "/logos/leadspotting.png" },
    { name: "AWS Startups", logo: "/logos/aws-startups.png" },
    { name: "Startup India", logo: "/logos/startup-india.png" },
    { name: "NVIDIA", logo: "/logos/nvidia.png" },
    { name: "Make in India", logo: "/logos/make-in-india.png" },
  ];

  {/* Animation Variants */}
  const blurEffect = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <>
      <SectionWrapper className="relative pt-24 pb-20 overflow-hidden bg-black md:pt-32">
        {/* 🔥 AMBIENT TOP GLOW (#7AC5B4) */}
        <div
          className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] max-w-[1000px] h-[400px] md:h-[600px] rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, #7AC5B4 0%, transparent 70%)",
            opacity: 0.25,
            filter: "blur(0px)",
          }}
        ></div>

        {/* --- Circuit Lines SVG Background --- */}
        <div className="absolute top-12 left-0 w-full h-[300px] md:h-[400px] z-0 pointer-events-none">
          <style>
            {`
              .circuit-base {
                stroke: #333;
                stroke-width: 1.5;
              }
              .circuit-glow {
                stroke: white;
                stroke-width: 2;
                stroke-dasharray: 8 112; 
                opacity: 0.9;
              }
              .glow-1 { animation: circuitFlow 4s linear infinite; }
              .glow-2 { animation: circuitFlow 5s linear infinite 1.5s; }
              .glow-3 { animation: circuitFlow 4.5s linear infinite 0.5s; }
              .glow-4 { animation: circuitFlow 5.5s linear infinite 2s; }
              @keyframes circuitFlow {
                0% { stroke-dashoffset: 10; }
                100% { stroke-dashoffset: -110; }
              }
            `}
          </style>
          <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="xMidYMin slice">
            {/* Left Side */}
            <g>
              <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-base" />
              <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-base" />
              <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-glow glow-1" pathLength="100" />
              <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-glow glow-2" pathLength="100" />
              <circle cx="320" cy="100" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
              <circle cx="280" cy="120" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
            </g>
            {/* Right Side */}
            <g>
              <path d="M1540 40 L 1250 40 L 1150 120 H 1050" className="circuit-base" />
              <path d="M1540 60 L 1280 60 L 1180 140 H 1100" className="circuit-base" />
              <path d="M1540 40 L 1250 40 L 1150 120 H 1050" className="circuit-glow glow-3" pathLength="100" />
              <path d="M1540 60 L 1280 60 L 1180 140 H 1100" className="circuit-glow glow-4" pathLength="100" />
              <circle cx="1050" cy="120" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
              <circle cx="1100" cy="140" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
            </g>
          </svg>
        </div>

        {/* Top Brand Image */}
        <div className="relative z-10 flex justify-center pt-8 mb-8 md:pt-16 md:mb-12">
          <img src="/brand.png" alt="CTRL FAKE" className="object-cover h-3 pointer-events-none select-none md:h-5 lg:h-5" />
        </div>

        {/* Main Heading Block */}
        <div className="relative z-10 px-4 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
            className="
              uppercase text-white font-['Oswald'] font-[600]
              text-[50px] leading-[50px] tracking-[-3px]
              sm:text-[90px] sm:leading-[90px] sm:tracking-[-6px]
              md:text-[170px] md:leading-[220px] md:tracking-[-10px]
            "
            style={{
              textShadow: "0px 0px 100px rgba(255,255,255,0.5)",
              whiteSpace: "nowrap",
            }}
          >
            {Array.from("AI-POWERED").map((char, index) => (
              <motion.span key={index} variants={blurEffect} transition={{ duration: 0.5, ease: "easeOut" }} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Background VERIFICATION Watermark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center mt-20 pointer-events-none select-none md:mt-32">
          <h1
            className="
              uppercase font-oswald font-[650] text-center
              text-[50px] leading-[50px] tracking-[-3px]
              sm:text-[90px] sm:leading-[90px] sm:tracking-[-6px]
              md:text-[150px] md:leading-[220px] md:tracking-[-10px] lg:text-[220px]
            "
            style={{
              backgroundImage: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            VERIFICATION
          </h1>
        </div>

        {/* Badge - Responsive padding/margin applied here */}
        <div className="relative z-10 flex items-start justify-center mt-8 md:mt-10 md:translate-y-36">
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 px-4 py-2 text-sm text-gray-300 border rounded-3xl sm:rounded-[60px] shadow-2xl bg-white/5 backdrop-blur-md border-white/10 text-center sm:text-left">
            <div className="relative flex items-start w-8 h-8 rounded-full">
              <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-md"></div>
              <img src="/badge.png" alt="AI" className="relative z-10 object-contain w-full h-full" />
            </div>
            <span className="font-semibold font-grotesk">
              Real-Time AI Generated and Deep Fake Detection
            </span>
          </div>
        </div>

        {/* Description - Responsive margin applied here */}
        <p
          className="relative z-10 max-w-2xl px-4 mx-auto mt-8 text-center framer-text text-[13px] md:text-[14px] md:mt-40 md:translate-y-[1.2rem]"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 300,
            lineHeight: "140%",
            letterSpacing: "0px",
            color: "#ffffff",
          }}
        >
          From Deepfake detection to AI-generated Data analysis, explore how our
          technology ensures authenticity and protects your media from digital
          deception.
        </p>

        {/* Buttons - Responsive flex direction applied here */}
        <div className="relative z-10 flex flex-col justify-center gap-4 px-4 mt-8 sm:flex-row sm:gap-6 md:mt-12">
          <Button variant="primary" size="lg" className="w-full px-8 py-4 text-lg sm:w-auto">
            Start Protecting Now →
          </Button>
          <Button variant="secondary" size="lg" className="w-full px-8 py-4 text-lg sm:w-auto">
            Learn More
          </Button>
        </div>

        {/* ========================================= */}
        {/* FLOATING CARDS (Hidden on Mobile/Tablet)  */}
        {/* Exact same desktop CSS maintained         */}
        {/* ========================================= */}

        {/* LEFT UPLOAD CARD */}
        <div className="absolute hidden lg:block left-[10%] top-[30%] translate-x-10 w-[260px] z-20 animate-floatLeft transform-gpu will-change-transform">
          <div className="relative w-full p-4 rounded-[32px] bg-[#09090b] backdrop-blur-[45px] border border-white/30 shadow-[0_35px_100px_rgba(0,0,0,0.8)] font-sans isolate">
            <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] pointer-events-none"></div>
            <div className="absolute top-4 left-4 right-4 bottom-[76px] border-[1.2px] border-white/20 rounded-[16px] pointer-events-none z-10"></div>
            <div className="absolute top-[124px] bottom-4 left-8 right-8 border-[1.2px] border-white/20 rounded-[16px] pointer-events-none z-10"></div>
            <div className="relative z-20 flex flex-col w-full h-full">
              <div className="px-6 pt-5 pb-3">
                <p className="text-[14px] text-white/90 tracking-wide font-medium">Upload Media*</p>
              </div>
              <div className="px-6 pb-4">
                <div className="rounded-[16px] p-[1px] bg-gradient-to-r from-[#9d4edd] via-[#f77f00] to-[#9d4edd]">
                  <div className="flex items-center justify-between rounded-[15px] bg-[#121214] px-4 py-2.5 cursor-pointer">
                    <span className="text-[13px] text-white/80">Select File</span>
                    <span className="mb-1 text-lg leading-none text-white/60">⌄</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-12 pr-6 py-2.5 cursor-pointer group relative z-20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors text-white/50 group-hover:text-white/80">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span className="text-[13px] text-white/60 group-hover:text-white/90 transition-colors">Image</span>
              </div>
              <div className="relative z-30 flex items-center gap-3 px-4 py-2.5 mx-5 my-1.5 bg-opacity-50 bg-[#494848] border border-white/20 rounded-[16px] cursor-pointer shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/90">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2"></rect>
                </svg>
                <span className="text-[13px] text-white/90">Video</span>
              </div>
              <div className="flex items-center gap-3 pl-12 pr-6 py-2.5 cursor-pointer group relative z-20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors text-white/50 group-hover:text-white/80">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
                <span className="text-[13px] text-white/60 group-hover:text-white/90 transition-colors">Audio</span>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SCANNING CARD */}
        <div className="absolute hidden lg:block left-[15%] top-[65%] translate-x-20 w-[270px] h-[270px] z-20 animate-floatDeep transform-gpu will-change-transform">
          <div className="relative w-full h-full p-5 rounded-[20px] bg-[#09090b] border border-white/30 shadow-[0_40px_120px_rgba(0,0,0,0.75)] backdrop-blur-[45px] font-sans isolate">
            <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] pointer-events-none"></div>
            <div className="absolute left-[46px] top-[46px] w-[24px] h-[190px] z-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[63px] border-l-[1.5px] border-b-[1.5px] border-white/25 rounded-bl-[12px]"></div>
              <div className="absolute top-0 left-0 w-full h-[121px] border-l-[1.5px] border-b-[1.5px] border-white/25 rounded-bl-[12px]"></div>
              <div className="absolute top-0 left-0 w-full h-[179px] border-l-[1.5px] border-b-[1.5px] border-white/25 rounded-bl-[12px]"></div>
            </div>
            <div className="relative z-20 flex flex-col gap-[16px]">
              <div className="flex items-center p-1.5 pr-4 w-full rounded-[14px] border border-white/20 bg-[#121214]">
                <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                    <path d="M4 7V4h3"></path><path d="M17 4h3v3"></path><path d="M20 17v3h-3"></path><path d="M7 20H4v-3"></path>
                  </svg>
                </div>
                <span className="ml-4 text-[14px] font-medium text-white/90">Scanning...</span>
              </div>
              <div className="w-[calc(100%-50px)] ml-[50px] rounded-[14px] p-[1px] bg-gradient-to-r from-[#ffd166] via-[#f77f00] to-[#9d4edd]">
                <div className="flex items-center justify-between rounded-[13px] bg-[#0c0c0e] px-4 py-[10px]">
                  <span className="text-[13px] text-white/85">Progress:</span>
                  <div className="flex items-center gap-2">
                    <div className="flex h-[12px] gap-[2px]">
                      <div className="w-[12px] bg-white rounded-[1px]"></div>
                      <div className="w-[12px] bg-white rounded-[1px]"></div>
                      <div className="w-[28px] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:3px_3px] rounded-[1px]"></div>
                    </div>
                    <span className="text-[13px] text-white/90 w-[3ch] text-right">60%</span>
                  </div>
                </div>
              </div>
              <div className="w-[calc(100%-50px)] ml-[50px] rounded-[14px] border border-white/20 bg-[#0c0c0e] px-4 py-[10px]">
                <span className="text-[13px] text-white/85">Estimated Time: 8s</span>
              </div>
              <div className="w-[calc(100%-50px)] ml-[50px] rounded-[14px] border border-white/20 bg-[#0c0c0e] px-4 py-[10px]">
                <span className="text-[13px] text-white/85">Status: Validating...</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT DETECTION CARD */}
        <div className="absolute hidden lg:block right-[8%] top-[30%] w-[270px] h-[270px] z-20 animate-floatRight transform-gpu will-change-transform">
          <div className="relative w-full h-full p-5 rounded-[20px] bg-[#09090b] border border-white/30 shadow-[0_40px_120px_rgba(0,0,0,0.75)] backdrop-blur-[45px] font-sans isolate">
            <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] pointer-events-none"></div>
            <div className="relative z-20 flex flex-col gap-[28px]">
              <div className="rounded-[14px] p-[1px] bg-gradient-to-r from-[#ffd166] via-[#f77f00] to-[#9d4edd]">
                <div className="flex items-center p-1.5 pr-4 rounded-[13px] bg-[#0c0c0e]">
                  <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                      <path d="M4 7V4h3"></path><path d="M17 4h3v3"></path><path d="M20 17v3h-3"></path><path d="M7 20H4v-3"></path><circle cx="12" cy="10" r="2"></circle><path d="M10 14a2 2 0 0 0-2 2v1h8v-1a2 2 0 0 0-2-2h-4z"></path>
                    </svg>
                  </div>
                  <span className="ml-4 text-[14px] font-medium text-white/90">Detection Results</span>
                </div>
              </div>
              <div className="flex items-center p-1.5 pr-4 rounded-[14px] border border-white/20 bg-[#0c0c0e]">
                <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                    <path d="M4 7V4h3"></path><path d="M17 4h3v3"></path><path d="M20 17v3h-3"></path><path d="M7 20H4v-3"></path>
                  </svg>
                </div>
                <span className="ml-4 text-[14px] font-medium text-white/90">Deepfake Probability 85%</span>
              </div>
              <div className="flex items-center p-1.5 pr-4 rounded-[14px] border border-white/20 bg-[#0c0c0e]">
                <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[12px] bg-white/5 border border-white/20 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                    <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                </div>
                <span className="ml-4 text-[14px] font-medium text-white/90">High Confidence</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BOTTOM SUMMARY CARD */}
        <div className="absolute hidden lg:block right-[15%] top-[62%] w-[270px] h-[270px] z-20 animate-floatSlow">
          <div className="relative w-full h-full p-5 rounded-[20px] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-[45px] border border-white/30 shadow-[0_40px_120px_rgba(0,0,0,0.75)] isolate">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-[12px] flex items-center justify-center bg-white/5 border border-white/20">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
                  <path d="M4 4H14V14H4Z" /><path d="M14 4L20 10V20H4V14" />
                </svg>
              </div>
              <div className="text-[16px] text-white/90 tracking-wide">Summary Report</div>
            </div>
            <div className="h-[1px] bg-white/15 mb-5 -mx-5"></div>
            <div className="mb-4">
              <div className="rounded-[14px] p-[1px] bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500">
                <div className="rounded-[13px] bg-[#0f0f10] px-4 py-3 text-[14px] text-white/85">Status: FAKE</div>
              </div>
            </div>
            <div>
              <div className="rounded-[14px] bg-[#0f0f10] border border-white/15 px-4 py-3 text-[14px] text-white/80">Sections Analyzed: 5</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Partner Logos - Added max-w so they don't stretch too wide on mobile */}
      <div className="relative z-10 flex justify-center px-4 mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="
                w-full max-w-[220px] mx-auto
                px-6 py-6
                flex flex-col items-center justify-center gap-4
                text-sm font-semibold text-gray-200
                bg-gradient-to-br from-white/10 to-white/5
                border border-white/15 rounded-xl backdrop-blur-xl
                shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                hover:scale-105 hover:bg-white/15
                transition-all duration-300 text-center
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`object-contain h-16 opacity-80 ${partner.name === "NVIDIA" ? "h-16" : "h-10"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(HeroSection);
