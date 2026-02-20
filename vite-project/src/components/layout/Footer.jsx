// import React from "react";
// import { footerLinks } from "../../constants/navLinks";
// import Container from "../ui/Container";
// import Button from "../ui/Button";

// const Footer = () => {
//   return (
//     <footer className="relative w-full overflow-hidden bg-black border-t border-gray-800">
//       {/* 1. Standard Content inside Container */}
//       <Container>
//         <div className="pt-16 pb-8">
//           {/* Top Grid */}
//           <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
//             <div className="grid grid-cols-1 gap-8 lg:col-span-3 sm:grid-cols-3">
//               <div>
//                 <h3 className="mb-4 text-lg font-bold text-white">Home</h3>
//                 <ul className="space-y-3">
//                   {footerLinks.home.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-sm text-gray-400 transition-colors hover:text-white"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="mb-4 text-lg font-bold text-white">Pages</h3>
//                 <ul className="space-y-3">
//                   {footerLinks.pages.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-sm text-gray-400 transition-colors hover:text-white"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="mb-4 text-lg font-bold text-white">App</h3>
//                 <ul className="space-y-3">
//                   {footerLinks.app.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-sm text-gray-400 transition-colors hover:text-white"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div>
//               {/* Newsletter Signup */}
//               <div className="mb-6">
//                 <h3 className="mb-4 text-lg font-bold text-white">
//                   Join our Newsletter
//                 </h3>
//                 <p className="mb-4 text-sm text-gray-400">
//                   Get the latest updates and offers.
//                 </p>
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     placeholder="Your email address"
//                     className="flex-1 px-4 py-2 text-sm text-white bg-[#222] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   />
//                   <Button variant="primary" size="sm">
//                     Subscribe
//                   </Button>
//                 </div>
//               </div>

//               {/* Social Media Links */}
//               <div>
//                 <h3 className="mb-4 text-lg font-bold text-white">Follow Us</h3>
//                 <div className="flex gap-4">
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     <svg
//                       width="20"
//                       height="20"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.86v-6.26h-2.46v-2.6h2.46v-1.98c0-2.43 1.44-3.77 3.65-3.77 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.6h-2.24v6.26c4.59-.8 8.19-4.45 8.19-8.86 0-5.5-4.46-9.96-9.96-9.96z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     <svg
//                       width="20"
//                       height="20"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24
//                       5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5c0-1.19-.02-2.72-1.66-2.72s-1.92 1.3-1.92 2.64v5h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5z"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>

//       {/* 2. Full-Width Watermark Section (Outside Container) */}
//       {/* 🔥 CTRL FAKE Watermark with SEPARATED Circuit Lines */}
//       <div className="relative flex items-center justify-center w-full min-h-[300px] md:min-h-[400px] mt-4 overflow-hidden select-none border-t border-gray-800 pt-16 pb-8">
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
//               {/* Base Lines */}
//               <path
//                 d="M-100 20 L 150 20 L 250 100 H 320"
//                 className="circuit-base"
//               />
//               <path
//                 d="M-100 40 L 120 40 L 220 120 H 280"
//                 className="circuit-base"
//               />

//               {/* Animated Glowing Traces (using pathLength="100" so 8% is strictly proportional to each line) */}
//               <path
//                 d="M-100 20 L 150 20 L 250 100 H 320"
//                 className="circuit-glow glow-1"
//                 pathLength="100"
//               />
//               <path
//                 d="M-100 40 L 120 40 L 220 120 H 280"
//                 className="circuit-glow glow-2"
//                 pathLength="100"
//               />

//               {/* Nodes */}
//               <circle
//                 cx="320"
//                 cy="100"
//                 r="3.5"
//                 fill="#111"
//                 stroke="#555"
//                 strokeWidth="1.5"
//               />
//               <circle
//                 cx="280"
//                 cy="120"
//                 r="3.5"
//                 fill="#111"
//                 stroke="#555"
//                 strokeWidth="1.5"
//               />
//             </g>

//             {/* --- Right Side --- */}
//             <g>
//               {/* Base Lines */}
//               <path
//                 d="M1540 40 L 1250 40 L 1150 120 H 1050"
//                 className="circuit-base"
//               />
//               <path
//                 d="M1540 60 L 1280 60 L 1180 140 H 1100"
//                 className="circuit-base"
//               />

//               {/* Animated Glowing Traces */}
//               <path
//                 d="M1540 40 L 1250 40 L 1150 120 H 1050"
//                 className="circuit-glow glow-3"
//                 pathLength="100"
//               />
//               <path
//                 d="M1540 60 L 1280 60 L 1180 140 H 1100"
//                 className="circuit-glow glow-4"
//                 pathLength="100"
//               />

//               {/* Nodes */}
//               <circle
//                 cx="1050"
//                 cy="120"
//                 r="3.5"
//                 fill="#111"
//                 stroke="#555"
//                 strokeWidth="1.5"
//               />
//               <circle
//                 cx="1100"
//                 cy="140"
//                 r="3.5"
//                 fill="#111"
//                 stroke="#555"
//                 strokeWidth="1.5"
//               />
//             </g>
//           </svg>
//         </div>

//         {/* ====== Main Watermark Text ====== */}
//         <h1
//           className="relative z-10 whitespace-nowrap text-center 
//             text-[90px] md:text-[150px] lg:text-[200px]
//             font-['Oswald'] font-bold uppercase
//             tracking-[-0.04em] leading-none
//             text-white/10 translate-x-10 [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
//         >
//           CTRL FAKE
//         </h1>
//         {/* Copyright Text - Bottom Center */}
//         <p className="absolute z-10 text-xs tracking-wide text-gray-500 -translate-x-1/2 bottom-6 left-1/2">
//           © 2026 F9 Cybrisk Tech Pvt. Ltd. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default React.memo(Footer);








import React from "react";
import { footerLinks } from "../../constants/navLinks";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black border-t border-gray-800">
      {/* 1. Standard Content inside Container */}
      <Container>
        <div className="pt-16 pb-8">
          {/* Top Grid */}
          <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
              <div>
                <h3 className="mb-4 text-lg font-bold text-white">Home</h3>
                <ul className="space-y-3">
                  {footerLinks.home.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold text-white">Pages</h3>
                <ul className="space-y-3">
                  {footerLinks.pages.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold text-white">App</h3>
                <ul className="space-y-3">
                  {footerLinks.app.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Newsletter Signup */}
              <div className="mb-8 md:mb-6">
                <h3 className="mb-4 text-lg font-bold text-white">
                  Join our Newsletter
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  Get the latest updates and offers.
                </p>
                {/* Changed to flex-col for mobile, flex-row for sm+ */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 w-full px-4 py-2 text-sm text-white bg-[#222] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <Button variant="primary" size="sm" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="mb-4 text-lg font-bold text-white">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.86v-6.26h-2.46v-2.6h2.46v-1.98c0-2.43 1.44-3.77 3.65-3.77 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.6h-2.24v6.26c4.59-.8 8.19-4.45 8.19-8.86 0-5.5-4.46-9.96-9.96-9.96z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5c0-1.19-.02-2.72-1.66-2.72s-1.92 1.3-1.92 2.64v5h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 2. Full-Width Watermark Section (Outside Container) */}
      <div className="relative flex items-center justify-center w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] mt-4 overflow-hidden select-none border-t border-gray-800 pt-16 pb-8">
        {/* --- Circuit Lines SVG Background --- */}
        <div className="absolute top-12 left-0 w-full h-[400px] z-0 pointer-events-none">
          <style>
            {`
              .circuit-base { stroke: #333; stroke-width: 1.5; }
              .circuit-glow { stroke: white; stroke-width: 2; stroke-dasharray: 8 112; opacity: 0.9; }
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
            <g>
              <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-base" />
              <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-base" />
              <path d="M-100 20 L 150 20 L 250 100 H 320" className="circuit-glow glow-1" pathLength="100" />
              <path d="M-100 40 L 120 40 L 220 120 H 280" className="circuit-glow glow-2" pathLength="100" />
              <circle cx="320" cy="100" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
              <circle cx="280" cy="120" r="3.5" fill="#111" stroke="#555" strokeWidth="1.5" />
            </g>
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

        {/* ====== Main Watermark Text ====== */}
        {/* Adjusted text size for mobile and removed translation on mobile for true centering */}
        <h1
          className="
            relative z-10 whitespace-nowrap text-center 
            text-[55px] sm:text-[90px] md:text-[150px] lg:text-[200px]
            font-['Oswald'] font-bold uppercase
            tracking-[-0.04em] leading-none
            text-white/10 translate-x-0 md:translate-x-10 
            [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]
          "
        >
          CTRL FAKE
        </h1>
        {/* Copyright Text - Bottom Center */}
        <p className="absolute z-10 text-[10px] sm:text-xs tracking-wide text-center w-full text-gray-500 -translate-x-1/2 bottom-4 sm:bottom-6 left-1/2 px-4">
          © 2026 F9 Cybrisk Tech Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);