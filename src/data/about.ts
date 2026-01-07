export interface AboutCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const aboutCards: AboutCard[] = [
  {
    icon: "fa-solid fa-code",
    title: "Full-Stack",
    description:
      "Building full-stack systems and APIs with scalable architecture.",
    tags: ["Express.js", "Next.js", "PostgreSQL"],
  },
  {
    icon: "fa-solid fa-tv",
    title: "Anime",
    description: "In love with stories like Darling in the FranXX.",
    tags: ["DarliFra", "Bocchi the Rock!", "Tsuki ga kirei"],
  },
  {
    icon: "fa-solid fa-database",
    title: "Systems",
    description: "Exploring database structures, protection, and replication.",
    tags: ["MySQL", "MongoDB", "Docker"],
  },
  {
    icon: "fa-solid fa-gamepad",
    title: "Games",
    description:
      "Building spaghetti conveyors and losing Quick Cash games.",
    tags: ["Satisfactory", "Minecraft", "The Finals"],
  },
  {
    icon: "fa-solid fa-music",
    title: "Music",
    description:
      "Drummer and dad rock enthusiast. Always listening to music.",
    tags: ["Linkin Park", "Deftones", "irvi", "PVRIS"],
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Always Learning",
    description:
      "Exploring new technologies and software every day.",
    tags: ["GoLang", "C", "Rust"],
  },
];
