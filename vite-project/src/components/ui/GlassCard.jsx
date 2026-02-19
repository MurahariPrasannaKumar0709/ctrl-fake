import React from "react";

const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative
        rounded-3xl
        p-6
        bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        before:absolute before:inset-0
        before:rounded-3xl
        before:border before:border-white/5
        before:pointer-events-none
        before:[mask-image:linear-gradient(to_bottom,white,transparent)]
        ${className}
      `}
    >
      {/* Top soft highlight */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {children}
    </div>
  );
};

export default GlassCard;