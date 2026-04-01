export interface AboutCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const aboutCards: AboutCard[] = [
  {
    icon: "fa-solid fa-drum",
    title: "Drumming",
    description:
      "Percussion is where I feel most alive. Working on my chops and learning new patterns every day.",
    tags: ["Fills", "Grooves", "Double Bass"],
  },
  {
    icon: "fa-solid fa-headphones",
    title: "Music Taste",
    description:
      "Dad rock, alt metal, and anything with heavy drums. Always discovering new artists.",
    tags: ["Linkin Park", "Deftones", "irvi", "PVRIS"],
  },
  {
    icon: "fa-solid fa-users",
    title: "Band Dream",
    description:
      "My biggest goal is to play in a band. Nothing beats the feeling of making music with other people.",
    tags: ["Drummer", "Live Shows", "Jamming"],
  },
  {
    icon: "fa-solid fa-tv",
    title: "Anime",
    description: "In love with stories like Darling in the FranXX.",
    tags: ["DarliFra", "Bocchi the Rock!", "Tsuki ga kirei"],
  },
  {
    icon: "fa-solid fa-gamepad",
    title: "Games",
    description:
      "Building spaghetti conveyors and losing Quick Cash games.",
    tags: ["Satisfactory", "Minecraft", "The Finals"],
  },
  {
    icon: "fa-solid fa-code",
    title: "Also a Coder",
    description:
      "Full-stack developer on the side. I build things with TypeScript, React, and Node.js.",
    tags: ["TypeScript", "React", "Node.js"],
  },
];
