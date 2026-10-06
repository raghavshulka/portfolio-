import { ArrowUpRight, FileText, Phone, Send } from "lucide-react"

import { TechLogo } from "@/components/tech-logo"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

const LINKS = [
  { title: "Resume", href: USER.resumeUrl, icon: <FileText /> },
  { title: "Contact", href: "#contact", icon: <Send /> },
  {
    title: "Email",
    href: `mailto:${USER.emailPlain}`,
    icon: <TechLogo name="gmail" className="size-4" />,
  },
  {
    title: "GitHub",
    href: "https://github.com/raghavshulka",
    icon: <TechLogo name="github" className="size-4" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/himanshushukla121",
    icon: <TechLogo name="linkedin" className="size-4" />,
  },
  { title: "Phone", href: "tel:+919711948121", icon: <Phone /> },
]

/** Contact links laid out as a ruled 2/3-column grid. */
export function ConnectGrid() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3">
      {LINKS.map((link, index) => {
        const external = link.href.startsWith("http")
        return (
          <li
            key={link.title}
            className={cn(
              "border-line",
              // Ruled grid: right rule except on the last column, bottom rule
              // except on the last row, for both the 2- and 3-column layouts.
              index % 2 === 0 && "max-sm:border-r",
              index < 4 && "max-sm:border-b",
              index % 3 !== 2 && "sm:border-r",
              index < 3 && "sm:border-b"
            )}
          >
            <a
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 px-4 py-4 transition-colors hover:bg-accent-muted focus-visible:bg-accent-muted focus-visible:outline-none"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-muted/50 text-foreground/85 [&_svg]:size-4">
                {link.icon}
              </span>
              <span className="flex-1 text-sm font-medium text-foreground">
                {link.title}
              </span>
              <ArrowUpRight
                className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
