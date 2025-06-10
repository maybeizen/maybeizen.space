import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineEvents = [
  {
    year: "Late 2022",
    title: "First Steps into Programming",
    description:
      "Discovered web development through HTML and CSS. Built my first static websites and fell in love with code.",
    icon: "fa-solid fa-code",
    details:
      "My journey began when I decided to build a simple website for a friend. The process of turning design into code fascinated me. I spent nights learning HTML structure and CSS styling basics. After completing a few static sites, I knew this was just the beginning of a much deeper passion.",
  },
  {
    year: "Early 2023",
    title: "Unlocking JavaScript & React",
    description:
      "Learned JavaScript and dove into React. Built interactive UIs and grasped core frontend concepts.",
    icon: "fa-brands fa-js",
    details:
      "Once comfortable with HTML and CSS, I moved to JavaScript to add interactivity. Learning concepts like the DOM, events, and asynchronous programming was challenging but rewarding. When I discovered React and the component model, everything clicked. I built small apps and started thinking in terms of reusable UI pieces.",
  },
  {
    year: "Mid 2023",
    title: "Backend Awakening",
    description:
      "Explored Node.js and MongoDB. Built Discord bots and backend APIs, learning how servers work.",
    icon: "fa-solid fa-server",
    details:
      "Realizing I needed more than just frontend skills, I jumped into Node.js and Express. Creating RESTful APIs and working with databases like MongoDB opened a whole new world. My first significant project was a Discord bot that served a community of over 500 users. This taught me about handling real-time data and maintaining services users depend on.",
  },
  {
    year: "Late 2023",
    title: "Full-Stack Realization",
    description:
      "Started integrating frontend and backend skills. Built full-stack apps and grew confident as a developer.",
    icon: "fa-solid fa-layer-group",
    details:
      "With both frontend and backend skills, I began creating complete applications. I focused on learning authentication, data validation, and deployment practices. I launched my first production web application—a custom tool for a small business—and handled the entire development lifecycle independently.",
  },
  {
    year: "2024",
    title: "Type Safety & New Languages",
    description:
      "Learned TypeScript, Python, and Lua. Embraced typed patterns and started thinking like a systems architect.",
    icon: "fa-solid fa-shield-halved",
    details:
      "As my projects grew in complexity, I needed more structure. TypeScript became essential for maintaining code quality and catching errors early. I also expanded my toolkit with Python for data processing and Lua for game development experiments. This diversity helped me understand different programming paradigms and how to choose the right tool for each job.",
  },
  {
    year: "Early 2025",
    title: "Personal Brand & Portfolio",
    description:
      "Launched my developer portfolio to showcase projects, write dev blogs, and define my online presence.",
    icon: "fa-solid fa-briefcase",
    details:
      "After building many projects, I needed a central place to showcase my work. Creating this portfolio site gave me a platform to share my journey and connect with other developers. I started writing technical blogs to document what I've learned and contribute to the developer community.",
  },
  {
    year: "Present",
    title: "Systems Programming & Beyond",
    description:
      "Diving into Go, Rust, and C. Exploring low-level systems, performance, and memory management.",
    icon: "fa-solid fa-microchip",
    details:
      "My current focus is on lower-level programming to better understand what happens beneath the abstractions. Learning Rust has been particularly eye-opening for concepts like ownership and memory safety without garbage collection. I'm also exploring OS development concepts and working on small systems programming projects to push my boundaries.",
  },
];

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (index) => {
    if (selectedEvent === index) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(index);
    }
  };

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
              <motion.div
                className={`bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedEvent === index
                    ? "border-violet-500"
                    : "hover:border-white/30"
                }`}
                onClick={() => handleEventClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center bg-violet-500 rounded text-black"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <i className={`${event.icon} text-lg`}></i>
                  </motion.div>
                  <span className="text-sm text-violet-400 font-medium">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {event.description}
                </p>

                <AnimatePresence>
                  {selectedEvent === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <p className=" text-sm leading-relaxed">
                        {event.details}
                      </p>
                      <div className="flex justify-end mt-3">
                        <span className="text-xs text-violet-400 italic">
                          Click to collapse
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {selectedEvent !== index && (
                  <motion.div
                    className="mt-3 text-xs text-violet-400 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span>Click to expand</span>
                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </motion.div>
                )}
              </motion.div>
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
            className="inline-flex items-center gap-2 rounded-sm px-6 py-2 border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-black transition-all interactive"
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
