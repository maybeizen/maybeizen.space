import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black py-28 text-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          About Me
        </h2>

        <div className="space-y-6 text-base leading-relaxed max-w-3xl mx-auto mb-16">
          <p>
            Hey, I'm maybeizen — a backend developer and anime lover. I find
            that the emotional depth and creativity in anime directly inspire
            the way I solve problems and build robust systems.
          </p>
          <p>
            Every project I tackle is like crafting a new world, much like the
            ones in my favorite shows. I thrive on learning and pushing my
            skills with technologies that power the web's infrastructure.
          </p>
        </div>

        {/* Backend Focus Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-violet-500/20 rounded">
                <i className="fa-solid fa-server text-violet-400 text-lg"></i>
              </div>
              <h3 className="text-xl font-medium text-violet-400">
                Backend Focus
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              After starting my journey with frontend development, I've
              transitioned to focusing primarily on backend systems. I
              discovered that I'm more passionate about building the
              infrastructure that powers applications rather than just the
              interfaces.
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              My experience with frontend technologies has given me valuable
              insights into how APIs should be designed and how backend systems
              can better serve frontend applications. I now specialize in
              building scalable APIs, database design, and server-side
              applications using technologies like Laravel, Node.js, and
              TypeScript.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-6 rounded-xl text-left"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    icon: "fa-solid fa-code",
    title: "Backend Development",
    description:
      "Building robust APIs and server-side applications since 2022.",
    tags: ["Laravel", "Node.js", "TypeScript"],
  },
  {
    icon: "fa-solid fa-tv",
    title: "Anime Fan",
    description: "Inspired by stories like Darling in the Franxx and Horimiya.",
    tags: ["DarliFra", "Horimiya", "Tsukigakirei"],
  },
  {
    icon: "fa-solid fa-database",
    title: "System Architecture",
    description: "Designing scalable backend systems and database structures.",
    tags: ["MySQL", "MongoDB", "Docker"],
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
      "Exploring new backend technologies and ways to grow every day.",
    tags: ["GoLang", "Python", "APIs"],
  },
];

export default About;
