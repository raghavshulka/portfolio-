"use client"

import { ArrowUpRightIcon, BriefcaseBusiness, CircleCheck, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"

import { AsciiBanner } from "@/components/ascii-banner"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export function ProfileHeader() {
  const pathname = usePathname()
  const isProjectDetail = Boolean(
    pathname?.startsWith("/projects/") && pathname !== "/projects"
  )
  const NameHeading = isProjectDetail ? "p" : "h1"

  return (
    <header
      id="about"
      className="relative z-1 border-x border-b border-line bg-card max-md:border-x-0"
    >
      <div className="relative h-44 overflow-hidden border-b border-line sm:h-56">
        <AsciiBanner
          src="/cover-blueprint.webp"
          alt="Blueprint-style cover: a system diagram and the line Reason from first principles."
        />
      </div>

      <div className="relative px-5 pb-5 sm:px-6 sm:pb-6">
        <div className="flex items-end justify-between gap-3">
          {/* No photo on file: a monogram tile holds the avatar slot. */}
          <div
            role="img"
            aria-label={`${USER.displayName} monogram`}
            className="relative -mt-13 flex size-26 items-center justify-center overflow-hidden rounded-[15%] border-4 border-card bg-foreground text-background sm:-mt-16 sm:size-32 sm:rounded-[16%]"
          >
            <span className="font-mono text-[34px] font-semibold tracking-[-0.06em] sm:text-[42px]">
              {USER.initials}
            </span>
          </div>

          <a
            href={USER.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1 inline-flex h-9 items-center gap-1.5 rounded-lg border border-line bg-card px-3.5 text-sm font-medium text-foreground transition-[background-color,border-color,transform] hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none"
          >
            Resume
            <ArrowUpRightIcon className="size-4 text-muted-foreground" aria-hidden />
          </a>
        </div>

        <div className="mt-3 min-w-0">
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            <NameHeading className="text-[20px] font-bold leading-6 tracking-tight text-foreground sm:text-[22px]">
              {USER.displayName}
            </NameHeading>
          </div>
          <p className="mt-0.5 text-[15px] leading-5 text-muted-foreground">
            @{USER.username}
          </p>
        </div>

        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-foreground sm:text-base">
          {USER.about}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <BriefcaseBusiness className="size-4" aria-hidden />
            {USER.jobTitle}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden />
            {USER.address}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CircleCheck className="size-4 text-emerald-500" aria-hidden />
            {USER.availability}
          </span>
        </div>

        <div className="mt-5 border-t border-line pt-4">
          <h2 className="sr-only">Social links</h2>
          <ul className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={link.title}
                  title={link.title}
                  className="flex size-10 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-[background-color,color,border-color,transform] hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none"
                >
                  <span className="size-[18px] [&>svg]:size-full">
                    {link.icon}
                  </span>
                  <span className="sr-only">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
