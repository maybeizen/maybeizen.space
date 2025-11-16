import React, { useState } from "react";
import ProfilePictureSwitcher from "../ProfilePictureSwitcher";

const Hero = () => {
  const [currentProfilePic, setCurrentProfilePic] = useState(
    "/images/pfp/akane.jpg"
  );

  return (
    <section
      id="home"
      className="min-h-screen bg-[#fffbf0] text-black flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#2196f3] border-4 border-black shadow-[8px_8px_0px_0px_#000000] opacity-20 rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-[#4caf50] border-4 border-black shadow-[6px_6px_0px_0px_#000000] opacity-20 -rotate-12 hidden lg:block"></div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
        <div className="space-y-6 lg:space-y-8">
          {/* Role badge */}
          <div className="inline-block mb-2">
            <div className="bg-[#2196f3] text-white border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_#000000] inline-block">
              <span className="text-sm font-black uppercase tracking-wide">BACKEND DEVELOPER</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none">
                MAYBEIZEN
              </h1>
              <div className="h-4 bg-[#ffeb3b] border-4 border-black shadow-[8px_8px_0px_0px_#000000] mt-2"></div>
            </div>
          </div>

          {/* Description with accent box */}
          <div className="space-y-4 pt-2">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] max-w-lg">
              <p className="text-base sm:text-lg font-bold leading-relaxed">
                BUILDING ROBUST BACKEND SYSTEMS AND APIS WITH CLEAN, SCALABLE
                ARCHITECTURE.
              </p>
            </div>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="neobrutal-tag neobrutal-tag-blue">TYPESCRIPT</span>
              <span className="neobrutal-tag neobrutal-tag-yellow">GOLANG</span>
              <span className="neobrutal-tag">MONGODB</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="neobrutal-btn neobrutal-btn-yellow group"
            >
              <span className="flex items-center gap-2">
                VIEW WORK
                <i className="fa-solid fa-arrow-down group-hover:translate-y-1 transition-transform"></i>
              </span>
            </a>
            <a
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              className="neobrutal-btn neobrutal-btn-secondary group"
            >
              <span className="flex items-center gap-2">
                <i className="fa-brands fa-github"></i>
                GITHUB
              </span>
            </a>
          </div>
        </div>

        {/* Profile Picture Section */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Decorative accent boxes */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-[#ff1744] border-4 border-black shadow-[10px_10px_0px_0px_#000000] z-0"></div>
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#ffeb3b] border-4 border-black shadow-[6px_6px_0px_0px_#000000] z-10 opacity-0 hover:opacity-100 transition-opacity"></div>
            
            {/* Profile picture */}
            <div className="relative z-20">
              <ProfilePictureSwitcher
                currentImage={currentProfilePic}
                onImageChange={setCurrentProfilePic}
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#4caf50] text-white border-4 border-black px-4 py-2 shadow-[6px_6px_0px_0px_#000000] z-30">
              <span className="text-xs font-black uppercase">AVAILABLE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
