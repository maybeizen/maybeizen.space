import React from "react";
import ThemeSelector from "./ThemeSelector";

const Footer = () => {
  return (
    <footer className="bg-[#fffbf0] text-black px-4 py-16 border-t-4 border-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">
            MAYBEIZEN
          </h2>
          <p className="text-sm font-bold leading-relaxed mb-6">
            BACKEND DEVELOPER PASSIONATE ABOUT BUILDING ROBUST, SCALABLE SYSTEMS AND APIS.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a
              href="mailto:me@maybeizen.space"
              className="w-12 h-12 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        <div className="bg-[#ffeb3b] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
          <h3 className="text-xl font-black uppercase mb-4">NAVIGATION</h3>
          <ul className="space-y-3 text-sm font-bold">
            {["Home", "Skills", "Projects"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:underline uppercase"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2196f3] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] text-white">
          <h3 className="text-xl font-black uppercase mb-4">CONTACT</h3>
          <p className="text-sm font-bold leading-relaxed mb-4">
            WANT TO COLLABORATE OR HAVE QUESTIONS? I'M ALWAYS OPEN TO CHAT.
          </p>
          <a
            href="mailto:me@maybeizen.space"
            className="neobrutal-btn neobrutal-btn-secondary text-sm inline-block"
          >
            ME@MAYBEIZEN.SPACE
          </a>
        </div>
      </div>

      <div className="border-t-4 border-black max-w-6xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm font-bold mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} MAYBEIZEN. CRAFTED WITH CARE.
        </div>

        <div>
          <ThemeSelector />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
