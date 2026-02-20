// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";
// import { useState, useEffect } from "react";

// const BenefitsSection = () => {
//   function AnimatedCounter() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       let start = 0;
//       const end = 42;
//       const duration = 1500;
//       const stepTime = duration / end;

//       const timer = setInterval(() => {
//         start++;
//         setCount(start);
//         if (start === end) clearInterval(timer);
//       }, stepTime);

//       return () => clearInterval(timer);
//     }, []);

//     return (
//       <>
//         <div className="text-6xl font-bold text-white">{count}%</div>
//         <div className="mt-3 text-xl text-gray-400">Threats Prevented</div>
//       </>
//     );
//   }
//   return (
//     <SectionWrapper className="relative py-24 bg-black">
//       <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
//         {" "}
//         <div className="font-extrabold text-center text-white text-9xl">
//           BENEFITS
//         </div>{" "}
//       </div>

//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl opacity-30"></div>

//       <div className="relative">
//         {/* Header */}
//         <div className="mb-20 text-center">
//           <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 border rounded-full bg-white/5 backdrop-blur-md border-white/10">
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
//               />
//             </svg>
//             <span className="text-sm font-medium text-white/80">Benefits</span>
//           </div>

//           <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text">
//             Detect Smarter. Act Faster. Stay Safer.
//           </h2>

//           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-400">
//             Here's how CtrlFake empowers your team to safeguard digital content,
//             reduce risk, and maintain trust in an AI-driven world.
//           </p>
//         </div>

//                 {/* Bottom Stats Section */}
//         <div className="mt-24 p-12 rounded-3xl border border-white/10 mb-6 bg-white/[0.03] backdrop-blur-xl relative overflow-hidden">
//           {/* Top Stats */}
//           <div className="mb-10">
//             <AnimatedCounter />
//           </div>

//           {/* Graph Card */}
//           <div className="relative w-full h-[420px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 p-10 overflow-hidden">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none"></div>

//             <div className="inline-flex items-center px-5 py-2 mb-8 text-sm rounded-full bg-white/10 backdrop-blur-md text-white/80">
//               🔒 3,890 Detected
//             </div>

//             {/* FULL SIZE GRAPH */}
//             <div className="absolute inset-0 px-10 pt-24 pb-10">
//               <svg viewBox="0 0 400 200" className="w-full h-full">
//                 {/* Vertical dashed grid lines */}
//                 {[60, 120, 180, 240, 300, 360].map((x, i) => (
//                   <line
//                     key={i}
//                     x1={x}
//                     y1="10"
//                     x2={x}
//                     y2="190"
//                     stroke="#334155"
//                     strokeWidth="1"
//                     strokeDasharray="6 6"
//                     opacity="0.3"
//                   />
//                 ))}

//                 {/* Graph Path Definition */}
//                 <defs>
//                   <path
//                     id="graphPath"
//                     d="M0,160
//                L60,120
//                L120,150
//                L180,90
//                L240,130
//                L300,70
//                L360,110"
//                     fill="none"
//                   />

//                   {/* Glow filter */}
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                     <feMerge>
//                       <feMergeNode in="coloredBlur" />
//                       <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 {/* Main Line */}
//                 <use
//                   href="#graphPath"
//                   stroke="#9ca3af"
//                   strokeWidth="3"
//                   fill="none"
//                 />

//                 {/* Data Points */}
//                 {[
//                   [0, 160],
//                   [60, 120],
//                   [120, 150],
//                   [180, 90],
//                   [240, 130],
//                   [300, 70],
//                   [360, 110],
//                 ].map(([x, y], i) => (
//                   <circle key={i} cx={x} cy={y} r="6" fill="#6b7280" />
//                 ))}

//                 {/* Highlight Last Point */}
//                 <circle
//                   cx="360"
//                   cy="110"
//                   r="10"
//                   fill="#1f2937"
//                   stroke="#6366f1"
//                   strokeWidth="4"
//                 />

//                 {/* Moving Dot 1 */}
//                 <circle r="6" fill="#6366f1" filter="url(#glow)">
//                   <animateMotion
//                     dur="4s"
//                     repeatCount="indefinite"
//                     rotate="auto"
//                   >
//                     <mpath href="#graphPath" />
//                   </animateMotion>
//                 </circle>

//                 {/* Moving Dot 2 */}
//                 <circle r="5" fill="#8b5cf6" opacity="0.7" filter="url(#glow)">
//                   <animateMotion
//                     dur="5s"
//                     repeatCount="indefinite"
//                     rotate="auto"
//                     begin="1s"
//                   >
//                     <mpath href="#graphPath" />
//                   </animateMotion>
//                 </circle>

//                 {/* Moving Dot 3 */}
//                 <circle r="4" fill="#3b82f6" opacity="0.6" filter="url(#glow)">
//                   <animateMotion
//                     dur="6s"
//                     repeatCount="indefinite"
//                     rotate="auto"
//                     begin="2s"
//                   >
//                     <mpath href="#graphPath" />
//                   </animateMotion>
//                 </circle>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid items-stretch grid-cols-1 gap-10 md:grid-cols-3">
//           {/* Card 1 */}
//           <div className="h-full p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]">
//             <div className="flex items-center justify-center w-16 h-16 mb-8 border rounded-2xl bg-white/10 border-white/20">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10"
//                 />
//               </svg>
//             </div>

//             <h3 className="mb-4 text-2xl font-semibold text-white">
//               Proactive Risk Mitigation
//             </h3>

//             <p className="leading-relaxed text-gray-400">
//               Identify and prevent content manipulation before it spreads.
//               CtrlFake continuously scans and flags anomalies to protect brand
//               integrity.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="h-full p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]">
//             <div className="flex items-center justify-center w-16 h-16 mb-8 border rounded-2xl bg-white/10 border-white/20">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 12l2 2 4-4"
//                 />
//               </svg>
//             </div>

//             <h3 className="mb-4 text-2xl font-semibold text-white">
//               Operational Efficiency
//             </h3>

//             <p className="leading-relaxed text-gray-400">
//               Automate repetitive tasks and streamline workflows to save time
//               and reduce operational costs.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="h-full p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]">
//             <div className="flex items-center justify-center w-16 h-16 mb-8 border rounded-2xl bg-white/10 border-white/20">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 3l8 4v5c0 5-3.824 10.29-9 11.622C5.824 22.29 2 17 2 12V7l8-4z"
//                 />
//               </svg>
//             </div>

//             <h3 className="mb-4 text-2xl font-semibold text-white">
//               Trust & Media Authenticity
//             </h3>

//             <p className="leading-relaxed text-gray-400">
//               Build trust by verifying authenticity of audio, video, and images
//               with advanced AI detection—ensuring content is tamper-free and
//               credible.
//             </p>
//           </div>
//         </div>

//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(BenefitsSection);

// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";
// import { useState, useEffect } from "react";

// const BenefitsSection = () => {
//   function AnimatedCounter() {
//     const [count, setCount] = useState(0);
//   }

//   return (
//     <SectionWrapper className="relative py-24 overflow-hidden bg-black">
//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl opacity-30"></div>

//       <div className="relative z-10 px-4 mx-auto max-w-7xl">
//         {/* Top Section Layout: Left (Text) & Right (Stats) */}
//         <div className="relative flex flex-col items-start justify-between w-full gap-12 mb-20 lg:flex-row">
//           {/* Background Text — Centered Behind Header */}
//           <div className="absolute top-[-60px] md:top-[-80px] left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.12] w-full text-center">
//             <div
//               className="
//                   font-['Oswald']
//                   text-[220px]
//                   leading-[220px]
//                   tracking-[-10px]
//                   font-[600]
//                   uppercase
//                   text-white
//                   text-center
//                   select-none
//                   whitespace-nowrap
//                   [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]
//                 "
//             >
//               BENEFITS
//             </div>
//           </div>

//           {/* LEFT COLUMN: Header Content */}
//           <div className="relative z-10 flex flex-col items-start text-left lg:w-[45%] pt-12">
//             <h2
//               className="
//     mb-6
//     font-['Space_Grotesk',sans-serif]
//     font-[500]
//     text-[32px]
//     md:text-[40px]
//     leading-[110%]
//     tracking-[0px]
//     text-left
//     text-transparent
//     bg-gradient-to-r
//     from-white
//     via-gray-200
//     to-gray-400
//     bg-clip-text
//     text-white
//   "
//             >
//               Detect Smarter.
//               <br />
//               Act Faster.
//               <br />
//               Stay Safer.
//             </h2>

//             <p className="max-w-md text-[14px] md:text-[16px] font-light leading-[140%] tracking-[0px] text-white text-left font-['Space_Grotesk']">
//               Here's how CtrlFake empowers your team to safeguard digital
//               content, reduce risk, and maintain trust in an AI-driven world.
//             </p>
//           </div>

//           {/* RIGHT COLUMN: Stats & Graph Card */}
//           <div className="relative w-full mt-12">
//             <div className="flex flex-col md:flex-row items-stretch w-[700px] translate-x-20 gap-4 p-4 rounded-[32px] border border-white/30 bg-black backdrop-blur-xl">
              
//               {/* ================= LEFT INNER PANE (Bar Graph) ================= */}
//               <div className="flex flex-col w-full md:w-[45%] p-8 rounded-[24px] border border-white/10 bg-[#080808] relative overflow-hidden min-h-[380px]">
                
//                 {/* Header Section */}
//                 <div className="relative z-10 flex items-center gap-4 mb-10">
//                   <span className="text-[52px] font-bold tracking-tighter text-gray-200 leading-none">
//                     42%
//                   </span>
//                   <span className="text-[17px] font-medium leading-[1.2] text-[#888]">
//                     Threats<br />Prevented
//                   </span>
//                 </div>

//                 {/* Bar Graph SVG */}
//                 <div className="absolute bottom-0 left-0 w-full h-[280px]">
//                   <style>
//                     {`
//                       @keyframes riseUp {
//                         0% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
//                         100% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
//                       }
//                       .animate-rise { animation: riseUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
//                     `}
//                   </style>
//                   <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="none">
//                     <defs>
//                       {/* Gradient for the shaded area */}
//                       <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%" stopColor="#444" stopOpacity="0.6" />
//                         <stop offset="100%" stopColor="#111" stopOpacity="0" />
//                       </linearGradient>
//                     </defs>

//                     {/* Vertical Dashed Guidelines */}
//                     <line x1="30" y1="30" x2="30" y2="200" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />
//                     <line x1="100" y1="80" x2="100" y2="200" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />
//                     <line x1="170" y1="110" x2="170" y2="200" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />

//                     {/* Top Dot */}
//                     <circle cx="30" cy="30" r="2.5" fill="#777" />

//                     {/* Animated Shaded Area & Top Line */}
//                     <g className="animate-rise">
//                       {/* Polygon Fill */}
//                       <polygon points="30,80 100,80 170,110 170,200 30,200" fill="url(#barGradient)" />
//                       {/* Top Thick Edge */}
//                       <polyline points="30,80 100,80 170,110" fill="none" stroke="#666" strokeWidth="2.5" />
//                     </g>
//                   </svg>
//                 </div>
//               </div>

//               {/* ================= RIGHT INNER PANE (Line Graph) ================= */}
//               <div className="flex-1 relative rounded-[24px] bg-transparent overflow-hidden min-h-[380px] p-6 hidden md:block">
                
//                 {/* Top Right Badge */}
//                 <div className="absolute top-6 right-6 flex items-center gap-3 px-4 py-2 rounded-full bg-[#111] border border-white/10 shadow-lg z-20">
//                   {/* Glowing Icon Container */}
//                   <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-[1px]">
//                     <div className="flex items-center justify-center w-full h-full bg-[#111] rounded-full">
//                       {/* Diamond SVG Icon */}
//                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round">
//                         <path d="M12 2 L22 12 L12 22 L2 12 Z" />
//                       </svg>
//                     </div>
//                   </div>
//                   <span className="text-sm font-bold tracking-wide text-white">
//                     3,890 Detected
//                   </span>
//                 </div>

//                 {/* Line Graph SVG */}
//                 <div className="absolute inset-0 pt-[80px] pb-4 px-6">
//                   <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
//                     <defs>
//                       <path
//                         id="rightGraphPath"
//                         d="M20,160 L80,100 L140,140 L200,80 L260,120 L320,40"
//                         fill="none"
//                       />
//                       <filter id="glowRight">
//                         <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                         <feMerge>
//                           <feMergeNode in="coloredBlur" />
//                           <feMergeNode in="SourceGraphic" />
//                         </feMerge>
//                       </filter>
//                     </defs>

//                     {/* Vertical Dashed Guidelines */}
//                     {[20, 80, 140, 200, 260, 320].map((x) => (
//                       <line key={x} x1={x} y1="20" x2={x} y2="180" stroke="#333" strokeWidth="1.5" strokeDasharray="5 5" />
//                     ))}

//                     {/* Static Line Path */}
//                     <use href="#rightGraphPath" stroke="#555" strokeWidth="2.5" fill="none" />

//                     {/* Standard Data Dots */}
//                     {[
//                       [20, 160],
//                       [80, 100],
//                       [140, 140],
//                       [200, 80],
//                       [260, 120],
//                     ].map(([x, y], i) => (
//                       <circle key={i} cx={x} cy={y} r="5" fill="#777" />
//                     ))}

//                     {/* Final Big Data Dot (Top Right) */}
//                     <circle cx="320" cy="40" r="10" fill="#2a2a35" stroke="#666" strokeWidth="3" />

//                     {/* Moving Glowing Tracing Dot */}
//                     <circle r="4" fill="#8b5cf6" filter="url(#glowRight)">
//                       <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
//                         <mpath href="#rightGraphPath" />
//                       </animateMotion>
//                     </circle>
//                     <circle r="2" fill="#fff">
//                       <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
//                         <mpath href="#rightGraphPath" />
//                       </animateMotion>
//                     </circle>

//                   </svg>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* BOTTOM COLUMN: Cards */}
//         <div className="grid items-stretch grid-cols-1 gap-2 mt-[-4rem] md:grid-cols-3 w-full">
//           {/* Card 1 */}
//           <div className="h-full p-6 rounded-2xl border border-white/30 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
//             <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-white/15 border-white/20">
//               <img
//                 src="/proactive-risk.png"
//                 alt="Risk Icon"
//                 className="object-contain w-6 h-6"
//               />
//             </div>

//             <h3 className="mb-2 text-xl font-semibold text-white">
//               Proactive Risk Mitigation
//             </h3>

//             <p className="text-sm leading-relaxed text-gray-400">
//               Identify and prevent content manipulation before it spreads.
//               CtrlFake continuously scans and flags anomalies to protect brand
//               integrity.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="h-full p-6 rounded-2xl border border-white/30 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
//             <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-white/10 border-white/20">
//               <img
//                 src="/operational-efficiency.png"
//                 alt="Check Icon"
//                 className="object-contain w-full h-full"
//               />
//             </div>

//             <h3 className="mb-2 text-xl font-semibold text-white">
//               Operational Efficiency
//             </h3>

//             <p className="text-sm leading-relaxed text-gray-400">
//               Automate repetitive tasks and streamline workflows to save time
//               and reduce operational costs.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="h-full p-6 rounded-2xl border border-white/30 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
//             <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-white/15 border-white/20">
//               <img
//                 src="/trust-media-authenticity.png"
//                 alt="Trust media authenticity icon"
//                 className="object-contain w-full h-full"
//               />
//             </div>

//             <h3 className="mb-2 text-xl font-semibold text-white">
//               Trust & Media Authenticity
//             </h3>

//             <p className="text-sm leading-relaxed text-gray-400">
//               Build trust by verifying authenticity of audio, video, and images
//               with advanced AI detection—ensuring content is tamper-free and
//               credible.
//             </p>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(BenefitsSection);












import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { useState, useEffect } from "react";

const BenefitsSection = () => {
  function AnimatedCounter() {
    const [count, setCount] = useState(0);
  }

  return (
    <SectionWrapper className="relative py-16 overflow-hidden bg-black lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl opacity-30"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        {/* Top Section Layout: Left (Text) & Right (Stats) */}
        <div className="relative flex flex-col items-start justify-between w-full gap-12 mb-12 lg:mb-20 lg:flex-row">
          {/* Background Text — Centered Behind Header */}
          <div className="absolute top-[-40px] md:top-[-60px] lg:top-[-80px] left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.12] w-full text-center">
            <div
              className="
                  font-['Oswald']
                  text-[80px] sm:text-[140px] lg:text-[220px]
                  md:text-[190px]
                  leading-[80px] sm:leading-[140px] lg:leading-[220px]
                  tracking-[-4px] lg:tracking-[-10px]
                  font-[600]
                  uppercase
                  text-white
                  text-center
                  select-none
                  whitespace-nowrap
                  [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]
                "
            >
              BENEFITS
            </div>
          </div>

          {/* LEFT COLUMN: Header Content */}
          <div className="relative z-10 flex flex-col items-start text-left w-full lg:w-[45%] pt-6 lg:pt-12">
            <h2
              className="
                mb-4 lg:mb-6
                font-['Space_Grotesk',sans-serif]
                font-[500]
                text-[32px]
                md:text-[40px]
                leading-[110%]
                tracking-[0px]
                text-left
                text-transparent
                bg-gradient-to-r
                from-white
                via-gray-200
                to-gray-400
                bg-clip-text
                text-white
              "
            >
              Detect Smarter.
              <br />
              Act Faster.
              <br />
              Stay Safer.
            </h2>

            <p className="max-w-md text-[14px] md:text-[16px] font-light leading-[140%] tracking-[0px] text-white text-left font-['Space_Grotesk']">
              Here's how CtrlFake empowers your team to safeguard digital
              content, reduce risk, and maintain trust in an AI-driven world.
            </p>
          </div>

          {/* RIGHT COLUMN: Stats & Graph Card */}
          <div className="relative w-full mt-8 lg:mt-12">
            <div className="flex flex-col sm:flex-row items-stretch w-full lg:w-[700px] translate-x-0 lg:translate-x-20 gap-4 p-4 rounded-[32px] border border-white/30 bg-black backdrop-blur-xl">
              
              {/* ================= LEFT INNER PANE (Bar Graph) ================= */}
              <div className="flex flex-col w-full sm:w-[50%] lg:w-[45%] p-6 lg:p-8 rounded-[24px] border border-white/10 bg-[#080808] relative overflow-hidden min-h-[250px] lg:min-h-[380px]">
                
                {/* Header Section */}
                <div className="relative z-10 flex items-center gap-3 mb-6 lg:gap-4 lg:mb-10">
                  <span className="text-[40px] lg:text-[52px] font-bold tracking-tighter text-gray-200 leading-none">
                    42%
                  </span>
                  <span className="text-[14px] lg:text-[17px] font-medium leading-[1.2] text-[#888]">
                    Threats<br />Prevented
                  </span>
                </div>

                {/* Bar Graph SVG */}
                <div className="absolute bottom-0 left-0 w-full h-[180px] lg:h-[280px]">
                  <style>
                    {`
                      @keyframes riseUp {
                        0% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
                        100% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
                      }
                      .animate-rise { animation: riseUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                    `}
                  </style>
                  <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#444" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#111" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Vertical Dashed Guidelines */}
                    <line x1="30" y1="30" x2="30" y2="200" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="100" y1="80" x2="100" y2="200" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="170" y1="110" x2="170" y2="200" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Top Dot */}
                    <circle cx="30" cy="30" r="2.5" fill="#777" />

                    {/* Animated Shaded Area & Top Line */}
                    <g className="animate-rise">
                      <polygon points="30,80 100,80 170,110 170,200 30,200" fill="url(#barGradient)" />
                      <polyline points="30,80 100,80 170,110" fill="none" stroke="#666" strokeWidth="2.5" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* ================= RIGHT INNER PANE (Line Graph) ================= */}
              {/* Removed hidden class so it's visible on mobile, changed to w-full for mobile stacking */}
              <div className="relative w-full sm:flex-1 rounded-[24px] bg-transparent overflow-hidden min-h-[250px] lg:min-h-[380px] p-4 lg:p-6">
                
                {/* Top Right Badge */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#111] border border-white/10 shadow-lg z-20">
                  <div className="flex items-center justify-center w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-[1px]">
                    <div className="flex items-center justify-center w-full h-full bg-[#111] rounded-full">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" className="w-[8px] h-[8px] lg:w-[10px] lg:h-[10px]">
                        <path d="M12 2 L22 12 L12 22 L2 12 Z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-wide text-white lg:text-sm">
                    3,890 Detected
                  </span>
                </div>

                {/* Line Graph SVG */}
                <div className="absolute inset-0 pt-[60px] pb-4 px-4 lg:pt-[80px] lg:px-6">
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <path
                        id="rightGraphPath"
                        d="M20,160 L80,100 L140,140 L200,80 L260,120 L320,40"
                        fill="none"
                      />
                      <filter id="glowRight">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Vertical Dashed Guidelines */}
                    {[20, 80, 140, 200, 260, 320].map((x) => (
                      <line key={x} x1={x} y1="20" x2={x} y2="180" stroke="#333" strokeWidth="1.5" strokeDasharray="5 5" />
                    ))}

                    {/* Static Line Path */}
                    <use href="#rightGraphPath" stroke="#555" strokeWidth="2.5" fill="none" />

                    {/* Standard Data Dots */}
                    {[
                      [20, 160],
                      [80, 100],
                      [140, 140],
                      [200, 80],
                      [260, 120],
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="5" fill="#777" />
                    ))}

                    {/* Final Big Data Dot (Top Right) */}
                    <circle cx="320" cy="40" r="10" fill="#2a2a35" stroke="#666" strokeWidth="3" />

                    {/* Moving Glowing Tracing Dot */}
                    <circle r="4" fill="#8b5cf6" filter="url(#glowRight)">
                      <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#rightGraphPath" />
                      </animateMotion>
                    </circle>
                    <circle r="2" fill="#fff">
                      <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#rightGraphPath" />
                      </animateMotion>
                    </circle>

                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM COLUMN: Cards */}
        <div className="grid items-stretch w-full grid-cols-1 gap-4 mt-8 md:grid-cols-3 lg:gap-2 lg:mt-[-4rem]">
          {/* Card 1 */}
          <div className="h-full p-6 rounded-2xl border border-white/30 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-white/15 border-white/20">
              <img
                src="/proactive-risk.png"
                alt="Risk Icon"
                className="object-contain w-6 h-6"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Proactive Risk Mitigation
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Identify and prevent content manipulation before it spreads.
              CtrlFake continuously scans and flags anomalies to protect brand
              integrity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="h-full p-6 rounded-2xl border border-white/30 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-white/10 border-white/20">
              <img
                src="/operational-efficiency.png"
                alt="Check Icon"
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Operational Efficiency
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Automate repetitive tasks and streamline workflows to save time
              and reduce operational costs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="h-full p-6 rounded-2xl border border-white/30 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-center mb-4 border w-14 h-14 rounded-2xl bg-white/15 border-white/20">
              <img
                src="/trust-media-authenticity.png"
                alt="Trust media authenticity icon"
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Trust & Media Authenticity
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Build trust by verifying authenticity of audio, video, and images
              with advanced AI detection—ensuring content is tamper-free and
              credible.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(BenefitsSection);