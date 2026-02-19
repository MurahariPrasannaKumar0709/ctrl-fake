import React from "react";

const CircuitBackground = () => {
  return (
    <svg
      className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient
          id="circuit-line-grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="rgba(45, 212, 191, 0.3)" />
          <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
          <stop offset="100%" stopColor="rgba(45, 212, 191, 0.3)" />
        </linearGradient>

        <filter id="glow-filter" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ================= GROUP 3: Vertical Side Circuit (Left) ================= */}
      <g className="hidden opacity-180 md:block">
        <path
          id="path-3"
          d="M100,-50 L100,400 L150,450 L150,700 L100,750 L100,1100"
          fill="none"
          stroke="url(#circuit-line-grad)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        
        {/* Line 1 */}
        <rect x="-15" y="-1.5" width="30" height="3" rx="1.5" fill="#2dd4bf" filter="url(#glow-filter)">
          <animateMotion dur="25s" repeatCount="indefinite" begin="-5s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
            <mpath href="#path-3" />
          </animateMotion>
        </rect>

        {/* Line 2 (Offset by ~8s) */}
        <rect x="-15" y="-1.5" width="30" height="3" rx="1.5" fill="#2dd4bf" filter="url(#glow-filter)">
          <animateMotion dur="25s" repeatCount="indefinite" begin="-13s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
            <mpath href="#path-3" />
          </animateMotion>
        </rect>

        {/* Line 3 (Offset by another ~8s) */}
        <rect x="-15" y="-1.5" width="30" height="3" rx="1.5" fill="#2dd4bf" filter="url(#glow-filter)">
          <animateMotion dur="25s" repeatCount="indefinite" begin="-21s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
            <mpath href="#path-3" />
          </animateMotion>
        </rect>
      </g>

      {/* ================= GROUP 4: Right Vertical Side Circuit (Right) ================= */}
      <g className="hidden opacity-180 md:block">
        <path
          id="path-4"
          d="M1820,-50 L1820,400 L1770,450 L1770,700 L1820,750 L1820,1100"
          fill="none"
          stroke="url(#circuit-line-grad)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        
        {/* Line 1 */}
        <rect x="-15" y="-1.5" width="30" height="3" rx="1.5" fill="#a855f7" filter="url(#glow-filter)">
          <animateMotion dur="28s" repeatCount="indefinite" begin="-12s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
            <mpath href="#path-4" />
          </animateMotion>
        </rect>

        {/* Line 2 (Offset by ~9s) */}
        <rect x="-15" y="-1.5" width="30" height="3" rx="1.5" fill="#a855f7" filter="url(#glow-filter)">
          <animateMotion dur="28s" repeatCount="indefinite" begin="-21s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
            <mpath href="#path-4" />
          </animateMotion>
        </rect>

        {/* Line 3 (Offset by another ~9s) */}
        <rect x="-15" y="-1.5" width="30" height="3" rx="1.5" fill="#a855f7" filter="url(#glow-filter)">
          <animateMotion dur="28s" repeatCount="indefinite" begin="-30s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" rotate="auto">
            <mpath href="#path-4" />
          </animateMotion>
        </rect>
      </g>
    </svg>
  );
};

export default CircuitBackground;