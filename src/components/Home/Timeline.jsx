import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineEvents = [
  {
    year: "Late 2022",
    title: "First Steps into Programming",
    description:
      "Discovered web development through HTML and CSS. Built my first static websites and fell in love with code.",
    icon: "fa-solid fa-code",
  },
  {
    year: "Early 2023",
    title: "Unlocking JavaScript & React",
    description:
      "Learned JavaScript and dove into React. Built interactive UIs and grasped core frontend concepts.",
    icon: "fa-brands fa-js",
  },
  {
    year: "Mid 2023",
    title: "Backend Awakening",
    description:
      "Explored Node.js and MongoDB. Built Discord bots and backend APIs, learning how servers work.",
    icon: "fa-solid fa-server",
  },
  {
    year: "Late 2023",
    title: "Full-Stack Realization",
    description:
      "Started integrating frontend and backend skills. Built full-stack apps and grew confident as a developer.",
    icon: "fa-solid fa-layer-group",
  },
  {
    year: "2024",
    title: "Type Safety & New Languages",
    description:
      "Learned TypeScript, Python, and Lua. Embraced typed patterns and started thinking like a systems architect.",
    icon: "fa-solid fa-shield-halved",
  },
  {
    year: "Early 2025",
    title: "Personal Brand & Portfolio",
    description:
      "Launched my developer portfolio to showcase projects, write dev blogs, and define my online presence.",
    icon: "fa-solid fa-briefcase",
  },
  {
    year: "Present",
    title: "Systems Programming & Beyond",
    description:
      "Diving into Go, Rust, and C. Exploring low-level systems, performance, and memory management.",
    icon: "fa-solid fa-microchip",
  },
];

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="timeline" className="bg-black py-24 px-4">
      <div className="max-w-4xl mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4"
        >
          My Journey
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[2px] bg-violet-500 mx-auto mb-12"
        />

        <div
          ref={ref}
          className="relative border-l border-white/10 pl-6 space-y-16"
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-6"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-violet-500 rounded text-black">
                    <i className={`${event.icon} text-lg`}></i>
                  </div>
                  <span className="text-sm text-violet-400 font-medium">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: timelineEvents.length * 0.2 + 0.3,
          }}
          className="mt-20 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-sm px-6 py-2 border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-black transition-all"
          >
            <span>See My Work</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
