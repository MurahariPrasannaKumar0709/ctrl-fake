import React from "react";
import { useEffect, useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";

const FeaturesSection = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const duration = 3600; // 3.6 sec
    const intervalSpeed = 30;
    const increment = 3.6 / (duration / intervalSpeed);

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev >= 3.6) return 0;
        return prev + increment;
      });
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper className="relative overflow-hidden bg-black">
      <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
        {/* Header */}
        <div className="relative flex flex-col items-start justify-between w-full gap-8 mb-16 md:flex-row md:items-end">
          {/* Background Text — Positioned Behind */}
          <div className="absolute -translate-x-1/2 pointer-events-none -top-16 left-1/2">
            <div
              className="
      font-['Oswald']
      text-[220px]
      leading-[220px]
      tracking-[-10px]
      font-[600]
      uppercase
      text-white
      opacity-[0.12]
      text-center
      select-none
      whitespace-nowrap
      [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]
    "
            >
              FEATURES
            </div>
          </div>

          {/* Left Side: Pill & Heading */}
          <div className="relative z-10 flex flex-col items-start text-left">
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
          </div>

          {/* Right Side: Paragraph */}
          <div className="relative z-10 w-full text-left md:max-w-sm">
            <p className="text-[14px] font-light leading-[140%] tracking-[0px] text-white text-left font-['Space_Grotesk']">
              Discover how CtrlFake's advanced AI technology safeguards your
              digital presence with real-time detection, automation, and deep
              analysis.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-4 -mt-8 lg:grid-cols-3">
          {/* LEFT CARD — Predictive Detection */}
          <div className="relative flex flex-col h-full p-3 border rounded-3xl border-white/30 bg-white/5 backdrop-blur-xl">
            {/* Graph */}
            <div className="relative h-full mb-8 overflow-hidden border rounded-2xl border-white/20 bg-black/40">
              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full border-t border-white/10"
                    style={{ top: `${(i + 1) * 16}%` }}
                  />
                ))}
              </div>

              <svg
                viewBox="0 0 400 200"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="topGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>

                  <linearGradient
                    id="bottomGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Bottom Wave */}
                <path
                  d="M0,185 C80,165 120,195 200,175 C260,155 320,205 400,175"
                  fill="none"
                  stroke="url(#bottomGradient)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Top Wave */}
                <path
                  d="M0,135 C80,115 120,155 200,105 C260,75 320,145 400,95"
                  fill="none"
                  stroke="url(#topGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="10 10"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-120"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* High Risk Point */}
                <circle cx="200" cy="105" r="12" fill="white">
                  <animate
                    attributeName="r"
                    values="5;8;5"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Low Risk Point */}
                <circle cx="260" cy="173" r="5" fill="white">
                  <animate
                    attributeName="r"
                    values="5;8;5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              {/* Risk Badge */}
              <div className="absolute px-4 py-2 text-sm text-white rounded-xl bg-white/10 backdrop-blur-md top-4 left-4">
                Risk: 30%
              </div>

              {/* High Risk Label */}
              <div
                className="absolute px-4 py-2 text-sm text-white rounded-xl bg-white/10 backdrop-blur-md"
                style={{ top: "38%", left: "46%" }}
              >
                High Risk
              </div>

              {/* Low Risk Label */}
              <div
                className="absolute px-4 py-2 text-sm text-white rounded-xl bg-white/10 backdrop-blur-md"
                style={{ top: "72%", left: "63%" }}
              >
                Low Risk
              </div>
            </div>

            {/* 🔥 Push Content to Bottom */}
            <div className="mt-auto">
              <h3 className="mb-3 text-lg font-semibold text-white">
                Predictive Detection
              </h3>

              <p className="text-sm text-gray-400">
                Our AI anticipates manipulation trends and flags potential risks
                early with smart pattern analysis.
              </p>
            </div>
          </div>
          {/* CENTER CARD — Workflow */}
          <div className="relative flex flex-col h-full p-3 border rounded-3xl border-white/30 bg-white/5 backdrop-blur-xl">
            {/* Workflow Box */}
            <div className="relative flex items-center justify-center h-full mb-8 border rounded-2xl border-white/20 bg-black/40">
              <div className="flex flex-col items-center w-full max-w-[320px] py-6 px-8">
                {/* STEP 1 */}
                <div className="flex items-center w-full gap-4 px-5 py-3 border rounded-xl border-white/20 bg-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg border-white/20 bg-black/40">
                    <img
                      src="/detect-threat.png"
                      alt="icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-sm text-white">Detect Threat</span>
                </div>

                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div className="w-[1px] h-6 bg-white/20"></div>
                  <div className="flex items-center justify-center w-8 h-8 text-sm text-white border rounded-full border-white/20 bg-black/60">
                    +
                  </div>
                  <div className="w-[1px] h-6 bg-white/20"></div>
                </div>

                {/* STEP 2 */}
                <div className="flex items-center w-full gap-4 px-5 py-3 border rounded-xl border-white/20 bg-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg border-white/20 bg-black/40">
                    <img
                      src="/automated-action.png"
                      alt="icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-sm text-white">Automated Action</span>
                </div>

                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div className="w-[1px] h-6 bg-white/20"></div>
                  <div className="flex items-center justify-center w-8 h-8 text-sm text-white border rounded-full border-white/20 bg-black/60">
                    +
                  </div>
                  <div className="w-[1px] h-6 bg-white/20"></div>
                </div>

                {/* STEP 3 */}
                <div className="flex items-center w-full gap-4 px-5 py-3 border rounded-xl border-white/20 bg-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg border-white/20 bg-black/40">
                    <img src="/notify.png" alt="icon" className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-white">Notify</span>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="mt-auto">
              <h3 className="mb-3 text-lg font-semibold text-white">
                Automated Threat Response
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                From detection triggers to sending alerts or reports, CtrlFake
                streamlines content protection with precision.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* Top Right Card */}
            <div className="flex flex-col overflow-hidden border rounded-3xl border-white/30 bg-white/5 backdrop-blur-xl">
              {/* Full-bleed Image Container */}
              <div className="relative flex items-center justify-center w-full h-64 overflow-hidden border-b bg-black/20 border-white/5">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 200"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="left-glow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.1" />
                      <stop
                        offset="50%"
                        stopColor="#8b5cf6"
                        stopOpacity="0.8"
                      />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="right-glow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
                      <stop
                        offset="50%"
                        stopColor="#8b5cf6"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="#4c1d95"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>

                  {/* LEFT TRACES (Extended to x=0) */}
                  <circle cx="0" cy="30" r="2.5" fill="#334155" />
                  <path
                    d="M 0 30 L 30 30 L 70 70 L 140 70"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  <circle cx="0" cy="90" r="2.5" fill="#334155" />
                  <path
                    d="M 0 90 L 80 90 L 140 90"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  {/* Glowing Left Trace */}
                  <circle cx="0" cy="160" r="2.5" fill="#4c1d95" />
                  <path
                    d="M 0 160 L 70 160 L 120 110 L 140 110"
                    stroke="url(#left-glow)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  <circle cx="0" cy="190" r="2.5" fill="#334155" />
                  <path
                    d="M 0 190 L 40 190 L 80 150 L 100 150 L 120 130 L 140 130"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  {/* RIGHT TRACES (Extended to x=400) */}
                  {/* Glowing Right Trace */}
                  <circle cx="400" cy="40" r="2.5" fill="#4c1d95" />
                  <path
                    d="M 260 70 L 320 70 L 350 40 L 400 40"
                    stroke="url(#right-glow)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  <circle cx="400" cy="120" r="2.5" fill="#334155" />
                  <path
                    d="M 260 90 L 330 90 L 360 120 L 400 120"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  <circle cx="400" cy="140" r="2.5" fill="#334155" />
                  <path
                    d="M 260 110 L 300 110 L 330 140 L 400 140"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  <circle cx="400" cy="180" r="2.5" fill="#334155" />
                  <path
                    d="M 260 130 L 290 130 L 340 180 L 400 180"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  {/* MICROCHIP BODY */}
                  <rect
                    x="140"
                    y="40"
                    width="120"
                    height="120"
                    rx="24"
                    fill="#0f1015"
                    stroke="#1e293b"
                    strokeWidth="3"
                  />

                  {/* Inner Border Layer */}
                  <rect
                    x="146"
                    y="46"
                    width="108"
                    height="108"
                    rx="20"
                    fill="transparent"
                    stroke="#334155"
                    strokeWidth="1"
                    opacity="0.5"
                  />

                  {/* Square Border Around the Dots */}
                  <rect
                    x="156"
                    y="56"
                    width="88"
                    height="88"
                    rx="4"
                    fill="transparent"
                    stroke="#475569"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.12"
                  />

                  {/* 4 Corner Pins */}
                  <circle cx="165" cy="65" r="3.5" fill="#475569" />
                  <circle cx="235" cy="65" r="3.5" fill="#475569" />
                  <circle cx="165" cy="135" r="3.5" fill="#475569" />
                  <circle cx="235" cy="135" r="3.5" fill="#475569" />

                  {/* Center Core */}
                  <rect
                    x="170"
                    y="70"
                    width="60"
                    height="60"
                    rx="14"
                    fill="#18181b"
                    stroke="#27272a"
                    strokeWidth="2"
                  />

                  {/* Subtle Animated Pulse on Core */}
                  <rect
                    x="170"
                    y="70"
                    width="60"
                    height="60"
                    rx="14"
                    fill="transparent"
                    stroke="url(#left-glow)"
                    strokeWidth="1.5"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.8;0.2"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>

                {/* Timer Text Placement */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mb-0.5">
                    Scanned
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {time.toFixed(1)}s
                  </span>
                </div>
              </div>

              {/* Text Content - Padding shifted here */}
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Real-Time Data Analysis
                </h3>
                <p className="text-sm text-gray-400">
                  Analyze content live and receive reliable authenticity checks
                  in real-time — powered by expert-designed AI models.
                </p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="p-4 border rounded-3xl border-white/30 bg-white/5 backdrop-blur-xl">
              <h3 className="mb-3 text-lg font-semibold text-white">
                Natural Language Processing
              </h3>
              <p className="text-sm text-gray-400">
                Enhance customer engagement and unlock deeper insights through
                our cutting-edge natural language processing technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default React.memo(FeaturesSection);
