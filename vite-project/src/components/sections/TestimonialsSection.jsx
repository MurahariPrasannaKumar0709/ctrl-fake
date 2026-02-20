// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";

// const TestimonialsSection = () => {
//   return (
//     <SectionWrapper className="relative bg-black">
//       {/* Background Text */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
//         <div className="font-extrabold text-center text-white text-9xl">
//           TESTIMONIALS
//         </div>
//       </div>

// <div className="relative">

//   {/* Header */}
//   <div className="flex flex-col items-center mb-16 text-center">

//     {/* Pill */}
//     <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gray-900 border border-gray-700 rounded-full">
//       <svg
//         className="w-4 h-4 text-white"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//         />
//       </svg>
//       <span className="text-sm font-medium text-white">
//         Testimonials
//       </span>
//     </div>

//     {/* Title */}
//     <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
//       What Are Clients Saying
//     </h2>

//     {/* Description */}
//     <p className="max-w-2xl text-lg text-gray-400">
//       Hear from the businesses that have transformed their operations with
//       our AI solutions.
//     </p>

//   </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

//           {/* 1️⃣ Testimonial */}
//           <div className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
//             <div className="mb-4 font-serif text-6xl leading-none text-gray-700">"</div>
//             <p className="mb-6 leading-relaxed text-gray-300">
//               Using the Framer template has truly transformed my design process and elevated the quality of my work.
//             </p>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="font-semibold text-white">John Appleseed</p>
//                 <p className="text-sm text-gray-400">Founder & CEO</p>
//               </div>
//             </div>
//           </div>

//           {/* 2️⃣ Testimonial */}
//           <div className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
//             <div className="mb-4 font-serif text-6xl leading-none text-gray-700">"</div>
//             <p className="mb-6 leading-relaxed text-gray-300">
//               Using the Framer template has truly transformed my design process and elevated the quality of my work.
//             </p>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="font-semibold text-white">John Appleseed</p>
//                 <p className="text-sm text-gray-400">Founder & CEO</p>
//               </div>
//             </div>
//           </div>

//           {/* 3️⃣ Testimonial */}
//           <div className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
//             <div className="mb-4 font-serif text-6xl leading-none text-gray-700">"</div>
//             <p className="mb-6 leading-relaxed text-gray-300">
//               Using the Framer template has truly transformed my design process and elevated the quality of my work.
//             </p>
//             <div>
//               <p className="font-semibold text-white">John Appleseed</p>
//               <p className="text-sm text-gray-400">Founder & CEO</p>
//             </div>
//           </div>

//           {/* 4️⃣ Testimonial */}
//           <div className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
//             <div className="mb-4 font-serif text-6xl leading-none text-gray-700">"</div>
//             <p className="mb-6 leading-relaxed text-gray-300">
//               Using the Framer template has truly transformed my design process and elevated the quality of my work.
//             </p>
//             <div>
//               <p className="font-semibold text-white">John Appleseed</p>
//               <p className="text-sm text-gray-400">Founder & CEO</p>
//             </div>
//           </div>

//           {/* 5️⃣ Testimonial */}
//           <div className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
//             <div className="mb-4 font-serif text-6xl leading-none text-gray-700">"</div>
//             <p className="mb-6 leading-relaxed text-gray-300">
//               Using the Framer template has truly transformed my design process and elevated the quality of my work.
//             </p>
//             <div>
//               <p className="font-semibold text-white">John Appleseed</p>
//               <p className="text-sm text-gray-400">Founder & CEO</p>
//             </div>
//           </div>

//           {/* 6️⃣ Testimonial */}
//           <div className="relative p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
//             <div className="mb-4 font-serif text-6xl leading-none text-gray-700">"</div>
//             <p className="mb-6 leading-relaxed text-gray-300">
//               Using the Framer template has truly transformed my design process and elevated the quality of my work.
//             </p>
//             <div>
//               <p className="font-semibold text-white">John Appleseed</p>
//               <p className="text-sm text-gray-400">Founder & CEO</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(TestimonialsSection);

// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";

// const testimonials = [
//   {
//     text: "Using the Framer template has truly transformed my design process and elevated the quality of my work.",
//     name: "John Appleseed",
//     role: "Founder & CEO",
//   },
//   {
//     text: "This AI solution completely streamlined our workflow and boosted productivity.",
//     name: "Sarah Johnson",
//     role: "Product Manager",
//   },
//   {
//     text: "Exceptional performance and stunning UI. Highly recommended!",
//     name: "Michael Chen",
//     role: "CTO",
//   },
//   {
//     text: "The automation features saved us hundreds of hours.",
//     name: "Emily Brown",
//     role: "Operations Head",
//   },
//   {
//     text: "Game-changing platform for our business growth.",
//     name: "David Lee",
//     role: "Startup Founder",
//   },
//   {
//     text: "Incredible support and cutting-edge technology.",
//     name: "Sophia Wilson",
//     role: "Marketing Director",
//   },
// ];

// const TestimonialsSection = () => {
//   // duplicate entire array for infinite effect
//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   return (
//     <SectionWrapper className="relative py-24 overflow-hidden bg-black translate-y-[-100px]">
//       {/* 🔥 Soft Teal Radiant Glow (Center Background) */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div
//           className="
//       w-[600px]
//       h-[600px]
//       rounded-full
//       bg-teal-400/20
//       blur-[140px]
//       opacity-60
//     "
//         ></div>
//       </div>

//       {/* 🔥 Background Watermark */}
//       <div className="absolute pointer-events-none left-1/2">
//         <h1
//           className="
//                 absolute
//                 left-1/2
//                 top-[60px]
//                 -translate-x-1/2
//                 font-['Oswald',sans-serif]
//                 font-[600]
//                 uppercase
//                 text-white
//                 opacity-[0.12]
//                 text-[120px]
//                 md:text-[220px]
//                 leading-[120px]
//                 md:leading-[220px]
//                 tracking-[-10px]
//                 whitespace-nowrap
//                 select-none
//                 pointer-events-none
//                 translate-y-[-50%]
//               "
//         >
//           TESTIMONIALS
//         </h1>
//       </div>

//       <div className="relative z-10">
//         {/* Header - Side-by-side layout */}
//         <div className="relative z-20 flex flex-col items-start justify-between gap-6 mb-16 md:flex-row md:items-end">
//           {/* LEFT SIDE - Heading */}
//           <div className="flex-1">
//             <h2
//               className="
//         font-['Space_Grotesk',sans-serif]
//         font-[500]
//         text-white
//         text-[32px]
//         md:text-[40px]
//         leading-[110%]
//         tracking-[0px]
//         text-left
//         translate-y-[20px]
//       "
//             >
//               What Are Clients Saying
//             </h2>
//           </div>

//           {/* RIGHT SIDE - Description */}
//           <div className="md:max-w-[380px]">
//             <p className="text-sm leading-relaxed text-white translate-y-[30px]">
//               Hear from the businesses that have transformed their operations
//               with our AI solutions.
//             </p>
//           </div>
//         </div>

//         {/* Scroll Container */}
//         <div className="relative h-[600px] overflow-hidden">
//           {/* Fade Top */}
//           <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-black to-transparent" />

//           {/* Fade Bottom */}
//           <div className="absolute bottom-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-t from-black to-transparent" />

//           {/* Animated Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-verticalScroll hover:[animation-play-state:paused]">
//             {duplicatedTestimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-6 border border-white/30 rounded-xl bg-white/5 backdrop-blur-sm"
//               >
//                 <div className="mb-4 font-serif text-6xl leading-none text-gray-700">
//                   "
//                 </div>

//                 <p className="mb-6 leading-relaxed text-gray-300">
//                   {item.text}
//                 </p>

//                 <div>
//                   <p className="font-semibold text-white">{item.name}</p>
//                   <p className="text-sm text-gray-400">{item.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(TestimonialsSection);

// import React from "react";
// import SectionWrapper from "../ui/SectionWrapper";

// const testimonials = [
//   {
//     text: "CtrlFake helped us detect manipulated media before it could damage our brand reputation. The accuracy and speed are impressive.",
//     name: "Arjun Mehta",
//     role: "Head of Digital Security",
//   },
//   {
//     text: "With the rise of AI-generated deepfakes, CtrlFake gives us confidence that our content remains authentic and trustworthy.",
//     name: "Priya Nair",
//     role: "Media Operations Manager",
//   },
//   {
//     text: "The real-time detection capabilities are a game-changer for our newsroom. It saves us hours of manual verification.",
//     name: "Rahul Sharma",
//     role: "Editor-in-Chief",
//   },
//   {
//     text: "CtrlFake’s video and audio analysis tools helped us prevent a potential misinformation crisis.",
//     name: "Daniel Kim",
//     role: "Compliance Officer",
//   },
//   {
//     text: "The multi-modal detection system is incredibly powerful. It flags manipulated content with clear insights and risk scoring.",
//     name: "Samantha Reed",
//     role: "Cybersecurity Lead",
//   },
//   {
//     text: "We integrated CtrlFake into our workflow seamlessly. It’s now an essential part of our content verification process.",
//     name: "Vikram Rao",
//     role: "Tech Startup Founder",
//   },
// ];


// const TestimonialsSection = () => {
//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   const TestimonialCard = ({ item }) => (
//     <div className="p-6 border border-white/30 rounded-xl bg-white/5 backdrop-blur-sm">
//       <div className="mb-4 font-serif text-6xl leading-none text-gray-700">
//         "
//       </div>

//       <p className="mb-6 leading-relaxed text-gray-300">{item.text}</p>

//       <div>
//         <p className="font-semibold text-white">{item.name}</p>
//         <p className="text-sm text-gray-400">{item.role}</p>
//       </div>
//     </div>
//   );

//   return (
//     <SectionWrapper className="relative py-24 overflow-hidden bg-black translate-y-[-220px]">
//       {/* 🔥 Soft Teal Radiant Glow */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-[700px] h-[700px] rounded-full bg-teal-400/20 blur-[160px] opacity-60 animate-floatSlow" />
//       </div>

//       {/* 🔥 Background Watermark */}
//       <div className="absolute pointer-events-none left-1/2">
//         <h1
//           className="
//             absolute
//             left-1/2
//             top-[60px]
//             -translate-x-1/2
//             font-['Oswald',sans-serif]
//             font-[600]
//             uppercase
//             text-white
//             opacity-[0.12]
//             text-[120px]
//             md:text-[220px]
//             leading-[120px]
//             md:leading-[220px]
//             tracking-[-10px]
//             whitespace-nowrap
//             select-none
//           "
//         >
//           TESTIMONIALS
//         </h1>
//       </div>

//       <div className="relative z-10">
//         {/* Header */}
//         <div className="relative z-20 flex flex-col items-start justify-between gap-6 mb-16 md:flex-row md:items-end">
//           <div className="flex-1 translate-y-[150px]">
//             <h2
//               className="
//                 font-['Space_Grotesk',sans-serif]
//                 font-[500]
//                 text-white
//                 text-[32px]
//                 md:text-[40px]
//                 leading-[110%]
//                 tracking-[0px]
//                 text-left
//               "
//             >
//               What Are Clients Saying
//             </h2>
//           </div>

//           <div className="md:max-w-[380px] translate-y-[150px]">
//             <p className="text-[14px] md:text-[16px] font-light leading-[140%] tracking-[0px] text-white text-left font-['Space_Grotesk']">
//               Hear from the businesses that have transformed their operations
//               with our AI solutions.
//             </p>
//           </div>
//         </div>

//         {/* Scroll Container Box */}
//         <div className="relative max-w-6xl mx-auto mt-48 overflow-hidden border border-white/20 rounded-3xl bg-black/40 backdrop-blur-xl">
//           {/* Inner Height Wrapper */}
//           <div className="relative h-[600px] overflow-hidden">
//             {/* Fade Top */}
//             <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-black to-transparent" />

//             {/* Fade Bottom */}
//             <div className="absolute bottom-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-t from-black to-transparent" />

//             {/* 3 Animated Columns */}
//             <div className="grid grid-cols-1 gap-6 px-6 py-10 md:grid-cols-3">
//               {/* Column 1 - Down */}
//               <div className="space-y-6 animate-verticalScroll hover:[animation-play-state:paused]">
//                 {duplicatedTestimonials.map((item, index) => (
//                   <TestimonialCard key={`col1-${index}`} item={item} />
//                 ))}
//               </div>

//               {/* Column 2 - Up */}
//               <div className="space-y-6 animate-verticalScrollReverse hover:[animation-play-state:paused]">
//                 {duplicatedTestimonials.map((item, index) => (
//                   <TestimonialCard key={`col2-${index}`} item={item} />
//                 ))}
//               </div>

//               {/* Column 3 - Down */}
//               <div className="space-y-6 animate-verticalScroll hover:[animation-play-state:paused]">
//                 {duplicatedTestimonials.map((item, index) => (
//                   <TestimonialCard key={`col3-${index}`} item={item} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(TestimonialsSection);







import React from "react";
import SectionWrapper from "../ui/SectionWrapper";

const testimonials = [
  {
    text: "CtrlFake helped us detect manipulated media before it could damage our brand reputation. The accuracy and speed are impressive.",
    name: "Arjun Mehta",
    role: "Head of Digital Security",
  },
  {
    text: "With the rise of AI-generated deepfakes, CtrlFake gives us confidence that our content remains authentic and trustworthy.",
    name: "Priya Nair",
    role: "Media Operations Manager",
  },
  {
    text: "The real-time detection capabilities are a game-changer for our newsroom. It saves us hours of manual verification.",
    name: "Rahul Sharma",
    role: "Editor-in-Chief",
  },
  {
    text: "CtrlFake’s video and audio analysis tools helped us prevent a potential misinformation crisis.",
    name: "Daniel Kim",
    role: "Compliance Officer",
  },
  {
    text: "The multi-modal detection system is incredibly powerful. It flags manipulated content with clear insights and risk scoring.",
    name: "Samantha Reed",
    role: "Cybersecurity Lead",
  },
  {
    text: "We integrated CtrlFake into our workflow seamlessly. It’s now an essential part of our content verification process.",
    name: "Vikram Rao",
    role: "Tech Startup Founder",
  },
];

const TestimonialsSection = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({ item }) => (
    <div className="p-6 border border-white/30 rounded-xl bg-white/5 backdrop-blur-sm">
      <div className="mb-4 font-serif text-6xl leading-none text-gray-700">
        "
      </div>
      <p className="mb-6 leading-relaxed text-gray-300">{item.text}</p>
      <div>
        <p className="font-semibold text-white">{item.name}</p>
        <p className="text-sm text-gray-400">{item.role}</p>
      </div>
    </div>
  );

  return (
    <SectionWrapper className="relative py-16 md:py-24 overflow-hidden bg-black translate-y-[-100px] md:translate-y-[-220px]">
      {/* Restored exact translate-y-[-220px] for desktop */}
      {/* 🔥 Soft Teal Radiant Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] md:w-[700px] h-[300px] md:h-[700px] rounded-full bg-teal-400/20 blur-[100px] md:blur-[160px] opacity-60 animate-floatSlow" />
      </div>

      {/* 🔥 Background Watermark - FIXED CENTERING */}
      <div className="absolute inset-x-0 flex justify-center pointer-events-none">
        <h1
          className="
            absolute
            top-[40px] md:top-[60px]
            font-['Oswald',sans-serif]
            font-[600]
            uppercase
            text-white
            opacity-[0.12]
            text-[70px] md:text-[190px]
            leading-[70px] md:leading-[220px]
            tracking-[-4px] md:tracking-[-10px]
            whitespace-nowrap
            select-none
          "
        >
          TESTIMONIALS
        </h1>
      </div>

      <div className="relative z-10 px-4 md:px-0">
        {/* Header */}
        <div className="relative z-20 flex flex-col items-start justify-between gap-6 mb-8 md:mb-16 md:flex-row md:items-end">
          {/* Restored exact translate-y-[150px] for desktop */}
          <div className="flex-1 translate-y-[60px] md:translate-y-[150px]">
            <h2
              className="
                font-['Space_Grotesk',sans-serif]
                font-[500]
                text-white
                text-[32px] md:text-[40px]
                leading-[110%]
                tracking-[0px]
                text-left
              "
            >
              What Are Clients Saying
            </h2>
          </div>

          <div className="md:max-w-[380px] translate-y-[60px] md:translate-y-[150px]">
            <p className="text-[14px] md:text-[16px] font-light leading-[140%] tracking-[0px] text-white text-left font-['Space_Grotesk']">
              Hear from the businesses that have transformed their operations
              with our AI solutions.
            </p>
          </div>
        </div>

        {/* Scroll Container Box */}
        {/* Restored exact mt-48 for desktop */}
        <div className="relative max-w-6xl mx-auto mt-24 overflow-hidden border md:mt-48 border-white/20 rounded-3xl bg-black/40 backdrop-blur-xl">
          {/* Inner Height Wrapper */}
          <div className="relative h-[450px] md:h-[600px] overflow-hidden">
            {/* Fade Top */}
            <div className="absolute top-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-b from-black to-transparent" />

            {/* Fade Bottom */}
            <div className="absolute bottom-0 left-0 z-20 w-full h-24 pointer-events-none bg-gradient-to-t from-black to-transparent" />

            {/* 3 Animated Columns */}
            <div className="grid grid-cols-1 gap-6 px-6 py-10 md:grid-cols-3">
              {/* Column 1 - Down */}
              <div className="space-y-6 animate-verticalScroll hover:[animation-play-state:paused]">
                {duplicatedTestimonials.map((item, index) => (
                  <TestimonialCard key={`col1-${index}`} item={item} />
                ))}
              </div>

              {/* Column 2 - Up (Hidden on mobile so it doesn't overflow) */}
              <div className="hidden md:block space-y-6 animate-verticalScrollReverse hover:[animation-play-state:paused]">
                {duplicatedTestimonials.map((item, index) => (
                  <TestimonialCard key={`col2-${index}`} item={item} />
                ))}
              </div>

              {/* Column 3 - Down (Hidden on mobile so it doesn't overflow) */}
              <div className="hidden md:block space-y-6 animate-verticalScroll hover:[animation-play-state:paused]">
                {duplicatedTestimonials.map((item, index) => (
                  <TestimonialCard key={`col3-${index}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(TestimonialsSection);