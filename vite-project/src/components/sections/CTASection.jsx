import React from "react";
import SectionWrapper from "../ui/SectionWrapper";

const CTASection = () => {
  return (
    // Outer section background set to light gray per instructions
    <SectionWrapper className="relative px-6 py-24 bg-black">
      {/* Main Container Box */}
      <div className="relative w-full max-w-[1300px] mx-auto bg-[#0A0A0A] rounded-[32px] border border-white/5 overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl translate-y-[-60px]">
        {/* Left Column: Text & Input */}
        <div className="relative z-10 flex flex-col justify-center w-full p-12 md:w-[55%] md:p-16 lg:p-20">
         <h2
  className="
    mb-4
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
  Join Our Newsletter
</h2>


          <p
  className="
    max-w-[400px]
    mb-10
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
  With our cutting-edge template, you'll unlock the power to bring
  your design ideas to life like never before.
</p>


          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[420px]">
            <input
              type="email"
              placeholder="Enter email ..."
              className="flex-1 w-full px-5 py-3.5 text-sm text-white placeholder-gray-500 bg-transparent border rounded-[12px] border-[#333] focus:outline-none focus:border-gray-400 focus:bg-white/5 transition-all"
            />
            <button className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-black transition-colors bg-white rounded-[12px] hover:bg-gray-200 whitespace-nowrap">
              Submit
            </button>
          </div>
        </div>

        {/* Right Column: Dashboard Mockup Graphic */}
        <div className="relative w-full h-[350px] md:h-auto md:w-[45%] overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#111]">
          {/* Subtle grid background for the right side */}
          {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div> */}

          {/* Simulated UI Window */}
          <div className="absolute top-12 md:top-16 left-8 md:left-0 w-[550px] h-[400px] bg-[#121212] rounded-tl-2xl border border-[#222] shadow-[0_0_40px_rgba(0,0,0,0.5)] p-5 flex">
            {/* Sidebar Mock */}
            <div className="w-[180px] border-r border-[#222] pr-4 flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#222] border border-[#333]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <span className="font-medium text-white">Auto-AI</span>
              </div>

              {/* Search Bar */}
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center justify-between h-9 px-3 rounded-lg border border-[#333] bg-[#1a1a1a] shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#888"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <span className="text-xs text-[#888]">Search...</span>
                  </div>
                  <span className="text-[10px] text-[#555]">⌘K</span>
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg shadow-md cursor-pointer w-9 h-9">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="black">
                    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
                  </svg>
                </div>
              </div>

              {/* Menu */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#555] mb-2 uppercase">
                  Menu
                </span>
                <div className="flex items-center gap-3 px-2 py-2 text-sm text-[#888] rounded-md">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  Home
                </div>
                <div className="flex items-center gap-3 px-2 py-2 text-sm text-white bg-[#222] rounded-md">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                    <path d="M6 9v2a2 2 0 0 0 2 2h3" />
                  </svg>
                  Workflow
                </div>
                <div className="flex items-center gap-3 px-2 py-2 text-sm text-[#888] rounded-md">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  Templates
                </div>
              </div>
            </div>

            {/* Main Content Mock */}
            <div className="relative flex-1 pt-2 pl-6">
              {/* Top Badges */}
              <div className="flex gap-2 mb-10">
                <div className="px-3 py-1.5 text-xs text-[#aaa] bg-[#1a1a1a] border border-[#333] rounded-full flex items-center gap-1">
                  Traffic{" "}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div className="px-3 py-1.5 text-xs text-[#aaa] bg-[#1a1a1a] border border-[#333] rounded-full flex items-center gap-1">
                  Pending Status{" "}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
              </div>

              {/* Diagram Node Mock */}
              <div className="relative mt-8 ml-4">
                <svg
                  className="absolute w-32 h-20 -top-10 -left-6"
                  fill="none"
                  stroke="#444"
                  strokeWidth="1.5"
                >
                  <path d="M0 0 Q 20 50 40 50 T 80 50" />
                </svg>
                <div className="relative z-10 w-[180px] p-3 bg-[#111] border border-[#333] rounded-xl flex items-center gap-3 shadow-lg">
                  <div className="absolute -top-2 left-3 w-4 h-4 bg-[#222] border border-[#444] rounded-full flex items-center justify-center text-[10px] text-white">
                    +
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center text-[#888]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      New account
                    </div>
                    <div className="text-xs text-[#666]">Action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(CTASection);
