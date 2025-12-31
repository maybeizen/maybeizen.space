import { useState } from "react";
import ProfilePictureSwitcher from "../ProfilePictureSwitcher";
import ButtonLink from "../ui/ButtonLink";

const Hero = () => {
  const [currentProfilePic, setCurrentProfilePic] = useState(
    "/images/pfp/akane.jpg"
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32"
    >
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full"></div>
            <div className="relative">
              <ProfilePictureSwitcher
                currentImage={currentProfilePic}
                onImageChange={setCurrentProfilePic}
              />
            </div>
          </div>

          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1a1a1a] rounded-full border border-[#1a1a1a]">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-[#a0a0a0] font-medium">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight">
              <span className="text-[#e5e5e5]">maybeizen</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#a0a0a0] font-light leading-relaxed">
              Full-stack developer crafting elegant solutions
              <br />
              <span className="text-blue-400">
                with clean code and modern architecture
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ButtonLink
              href="#projects"
              variant="default"
              size="lg"
              className="group"
            >
              View Projects
              <i className="fa-solid fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform"></i>
            </ButtonLink>
            <ButtonLink
              href="https://github.com/maybeizen"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              <i className="fa-brands fa-github mr-2"></i>
              GitHub
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
