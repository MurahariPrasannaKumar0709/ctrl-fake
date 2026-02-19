import React from "react";

function Beta() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 blur-3xl opacity-40" />

      {/* Watermark Text */}
      <div className="flex items-center justify-center pointer-events-none opacity-[0.12]">
        <h1 className="text-[120px] md:text-[200px] font-extrabold text-white tracking-tight">
          BETA
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 text-center">

       {/* Heading */}
<h1
  className="
    mb-6
    font-['Space_Grotesk',sans-serif]
    font-[500]
    text-[40px]
    md:text-[56px]
    leading-[110%]
    tracking-[0px]
    text-white
    text-center
  "
>
  Coming Soon...
</h1>


        {/* Description */}
       <p
  className="
    max-w-xl
    mx-auto
    font-['Space_Grotesk',sans-serif]
    font-[300]
    text-[14px]
    md:text-[16px]
    leading-[140%]
    tracking-[0px]
    text-white/70
    text-center
  "
>
  We’re working hard to bring this feature to life.
  Stay tuned for something amazing.
</p>


      </div>
    </div>
  );
}

export default Beta;