import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-black py-28 text-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[2px] bg-blue-500 mx-auto mt-4 mb-12"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-white/80 text-base leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Hey, I'm Izen — a full-stack developer and anime lover. I find that
            the emotional depth and creativity in anime directly inspire the way
            I solve problems and build software.
          </p>
          <p>
            Every project I tackle is like crafting a new world, much like the
            ones in my favorite shows. I thrive on learning and pushing my
            skills with tech that empowers creativity and storytelling.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl text-left hover:border-blue-500 duration-250 transition-all"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded">
                  <i className={`text-white text-lg ${card.icon}`}></i>
                </div>
                <h4 className="text-white text-lg font-medium">{card.title}</h4>
              </div>
              <p className="text-white/70 text-sm mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    icon: "fa-solid fa-code",
    title: "Coding Journey",
    description:
      "Started turning ideas into code in 2022 — and haven’t stopped since.",
    tags: ["Typescript", "GoLang"],
  },
  {
    icon: "fa-solid fa-tv",
    title: "Anime Fan",
    description: "Inspired by stories like Darling in the Franxx and Horimiya.",
    tags: ["DarliFra", "Horimiya", "Tsukigakirei"],
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "Creative Dev",
    description:
      "Designing projects based on the anime I love and ideas that spark joy.",
    tags: ["VS Code", "GitHub", "Node.js"],
  },
  {
    icon: "fa-solid fa-gamepad",
    title: "Gamer Life",
    description:
      "From building modpacks in Minecraft to sniping in Call of Duty.",
    tags: ["Minecraft", "Call of Duty", "The Finals"],
  },
  {
    icon: "fa-solid fa-music",
    title: "Music & Code",
    description: "Coding to a soundtrack — always. It fuels the creative flow.",
    tags: ["Linkin Park", "Slipknot", "Skillet"],
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Always Learning",
    description:
      "Exploring new tools, open source, and ways to grow every day.",
    tags: ["Tutorials", "Open Source", "AI"],
  },
];

export default About;
