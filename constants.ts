import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export const COLORS = {
  dark: "#914F1E",
  clay: "#DEAC80",
  sand: "#F7DCB9",
  sage: "#B5C18E",
};

export const HEADSHOTS = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers, featuring real-time data visualization using D3.js and sales forecasting models.",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "https://picsum.photos/id/1/800/600",
  },
  {
    id: 2,
    title: "EcoTrack Mobile App",
    description:
      "A cross-platform mobile application helping users track their carbon footprint with gamified challenges and community leaderboards.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://picsum.photos/id/20/800/600",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Web application utilizing large language models to assist copywriters in generating SEO-optimized blog posts and marketing copy.",
    tags: ["Next.js", "OpenAI API", "Tailwind"],
    image: "https://picsum.photos/id/24/800/600",
  },
  {
    id: 4,
    title: "Financial Portfolio Tracker",
    description:
      "Secure platform for tracking stock investments, crypto assets, and savings with automated reporting and tax estimation tools.",
    tags: ["Vue.js", "Python", "PostgreSQL"],
    image: "https://picsum.photos/id/26/800/600",
  },
];

export const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/benthebenno", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/benjamin-rappoport-70baa426b/",
    label: "LinkedIn",
  },
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "ben.rappoport@gmail.com", label: "Email" },
];
