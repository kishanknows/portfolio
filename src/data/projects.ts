export type Category = "Backend" | "Apple" | "Mobile" | "Tools" | "Algorithms & ML";

export type Project = {
  name: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  category: Category;
  featured?: boolean;
  stars?: number;
  year: number;
};

const gh = (repo: string) => `https://github.com/kishanknows/${repo}`;

export const projects: Project[] = [
  {
    name: "ecom-microservices",
    title: "E-commerce Microservices Platform",
    description:
      "A distributed commerce backend split into Go services for auth, products, orders and payments, alongside a companion Swift e-commerce app.",
    url: gh("Ecom-backend"),
    tech: ["Go", "Microservices", "Swift", "REST"],
    category: "Backend",
    featured: true,
    year: 2026,
  },
  {
    name: "taskizy",
    title: "Taskizy",
    description:
      "An open-source macOS task manager that lives in the menu bar, so your to-dos are always one click away.",
    url: gh("taskizy"),
    tech: ["Swift", "macOS", "Menu bar"],
    category: "Apple",
    featured: true,
    year: 2025,
  },
  {
    name: "movies-backend",
    title: "Movies API",
    description:
      "Spring Boot REST API for movie management with PostgreSQL, JWT authentication and Docker support, built on Java 17, Spring Security and Spring Data JPA.",
    url: gh("movies-backend"),
    tech: ["Java 17", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
    category: "Backend",
    featured: true,
    year: 2026,
  },
  {
    name: "yt-transcriptor",
    title: "yt-transcriptor",
    description:
      "A Rust tool that extracts and generates transcripts from YouTube videos, so subtitles and text are easy to get and manage.",
    url: gh("yt-transcriptor"),
    tech: ["Rust", "CLI", "Speech-to-text"],
    category: "Tools",
    featured: true,
    year: 2025,
  },
  {
    name: "url-shortener",
    title: "URL Shortener",
    description:
      "A fast, reliable link shortener service in Go with usage analytics and an API you can plug into your own workflows.",
    url: gh("url-shortener"),
    tech: ["Go", "REST", "Analytics"],
    category: "Backend",
    year: 2026,
  },
  {
    name: "ds-coin",
    title: "DS-Coin Cryptocurrency",
    description:
      "A cryptocurrency built from scratch to demonstrate blockchain fundamentals: a custom chain, consensus, P2P networking, wallets and transactions.",
    url: gh("DS-Coin-Cryptocurrency"),
    tech: ["Java", "Blockchain", "Cryptography"],
    category: "Algorithms & ML",
    year: 2024,
  },
  {
    name: "graph-pdn",
    title: "Graph-based Resiliency for PDN",
    description:
      "Research project quantifying the operational resiliency of power distribution networks using graph theory.",
    url: gh("graph-based-resiliency-for-PDN"),
    tech: ["Graph Theory", "Research", "HTML"],
    category: "Algorithms & ML",
    stars: 4,
    year: 2024,
  },
  {
    name: "animetree",
    title: "AnimeTree",
    description:
      "An anime guide and tracker app with a React Native client and an Express + PostgreSQL backend.",
    url: gh("AnimeTree"),
    tech: ["React Native", "Express", "Node.js", "PostgreSQL"],
    category: "Mobile",
    year: 2024,
  },
  {
    name: "codeforces-customizer",
    title: "Codeforces Customizer",
    description:
      "Browser extension that hides difficulty ratings and solve counts on unsolved problems, so you can practise without bias.",
    url: gh("codeforces-customizer"),
    tech: ["JavaScript", "Chrome Extension"],
    category: "Tools",
    year: 2024,
  },
  {
    name: "internshala-automation",
    title: "Internshala Automation",
    description:
      "Python + Selenium script that applies to internships on internshala.com automatically.",
    url: gh("internshala-automation"),
    tech: ["Python", "Selenium"],
    category: "Tools",
    stars: 3,
    year: 2023,
  },
  {
    name: "picscroll",
    title: "PicScroll",
    description:
      "A picture-sharing social app in React Native with Firebase for auth, storage and database, plus curated cat and dog feeds.",
    url: gh("picscroll"),
    tech: ["React Native", "TypeScript", "Firebase"],
    category: "Mobile",
    year: 2023,
  },
  {
    name: "weathering",
    title: "Weathering",
    description:
      "A React Native weather app that uses OpenWeatherMap geocoding and forecasts, with Google Maps for location.",
    url: gh("weathering"),
    tech: ["React Native", "TypeScript", "Maps API"],
    category: "Mobile",
    year: 2023,
  },
  {
    name: "moodle-captcha-solver",
    title: "Moodle Captcha Solver",
    description:
      "Chrome extension that solves the captcha on IIT Delhi's internal Moodle server automatically.",
    url: gh("moodle-captcha-solver"),
    tech: ["JavaScript", "Chrome Extension"],
    category: "Tools",
    year: 2023,
  },
  {
    name: "editour",
    title: "Editour",
    description: "A video editing app built with React Native and FFmpeg.",
    url: gh("Editour"),
    tech: ["React Native", "FFmpeg", "Java"],
    category: "Mobile",
    year: 2022,
  },
  {
    name: "nearby-restaurants",
    title: "Nearby Restaurants Search",
    description:
      "Answers 'restaurants near me' range queries with 2-D binary search trees: O(n log n) preprocessing and O(m + log² n) per query.",
    url: gh("Nearby-Restaurants-Searching"),
    tech: ["Python", "Data Structures"],
    category: "Algorithms & ML",
    year: 2022,
  },
  {
    name: "cricket-analysis",
    title: "Indian Cricket Performance Analysis",
    description:
      "Analysis of the Indian men's and women's teams across formats and opponents using all-time data, pandas and matplotlib.",
    url: gh("Indian-Cricket-Team-Performance-Analysis"),
    tech: ["Python", "Pandas", "Matplotlib"],
    category: "Algorithms & ML",
    year: 2022,
  },
  {
    name: "ml-projects",
    title: "Machine Learning Projects",
    description: "A collection of machine learning projects implemented in MATLAB.",
    url: gh("Machine-Learning-Projects"),
    tech: ["MATLAB", "Machine Learning"],
    category: "Algorithms & ML",
    year: 2022,
  },
  {
    name: "competitive-programming",
    title: "Competitive Programming",
    description:
      "Solutions to contests on Codeforces, CodeChef and AtCoder, plus selected LeetCode problems.",
    url: gh("Competitive-Programming"),
    tech: ["C++", "Algorithms"],
    category: "Algorithms & ML",
    year: 2025,
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "Backend",
  "Apple",
  "Mobile",
  "Tools",
  "Algorithms & ML",
];
