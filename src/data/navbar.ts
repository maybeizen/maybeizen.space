export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Songs", href: "#songs" },
  {
    name: "GitHub",
    href: "https://github.com/maybeizen",
    icon: "fa-brands fa-github",
    external: true,
  },
];
