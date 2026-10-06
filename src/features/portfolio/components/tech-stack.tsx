"use client"

import { TechLogo } from "@/components/tech-logo"

import { STACK_CATEGORIES, TECH_STACK } from "../data/tech-stack"
import type { TechStack as TechStackType } from "../types/tech-stack"

const BADGE_CLASS =
  "flex h-(--badge-height) items-center justify-center gap-1.5 rounded-full bg-muted/50 px-2.5 font-mono text-xs text-foreground inset-ring-1 inset-ring-border [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80"

function TechIcon({ tech }: { tech: TechStackType }) {
  if (tech.logo) return <TechLogo name={tech.logo} />
  return tech.icon ? <>{tech.icon}</> : null
}

export function TechStack() {
  const grouped = groupByCategory(TECH_STACK)

  return (
    <div>
      <div className="relative [--badge-height:--spacing(7)] [--col-left-width:--spacing(52)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
          aria-hidden
        />

        {STACK_CATEGORIES.map((category, index) => {
          const items = grouped[category]
          if (!items || items.length === 0) return null

          return (
            <div
              key={category}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              <div className="pl-5 text-base/[--badge-height] text-foreground">
                <span className="mr-1.5 font-mono text-muted-foreground select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category}
              </div>

              <ul className="flex flex-wrap gap-2 px-5">
                {items.map((tech) => (
                  <li key={tech.key} className="flex">
                    {tech.href ? (
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener"
                        className={`${BADGE_CLASS} transition-colors hover:bg-muted/90`}
                      >
                        <TechIcon tech={tech} />
                        {tech.title}
                      </a>
                    ) : (
                      <span className={BADGE_CLASS}>
                        <TechIcon tech={tech} />
                        {tech.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function groupByCategory(
  items: TechStackType[]
): Record<string, TechStackType[]> {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      ;(acc[category] ??= []).push(item)
    }
    return acc
  }, {})
}
