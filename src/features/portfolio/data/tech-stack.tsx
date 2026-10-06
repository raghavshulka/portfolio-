import type { TechStack } from "../types/tech-stack"

// Brand icons come from the local sprite at /icons/tech-stack-v1.svg (Simple Icons paths).
// Skills without a brand mark render as text-only badges.
export const TECH_STACK: TechStack[] = [
  {
    key: "ai-agents",
    title: "AI Agents",
    categories: ["AI Engineering"],
  },
  {
    key: "agent-harnesses",
    title: "Agent Harnesses",
    categories: ["AI Engineering"],
  },
  {
    key: "mcp",
    title: "MCP",
    href: "https://modelcontextprotocol.io/",
    categories: ["AI Engineering"],
  },
  {
    key: "tool-calling",
    title: "Tool Calling",
    categories: ["AI Engineering"],
  },
  {
    key: "multi-llm",
    title: "Multi-LLM Orchestration",
    categories: ["AI Engineering"],
  },
  {
    key: "rag",
    title: "RAG",
    categories: ["AI Engineering"],
  },
  {
    key: "guardrails",
    title: "Guardrails",
    categories: ["AI Engineering"],
  },
  {
    key: "langchain",
    title: "LangChain",
    href: "https://www.langchain.com/",
    iconId: "langchain",
    categories: ["AI Engineering"],
  },
  {
    key: "ai-sdk",
    title: "Vercel AI SDK",
    href: "https://ai-sdk.dev/",
    categories: ["AI Engineering"],
  },
  {
    key: "pgvector",
    title: "pgvector",
    href: "https://github.com/pgvector/pgvector",
    categories: ["AI Engineering"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    iconId: "typescript",
    categories: ["Languages"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    iconId: "js",
    categories: ["Languages"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    iconId: "python",
    categories: ["Languages"],
  },
  {
    key: "sql",
    title: "SQL",
    categories: ["Languages"],
  },
  {
    key: "cplusplus",
    title: "C++",
    href: "https://isocpp.org/",
    iconId: "cplusplus",
    categories: ["Languages"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    iconId: "react",
    categories: ["Frontend"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    iconId: "nextjs2",
    categories: ["Frontend"],
  },
  {
    key: "react-native",
    title: "React Native",
    href: "https://reactnative.dev/",
    iconId: "react",
    categories: ["Frontend"],
  },
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["Frontend"],
  },
  {
    key: "tanstack-query",
    title: "TanStack Query",
    href: "https://tanstack.com/query",
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    iconId: "tailwindcss",
    categories: ["Frontend"],
  },
  {
    key: "shadcn",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Frontend"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    iconId: "nodejs",
    categories: ["Backend & Infra"],
  },
  {
    key: "express",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Backend & Infra"],
  },
  {
    key: "rest",
    title: "REST APIs",
    categories: ["Backend & Infra"],
  },
  {
    key: "prisma",
    title: "Prisma",
    href: "https://www.prisma.io/",
    categories: ["Backend & Infra"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    iconId: "postgresql",
    categories: ["Backend & Infra"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Backend & Infra"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    iconId: "docker",
    categories: ["Backend & Infra"],
  },
  {
    key: "cicd",
    title: "CI/CD",
    categories: ["Backend & Infra"],
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Backend & Infra"],
  },
]

export const STACK_CATEGORIES = ["AI Engineering", "Languages", "Frontend", "Backend & Infra"]
