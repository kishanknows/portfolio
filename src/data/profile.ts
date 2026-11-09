const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  firstName: "Kishan",
  greeting: "Hi, I'm Kishan",
  role: "Software Development Engineer",
  company: "NowFloats",
  roles: [
    "iOS Engineer",
    "Backend Developer",
    "Go & Microservices",
    "Competitive Programmer",
  ],
  tagline:
    "I build native Apple apps, scalable backend services and fast web experiences. I care about clean code, thoughtful UI and solving real problems.",
  about: [
    "I'm a Software Development Engineer at NowFloats and an IIT Delhi alum. I started out building iOS apps with Swift and UIKit, and today I work across the stack: native Apple apps, Go microservices, Spring Boot APIs and React-based frontends.",
    "Competitive programming taught me to think in algorithms. I've solved problems across Codeforces, LeetCode and CodeChef, and I like turning that rigour into products people enjoy using. I'm also certified in Machine Learning and Data Science, and I like building small tools that automate everyday annoyances.",
  ],
  highlights: [
    { label: "Currently", value: "SDE @ NowFloats" },
    { label: "Education", value: "IIT Delhi" },
    { label: "Focus", value: "iOS · Backend · Systems" },
    { label: "Certified", value: "ML & Data Science" },
  ],
  avatar: `${base}/avatar.jpeg`,
  email: "kishanknows@gmail.com",
  social: {
    github: "https://github.com/kishanknows",
    linkedin: "https://linkedin.com/in/kishanknows",
    twitter: "https://twitter.com/kishanknows",
  },
};

export type TimelineItem = {
  kind: "work" | "education";
  title: string;
  org: string;
  period?: string;
  points: string[];
  tags: string[];
};

// Add dates in `period` (e.g. "2023 — Present") to show them on the timeline.
export const timeline: TimelineItem[] = [
  {
    kind: "work",
    title: "Software Development Engineer",
    org: "NowFloats",
    period: "Present",
    points: [
      "Building iOS experiences with Swift, UIKit and Xcode.",
      "Working across the product, from APIs to native UI.",
    ],
    tags: ["Swift", "UIKit", "Xcode", "REST APIs"],
  },
  {
    kind: "education",
    title: "Indian Institute of Technology",
    org: "IIT Delhi",
    points: [
      "Research on graph-theory-based resiliency for power distribution networks.",
      "Projects in machine learning, data structures and blockchain (DS-Coin).",
      "Competed regularly on Codeforces, CodeChef and AtCoder.",
    ],
    tags: ["Algorithms", "Graph Theory", "Machine Learning"],
  },
];

export const skillGroups = [
  {
    title: "Mobile & Apple",
    items: ["Swift", "UIKit", "Xcode", "macOS", "React Native"],
  },
  {
    title: "Backend & Systems",
    items: ["Go", "Java", "Spring Boot", "Node.js", "Express", "Rust", "Microservices", "JWT Auth"],
  },
  {
    title: "Web",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "Firebase", "Docker", "GitHub Actions"],
  },
  {
    title: "Problem Solving & ML",
    items: ["C++", "Python", "Algorithms", "Pandas", "MATLAB", "Machine Learning"],
  },
];
