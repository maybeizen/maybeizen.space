export interface AboutCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const aboutCards: AboutCard[] = [
  {
    icon: "fa-solid fa-code",
    title: "Full-stack Development",
    description:
      "Building robust full-stack systems and APIs with clean, scalable architecture.",
    tags: ["Express.js", "Next.js", "PostgreSQL"],
  },
  {
    icon: "fa-solid fa-tv",
    title: "Anime Fan",
    description: "Inspired by stories like Darling in the Franxx and Horimiya.",
    tags: ["DarliFra", "Bocchi the Rock!", "Tsuki ga kirei"],
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
    tags: ["Linkin Park", "Deftones", "irvi", "PVRIS"],
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Always Learning",
    description:
      "Exploring new backend technologies and ways to grow every day.",
    tags: ["GoLang", "C", "APIs"],
  },
];
