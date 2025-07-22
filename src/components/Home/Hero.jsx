import React, { useState } from "react";
import ProfilePictureSwitcher from "../ProfilePictureSwitcher";

const Hero = () => {
  const [currentProfilePic, setCurrentProfilePic] = useState(
    "/images/pfp/akane.jpg"
  );

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
            maybeizen
          </h1>

          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            Building robust backend systems and APIs with clean, scalable
            architecture.
          </p>

          <div className="flex gap-3 pt-3">
            <a
              href="#projects"
              className="text-sm px-4 py-2 rounded border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-black transition-colors"
            >
              View Work
            </a>
            <a
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded border border-gray-600 text-gray-400 hover:text-white hover:border-violet-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ProfilePictureSwitcher
            currentImage={currentProfilePic}
            onImageChange={setCurrentProfilePic}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
