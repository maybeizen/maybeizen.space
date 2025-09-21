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
            Hey, I'm maybeizen — a backend developer, musician, and anime
            enthusiast. I've found that the rhythm of coding and the rhythm of
            music share something beautiful: both require precision, creativity,
            and the ability to build something greater than the sum of their
            parts.
          </p>
          <p>
            When I'm not behind the drum kit or diving deep into anime worlds,
            I'm crafting robust backend systems that power the web. Every
            project feels like composing a new song — finding the right tempo,
            building the perfect structure, and making sure every component
            works in harmony.
          </p>
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
    tags: ["DarliFra", "Bocchi the Rock!", "Tsukigakirei"],
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
    description:
      "Drummer and coding enthusiast — always coding to a soundtrack. Music fuels the creative flow.",
    tags: ["Linkin Park", "Deftones", "Mudvayne"],
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Always Learning",
    description:
      "Exploring new backend technologies and ways to grow every day.",
    tags: ["GoLang", "C", "APIs"],
  },
];

export default About;
