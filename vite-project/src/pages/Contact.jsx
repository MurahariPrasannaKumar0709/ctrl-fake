// import React from "react";
// import CTASection from "../components/sections/CTASection";
// import FAQSection from "../components/sections/FAQSection";

// const Contact = () => {
//   return (
//     <>
//       <main className="min-h-screen px-6 py-32 mt-20 text-white bg-black lg:px-20">
//         {/* Background Watermark */}
//         <div className="absolute inset-0 mt-10 pointer-events-none opacity-5">
//           <div className="font-extrabold text-center text-white text-[160px] md:text-[220px] tracking-tight">
//             CONTACT
//           </div>
//         </div>

//         <div className="grid max-w-6xl gap-16 mx-auto lg:grid-cols-2">
//           {/* LEFT SIDE */}
//           <div>
//             <p className="mb-4 text-sm tracking-widest text-gray-400 uppercase">
//               Contact
//             </p>

//             <h1 className="mb-6 text-4xl font-bold md:text-5xl">
//               Get in touch
//             </h1>
//             <p className="mb-12 text-gray-400">
//               Have questions or ready to transform your business with AI
//               automation?{" "}
//             </p>

//             <div className="space-y-6">
//               {/* Email Card */}
//               <div
//                 className="group flex items-center justify-between p-6 rounded-3xl
//                 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
//                 border border-white/10 backdrop-blur-2xl
//                 hover:border-white/20 transition"
//               >
//                 <div>
//                   <p className="mb-1 font-semibold text-white">Email us</p>
//                   <p className="text-sm text-gray-400">
//                     support@ctrlthreats.ai
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-center transition rounded-full w-11 h-11 bg-white/10 group-hover:bg-white/20">
//                   →
//                 </div>
//               </div>

//               {/* Phone Card */}
//               <div
//                 className="group flex items-center justify-between p-6 rounded-3xl
//                 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
//                 border border-white/10 backdrop-blur-2xl
//                 hover:border-white/20 transition"
//               >
//                 <div>
//                   <p className="mb-1 font-semibold text-white">Call us</p>
//                   <p className="text-sm text-gray-400">+91 98765 43210</p>
//                 </div>

//                 <div className="flex items-center justify-center transition rounded-full w-11 h-11 bg-white/10 group-hover:bg-white/20">
//                   →
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div
//                 className="group flex items-center justify-between p-6 rounded-3xl
//                 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
//                 border border-white/10 backdrop-blur-2xl
//                 hover:border-white/20 transition"
//               >
//                 <div>
//                   <p className="mb-1 font-semibold text-white">Our location</p>
//                   <p className="text-sm text-gray-400">Bangalore, India</p>
//                 </div>

//                 <div className="flex items-center justify-center transition rounded-full w-11 h-11 bg-white/10 group-hover:bg-white/20">
//                   →
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
// <div
//   className="p-8 rounded-3xl
//     bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
//     border border-white/10 backdrop-blur-2xl
//     shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
// >
//   <form id="contactForm" className="space-y-6">

//     {/* Name */}
//     <input
//       type="text"
//       placeholder="Name"
//       className="w-full px-5 py-4 text-white placeholder-gray-500 transition border rounded-xl bg-black/50 border-white/10 focus:outline-none focus:border-cyan-400"
//     />

//     {/* Email */}
//     <input
//       type="email"
//       placeholder="Email"
//       className="w-full px-5 py-4 text-white placeholder-gray-500 transition border rounded-xl bg-black/50 border-white/10 focus:outline-none focus:border-cyan-400"
//     />

//     {/* Message */}
//     <textarea
//       rows="5"
//       placeholder="Message"
//       className="w-full px-5 py-4 text-white placeholder-gray-500 transition border resize-none h-72 rounded-xl bg-black/50 border-white/10 focus:outline-none focus:border-cyan-400"
//     />

//     {/* Submit Button */}
//     <button
//       type="submit"
//       className="w-full py-4 mt-4 font-semibold text-black transition bg-white rounded-xl hover:bg-gray-200"
//     >
//       Submit
//     </button>

//   </form>
// </div>
//         </div>
//       </main>

//       {/* 🔥 CTA Section Added Here */}
//       <FAQSection />
//     </>
//   );
// };

// export default Contact;

// import React from "react";
// import CTASection from "../components/sections/CTASection";
// import FAQSection from "../components/sections/FAQSection";

// const Contact = () => {
//   return (
//     <>
//       <main className="relative min-h-screen px-6 pt-20 pb-32 overflow-hidden text-white bg-black lg:px-20">
//        {/* --- Circuit Lines SVG Background (Moved to the very top) --- */}
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

//         {/* Background Watermark — Positioned Behind */}
//         <div className="absolute z-0 -translate-x-1/2 pointer-events-none top-32 left-1/2">
//           <div
//             className="
//       font-['Oswald']
//       text-[140px] md:text-[220px] lg:text-[250px]
//       leading-[140px] md:leading-[220px] lg:leading-[250px]
//       tracking-[-10px]
//       font-[600]
//       uppercase
//       text-white
//       opacity-[0.12]
//       text-center
//       select-none
//       whitespace-nowrap
//     "
//           >
//             CONTACT
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="relative z-10 grid max-w-[1100px] gap-10 mx-auto mt-16 lg:grid-cols-2 lg:gap-20 lg:w-full md:w-full">
//           {/* LEFT SIDE */}
//           <div className="flex flex-col pt-4 translate-y-[140px] w-full max-w-full">

//             <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-[44px] text-white">
//               Get in touch
//             </h1>
//             <p className="max-w-[340px] mb-10 text-[15px] leading-relaxed text-[#999]">
//               Have questions or ready to transform your business with AI
//               automation?
//             </p>

//             {/* Left Info Cards */}
//             <div className="space-y-4">
//               {/* Email Card */}
//               <div className="group flex items-center justify-between p-4 rounded-[24px] bg-black border border-white/30 transition-all cursor-pointer hover:bg-white/[0.02]">
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center justify-center w-[52px] h-[52px] border rounded-2xl bg-[#0a0a0a] border-white/10 text-white">
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <rect x="2" y="4" width="20" height="16" rx="2" />
//                       <path d="M2 6l10 7 10-7" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-[15px] text-white">
//                       Email us
//                     </p>
//                     <p className="text-sm text-[#888] mt-0.5">
//                       info@cybrisktech.com
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-[14px] bg-[#111] border-white/10 text-[#888] group-hover:text-white group-hover:bg-[#222]">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <line x1="5" y1="19" x2="19" y2="5" />
//                     <polyline points="9 5 19 5 19 15" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Phone Card */}
//               <div className="group flex items-center justify-between p-4 rounded-[24px] bg-black border border-white/30 transition-all cursor-pointer hover:bg-white/[0.02]">
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center justify-center w-[52px] h-[52px] border rounded-2xl bg-[#0a0a0a] border-white/10 text-white">
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-[15px] text-white">
//                       Call us
//                     </p>
//                     <p className="text-sm text-[#888] mt-0.5">+91 9611111665</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-[14px] bg-[#111] border-white/10 text-[#888] group-hover:text-white group-hover:bg-[#222]">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <line x1="5" y1="19" x2="19" y2="5" />
//                     <polyline points="9 5 19 5 19 15" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div className="group flex items-center justify-between p-4 rounded-[24px] bg-black border border-white/30 transition-all cursor-pointer hover:bg-white/[0.02]">
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center justify-center w-[52px] h-[52px] border rounded-2xl bg-[#0a0a0a] border-white/10 text-white">
//                     <svg
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                       <circle cx="12" cy="10" r="3" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-[15px] text-white">
//                       Our location
//                     </p>
//                     <p className="text-sm text-[#888] mt-0.5">
//                       1st Floor, 264, 36th B Cross Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560070
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-[14px] bg-[#111] border-white/10 text-[#888] group-hover:text-white group-hover:bg-[#222]">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <line x1="5" y1="19" x2="19" y2="5" />
//                     <polyline points="9 5 19 5 19 15" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
//           <div className="relative pt-28">
//             {/* Form Card */}
//             <div className="p-5 rounded-[24px] bg-black border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
//               <form id="contactForm" className="flex flex-col gap-3">
//                 {/* Name */}
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full px-5 py-4 text-[15px] text-white transition-all bg-[#0d0d0d] border border-white/10 rounded-[16px] placeholder-[#666] focus:outline-none focus:border-white/30"
//                 />

//                 {/* Email */}
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-5 py-4 text-[15px] text-white transition-all bg-[#0d0d0d] border border-white/10 rounded-[16px] placeholder-[#666] focus:outline-none focus:border-white/30"
//                 />

//                 {/* Message */}
//                 <textarea
//                   placeholder="Message"
//                   className="w-full px-5 py-4 text-[15px] text-white transition-all bg-[#0d0d0d] border border-white/10 resize-none h-[220px] rounded-[16px] placeholder-[#666] focus:outline-none focus:border-white/30"
//                 />

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full py-4 mt-2 text-[15px] font-bold text-black transition bg-white rounded-[16px] hover:bg-gray-200"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* FAQ Section */}
//       <FAQSection />
//     </>
//   );
// };

// export default Contact;










import React from "react";
import CTASection from "../components/sections/CTASection";
import FAQSection from "../components/sections/FAQSection";

const Contact = () => {
  return (
    <>
      <main className="relative min-h-screen px-4 pt-20 pb-20 overflow-hidden text-white bg-black sm:px-6 lg:px-20 lg:pb-32">
        {/* --- Circuit Lines SVG Background (Moved to the very top) --- */}
        <div className="absolute top-12 left-0 w-full h-[300px] lg:h-[400px] z-0 pointer-events-none">
          {/* CSS Style for the independent dash animations */}
          <style>
            {`
              .circuit-base {
                stroke: #333;
                stroke-width: 1.5;
              }
              .circuit-glow {
                stroke: white;
                stroke-width: 2;
                
                /* Dash is 8 units long, gap is 112 units (Total 120) */
                stroke-dasharray: 8 112; 
                opacity: 0.9;
              }
              
              /* Give each line a slightly different speed and delay so they move independently */
              .glow-1 { animation: circuitFlow 4s linear infinite; }
              .glow-2 { animation: circuitFlow 5s linear infinite 1.5s; }
              .glow-3 { animation: circuitFlow 4.5s linear infinite 0.5s; }
              .glow-4 { animation: circuitFlow 5.5s linear infinite 2s; }

              /* Animate from just outside the start (10) to just outside the end (-110) */
              @keyframes circuitFlow {
                0% { stroke-dashoffset: 10; }
                100% { stroke-dashoffset: -110; }
              }
            `}
          </style>
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 400"
            fill="none"
            preserveAspectRatio="xMidYMin slice"
          >
            {/* --- Left Side --- */}
            <g>
              {/* Base Lines */}
              <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-base" />
              <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-base" />
              
              {/* Animated Glowing Traces (using pathLength="100" so 8% is strictly proportional to each line) */}
              <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-glow glow-1" pathLength="100" />
              <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-glow glow-2" pathLength="100" />

              {/* Nodes */}
              <circle cx="320" cy="100" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
              <circle cx="280" cy="120" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
            </g>

            {/* --- Right Side --- */}
            <g>
              {/* Base Lines */}
              <path d="M1540 40 L 1250 40 L 1150 120 H 1050" className="circuit-base" />
              <path d="M1540 60 L 1280 60 L 1180 140 H 1100" className="circuit-base" />
              
              {/* Animated Glowing Traces */}
              <path d="M1540 40 L 1250 40 L 1150 120 H 1050" className="circuit-glow glow-3" pathLength="100" />
              <path d="M1540 60 L 1280 60 L 1180 140 H 1100" className="circuit-glow glow-4" pathLength="100" />

              {/* Nodes */}
              <circle cx="1050" cy="120" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
              <circle cx="1100" cy="140" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
            </g>
          </svg>
        </div>

        {/* Background Watermark — Positioned Behind */}
        {/* Adjusted text sizing for mobile devices to prevent horizontal overflow */}
        <div className="absolute z-0 w-full text-center -translate-x-1/2 pointer-events-none top-20 lg:top-32 left-1/2">
          <div
            className="
              font-['Oswald']
              text-[80px] sm:text-[120px] md:text-[160px] lg:text-[250px]
              leading-[80px] sm:leading-[120px] md:leading-[160px] lg:leading-[250px]
              tracking-[-4px] md:tracking-[-10px]
              font-[600]
              uppercase
              text-white
              opacity-[0.12]
              select-none
              whitespace-nowrap
              [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
            "
          >
            CONTACT
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 grid max-w-[1100px] gap-10 mx-auto mt-8 lg:mt-16 lg:grid-cols-2 lg:gap-20 w-full">
          
          {/* LEFT SIDE */}
          {/* Removed translation on mobile, restored for lg breakpoint */}
          <div className="flex flex-col pt-4 translate-y-0 lg:translate-y-[140px] w-full max-w-full">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-[44px] text-white">
              Get in touch
            </h1>
            <p className="max-w-[340px] mb-8 lg:mb-10 text-[15px] leading-relaxed text-[#999]">
              Have questions or ready to transform your business with AI
              automation?
            </p>

            {/* Left Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group flex items-center justify-between p-4 rounded-[24px] bg-black border border-white/30 transition-all cursor-pointer hover:bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  {/* Added shrink-0 to prevent icons from squishing on small phones */}
                  <div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] border rounded-2xl bg-[#0a0a0a] border-white/10 text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 6l10 7 10-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] text-white">
                      Email us
                    </p>
                    <p className="text-sm text-[#888] mt-0.5 break-all sm:break-normal">
                      info@cybrisktech.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center shrink-0 w-10 h-10 transition-colors border rounded-[14px] bg-[#111] border-white/10 text-[#888] group-hover:text-white group-hover:bg-[#222]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="19" x2="19" y2="5" />
                    <polyline points="9 5 19 5 19 15" />
                  </svg>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group flex items-center justify-between p-4 rounded-[24px] bg-black border border-white/30 transition-all cursor-pointer hover:bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] border rounded-2xl bg-[#0a0a0a] border-white/10 text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] text-white">
                      Call us
                    </p>
                    <p className="text-sm text-[#888] mt-0.5">+91 9611111665</p>
                  </div>
                </div>
                <div className="flex items-center justify-center shrink-0 w-10 h-10 transition-colors border rounded-[14px] bg-[#111] border-white/10 text-[#888] group-hover:text-white group-hover:bg-[#222]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="19" x2="19" y2="5" />
                    <polyline points="9 5 19 5 19 15" />
                  </svg>
                </div>
              </div>

              {/* Location Card */}
              {/* Changed items-center to items-start here so the long text aligns well with the icon */}
              <div className="group flex items-start sm:items-center justify-between p-4 rounded-[24px] bg-black border border-white/30 transition-all cursor-pointer hover:bg-white/[0.02]">
                <div className="flex items-start gap-4 pr-2 sm:items-center">
                  <div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] border rounded-2xl bg-[#0a0a0a] border-white/10 text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] text-white">
                      Our location
                    </p>
                    <p className="text-sm text-[#888] mt-0.5 leading-snug">
                      1st Floor, 264, 36th B Cross Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560070
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center shrink-0 mt-1 sm:mt-0 w-10 h-10 transition-colors border rounded-[14px] bg-[#111] border-white/10 text-[#888] group-hover:text-white group-hover:bg-[#222]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="19" x2="19" y2="5" />
                    <polyline points="9 5 19 5 19 15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          {/* Removed large top padding on mobile so it sits cleanly below the cards */}
          <div className="relative pt-4 lg:pt-28">
            {/* Form Card */}
            <div className="p-5 rounded-[24px] bg-black border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <form id="contactForm" className="flex flex-col gap-3">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-4 text-[15px] text-white transition-all bg-[#0d0d0d] border border-white/10 rounded-[16px] placeholder-[#666] focus:outline-none focus:border-white/30"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-4 text-[15px] text-white transition-all bg-[#0d0d0d] border border-white/10 rounded-[16px] placeholder-[#666] focus:outline-none focus:border-white/30"
                />

                {/* Message */}
                <textarea
                  placeholder="Message"
                  className="w-full px-5 py-4 text-[15px] text-white transition-all bg-[#0d0d0d] border border-white/10 resize-none h-[180px] lg:h-[220px] rounded-[16px] placeholder-[#666] focus:outline-none focus:border-white/30"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 mt-2 text-[15px] font-bold text-black transition bg-white rounded-[16px] hover:bg-gray-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
};

export default Contact;
