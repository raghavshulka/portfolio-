import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { ContactSection } from "@/components/contact-section"
import { HomeSection } from "@/components/site-shell"
import { ConnectGrid } from "@/features/portfolio/components/connect-grid"
import { Experiences } from "@/features/portfolio/components/experiences"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { USER } from "@/features/portfolio/data/user"
import { ProjectGrid } from "@/features/projects/components/project-card"

// Below-fold, server-rendered, code-split.
const GitHubContributions = dynamic(
  () =>
    import("@/features/portfolio/components/github-contributions").then(
      (m) => m.GitHubContributions
    ),
  { ssr: true }
)

export const metadata: Metadata = {
  title: {
    absolute: USER.seoTitle ?? USER.displayName,
  },
  description: USER.seoDescription,
  keywords: USER.keywords,
  authors: [{ name: USER.displayName, url: USER.website }],
  creator: USER.displayName,
  publisher: USER.displayName,
  alternates: {
    canonical: "/",
  },
}

export default function Page() {
  return (
    <>
      <HomeSection id="about" title="About" contentClassName="px-5 py-6">
        <p className="text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
          {USER.headline}
        </p>
        <div className="mt-3 max-w-[62ch] space-y-3 text-[15px] leading-7 text-muted-foreground sm:text-base">
          {USER.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </HomeSection>

      <HomeSection id="connect" title="Connect">
        <ConnectGrid />
      </HomeSection>

      <HomeSection id="experience" title="Experience">
        <Experiences />
      </HomeSection>

      <HomeSection id="projects" title="Projects">
        <ProjectGrid projects={PROJECTS} />
      </HomeSection>

      <HomeSection id="stack" title="Stack">
        <TechStack />
      </HomeSection>

      <HomeSection id="github" title="GitHub Activity">
        <GitHubContributions />
      </HomeSection>

      <HomeSection id="contact" title="Contact">
        <ContactSection />
      </HomeSection>
    </>
  )
}
