"use client"

import { ArrowUpRight, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"

import { SiteSettings } from "@/components/site-settings"
import { Rail } from "@/components/site-shell"
import { USER } from "@/features/portfolio/data/user"

/** Hero: dot-grid availability banner, then the monogram and name row. */
export function ProfileHeader() {
  const pathname = usePathname()
  const NameHeading = pathname === "/" ? "h1" : "p"

  return (
    <header id="home" className="scroll-mt-0">
      {/* Top rule, like the frame of a sheet */}
      <div className="h-3 border-b border-line" aria-hidden>
        <Rail className="h-full" />
      </div>

      {/* Availability banner: HTML/CSS, so it stays crisp at any size */}
      <div className="border-b border-line">
        <Rail className="relative flex h-32 items-center justify-center overflow-hidden sm:h-36">
          <div aria-hidden className="dot-grid absolute inset-2" />
          <SiteSettings className="absolute top-3 right-3 z-10" />
          <p className="relative text-center text-lg leading-[1.15] font-light tracking-tight text-muted-foreground/80 sm:text-xl">
            Open for full-time
            <br />
            &amp; freelance work
          </p>
        </Rail>
      </div>

      <div className="border-b border-line">
        <Rail className="flex items-center gap-5 px-5 py-5">
          <div
            role="img"
            aria-label={`${USER.displayName} monogram`}
            className="shrink-0 rounded-2xl border border-line p-1"
          >
            <div className="flex size-24 items-center justify-center rounded-xl bg-foreground text-background sm:size-28">
              <span className="font-mono text-[32px] font-semibold tracking-[-0.06em] sm:text-[38px]">
                {USER.initials}
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <NameHeading className="text-[26px] leading-tight font-medium tracking-tight text-foreground sm:text-[30px]">
              {USER.displayName}
            </NameHeading>
            <p className="mt-1 text-[15px] text-muted-foreground sm:text-base">
              {USER.jobTitle}.
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden />
              {USER.address}
            </p>
          </div>

          <a
            href={USER.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-pulse hidden h-8 shrink-0 items-center gap-1 self-start rounded-full border border-line px-3 text-sm text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </Rail>
      </div>
    </header>
  )
}
