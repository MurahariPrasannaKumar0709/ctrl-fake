// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { navLinks } from "../../constants/navLinks";

// // const Navbar = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div className="fixed left-0 right-0 z-50 flex justify-center px-6 top-6">

// //       {/* Floating Glass Container */}
// //       <div
// //         className={`
// //           relative
// //           flex items-center
// //           justify-between
// //           gap-14
// //           px-8
// //           py-3
// //           rounded-[10px]
// //           /* Glass Gradient & Blur */
// //           backdrop-blur-[30px]
// //           bg-[linear-gradient(110deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]
// //           /* Single Sharp Border */
// //           border border-white/15
// //           shadow-[0_20px_80px_rgba(0,0,0,0.55)]
// //           transition-all duration-300
// //           ${isScrolled ? "scale-[0.97] py-2.5" : "scale-100 py-3"}
// //         `}
// //       >

// //         {/* Dynamic Teal Ambient Glow (Background) */}
// //         <div className="absolute -inset-8 -z-10 blur-[60px] bg-teal-500/20 rounded-full pointer-events-none"></div>

// //         {/* Left Section */}
// //         <div className="flex items-center gap-10">

// //           {/* Detect Now Button - Glass Style */}
// //           <Link
// //             to="/"
// //             className="px-6 py-2 text-xs font-bold tracking-widest text-white rounded-[16px] 
// //             bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 
// //             transition-all duration-300 shadow-lg uppercase"
// //           >
// //             DETECT NOW
// //           </Link>

// //           {/* Nav Links */}
// //           <div className="items-center hidden gap-10 lg:flex">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 to={link.href}
// //                 className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 text-white/60 hover:text-white"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //         </div>

// //         {/* Right Section */}
// //         <div className="flex items-center">

// //           {/* Login Button - Dark Glass */}
// //           <Link
// //             to="/login"
// //             className="flex items-center gap-2 px-6 py-2 rounded-[16px] 
// //             bg-black/30 backdrop-blur-md border border-white/10 text-white text-xs font-bold 
// //             hover:bg-black/50 hover:border-white/20 transition-all duration-300 uppercase"
// //           >
// //             LOGIN
// //             <svg
// //               className="w-3.5 h-3.5"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2.5}
// //                 d="M13 7l5 5m0 0l-5 5m5-5H6"
// //               />
// //             </svg>
// //           </Link>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default React.memo(Navbar);





// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { navLinks } from "../../constants/navLinks";

// // const Navbar = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div className="fixed left-0 right-0 z-50 flex justify-center px-6 top-6">

// //       {/* Floating Glass Container */}
// //       <div
// //         className={`
// //           relative
// //           flex items-center
// //           justify-between
// //           gap-14
// //           px-8
// //           py-3
// //           rounded-[16px]
// //           /* Glass Gradient & Blur */
// //           backdrop-blur-[30px]
// //           bg-[linear-gradient(110deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]
// //           /* Single Sharp Border - Updated to gray-600 */
// //           border border-gray-600
// //           /* Refined bottom drop-shadow + faint inner glass reflection */
// //           shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7),inset_0_-2px_10px_rgba(255,255,255,0.03)]
// //           transition-all duration-300
// //           ${isScrolled ? "scale-[0.97] py-2.5" : "scale-100 py-3"}
// //         `}
// //       >

// //         {/* Dynamic Teal Ambient Glow (Background) */}
// //         <div className="absolute -inset-8 -z-10 blur-[60px] bg-teal-500/20 rounded-full pointer-events-none"></div>

// //         {/* Left Section */}
// //         <div className="flex items-center gap-10">

// //           {/* Detect Now Button - Glass Style */}
// //           <Link
// //             to="/"
// //             className="px-6 py-2 text-xs font-bold tracking-widest text-white rounded-[12px] 
// //             bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 
// //             transition-all duration-300 shadow-lg uppercase"
// //           >
// //             DETECT NOW
// //           </Link>

// //           {/* Nav Links */}
// //           <div className="items-center hidden gap-10 lg:flex">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 to={link.href}
// //                 className="text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 hover:text-white"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //         </div>

// //         {/* Right Section */}
// //         <div className="flex items-center">

// //           {/* Login Button - Dark Glass */}
// //           <Link
// //             to="/login"
// //             className="flex items-center gap-2 px-6 py-2 rounded-[12px] 
// //             bg-black/30 backdrop-blur-md border border-white/10 text-white text-xs font-bold 
// //             hover:bg-black/50 hover:border-white/20 transition-all duration-300 uppercase shadow-md"
// //           >
// //             LOGIN
// //             <svg
// //               className="w-3.5 h-3.5"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2.5}
// //                 d="M13 7l5 5m0 0l-5 5m5-5H6"
// //               />
// //             </svg>
// //           </Link>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default React.memo(Navbar);



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { navLinks } from "../../constants/navLinks";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="fixed left-0 right-0 z-50 flex justify-center px-6 top-6">
      
//       {/* Floating Glass Container - Updated with Framer Styling */}
//       <div
//         className={`
//           relative
//           flex items-center gap-5
//           p-1
//           rounded-[14px]
//           backdrop-blur-[10px]
//           bg-black/10
//           border border-white/20
//           shadow-[inset_0_0_30px_rgba(255,255,255,0.2),0_4px_4px_rgba(0,0,0,0.1)]
//           transition-all duration-300
//           ${isScrolled ? "scale-[0.98]" : "scale-100"}
//         `}
//       >

//         {/* Dynamic Teal Ambient Glow */}
//         <div className="absolute -inset-8 -z-10 blur-[60px] bg-teal-500/20 rounded-full pointer-events-none border border-white/60"></div>

//         {/* Left Section */}
//         <Link
//           to="/"
//           className="px-5 py-2.5 text-[15px] font-semibold text-white rounded-[10px] 
//           bg-white/5 border border-white/10 
//           hover:bg-white/10 transition-all duration-300"
//         >
//           DETECT NOW
//         </Link>

//         {/* Center Section */}
//         <div className="items-center hidden gap-8 px-4 lg:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-300"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center">
//           <Link
//             to="/login"
//             className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] 
//             bg-white/10 border border-white/10 text-white text-[15px] font-semibold 
//             hover:bg-white/20 transition-all duration-300"
//           >
//             LOGIN
//             <svg
//               className="w-4 h-4 text-white/80"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2.5}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default React.memo(Navbar);






import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 z-50 flex justify-center px-4 top-6 sm:px-6">
      
      {/* Floating Glass Container */}
      <div
        className={`
          relative
          flex items-center justify-between md:justify-center w-full md:w-auto gap-2 md:gap-5
          p-1
          rounded-[14px]
          backdrop-blur-[10px]
          bg-black/10
          border border-white/20
          shadow-[inset_0_0_30px_rgba(255,255,255,0.2),0_4px_4px_rgba(0,0,0,0.1)]
          transition-all duration-300
          ${isScrolled ? "scale-[0.98]" : "scale-100"}
        `}
      >

        {/* Dynamic Teal Ambient Glow */}
        <div className="absolute -inset-8 -z-10 blur-[60px] bg-teal-500/20 rounded-full pointer-events-none border border-white/60"></div>

        {/* Left Section: CTA */}
        <Link
          to="/"
          className="px-4 md:px-5 py-2.5 text-[13px] md:text-[15px] font-semibold text-white rounded-[10px] 
          bg-white/5 border border-white/10 
          hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
        >
          DETECT NOW
        </Link>

        {/* Center Section: Desktop Links (Hidden on Mobile) */}
        <div className="items-center hidden gap-8 px-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Desktop Login (Hidden on Mobile) */}
        <div className="items-center hidden md:flex">
          <Link
            to="/login"
            className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] 
            bg-white/10 border border-white/10 text-white text-[15px] font-semibold 
            hover:bg-white/20 transition-all duration-300"
          >
            LOGIN
            <svg
              className="w-4 h-4 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Icon (Hidden on Desktop) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center p-2.5 text-white transition-colors rounded-[10px] md:hidden hover:bg-white/10"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            absolute top-[calc(100%+12px)] left-0 w-full
            p-4 rounded-[14px] backdrop-blur-[20px] bg-black/60 border border-white/20 shadow-2xl
            flex flex-col gap-4 overflow-hidden
            transition-all duration-300 origin-top
            md:hidden
            ${isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"}
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block pb-3 text-sm font-medium transition-colors border-b text-white/80 border-white/10 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Login Button */}
          <Link
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-5 py-3 mt-2 rounded-[10px] 
            bg-white/10 border border-white/10 text-white text-[14px] font-semibold 
            hover:bg-white/20 transition-all duration-300"
          >
            LOGIN
            <svg
              className="w-4 h-4 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default React.memo(Navbar);