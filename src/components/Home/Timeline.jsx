import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    year: "Late 2025",
    title: "Systems Programming & Beyond",
    description:
      "Diving into Go, Rust, and C. Exploring low-level systems, performance, and memory management.",
    icon: "fa-solid fa-microchip",
    details:
      "My current focus is on lower-level programming to better understand what happens beneath the abstractions. Learning Rust has been particularly eye-opening for concepts like ownership and memory safety without garbage collection. I'm also exploring OS development concepts and working on small systems programming projects to push my boundaries.",
  },
  {
    year: null,
    title: "...then I turned 16",
    description:
      "I'm only 16 years old and I've gotten myself this far. I'm completely self-taught.",
    icon: "fa-solid fa-fire",
    details:
      "No bootcamps. No degree. Just pure passion, countless hours of practice, and the refusal to quit when things get tough. Every line of code, every project, every breakthrough—all learned through trial, error, and sheer determination. At 16, I've built production apps, worked with real clients, and continue to push my boundaries every single day.",
  },
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (index) => {
    if (selectedEvent === index) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(index);
    }
  };

  const colors = [
    "bg-[#ffeb3b]",
    "bg-[#2196f3]",
    "bg-[#ff1744]",
    "bg-[#4caf50]",
    "bg-[#9c27b0]",
    "bg-white",
    "bg-[#ffeb3b]",
    "bg-[#ff1744]",
  ];

  return (
    <section id="timeline" className="bg-[#fffbf0] py-28 text-black px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-heading text-black">MY JOURNEY</h2>

        <div className="relative space-y-8 text-left">
          {timelineEvents.map((event, index) => {
            const isExpanded = selectedEvent === index;
            const bgColor = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_#000000] ${bgColor}`}
                    >
                      <i className={`${event.icon} text-xl`}></i>
                    </div>
                  </div>
                  <div
                    className={`flex-1 ${bgColor} text-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] transition-all cursor-pointer hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1`}
                    onClick={() => handleEventClick(index)}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      {event.year && (
                        <span className="text-sm font-black uppercase bg-black text-white px-3 py-1 border-4 border-black shadow-[3px_3px_0px_0px_#000000]">
                          {event.year}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-black uppercase mb-2">
                      {event.title}
                    </h3>
                    <p className="font-bold text-sm leading-relaxed mb-3">
                      {event.description}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 pt-4 border-t-4 border-black"
                        >
                          <p className="font-bold text-sm leading-relaxed mb-3">
                            {event.details}
                          </p>
                          <div className="flex justify-end">
                            <span className="text-xs font-black uppercase bg-black text-white px-2 py-1 border-2 border-black">
                              CLICK TO COLLAPSE
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isExpanded && (
                      <div className="mt-3 text-xs font-black uppercase">
                        <span className="bg-black text-white px-2 py-1 border-2 border-black">
                          CLICK TO EXPAND
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#projects"
            className="neobrutal-btn neobrutal-btn-pink inline-flex items-center gap-2"
          >
            <span>SEE MY WORK</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
