// import React, { useState } from "react";
// import SectionWrapper from "../ui/SectionWrapper";

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <SectionWrapper className="relative bg-black">
//       {/* Background Text */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
//         <div className="font-extrabold text-center text-white text-9xl">
//           FAQ
//         </div>
//       </div>

//       <div className="w-full px-6 lg:px-16">

//         {/* Header */}
//         <div className="flex flex-col items-center mb-16 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/5 border-white/10 backdrop-blur-xl">
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
//                 d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <span className="text-sm font-medium text-white">
//               FAQ
//             </span>
//           </div>

//           <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
//             Frequently Asked Questions
//           </h2>
//         </div>

//         {/* FAQs */}
//         <div className="w-full space-y-6">

//           {/* 1️⃣ FAQ */}
//           <div className="w-full transition border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20">
//             <button
//               onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
//               className="flex items-center justify-between w-full px-8 py-6 text-left"
//             >
//               <span className="text-lg font-medium text-white">
//                 What types of tasks can be automated with this app?
//               </span>
//               <span
//                 className={`text-xl transition-transform duration-300 ${
//                   openIndex === 0 ? "rotate-45" : ""
//                 }`}
//               >
//                 +
//               </span>
//             </button>

//             {openIndex === 0 && (
//               <div className="px-8 pb-6">
//                 <p className="leading-relaxed text-gray-400">
//                   Our app can automate content scanning, threat detection,
//                   report generation, and notification systems.
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* 2️⃣ FAQ */}
//           <div className="w-full transition border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20">
//             <button
//               onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
//               className="flex items-center justify-between w-full px-8 py-6 text-left"
//             >
//               <span className="text-lg font-medium text-white">
//                 How secure is my data in the app?
//               </span>
//               <span
//                 className={`text-xl transition-transform duration-300 ${
//                   openIndex === 1 ? "rotate-45" : ""
//                 }`}
//               >
//                 +
//               </span>
//             </button>

//             {openIndex === 1 && (
//               <div className="px-8 pb-6">
//                 <p className="leading-relaxed text-gray-400">
//                   We use industry-standard encryption. All data is encrypted
//                   in transit and at rest.
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* 3️⃣ FAQ */}
//           <div className="w-full transition border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20">
//             <button
//               onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
//               className="flex items-center justify-between w-full px-8 py-6 text-left"
//             >
//               <span className="text-lg font-medium text-white">
//                 Can I integrate this app with other tools?
//               </span>
//               <span
//                 className={`text-xl transition-transform duration-300 ${
//                   openIndex === 2 ? "rotate-45" : ""
//                 }`}
//               >
//                 +
//               </span>
//             </button>

//             {openIndex === 2 && (
//               <div className="px-8 pb-6">
//                 <p className="leading-relaxed text-gray-400">
//                   Yes, our platform supports integrations like Slack, Notion,
//                   and others via API.
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* 4️⃣ FAQ */}
//           <div className="w-full transition border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20">
//             <button
//               onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
//               className="flex items-center justify-between w-full px-8 py-6 text-left"
//             >
//               <span className="text-lg font-medium text-white">
//                 How easy is it to set up?
//               </span>
//               <span
//                 className={`text-xl transition-transform duration-300 ${
//                   openIndex === 3 ? "rotate-45" : ""
//                 }`}
//               >
//                 +
//               </span>
//             </button>

//             {openIndex === 3 && (
//               <div className="px-8 pb-6">
//                 <p className="leading-relaxed text-gray-400">
//                   Setup is straightforward and guided. You can be running in
//                   minutes.
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* 5️⃣ FAQ */}
//           <div className="w-full transition border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20">
//             <button
//               onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
//               className="flex items-center justify-between w-full px-8 py-6 text-left"
//             >
//               <span className="text-lg font-medium text-white">
//                 What support is available?
//               </span>
//               <span
//                 className={`text-xl transition-transform duration-300 ${
//                   openIndex === 4 ? "rotate-45" : ""
//                 }`}
//               >
//                 +
//               </span>
//             </button>

//             {openIndex === 4 && (
//               <div className="px-8 pb-6">
//                 <p className="leading-relaxed text-gray-400">
//                   We provide documentation, email support, and enterprise plans
//                   with dedicated managers.
//                 </p>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default React.memo(FAQSection);

import React, { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <SectionWrapper className="relative py-20 overflow-hidden translate-y-[-220px] bg-black">
      {/* Content Container - Full Width */}
      <div className="relative z-10 flex flex-col items-start w-full gap-20 px-6 lg:px-10 lg:flex-row lg:gap-32 md:pt-20">
        {/* Left Column: Header */}
        <div className="flex flex-col items-start text-left lg:w-1/3 lg:sticky lg:top-32">

          <h2
  className="
    font-['Space_Grotesk',sans-serif]
    font-[500]
    text-[32px]
    md:text-[40px]
    lg:text-[56px]
    leading-[110%]
    tracking-[0px]
    text-white
    text-left
  "
>
  Frequently Asked
  <br className="hidden lg:block" /> Questions
</h2>

        </div>

        {/* Right Column: FAQs List */}
        <div className="flex flex-col w-full lg:w-2/3">
          {/* 1️⃣ FAQ */}
          <div className="w-full border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              className="flex items-center justify-between w-full py-6 text-left group"
            >
              <span className="text-[17px] font-medium text-white/90 group-hover:text-white transition-colors">
                What is CtrlFake and how does it work?
              </span>
              <span
                className={`text-xl text-white/70 transition-transform duration-300 ${
                  openIndex === 0 ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === 0 && (
              <div className="pb-6 pr-8">
                <p className="leading-relaxed text-gray-400">
                  CtrlFake is an AI-powered deepfake detection platform that
                  analyzes images, videos, and digital media to identify
                  manipulated or synthetic content. Using advanced machine
                  learning algorithms, it detects inconsistencies in facial
                  movements, lighting, audio patterns, and metadata to determine
                  authenticity in real-time.
                </p>
              </div>
            )}
          </div>

          {/* 2️⃣ FAQ */}
          <div className="w-full border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
              className="flex items-center justify-between w-full py-6 text-left group"
            >
              <span className="text-[17px] font-medium text-white/90 group-hover:text-white transition-colors">
                What types of content can CtrlFake analyze?
              </span>
              <span
                className={`text-xl text-white/70 transition-transform duration-300 ${
                  openIndex === 1 ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === 1 && (
              <div className="pb-6 pr-8">
                <p className="leading-relaxed text-gray-400">
                  CtrlFake can analyze: Images Videos Social media clips
                  AI-generated media Synthetic voice recordings Our system is
                  continuously trained to detect emerging deepfake techniques
                  and AI-generated content.
                </p>
              </div>
            )}
          </div>

          {/* 3️⃣ FAQ */}
          <div className="w-full border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
              className="flex items-center justify-between w-full py-6 text-left group"
            >
              <span className="text-[17px] font-medium text-white/90 group-hover:text-white transition-colors">
                Is my uploaded content secure and private?
              </span>
              <span
                className={`text-xl text-white/70 transition-transform duration-300 ${
                  openIndex === 2 ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === 2 && (
              <div className="pb-6 pr-8">
                <p className="leading-relaxed text-gray-400">
                  Absolutely. We prioritize data security and user privacy.
                  Uploaded content is processed securely and is never shared
                  with third parties. We follow strict data protection standards
                  to ensure your files remain confidential.
                </p>
              </div>
            )}
          </div>

          {/* 4️⃣ FAQ */}
          <div className="w-full border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
              className="flex items-center justify-between w-full py-6 text-left group"
            >
              <span className="text-[17px] font-medium text-white/90 group-hover:text-white transition-colors">
                Who can use CtrlFake?
              </span>
              <span
                className={`text-xl text-white/70 transition-transform duration-300 ${
                  openIndex === 3 ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === 3 && (
              <div className="pb-6 pr-8">
                <p className="leading-relaxed text-gray-400">
                  CtrlFake is designed for: Media organizations Businesses
                  Government agencies Educational institutions Content creators
                  Everyday internet users Anyone who wants to verify digital
                  content authenticity can use our platform.
                </p>
              </div>
            )}
          </div>

          {/* 5️⃣ FAQ */}
          <div className="w-full border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
              className="flex items-center justify-between w-full py-6 text-left group"
            >
              <span className="text-[17px] font-medium text-white/90 group-hover:text-white transition-colors">
                How reliable is CtrlFake’s detection system?
              </span>
              <span
                className={`text-xl text-white/70 transition-transform duration-300 ${
                  openIndex === 4 ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === 4 && (
              <div className="pb-6 pr-8">
                <p className="leading-relaxed text-gray-400">
                  CtrlFake is built on advanced AI and deep learning models
                  trained on extensive datasets of both authentic and
                  manipulated media. Our system evaluates multiple signals—such
                  as facial inconsistencies, audio irregularities, and digital
                  artifacts—to deliver highly dependable authenticity
                  assessments. While no detection technology can guarantee
                  absolute certainty, CtrlFake is continuously updated to stay
                  ahead of evolving deepfake techniques and maintain high
                  reliability.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(FAQSection);
