// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";

// const integrations = [
//   {
//     name: "figma.com",
//     desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
//     logo: "🎨",
//   },
//   {
//     name: "framer.com",
//     desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
//     logo: "⚡",
//   },
//   {
//     name: "dribbble.com",
//     desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
//     logo: "🏀",
//   },
//   {
//     name: "slack.com",
//     desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
//     logo: "💬",
//   },
//   {
//     name: "arc.net",
//     desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
//     logo: "🅰️",
//   },
//   {
//     name: "notion.so",
//     desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
//     logo: "📝",
//   },
// ];

// const IntegrationsSection = () => {
//   return (
//     <SectionWrapper className="relative mt-20 overflow-hidden bg-black py-28">
//       <div className="relative z-10 mx-auto max-w-7xl">

//        {/* Header */}
// <div className="relative mb-20 text-center">

//   {/* 🔥 Background Watermark Above Pill */}
//   <div className="absolute -translate-x-1/2 pointer-events-none left-1/2 -top-32">
//     <h1 className="text-9xl md:text-[160px] font-extrabold text-white opacity-[0.12]">
//       INTEGRATIONS
//     </h1>
//   </div>

//   {/* Pill */}
//   <div className="relative z-10 inline-flex items-center gap-2 px-6 py-2 mb-6 border rounded-full bg-white/5 border-white/10 backdrop-blur-md">
//     <span className="text-sm text-white/80">Integrations</span>
//   </div>

//   <h2 className="relative z-10 mb-6 text-4xl font-bold text-white md:text-5xl">
//     Connect Effortlessly
//   </h2>

//   <p className="relative z-10 max-w-2xl mx-auto text-gray-400">
//     Our AI solutions are designed to integrate smoothly with your current
//     technology stack.
//   </p>
// </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

//           {integrations.map((item, index) => (
//             <div
//               key={index}
//               className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent group-hover:opacity-100"></div>

//               {/* Top Row */}
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center justify-center w-12 h-12 text-xl border rounded-xl border-white/10 bg-white/5">
//                   {item.logo}
//                 </div>

//                 <button className="flex items-center gap-2 text-sm transition text-white/80 group-hover:text-white">
//                   View website
//                   <span className="transition transform group-hover:translate-x-1">↗</span>
//                 </button>
//               </div>

//               <h3 className="mb-3 font-medium text-white">
//                 {item.name}
//               </h3>

//               <p className="text-sm leading-relaxed text-gray-400">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="flex justify-center mt-14">
//           <button className="px-6 py-3 transition border rounded-xl border-white/10 bg-white/5 backdrop-blur-md text-white/80 hover:border-white/30 hover:text-white">
//             View More
//           </button>
//         </div>

//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(IntegrationsSection);

import React from "react";
import SectionWrapper from "../ui/SectionWrapper";

const integrations = [
  {
    name: "figma.com",
    desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
    logo: "🎨",
  },
  {
    name: "framer.com",
    desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
    logo: "⚡",
  },
  {
    name: "dribbble.com",
    desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
    logo: "🏀",
  },
  {
    name: "slack.com",
    desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
    logo: "💬",
  },
  {
    name: "arc.net",
    desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
    logo: "🅰️",
  },
  {
    name: "notion.so",
    desc: "Unlock the potential of automation, data synchronization, and improved experiences.",
    logo: "📝",
  },
];

const IntegrationsSection = () => {
  return (
    <SectionWrapper className="relative overflow-hidden translate-y-[-160px] bg-black py-28">
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* 🔥 Background Watermark */}
        <div className="absolute top-0 -mt-10 -translate-x-1/2 pointer-events-none left-1/2">
          <h1
            className="
                absolute
                left-1/2
                top-[60px]
                -translate-x-1/2
                font-['Oswald',sans-serif]
                font-[600]
                uppercase
                text-white
                opacity-[0.12]
                text-[120px]
                md:text-[220px]
                leading-[120px]
                md:leading-[220px]
                tracking-[-10px]
                whitespace-nowrap
                select-none
                pointer-events-none
                translate-y-[-50%]
              "
          >
            INTEGRATIONS
          </h1>
        </div>

        {/* Header - Matching the side-by-side text placement */}
        <div className="relative z-20 flex flex-col items-start justify-between gap-6 mb-10 md:flex-row md:items-end">
          <div className="flex-1">
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
                translate-y-[10px]
              "
            >
              Connect Effortlessly
            </h2>
          </div>

          <div className="md:max-w-[280px]">
            <p className="text-sm leading-relaxed text-gray-400 translate-y-[10px]">
              Our AI solutions are designed to integrate smoothly with your
              current technology stack.
            </p>
          </div>
        </div>

        {/* Fueled By Connector */}
        <div className="relative flex flex-col items-center mb-20 translate-y-[-30px]">
          <div className="relative z-20 px-12 py-5 border rounded-3xl border-white/20 bg-[#0F0F0F] text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            Fueled by
          </div>

          {/* Lines SVG */}
          <div className="absolute left-0 z-0 flex justify-center w-full h-32 -mt-4 top-full">
            <svg
              width="900"
              height="150"
              viewBox="0 0 900 150"
              fill="none"
              className="w-full max-w-[900px] opacity-90"
            >
              <defs>
                {/* Gradient: Purple to Orange (Left Inner) */}
                <linearGradient id="grad-p-o" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" /> {/* Purple */}
                  <stop offset="100%" stopColor="#f97316" /> {/* Orange */}
                </linearGradient>

                {/* Gradient: Orange to Purple (Far Right) */}
                <linearGradient id="grad-o-p" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" /> {/* Orange */}
                  <stop offset="100%" stopColor="#9333ea" /> {/* Purple */}
                </linearGradient>
              </defs>

              {/* --- Connection Nodes (Little rects at top) --- */}
              <g fill="#262626">
                <rect x="428" y="0" width="4" height="6" rx="2" />
                <rect x="440" y="0" width="4" height="6" rx="2" />
                <rect x="452" y="0" width="4" height="6" rx="2" />
                <rect x="464" y="0" width="4" height="6" rx="2" />
                <rect x="476" y="0" width="4" height="6" rx="2" />
              </g>

              {/* --- The Lines --- */}

              {/* 1. Far Left (White/Grey) - Goes to Figma Card */}
              <path
                d="M 430 6 V 20 C 430 45 420 50 400 50 H 120 C 90 50 80 60 80 90 V 150"
                stroke="white"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                fill="none"
              />

              {/* 2. Inner Left (Purple -> Orange) */}
              <path
                d="M 442 6 V 25 C 442 50 435 55 415 55 H 320 C 300 55 290 65 290 90 V 110"
                stroke="url(#grad-p-o)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* 3. Center (Grey Snake) - Ends in Circle */}
              <path
                d="M 454 6 V 35 C 454 50 460 55 470 65 C 480 75 480 80 480 95"
                stroke="#525252"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Center Circle Terminal */}
              <circle cx="480" cy="98" r="3" stroke="#525252" strokeWidth="1.5" fill="#000" />

              {/* 4. Inner Right (Grey) - Ends in Circle */}
              <path
                d="M 466 6 V 30 C 466 50 475 55 500 55 H 560"
                stroke="#525252"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Inner Right Circle Terminal */}
              <circle cx="564" cy="55" r="3" stroke="#525252" strokeWidth="1.5" fill="#000" />

              {/* 5. Far Right (Orange -> Purple) - Goes to Dribbble Card */}
              <path
                d="M 478 6 V 20 C 478 45 488 50 510 50 H 780 C 810 50 820 60 820 90 V 150"
                stroke="url(#grad-o-p)"
                strokeWidth="1.5"
                fill="none"
              />

            </svg>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => (
            <div
              key={index}
              /* Outer Wrapper: border-white/30 */
              className="group relative p-2 rounded-[32px] border border-white/30 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-transparent group-hover:opacity-100"></div>

              {/* Inner Wrapper: border-white/20 + Content Padding */}
              <div className="relative h-full w-full rounded-[28px] border border-white/20 bg-transparent p-8">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center text-2xl border shadow-inner w-14 h-14 rounded-2xl border-white/10 bg-white/5">
                    {item.logo}
                  </div>

                  <button
                    className="
                    group
                    flex items-center
                    gap-2
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-white/80
                    transition-all
                    duration-300
                    ease-out
                    hover:px-6
                    hover:bg-white/10
                    hover:text-white
                    hover:border-white/20
                    hover:scale-[1.03]
                  "
                  >
                    View website
                    <span
                      className="
                      text-[10px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    >
                      ↗
                    </span>
                  </button>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 text-sm font-bold transition-all bg-black border rounded-xl border-white/10 text-white/80 hover:border-white/30 hover:bg-white hover:text-black">
            View More
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(IntegrationsSection);
