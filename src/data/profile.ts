const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  firstName: "Kishan",
  fullName: "Kishan Jangde",
  greeting: "Hi, I'm Kishan Jangde",
  role: "Software Development Engineer",
  company: "District by Zomato",
  location: "New Delhi, India",
  roles: [
    "iOS Engineer",
    "Full-stack Engineer",
    "React Native Developer",
    "Competitive Programmer",
  ],
  tagline:
    "I build reliable, user-facing products and like understanding systems end to end, from mobile apps to backend logic, APIs and performance.",
  about: [
    "I'm a Software Engineer at District by Zomato who enjoys building reliable, user-facing products and understanding systems end to end. My experience spans mobile development, full-stack engineering, system-level debugging, data-driven projects and algorithmic problem solving.",
    "I've worked across iOS, React Native, Node.js and many backend integrations, so I pick up new technologies quickly and contribute wherever the product needs me. In my current role I focus on practical engineering: fixing production issues, improving app performance, integrating third-party services and shipping features used by thousands of users.",
    "Before industry, I explored competitive programming, ML/data science and algorithm-heavy academic projects at IIT Delhi. That breadth strengthened my fundamentals and taught me to reason about complex systems and data flows. I like clean, maintainable code, owning problems, debugging deeply and shipping stable features in fast-moving teams.",
  ],
  highlights: [
    { label: "Currently", value: "SDE @ District by Zomato" },
    { label: "Education", value: "IIT Delhi" },
    { label: "Focus", value: "iOS · Full-stack · Performance" },
    { label: "Based in", value: "New Delhi, India" },
  ],
  avatar: `${base}/profile.jpg`,
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

// Add dates in `period` (e.g. "2023 — 2024") to show them on the timeline.
export const timeline: TimelineItem[] = [
  {
    kind: "work",
    title: "Software Development Engineer",
    org: "District by Zomato",
    period: "Present",
    points: [
      "Ship iOS features used by thousands of users.",
      "Fix production issues and improve app performance.",
      "Integrate third-party services and backend APIs.",
    ],
    tags: ["iOS", "Swift", "Performance", "Integrations"],
  },
  {
    kind: "work",
    title: "Software Development Engineer",
    org: "NowFloats",
    points: [
      "Built mobile and full-stack features across iOS, React Native and Node.js.",
      "Worked across layers of the product, from APIs to native UI.",
    ],
    tags: ["Swift", "UIKit", "React Native", "Node.js"],
  },
  {
    kind: "education",
    title: "Indian Institute of Technology",
    org: "IIT Delhi",
    points: [
      "Explored competitive programming, ML/data science and algorithm-heavy academic projects.",
      "Research on graph-theory-based resiliency for power distribution networks.",
      "Competed regularly on Codeforces, CodeChef and AtCoder.",
    ],
    tags: ["Algorithms", "Machine Learning", "Data Science"],
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
