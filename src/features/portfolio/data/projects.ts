import type { Project } from "../types/projects"

const PLAY = "https://play.google.com/store/apps/details?id="

export const PROJECTS: Project[] = [
  {
    id: "aidraw",
    title: "AIDraw - Real-time Collaborative Drawing",
    seoTitle: "AIDraw - Real-time Collaborative Whiteboard",
    category: "Full Stack / Real-time",
    tagline:
      "A collaborative whiteboard inspired by Excalidraw. Open a room, share its ID, and draw with other people in real time, with chat beside the canvas.",
    seoDescription:
      "AIDraw is a real-time collaborative drawing platform built as a Turborepo monorepo with Next.js, a Node.js API, a WebSocket server, Prisma and PostgreSQL.",
    year: "2025",
    image: "/projects/aidraw.webp",
    period: { start: "2025" },
    link: "https://ai-draw-web.vercel.app",
    links: {
      live: "https://ai-draw-web.vercel.app",
      repo: "https://github.com/raghavshulka/ai-draw",
    },
    skills: [
      "Turborepo",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
    ],
    coverSkills: ["Turborepo", "WebSocket", "Prisma"],
    features: [
      "Turborepo monorepo with three apps: the Next.js web frontend, a Node.js backend API, and a dedicated WebSocket server for live collaboration.",
      "Several people can draw, sketch, and diagram on the same canvas at once; strokes are relayed over WebSocket as they are drawn.",
      "Rooms are created from a dashboard and shared by ID, with a chat panel next to the canvas.",
      "PostgreSQL schema in Prisma for drawing data, user sessions, and workspace management across the services.",
    ],
  },
  {
    id: "hexar-labs",
    title: "Hexar Labs - Calx, StripWise, Pawfolio & Dram Vault",
    seoTitle: "Hexar Labs - Four Android Apps on Google Play",
    category: "Mobile / AI",
    tagline:
      "Four production mobile apps live on Google Play, each with its own Node.js API and PostgreSQL database, built and maintained by me.",
    seoDescription:
      "Hexar Labs ships Calx, StripWise, Pawfolio and Dram Vault on Google Play: Expo and React Native apps with Node.js, Prisma, PostgreSQL, Clerk, RevenueCat and the Vercel AI SDK.",
    year: "2026",
    image: "/projects/hexar-labs.webp",
    period: { start: "2026" },
    link: "https://hexar.dev",
    links: {
      live: "https://hexar.dev",
    },
    skills: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "RevenueCat",
      "Vercel AI SDK",
      "OpenAI",
    ],
    coverSkills: ["React Native", "Vision AI", "RevenueCat"],
    features: [
      "Calx turns a meal photo into a calorie and macro breakdown, grounded against USDA nutrition data.",
      "StripWise reads a photo of a pool test strip into logged water chemistry and dosing.",
      "Pawfolio and Dram Vault run on the same production stack as the other two.",
    ],
    collaboration: {
      ownership: "Own product",
      label: "Solo",
      team: "Hexar Labs (hexar.dev)",
      role: "Sole engineer",
      contributions: [
        "Designed, built, and shipped four cross-platform mobile apps to Google Play, each backed by its own Node.js/Express API and PostgreSQL database, and maintain all four in production.",
        "Built two vision-AI pipelines on the Vercel AI SDK with OpenAI models (Calx and StripWise).",
        "Built one stack reused across all four apps: Prisma schemas, Clerk authentication, RevenueCat subscriptions with free and Pro tiers, push notifications, API rate limiting, and Play Console releases from closed testing to production.",
      ],
    },
    notes: `On Google Play:

- [Calx: AI Photo Calorie Counter](${PLAY}com.Hexar.calai)
- [StripWise](${PLAY}com.hexar.stripwise)
- [Pawfolio](${PLAY}com.hexar.pethealth)
- [Dram Vault](${PLAY}com.hexar.dramvault)`,
    badge: "Live on Google Play",
  },
  {
    id: "bolt-vibe",
    title: "Bolt Vibe - AI Code Generation IDE",
    seoTitle: "Bolt Vibe - AI Code Generation in the Browser",
    category: "AI / Developer Tools",
    tagline:
      "Describe a web project in plain language and get a working codebase, with a file explorer, editor, and live preview running in the browser.",
    seoDescription:
      "Bolt Vibe turns natural-language prompts into full-stack web projects, running them in the browser with the WebContainer API and the Vercel AI SDK.",
    year: "2025",
    image: "/projects/bolt-vibe.webp",
    period: { start: "2025" },
    // Live site dropped (checked 2026-10-06): generation fails with a 401 from /api/stacktemplate.
    link: "https://github.com/raghavshulka/bolt-vibe",
    links: {
      repo: "https://github.com/raghavshulka/bolt-vibe",
    },
    skills: [
      "Next.js",
      "TypeScript",
      "WebContainer API",
      "Vercel AI SDK",
      "Groq",
      "Prisma",
    ],
    coverSkills: ["WebContainer", "AI SDK", "Next.js"],
    features: [
      "Turns a natural-language prompt into a full-stack web project, for quick prototyping without leaving the browser.",
      "In-browser development environment on the WebContainer API, with a live-updating preview.",
      "Vercel AI SDK with a Groq model for code suggestions, file generation, and scaffolding from templates such as React and Next.js.",
    ],
  },
  {
    id: "medai",
    title: "MedAI - Medical AI Platform Foundation",
    seoTitle: "MedAI - Turborepo Medical AI Platform",
    category: "AI / Backend",
    tagline:
      "The foundation for a medical AI platform: a Turborepo monorepo with an Express API on Bun, a job worker, auth with 2FA, and a multi-provider AI package.",
    year: "2026",
    image: "/projects/medai.webp",
    period: { start: "2026" },
    link: "https://github.com/raghavshulka/medai",
    links: {
      repo: "https://github.com/raghavshulka/medai",
    },
    skills: [
      "Turborepo",
      "Express 5",
      "Bun",
      "Next.js 16",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Better Auth",
      "Vercel AI SDK",
    ],
    coverSkills: ["Turborepo", "BullMQ", "AI SDK"],
    features: [
      "pnpm and Turborepo monorepo: an Express 5 API and BullMQ worker on the Bun runtime, a Next.js 16 frontend, and Mintlify docs.",
      "Shared packages for config, logging, database, auth, queue, AI, and PDF generation.",
      "Better Auth with email and password, TOTP two-factor auth, and bearer and JWT plugins.",
      "AI package on the Vercel AI SDK with both Anthropic (Claude) and OpenAI providers.",
    ],
    badge: "In progress",
  },
  {
    id: "multiplayer-quiz",
    title: "Multiplayer Quiz",
    seoTitle: "Multiplayer Quiz - Real-time Quiz Rooms",
    category: "Full Stack / Real-time",
    tagline:
      "Create a room, invite people, and play a quiz together in real time, with quiz creation, profiles, and a leaderboard.",
    year: "2024",
    image: "/projects/multiplayer-quiz.webp",
    period: { start: "2024" },
    // Live site dropped (checked 2026-10-06): the Render backend is suspended (503).
    link: "https://github.com/raghavshulka/multi-player-quiz",
    links: {
      repo: "https://github.com/raghavshulka/multi-player-quiz",
    },
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    coverSkills: ["Socket.IO", "React", "MongoDB"],
    features: [
      "Rooms that several players join and compete in, with live updates over Socket.IO.",
      "Quiz creation, so players can write their own questions.",
      "Leaderboard and player profile pages.",
    ],
  },
]

export const PROJECTS_BY_ID = PROJECTS.reduce<Record<string, Project>>(
  (accumulator, project) => {
    accumulator[project.id] = project
    return accumulator
  },
  {}
)
