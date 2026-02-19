// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";
// import Button from "../ui/Button";

// const ProductsSection = () => {
//   return (
//     <SectionWrapper className="relative overflow-hidden bg-black py-28">
//       {/* Background Watermark */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
//         <div className="font-extrabold text-center text-white text-9xl">
//           PRODUCTS
//         </div>
//       </div>

//       <div className="relative">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gray-900 border border-gray-700 rounded-full">
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
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//             <span className="text-sm font-medium text-white">Our Products</span>
//           </div>

//           <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
//             Multi-Modal Deepfake Detection
//           </h2>

//           <p className="max-w-2xl mx-auto text-lg text-gray-400">
//             Our AI-powered engine detects manipulation in images, videos, audio,
//             and news content.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           {/* 1️⃣ Image Detection - Premium Layout */}
//           <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
//             {/* Soft Gradient Glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

//             {/* Content */}
//             <div className="relative">
//               {/* Title */}
//               <h3 className="mb-6 text-4xl font-semibold text-white md:text-5xl">
//                 Image Detection
//               </h3>

//               {/* Description */}
//               <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-400">
//                 AI-generated fake images are rising fast. CtrlFake analyzes
//                 manipulation likelihood, detects tampering areas, and ensures
//                 your visuals stay safe and trustworthy.
//               </p>

//               {/* Buttons */}
//               <div className="flex gap-4 mb-12">
//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   AI GENERATED →
//                 </Button>

//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   DEEP FAKE →
//                 </Button>
//               </div>

//               {/* Premium Visual Section */}
//               <div className="relative flex items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black">
//                 {/* Subtle Moving Light Sweep */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[sweep_6s_linear_infinite] pointer-events-none"></div>

//                 {/* Soft Radial Glow */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"></div>

//                 {/* Floating Container */}
//                 <div className="relative flex items-center justify-center w-44 h-44 animate-[float_6s_ease-in-out_infinite]">
//                   {/* Outer Static Ring */}
//                   <div className="absolute inset-0 border rounded-full border-white/20"></div>

//                   {/* Rotating Scan Ring */}
//                   <div className="absolute inset-3 rounded-full border border-dashed border-white/30 animate-spin [animation-duration:10s]"></div>

//                   {/* Pulse Ring */}
//                   <div className="absolute inset-6 rounded-full border border-white/10 animate-[pulse_4s_ease-in-out_infinite]"></div>

//                   {/* Center Soft Glow */}
//                   <div className="absolute inset-10 rounded-full bg-white/[0.04] blur-2xl"></div>

//                   <div className="absolute text-xs tracking-widest text-gray-500 -bottom-8">
//                     FACE RECOGNITION
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 2️⃣ Video Detection - Same Style as Image Detection */}
//           <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
//             {/* Same Soft Gradient Glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

//             <div className="relative">
//               {/* Title */}
//               <h3 className="mb-6 text-4xl font-semibold text-white md:text-5xl">
//                 Video Detection
//               </h3>

//               {/* Description */}
//               <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-400">
//                 Deepfake videos are rapidly growing. CtrlFake detects
//                 AI-generated content with 85% accuracy, ensuring video
//                 authenticity.
//               </p>

//               {/* Buttons */}
//               <div className="flex gap-4 mb-12">
//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   AI GENERATED →
//                 </Button>

//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   DEEP FAKE →
//                 </Button>
//               </div>

//               {/* Premium Visual Section */}
//               <div className="relative flex items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black">
//                 {/* Subtle Moving Light Sweep (Same as Image) */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[sweep_6s_linear_infinite] pointer-events-none"></div>

//                 {/* Soft Radial Glow */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"></div>

//                 {/* Floating Container */}
//                 <div className="relative flex items-center justify-center w-44 h-44 animate-[float_6s_ease-in-out_infinite]">
//                   {/* Outer Static Ring */}
//                   <div className="absolute inset-0 border rounded-full border-white/20"></div>

//                   {/* Rotating Dashed Ring */}
//                   <div className="absolute inset-3 rounded-full border border-dashed border-white/30 animate-spin [animation-duration:10s]"></div>

//                   {/* Pulse Ring */}
//                   <div className="absolute inset-6 rounded-full border border-white/10 animate-[pulse_4s_ease-in-out_infinite]"></div>

//                   {/* Center Soft Glow */}
//                   <div className="absolute inset-10 rounded-full bg-white/[0.04] blur-2xl"></div>

//                   {/* Play Button */}
//                   <div className="relative z-10 flex items-center justify-center text-white border rounded-full w-14 h-14 bg-white/10 border-white/20">
//                     ▶
//                   </div>

//                   <div className="absolute text-xs tracking-widest text-gray-500 -bottom-8">
//                     VIDEO ANALYSIS
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 3️⃣ Audio Detection - Premium Layout */}
//           <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
//             {/* Same Soft Gradient Glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

//             <div className="relative">
//               {/* Title */}
//               <h3 className="mb-6 text-4xl font-semibold text-white md:text-5xl">
//                 Audio Detection
//               </h3>

//               {/* Description */}
//               <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-400">
//                 AI voice cloning is rising fast, posing risks to security and
//                 trust. CtrlFake uses advanced acoustic and linguistic models to
//                 accurately detect synthetic voices.
//               </p>

//               {/* Buttons */}
//               <div className="flex gap-4 mb-12">
//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   AI GENERATED →
//                 </Button>

//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   DEEP FAKE →
//                 </Button>
//               </div>

//               {/* Premium Visual Section */}
//               <div className="relative flex items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black">
//                 {/* Subtle Moving Light Sweep */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[sweep_6s_linear_infinite] pointer-events-none"></div>

//                 {/* Soft Radial Glow */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"></div>

//                 {/* Premium Waveform */}
//                 <div className="relative flex items-center justify-center gap-[6px] h-40">
//                   {[...Array(70)].map((_, i) => {
//                     const center = 35;
//                     const distanceFromCenter = Math.abs(center - i);

//                     // Higher intensity near center + randomness
//                     const baseHeight =
//                       25 +
//                       Math.max(0, 60 - distanceFromCenter * 2) +
//                       Math.random() * 30;

//                     return (
//                       <div
//                         key={i}
//                         className="w-[3px] rounded-full bg-white/35 animate-[wave_2s_ease-in-out_infinite]"
//                         style={{
//                           height: `${baseHeight}px`,
//                           animationDelay: `${i * 0.01}s`,
//                         }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <div className="absolute text-xs tracking-widest text-gray-500 bottom-6">
//                   VOICE ANALYSIS
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 4️⃣ Fake News Detection - Premium Layout */}
//           <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
//             {/* Same Soft Gradient Glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

//             <div className="relative">
//               {/* Title */}
//               <h3 className="mb-6 text-4xl font-semibold text-white md:text-5xl">
//                 Fake News Detection
//               </h3>

//               {/* Description */}
//               <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-400">
//                 Fake News Detection verifies credibility by checking sources,
//                 facts, and inconsistencies—helping users spot misinformation and
//                 make informed decisions.
//               </p>

//               {/* Buttons */}
//               <div className="flex gap-4 mb-12">
//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   AI GENERATED →
//                 </Button>

//                 <Button
//                   variant="dark"
//                   size="sm"
//                   className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
//                 >
//                   DEEP FAKE →
//                 </Button>
//               </div>

//               {/* Premium Visual Section */}
//               <div className="relative flex items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black animate-floatSlow">
//                 {/* Light Sweep */}
//                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent animate-sweep"></div>

//                 {/* Soft Radial Glow */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

//                 {/* LEFT CONNECTION LINES */}
//                 <div className="absolute left-16 top-1/2 w-24 h-[1px] bg-white/10 -translate-y-1/2"></div>
//                 <div className="absolute left-16 top-[45%] w-16 h-[1px] bg-white/5 rotate-6 origin-left"></div>
//                 <div className="absolute left-16 top-[55%] w-16 h-[1px] bg-white/5 -rotate-6 origin-left"></div>

//                 {/* CENTER SYSTEM */}
//                 <div className="relative flex items-center justify-center">
//                   {/* Outer Halo */}
//                   <div className="absolute w-44 h-44 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-2xl animate-pulseSoft"></div>

//                   {/* Rotating Gradient Ring */}
//                   <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-[2px] animate-spin">
//                     <div className="w-full h-full bg-black rounded-full"></div>
//                   </div>

//                   {/* Inner Core */}
//                   <div className="relative flex items-center justify-center w-28 h-28 rounded-full border border-white/20 bg-black shadow-[0_0_20px_rgba(255,255,255,0.05)]">
//                     <svg
//                       className="w-6 h-6 text-white/70"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
//                       />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* RIGHT CONNECTION LINE */}
//                 <div className="absolute right-28 top-1/2 w-20 h-[1px] bg-white/10 -translate-y-1/2 animate-fadeLine"></div>

//                 {/* Connector Dot */}
//                 <div className="absolute w-2 h-2 -translate-y-1/2 rounded-full right-28 top-1/2 bg-white/20"></div>

//                 {/* RIGHT GLASS CARD */}
//                 <div className="absolute right-12 flex items-center justify-center w-20 h-20 rounded-[26px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-floatSlow">
//                   <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>

//                   <svg
//                     className="w-8 h-8 text-white/70"
//                     viewBox="0 0 64 64"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M12 22V14a4 4 0 014-4h8" />
//                     <path d="M44 10h8a4 4 0 014 4v8" />
//                     <path d="M12 42v8a4 4 0 004 4h8" />
//                     <path d="M44 54h8a4 4 0 004-4v-8" />
//                     <circle
//                       cx="32"
//                       cy="26"
//                       r="6"
//                       fill="currentColor"
//                       stroke="none"
//                     />
//                     <path d="M20 48c4-8 20-8 24 0" />
//                   </svg>
//                 </div>

//                 {/* LABEL */}
//                 <div className="absolute bottom-2 text-[11px] tracking-[0.25em] text-gray-500">
//                   FACT VERIFICATION
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(ProductsSection);

import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";

const ProductsSection = () => {
  return (
    <SectionWrapper className="relative overflow-hidden bg-black py-28">
      {/* Background Text — Perfectly Centered */}
      <div className="flex items-center justify-center pointer-events-none opacity-[0.12] select-none -translate-y-[0px]">
        <div
          className="
      font-['Oswald']
      text-[120px]
      md:text-[220px]
      leading-[120px]
      md:leading-[220px]
      tracking-[-10px]
      font-[600]
      uppercase
      text-white
      whitespace-nowrap
      [mask-image:linear-gradient(to_bottom,black_50 %,transparent_100%)]
    "
        >
          PRODUCTS
        </div>
      </div>

      <div className="relative z-10">
        {/* ===== Header Layout (Updated Placement) ===== */}
        <div className="mb-20">
          {/* Main Heading + Description (Split Layout) */}
          <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 translate-y-[-120px]">
            {/* LEFT SIDE - Heading */}
            {/* LEFT SIDE - Heading */}
            <h2
              className="
                  font-['Space_Grotesk',sans-serif]
                  font-[500]
                  text-white
                  text-[32px]
                  md:text-[40px]
                  leading-[110%]
                  tracking-[0px]
                  text-left
                "
            >
              Multi-Modal Deepfake Detection
            </h2>

            {/* RIGHT SIDE - Description */}
           <p className="max-w-lg md:ml-auto text-[14px] md:text-[16px] font-light leading-[140%] tracking-[0px] text-white text-left font-['Space_Grotesk']">
  Our AI-powered engine detects manipulation in images, videos,
  audio, and news content.
</p>

          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 translate-y-[-160px]">
          {/* 1️⃣ Image Detection - Premium Layout */}
          <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
            {/* Soft Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

            {/* Content */}
            <div className="relative">
              {/* Title */}
             <h3
  className="
    mb-6
    font-['Space_Grotesk',sans-serif]
    font-[500]
    text-[32px]
    md:text-[40px]
    leading-[110%]
    tracking-[0px]
    text-white
    text-left
  "
>
  Image Detection
</h3>


              {/* Description */}
             <p
  className="
    max-w-2xl
    mb-8
    font-['Space_Grotesk',sans-serif]
    font-[300]
    text-[14px]
    md:text-[16px]
    leading-[140%]
    tracking-[0px]
    text-white
    text-left
  "
>
  AI-generated fake images are rising fast. CtrlFake analyzes
  manipulation likelihood, detects tampering areas, and ensures
  your visuals stay safe and trustworthy.
</p>


              {/* Buttons */}
              <div className="flex gap-4 mb-12">
                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  AI GENERATED →
                </Button>

                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  DEEP FAKE →
                </Button>
              </div>

              {/* Premium Visual Section */}
              <div className="relative flex flex-col items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-[#111] shadow-inner">
                {/* Scanner Corner Brackets */}
                <div className="absolute top-8 left-8 w-10 h-10 border-t-[3px] border-l-[3px] border-[#555]"></div>
                <div className="absolute top-8 right-8 w-10 h-10 border-t-[3px] border-r-[3px] border-[#555]"></div>
                <div className="absolute bottom-16 left-8 w-10 h-10 border-b-[3px] border-l-[3px] border-[#555]"></div>
                <div className="absolute bottom-16 right-8 w-10 h-10 border-b-[3px] border-r-[3px] border-[#555]"></div>

                {/* Main Graphic Container */}
                <div className="relative flex items-center justify-center w-[300px] h-[200px] -mt-6">
                  {/* Rotating Dotted Circle */}
                  <svg
                    className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]"
                    viewBox="0 0 300 300"
                  >
                    <circle
                      cx="150"
                      cy="150"
                      r="130"
                      stroke="#666"
                      strokeWidth="1.5"
                      strokeDasharray="12 16"
                      fill="none"
                    />
                  </svg>

                  {/* Static Outer Arcs */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 300 300"
                  >
                    {/* Top Right Arc */}
                    <path
                      d="M 150 10 A 140 140 0 0 1 285 185"
                      fill="none"
                      stroke="#555"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Bottom Left Arc */}
                    <path
                      d="M 35 230 A 140 140 0 0 1 120 15"
                      fill="none"
                      stroke="#555"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Geometric Face Mesh */}
                  <svg
                    className="absolute inset-0 z-10 w-full h-full"
                    viewBox="0 0 300 300"
                  >
                    <g
                      stroke="#555"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinejoin="round"
                    >
                      {/* Face Mesh Lines */}
                      <path
                        d="
                        M150,30 L120,40 L95,65 L80,100 L70,140 L75,180 L95,220 L125,245 L150,255 L175,245 L205,220 L225,180 L230,140 L220,100 L205,65 L180,40 Z
                        M150,30 L150,75 L120,40 M150,30 L180,40
                        M150,75 L125,105 M150,75 L175,105 M150,75 L95,65 M150,75 L205,65
                        M125,105 L110,120 L135,120 Z
                        M175,105 L190,120 L165,120 Z
                        M150,120 L135,120 M150,120 L165,120 M150,120 L150,165 M135,120 L135,155 L150,165 L165,155 L165,120
                        M150,165 L150,195
                        M135,155 L110,140 L110,120 M165,155 L190,140 L190,120
                        M110,140 L80,100 M190,140 L220,100
                        M110,140 L70,140 M190,140 L230,140
                        M135,155 L100,165 L75,180 M165,155 L200,165 L225,180
                        M100,165 L95,220 M200,165 L205,220
                        M150,195 L130,195 L115,190 L100,165 M150,195 L170,195 L185,190 L200,165
                        M130,195 L125,245 M170,195 L175,245
                        M150,195 L150,215 L125,220 L115,190 M150,215 L175,220 L185,190
                        M150,215 L150,255
                        M125,245 L150,215 M175,245 L150,215
                      "
                      />
                    </g>

                    {/* Face Mesh Nodes (Vertices) */}
                    <g fill="#777">
                      {[
                        [150, 30],
                        [120, 40],
                        [95, 65],
                        [80, 100],
                        [70, 140],
                        [75, 180],
                        [95, 220],
                        [125, 245],
                        [150, 255],
                        [175, 245],
                        [205, 220],
                        [225, 180],
                        [230, 140],
                        [220, 100],
                        [205, 65],
                        [180, 40],
                        [150, 75],
                        [125, 105],
                        [175, 105],
                        [110, 120],
                        [135, 120],
                        [190, 120],
                        [165, 120],
                        [150, 120],
                        [150, 165],
                        [135, 155],
                        [165, 155],
                        [110, 140],
                        [190, 140],
                        [100, 165],
                        [200, 165],
                        [150, 195],
                        [130, 195],
                        [115, 190],
                        [170, 195],
                        [185, 190],
                        [150, 215],
                        [125, 220],
                        [175, 220],
                      ].map((point, i) => (
                        <circle key={i} cx={point[0]} cy={point[1]} r="2.5" />
                      ))}
                    </g>
                  </svg>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-10 text-[11px] font-bold tracking-[0.25em] text-[#777]">
                  FACE RECOGNITION
                </div>

                {/* Processing/Loading Bar */}
                <div className="absolute bottom-5 flex gap-[3px] opacity-70">
                  <div className="w-[7px] h-[10px] bg-[#222]"></div>
                  <div className="w-[7px] h-[10px] bg-[#444]"></div>
                  <div className="w-[7px] h-[10px] bg-[#666]"></div>
                  <div className="w-[7px] h-[10px] bg-[#555]"></div>
                  <div className="w-[7px] h-[10px] bg-[#333]"></div>
                  <div className="w-[7px] h-[10px] bg-[#222]"></div>
                  <div className="w-[7px] h-[10px] bg-[#222]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2️⃣ Video Detection - Same Style as Image Detection */}
          <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
            {/* Same Soft Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

            <div className="relative">
              {/* Title */}
              <h3
  className="
    mb-6
    font-['Space_Grotesk',sans-serif]
    font-[500]
    text-[32px]
    md:text-[40px]
    leading-[110%]
    tracking-[0px]
    text-white
    text-left
  "
>
  Video Detection
</h3>


              {/* Description */}
              <p
  className="
    max-w-2xl
    mb-8
    font-['Space_Grotesk',sans-serif]
    font-[300]
    text-[14px]
    md:text-[16px]
    leading-[140%]
    tracking-[0px]
    text-white
    text-left
  "
>
  Deepfake videos are rapidly growing. CtrlFake detects AI-generated content with 85% accuracy, ensuring video authenticity and stronger digital trust.
</p>


              {/* Buttons */}
              <div className="flex gap-4 mb-12">
                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  AI GENERATED →
                </Button>

                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  DEEP FAKE →
                </Button>
              </div>

              {/* Premium Visual Section: Camera Viewfinder */}
              <div className="relative flex items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-[#141414] shadow-inner font-mono select-none">
                {/* --- Outer Viewfinder Frame Brackets --- */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#555]"></div>
                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#555]"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#555]"></div>
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#555]"></div>

                {/* --- Top Left: Battery & Flash --- */}
                <div className="absolute flex flex-col gap-3 top-8 left-10">
                  {/* Battery Icon */}
                  <div className="relative w-[34px] h-[16px] border border-[#666] rounded-[3px] flex items-center justify-center text-[8px] text-[#666] tracking-widest">
                    80%
                    {/* Battery Terminal */}
                    <div className="absolute -right-[3px] top-[3px] w-[2px] h-[8px] bg-[#666] rounded-r-[1px]"></div>
                  </div>

                  {/* Flash Icon */}
                  <div className="flex items-center justify-center w-[18px] h-[18px] border border-[#666] rounded-full text-[#666]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                </div>

                {/* --- Top Right: Recording & Resolution --- */}
                <div className="absolute flex flex-col items-end top-8 right-10 gap-1.5 text-[11px] text-[#bbb]">
                  <div className="flex items-center gap-2">
                    <span className="tracking-widest">00:16:08:02</span>
                    {/* Pulsing Red Dot */}
                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                    <span className="font-sans font-bold tracking-widest text-white">
                      REC
                    </span>
                  </div>
                  <div className="bg-[#ccc] text-[#111] font-sans font-bold px-1.5 py-[1px] text-[10px] rounded-sm mt-0.5">
                    4K
                  </div>
                  <div className="tracking-widest mt-0.5">3840x2160</div>
                </div>

                {/* --- Center: Focus Brackets & Crosshair --- */}
                <div className="relative flex items-center justify-center w-40 h-28 animate-[subtleZoom_1s_ease-in-out_infinite]">
                  {/* Inner Brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#777] animate-[subtleZoom_1s_ease-in-out_infinite]"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#777] animate-[subtleZoom_1s_ease-in-out_infinite]"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#777] animate-[subtleZoom_1s_ease-in-out_infinite]"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#777] animate-[subtleZoom_1s_ease-in-out_infinite]"></div>

                  {/* Center Crosshair */}
                  <div className="absolute w-6 h-[1px] bg-[#777] animate-[subtleZoom_1s_ease-in-out_infinite]"></div>
                  <div className="absolute w-[1px] h-6 bg-[#777] animate-[subtleZoom_1s_ease-in-out_infinite]"></div>
                </div>

                {/* --- Bottom Left: Framerate --- */}
                <div className="absolute bottom-8 left-10 text-[11px] tracking-widest text-[#bbb]">
                  60 FPS
                </div>

                {/* --- Bottom Center: Exposure Meter & Settings --- */}
                <div className="absolute bottom-8 flex flex-col items-center gap-2 w-full text-[11px] text-[#bbb]">
                  {/* Exposure Meter */}
                  <div className="flex items-center gap-1.5 tracking-[0.2em] font-sans">
                    <span>-</span>
                    <span>3</span>
                    <span className="text-[8px]">●</span>
                    <span>2</span>
                    <span className="text-[8px]">●</span>
                    <span>1</span>
                    <span className="text-[8px]">●</span>
                    <div className="relative flex flex-col items-center">
                      <span className="font-bold text-white">0</span>
                      {/* Triangle Pointer */}
                      <div className="absolute -bottom-1.5 w-0 h-0 border-l-[3.5px] border-r-[3.5px] border-b-[5px] border-transparent border-b-[#888]"></div>
                    </div>
                    <span className="text-[8px]">●</span>
                    <span>1</span>
                    <span className="text-[8px]">●</span>
                    <span>2</span>
                    <span className="text-[8px]">●</span>
                    <span>3</span>
                    <span>+</span>
                  </div>

                  {/* Camera Settings */}
                  <div className="flex items-center gap-6 mt-1 tracking-widest">
                    <span>F/1.8</span>
                    <span className="flex items-start">
                      <span className="text-[7px] mt-0.5 mr-0.5 font-sans tracking-normal">
                        ISO
                      </span>
                      600
                    </span>
                    <span>4/100</span>
                  </div>
                </div>

                {/* --- Bottom Right: Menu --- */}
                <div className="absolute bottom-8 right-10 flex items-center gap-1.5 text-[11px] tracking-widest text-[#bbb]">
                  <span className="font-sans">MENU</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 3️⃣ Audio Detection - Premium Layout */}
          <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
            {/* Same Soft Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

            <div className="relative">
              {/* Title */}
              <h3
  className="
    mb-6
    font-['Space_Grotesk',sans-serif]
    font-[500]
    text-[32px]
    md:text-[40px]
    leading-[110%]
    tracking-[0px]
    text-white
    text-left
  "
>
  Audio Detection
</h3>


              {/* Description */}
             <p
  className="
    max-w-2xl
    mb-8
    font-['Space_Grotesk',sans-serif]
    font-[300]
    text-[14px]
    md:text-[16px]
    leading-[140%]
    text-white
    text-left
  "
>
  AI voice cloning is rising fast, posing risks to security and
  trust. CtrlFake uses advanced acoustic and linguistic models to
  accurately detect synthetic voices.
</p>


              {/* Buttons */}
              <div className="flex gap-4 mb-12">
                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  AI GENERATED →
                </Button>

                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  DEEP FAKE →
                </Button>
              </div>

              {/* Premium Visual Section */}
              <div className="relative flex items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black">
                {/* Subtle Moving Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[sweep_6s_linear_infinite] pointer-events-none"></div>

                {/* Soft Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"></div>

                {/* Premium Waveform */}
                <div className="relative flex items-center justify-center gap-[6px] h-40">
                  {[...Array(70)].map((_, i) => {
                    const center = 35;
                    const distanceFromCenter = Math.abs(center - i);

                    // Higher intensity near center + randomness
                    const baseHeight =
                      25 +
                      Math.max(0, 60 - distanceFromCenter * 2) +
                      Math.random() * 30;

                    return (
                      <div
                        key={i}
                        className="w-[3px] rounded-full bg-white/35 animate-[wave_2s_ease-in-out_infinite]"
                        style={{
                          height: `${baseHeight}px`,
                          animationDelay: `${i * 0.01}s`,
                        }}
                      />
                    );
                  })}
                </div>

                <div className="absolute text-xs tracking-widest text-gray-500 bottom-6">
                  VOICE ANALYSIS
                </div>
              </div>
            </div>
          </div>

          {/* 4️⃣ Fake News Detection - Premium Layout */}
          <div className="relative p-10 overflow-hidden border rounded-3xl border-white/10 bg-gradient-to-br from-zinc-900 via-black to-black backdrop-blur-xl">
            {/* Same Soft Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

            <div className="relative">
              {/* Title */}
             <h3
  className="
    mb-6
    font-['Space_Grotesk',sans-serif]
    font-[500]
    text-[32px]
    md:text-[40px]
    leading-[110%]
    text-white
    text-left
  "
>
  Fake News Detection
</h3>


              {/* Description */}
              <p
  className="
    max-w-2xl
    mb-8
    font-['Space_Grotesk',sans-serif]
    font-[300]
    text-[14px]
    md:text-[16px]
    leading-[140%]
    text-white
    text-left
  "
>
  Fake News Detection verifies credibility by checking sources,
  facts, and inconsistencies—helping users spot misinformation and
  make informed decisions.
</p>


              {/* Buttons */}
              <div className="flex gap-4 mb-12">
                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  AI GENERATED →
                </Button>

                <Button
                  variant="dark"
                  size="sm"
                  className="px-6 py-2 transition border border-white/20 rounded-xl hover:border-white/40"
                >
                  DEEP FAKE →
                </Button>
              </div>

              {/* Premium Visual Section */}
              <div className="relative flex items-center justify-center overflow-hidden border h-72 rounded-3xl border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black animate-floatSlow">
                {/* Light Sweep */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent animate-sweep"></div>

                {/* Soft Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

                {/* LEFT CONNECTION LINES */}
                <div className="absolute left-16 top-1/2 w-24 h-[1px] bg-white/10 -translate-y-1/2"></div>
                <div className="absolute left-16 top-[45%] w-16 h-[1px] bg-white/5 rotate-6 origin-left"></div>
                <div className="absolute left-16 top-[55%] w-16 h-[1px] bg-white/5 -rotate-6 origin-left"></div>

                {/* CENTER SYSTEM */}
                <div className="relative flex items-center justify-center">
                  {/* Outer Halo */}
                  <div className="absolute w-44 h-44 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-2xl animate-pulseSoft"></div>

                  {/* Rotating Gradient Ring */}
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-[2px] animate-spin">
                    <div className="w-full h-full bg-black rounded-full"></div>
                  </div>

                  {/* Inner Core */}
                  <div className="relative flex items-center justify-center w-28 h-28 rounded-full border border-white/20 bg-black shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <svg
                      className="w-6 h-6 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>
                  </div>
                </div>

                {/* RIGHT CONNECTION LINE */}
                <div className="absolute right-28 top-1/2 w-20 h-[1px] bg-white/10 -translate-y-1/2 animate-fadeLine"></div>

                {/* Connector Dot */}
                <div className="absolute w-2 h-2 -translate-y-1/2 rounded-full right-28 top-1/2 bg-white/20"></div>

                {/* RIGHT GLASS CARD */}
                <div className="absolute right-12 flex items-center justify-center w-20 h-20 rounded-[26px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-floatSlow">
                  <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>

                  <svg
                    className="w-8 h-8 text-white/70"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22V14a4 4 0 014-4h8" />
                    <path d="M44 10h8a4 4 0 014 4v8" />
                    <path d="M12 42v8a4 4 0 004 4h8" />
                    <path d="M44 54h8a4 4 0 004-4v-8" />
                    <circle
                      cx="32"
                      cy="26"
                      r="6"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path d="M20 48c4-8 20-8 24 0" />
                  </svg>
                </div>

                {/* LABEL */}
                <div className="absolute bottom-2 text-[11px] tracking-[0.25em] text-gray-500">
                  FACT VERIFICATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(ProductsSection);
