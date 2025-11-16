import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#fffbf0] text-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#ff1744] border-4 border-black shadow-[8px_8px_0px_0px_#000000] opacity-20 rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#2196f3] border-4 border-black shadow-[8px_8px_0px_0px_#000000] opacity-20 -rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ffeb3b] border-4 border-black shadow-[12px_12px_0px_0px_#000000] opacity-10 rotate-45 hidden lg:block"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block">
            <h1 className="text-9xl md:text-[12rem] font-black uppercase tracking-tight leading-none mb-4">
              404
            </h1>
            <div className="h-6 bg-[#ff1744] border-4 border-black shadow-[8px_8px_0px_0px_#000000]"></div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
              PAGE NOT FOUND
            </h2>
            <p className="text-lg font-bold leading-relaxed">
              THE PAGE YOU'RE LOOKING FOR DOESN'T EXIST OR HAS BEEN MOVED.
            </p>
          </div>

          <div className="bg-[#ffeb3b] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] max-w-xl mx-auto">
            <p className="text-base font-bold">
              DON'T WORRY, EVEN THE BEST BACKENDS RETURN 404 SOMETIMES.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="neobrutal-btn neobrutal-btn-yellow group"
          >
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-home"></i>
              RETURN HOME
            </span>
          </Link>
          <Link
            to="/#projects"
            className="neobrutal-btn neobrutal-btn-secondary group"
          >
            <span className="flex items-center gap-2">
              VIEW PROJECTS
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="bg-[#2196f3] text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000000]">
            <span className="text-xs font-black uppercase">ERROR CODE</span>
          </div>
          <div className="bg-[#4caf50] text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000000]">
            <span className="text-xs font-black uppercase">NOT FOUND</span>
          </div>
          <div className="bg-[#9c27b0] text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000000]">
            <span className="text-xs font-black uppercase">404</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
