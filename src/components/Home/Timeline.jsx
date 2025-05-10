import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineEvents = [
  {
    year: "2022",
    title: "Discovered Programming",
    description:
      "Started learning HTML and CSS, building my first static pages.",
    icon: "fa-solid fa-code",
  },
  {
    year: "2022",
    title: "JavaScript & React",
    description:
      "Built interactive UIs using React. Learned the fundamentals of frontend development.",
    icon: "fa-brands fa-js",
  },
  {
    year: "2023",
    title: "Backend Exploration",
    description:
      "Dove into Node.js, MySQL, and APIs. Built bots and backend services.",
    icon: "fa-solid fa-server",
  },
  {
    year: "2023",
    title: "Language Expansion",
    description:
      "Explored Python, Java, and Go for different types of projects.",
    icon: "fa-solid fa-terminal",
  },
  {
    year: "2024",
    title: "Major Project: PteroLink",
    description:
      "Started developing PteroLink. Learned TypeScript and deeper architectural patterns.",
    icon: "fa-solid fa-rocket",
  },
  {
    year: "2025",
    title: "Portfolio Launch",
    description:
      "Created a personal brand and launched my developer portfolio.",
    icon: "fa-solid fa-briefcase",
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
          className="h-[2px] bg-blue-500 mx-auto mb-12"
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
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded text-black">
                    <i className={`${event.icon} text-lg`}></i>
                  </div>
                  <span className="text-sm text-blue-400 font-medium">
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
            className="inline-flex items-center gap-2 rounded-sm px-6 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition-all"
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
