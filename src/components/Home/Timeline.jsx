import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: "2022",
      title: "Discovered Programming",
      description:
        "Started my journey with HTML and CSS, building simple web pages.",
      icon: "fa-solid fa-code",
    },
    {
      year: "2022",
      title: "Learned JavaScript",
      description:
        "Quickly expanded my skills into JavaScript and began creating simple React sites.",
      icon: "fa-brands fa-js",
    },

    {
      year: "2023",
      title: "Expanded Backend Skills",
      description:
        "Mastered Node.js and MySQL. Starting to build custom Discord bots.",
      icon: "fa-solid fa-server",
    },
    {
      year: "2023",
      title: "Other Languages",
      description:
        "I started to learn other languages like Python, Java, and Go to work on other projects.",
      icon: "fa-solid fa-code",
    },
    {
      year: "2024",
      title: "First Major Project",
      description:
        "Began working on my first major project, PteroLink. Learned TypeScript.",
      icon: "fa-solid fa-rocket",
    },
    {
      year: "2025",
      title: "Portfolio Launch",
      description:
        "Created my personal brand and portfolio website showcasing my projects and skills.",
      icon: "fa-solid fa-briefcase",
    },
  ];

  return (
    <section id="timeline" className="bg-black py-32">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 border-r-2 border-t-2 border-white/10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-l-2 border-b-2 border-white/10"></div>

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white tracking-tight">
            MY JOURNEY
          </h2>
          <div className="h-[2px] bg-white w-[120px] mx-auto mt-6"></div>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 md:left-[100px] top-0 bottom-0 w-[2px] bg-white/10"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-24 last:mb-0 pl-8 md:pl-[160px] relative"
            >
              {/* Year marker */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-[100px] transform -translate-x-1/2 bg-black w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center z-10">
                <span className="text-white/90 text-base font-medium">
                  {event.year}
                </span>
              </div>

              {/* Content box */}
              <div className="bg-black border border-white/10 p-6 md:p-8 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                    <i className={`${event.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-medium text-white">
                    {event.title}
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  {event.description}
                </p>

                {/* Arrow connector */}
                <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 transform rotate-45 border-l border-b border-white/10 bg-black"></div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: timelineEvents.length * 0.2 + 0.2,
            }}
            className="mt-20 text-center"
          >
            <a
              href="#projects"
              className="border border-white/20 px-8 py-3 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>See my work</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
