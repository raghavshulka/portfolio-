"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { TechLogo } from "@/components/tech-logo"
import type { Project } from "@/features/portfolio/types/projects"
import { useIntentPrefetch } from "@/hooks/use-intent-prefetch"
import { cn } from "@/lib/utils"

type Status = { label: string; dot: string }

function getStatus(project: Project): Status {
  if (project.badge === "In progress") {
    return { label: "Building", dot: "bg-amber-500" }
  }
  if (project.links.live) return { label: "Live", dot: "bg-emerald-500" }
  return { label: "Source", dot: "bg-muted-foreground/60" }
}

const FOOTER_LINK =
  "flex flex-1 items-center justify-center gap-1.5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"

export function ProjectCard({
  project,
  eager,
}: {
  project: Project
  eager?: boolean
}) {
  const href = `/projects/${project.id}`
  const intentPrefetch = useIntentPrefetch(href)
  const status = getStatus(project)
  const tags = project.coverSkills ?? project.skills.slice(0, 3)

  const rememberScroll = () => {
    sessionStorage.setItem("projects_scroll_y", String(window.scrollY))
  }

  return (
    <article
      id={`project-${project.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-200 hover:border-foreground/15"
    >
      <Link
        href={href}
        prefetch={false}
        {...intentPrefetch}
        onClick={rememberScroll}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:[&_.card-title]:underline"
      >
        <div className="p-2 pb-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-muted">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 640px) 340px, 92vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              quality={85}
              priority={eager}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 px-3.5 pt-3.5 pb-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="card-title text-[17px] leading-snug font-semibold tracking-tight text-foreground">
              {project.title.split(" - ")[0]}
            </h3>
            <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
              <span className={cn("size-1.5 rounded-full", status.dot)} />
              {status.label}
            </span>
          </div>
          <p className="-mt-1 text-xs text-muted-foreground">
            {project.title.split(" - ")[1] ?? project.category}
          </p>
          <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
            {project.tagline}
          </p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-line px-1.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>

      <div className="mx-3.5 flex divide-x divide-line border-t border-line">
        {project.links.live ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className={FOOTER_LINK}
          >
            Live link
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        ) : (
          <Link href={href} prefetch={false} className={FOOTER_LINK}>
            Details
          </Link>
        )}
        {project.links.repo ? (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={FOOTER_LINK}
          >
            GitHub
            <TechLogo name="github" />
          </a>
        ) : (
          <Link href={href} prefetch={false} className={FOOTER_LINK}>
            Details
          </Link>
        )}
      </div>
    </article>
  )
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} eager={index < 2} />
      ))}
    </div>
  )
}
