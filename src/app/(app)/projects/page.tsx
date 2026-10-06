import Script from "next/script"

import { HomeSection } from "@/components/site-shell"
import { SITE_INFO } from "@/config/site"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { ProjectsPageContent } from "@/features/projects/components/projects-page-content"
import { createPageMetadata } from "@/lib/seo"

const title = "Projects"
const description =
  "Projects by Himanshu Shukla: AI products, mobile apps on Google Play, and full stack web apps."
const keywords = [
  "Himanshu Shukla projects",
  "raghavshulka projects",
  "AI projects",
  "mobile app projects",
  "full-stack development projects",
]

function getProjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_INFO.url}/projects#collection`,
    url: `${SITE_INFO.url}/projects`,
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${SITE_INFO.url}/#website`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_INFO.url}/projects/${project.id}`,
        name: project.title,
        description: project.seoDescription ?? project.tagline,
      })),
    },
    author: {
      "@id": `${SITE_INFO.url}/#person`,
    },
  }
}

export const metadata = createPageMetadata({
  title,
  description,
  path: "/projects",
  keywords,
})

export default function ProjectsPage() {
  return (
    <>
      <Script
        id="projects-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProjectsJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <HomeSection id="projects" title="Projects">
        <ProjectsPageContent projects={PROJECTS} />
      </HomeSection>
    </>
  )
}
