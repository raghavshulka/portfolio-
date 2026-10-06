import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Himanshu",
  lastName: "Shukla",
  displayName: "Himanshu Shukla",
  username: "raghavshulka",
  gender: "male",
  pronouns: "he/him",

  bio: "AI-focused full stack developer. I reason from first principles, build end to end, and ship to production.",

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

  jobTitle: "AI-focused Full Stack Developer",
  seoTitle: "Himanshu Shukla | AI-focused Full Stack Developer",
  seoDescription:
    "Himanshu Shukla, AI-focused full stack developer. LLM orchestration, agents, RAG and MCP, plus the Next.js, Node.js and React Native products around them.",

  // Vital AI contract ended Aug 2026; no current employer.
  jobs: [],

  about: `I'm an engineer and a problem solver. I start from first principles: work out what the problem actually is and what constrains it, then build up from there instead of reaching for the usual pattern. I build end to end, across frontend, backend, data and the AI layer, and I ship to production. Most of my recent work is LLM systems: orchestration across providers, streaming, tool calling, agents, RAG and guardrails, plus the web and mobile products around them.`,

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
