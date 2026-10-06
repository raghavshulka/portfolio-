import {
  AstroidIcon,
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LayoutTemplateIcon,
  ServerIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "kentron",
    companyName: "Kentron.ai",
    companyWebsite: "https://kentron.ai",
    positions: [
      {
        id: "kentron-1",
        title: "Fullstack Developer",
        employmentPeriod: {
          start: "12.2024",
          end: "05.2025",
        },
        employmentType: "Remote",
        icon: <LayoutTemplateIcon />,
        description: `- Worked across the full stack of an AI e-discovery platform, from the Next.js frontend to the Node.js APIs and data layer behind it.
- Built backend features for the AI layer: LLM calls with streaming responses, tool calling, and guardrails that validate inputs and filter unsafe or off-topic outputs.
- Owned the main user-facing interface in Next.js, using server-side rendering and static generation to improve Core Web Vitals and first load.
- Built the client data layer with TanStack Query (caching, request deduplication, background refetching), cutting data loading times by 40%.
- Built a new landing page and wrote technical documentation for the core app to speed up onboarding for new developers.`,
        skills: ["Next.js", "React", "Node.js", "TypeScript", "LLM APIs", "Guardrails", "TanStack Query"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "vital-ai",
    companyName: "Vital AI",
    // Company landing page (vitalchats.ai itself opens the product app).
    companyWebsite: "https://landing.vitalchats.ai",
    positions: [
      {
        id: "vital-ai-1",
        title: "Fullstack AI Developer",
        employmentPeriod: {
          start: "11.2025",
          end: "08.2026",
        },
        employmentType: "Contract · Remote",
        icon: <AstroidIcon />,
        description: `- Designed the AI orchestration layer across multiple LLM providers, with streaming responses, tool calling, and a real-time moderation filter for unsafe inputs and outputs.
- Shipped a Turborepo monorepo (Next.js web + API) with shared typed packages for auth, billing, and AI core. Each app deploys on its own, and remote caching made local builds 2x faster.
- Owned the system end to end across frontend, backend, data, and AI layers, turning loose product ideas into shipped features on a startup timeline.`,
        skills: [
          "LLM Orchestration",
          "Tool Calling",
          "Streaming",
          "Guardrails",
          "Turborepo",
          "Next.js",
          "TypeScript",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "fluxanix",
    companyName: "Fluxanix",
    companyWebsite: "https://mvp.fluxanix.com",
    positions: [
      {
        id: "fluxanix-1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "05.2025",
          end: "10.2025",
        },
        employmentType: "Contract · Remote",
        icon: <CodeXmlIcon />,
        description: `- Built MVPs for several startups end to end on Next.js, taking each from business requirements to a production web app.
- Worked directly with founders to iterate on features and fold user feedback into each release.
- Built both sides of the stack, from server-side infrastructure to responsive landing pages.`,
        skills: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
        isExpanded: true,
      },
    ],
  },
  {
    // Client names are under NDA, so none are listed.
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-1",
        title: "Full-Stack & AI Developer",
        employmentPeriod: {},
        employmentType: "Remote",
        icon: <BriefcaseBusinessIcon />,
        description: `- Build web and mobile products and AI features for clients, end to end.
- Client names are under NDA.`,
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "carissa",
    // No website linked: could not confirm the company's official site.
    companyName: "Carissa International",
    positions: [
      {
        id: "carissa-1",
        title: "Software Development Intern",
        employmentPeriod: {
          start: "06.2024",
          end: "08.2024",
        },
        employmentType: "Internship · Remote",
        icon: <ServerIcon />,
        description: `- Designed and deployed REST APIs in Node.js and Express.js for a real-time analytics dashboard, tuning database queries and payload structure to cut average API response time by 35%.
- Built an admin dashboard in React and shadcn/ui with custom data visualizations, so non-technical stakeholders could track business metrics without writing SQL.
- Implemented end-to-end user authentication with JSON Web Tokens (JWT) for sessions and bcrypt for password hashing.`,
        skills: ["Node.js", "Express.js", "React", "shadcn/ui", "JWT"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Dr. Akhilesh Das Gupta Institute of Technology & Management (GGSIPU)",
    positions: [
      {
        id: "education-1",
        title: "B.Tech, Artificial Intelligence and Data Science",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        employmentType: "Education · Delhi, India",
        icon: <GraduationCapIcon />,
      },
    ],
  },
]
