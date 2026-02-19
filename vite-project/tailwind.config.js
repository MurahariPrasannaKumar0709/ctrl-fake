/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          purple: "#a855f7",
          teal: "#14b8a6",
          orange: "#f97316",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* ============================= */
      /* 🎬 ANIMATIONS */
      /* ============================= */

      animation: {
        /* 🔌 Energy Flow */
        energyFlow: "energyFlow 7s linear infinite",
        energyFlowSlow: "energyFlowSlow 11s linear infinite",

        /* 🎥 Floating Cards */
        floatLeft: "floatLeft 12s ease-in-out infinite",
        floatRight: "floatRight 14s ease-in-out infinite",
        floatDeep: "floatDeep 16s ease-in-out infinite",
        floatSlow: "floatSlow 18s ease-in-out infinite",

        /* ✨ UI Effects */
        pulseSoft: "pulseSoft 10s ease-in-out infinite",
        fadeLine: "fadeLine 10s ease-in-out infinite",
        sweep: "sweep 18s linear infinite",
        waveMove: "waveMove 20s linear infinite",

        /* 🧾 Testimonials Vertical Scroll */
        verticalScroll: "verticalScroll 26s linear infinite",
        verticalScrollReverse: "verticalScrollReverse 26s linear infinite",

        textReveal: "textReveal 1s ease-out forwards",
        textRevealSlow:
          "textRevealSlow 1.4s cubic-bezier(0.22,1,0.36,1) forwards",
      },

      /* ============================= */
      /* 🎞 KEYFRAMES */
      /* ============================= */

      keyframes: {
        /* 🔌 Main Energy Flow */
        energyFlow: {
          "0%": { strokeDashoffset: "280" },
          "100%": { strokeDashoffset: "-280" },
        },

        energyFlowSlow: {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "-300" },
        },

        /* 🎥 Floating Motions */
        floatLeft: {
          "0%,100%": { transform: "translate(0px,0px) scale(1)" },
          "50%": { transform: "translate(-15px,-18px) scale(1.02)" },
        },

        floatRight: {
          "0%,100%": { transform: "translate(0px,0px) scale(1)" },
          "50%": { transform: "translate(18px,-15px) scale(1.02)" },
        },

        floatDeep: {
          "0%,100%": { transform: "translate(0px,0px) scale(1)" },
          "50%": { transform: "translate(-12px,14px) scale(1.03)" },
        },

        floatSlow: {
          "0%,100%": { transform: "translate(0px,0px)" },
          "50%": { transform: "translate(8px,10px)" },
        },

        /* ✨ UI Effects */
        pulseSoft: {
          "0%,100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },

        fadeLine: {
          "0%,100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },

        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },

        waveMove: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        /* 🧾 Testimonials Vertical Infinite Scroll */
        verticalScroll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        verticalScrollReverse: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0%)" },
        },

        /* 🎬 NEW — Text Reveal */
        textReveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },

        textRevealSlow: {
          "0%": {
            opacity: "0",
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },

        subtleZoom: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
    },
  },

  plugins: [],
};
