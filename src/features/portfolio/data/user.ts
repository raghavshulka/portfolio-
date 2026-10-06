import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Himanshu",
  lastName: "Shukla",
  displayName: "Himanshu Shukla",
  username: "raghavshulka",
  gender: "male",
  pronouns: "he/him",

  bio: "Full-stack AI developer. Builds LLM agents, RAG systems and production web and mobile apps.",

  flipSentences: [
    "AI-focused Full Stack Developer",
    "AI Engineer",
    "Full Stack Developer",
  ],

  address: "Delhi, India",
  email: "aGltYW5zaHU0c2h1a2xhNGxAZ21haWwuY29t", // base64 of the address below
  emailPlain: "himanshu4shukla4l@gmail.com",
  phone: "+91 9711948121",
  resumeUrl:
    "https://drive.google.com/file/d/1jjcWxKKm5Aqn6psEtoTchy81yJAOPJn0/view?usp=sharing",
  initials: "HS",
  availability: "Available now for full-time roles and freelance or contract work",

  jobTitle: "Full-stack AI developer",
  seoTitle: "Himanshu Shukla | Full-stack AI Developer",
  seoDescription:
    "Himanshu Shukla, full-stack AI developer in Delhi, India. Builds LLM agents, RAG systems and production web and mobile apps. Open for full-time and freelance work.",

  // Vital AI contract ended Aug 2026; no current employer.
  jobs: [],

  headline: "I build products that hold up in production.",
  about: [
    "I'm a full-stack developer who builds web apps, mobile apps and the backends behind them, and adds AI where it actually helps: agents, RAG, streaming chat and guardrails.",
    "I take a product from idea to launch and keep it running, from frontend and APIs to databases and deployment. Four of my own apps are live on Google Play. Whether you're a company hiring full-time or a founder who needs something built, I'd be glad to help.",
  ],

  ogImage: "/image/og.png",
  sameAs: [
    "https://github.com/raghavshulka",
    "https://linkedin.com/in/himanshushukla121",
  ],
  timeZone: "Asia/Kolkata",

  keywords: [
    "Himanshu Shukla",
    "Himanshu Shukla portfolio",
    "raghavshulka",
    "AI engineer India",
    "full stack developer",
    "AI full stack developer",
    "LLM orchestration",
    "AI agents",
    "MCP",
    "RAG",
    "Next.js developer",
    "React Native developer",
  ],

  // Full ISO 8601 datetimes: Schema.org dateCreated/dateModified expect a
  // time component, and date-only values trip up structured-data validators.
  dateCreated: "2026-10-06T00:00:00Z",
  dateModified: "2026-10-06T00:00:00Z",
}
