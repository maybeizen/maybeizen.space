import React from "react";

const About = () => {
  const cardColors = [
    "bg-white",
    "bg-[#ffeb3b]",
    "bg-[#2196f3]",
    "bg-[#ff1744]",
    "bg-[#4caf50]",
    "bg-[#9c27b0]",
  ];

  return (
    <section id="about" className="bg-[#fffbf0] py-28 text-black px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-heading text-black">ABOUT ME</h2>

        <div className="space-y-6 text-lg font-bold leading-relaxed max-w-3xl mx-auto mb-20">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] text-left">
            <p>
              HEY, I'M MAYBEIZEN — A BACKEND DEVELOPER, MUSICIAN, AND ANIME
              ENTHUSIAST. I'VE FOUND THAT THE RHYTHM OF CODING AND THE RHYTHM OF
              MUSIC SHARE SOMETHING BEAUTIFUL: BOTH REQUIRE PRECISION,
              CREATIVITY, AND THE ABILITY TO BUILD SOMETHING GREATER THAN THE
              SUM OF THEIR PARTS.
            </p>
          </div>
          <div className="bg-[#ffeb3b] border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000000] text-left">
            <p>
              WHEN I'M NOT BEHIND THE DRUM KIT OR DIVING DEEP INTO ANIME WORLDS,
              I'M CRAFTING ROBUST BACKEND SYSTEMS THAT POWER THE WEB. EVERY
              PROJECT FEELS LIKE COMPOSING A NEW SONG — FINDING THE RIGHT TEMPO,
              BUILDING THE PERFECT STRUCTURE, AND MAKING SURE EVERY COMPONENT
              WORKS IN HARMONY.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`${
                cardColors[idx % cardColors.length]
              } border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000] text-left transition-all hover:shadow-[12px_12px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
                  <i className={`text-lg ${card.icon}`}></i>
                </div>
                <h4 className="text-black text-xl font-black uppercase">
                  {card.title}
                </h4>
              </div>
              <p className="text-black font-bold text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {card.tags.map((tag, i) => (
                  <span key={i} className="neobrutal-tag">
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
    tags: ["Satisfactory", "Call of Duty", "The Finals"],
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
