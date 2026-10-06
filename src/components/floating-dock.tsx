"use client"

import {
  BriefcaseBusiness,
  House,
  Layers,
  Send,
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { USER } from "@/features/portfolio/data/user"
import { useNavigationSound } from "@/hooks/soundcn/use-navigation-sound"
import { cn } from "@/lib/utils"

/** Home-page sections the dock tracks, top to bottom. */
const SECTIONS = [
  { id: "home", label: "Home", icon: <House /> },
  { id: "experience", label: "Experience", icon: <BriefcaseBusiness /> },
  { id: "projects", label: "Projects", icon: <Layers /> },
] as const

// "stack" is tracked so the dock shows nothing active there (it has no button).
type SectionId = (typeof SECTIONS)[number]["id"] | "stack" | "contact"

const TRACKED_IDS: SectionId[] = [
  ...SECTIONS.map((s) => s.id),
  "stack",
  "contact",
]

const ITEM_CLASS =
  "group/dock relative flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition-[background-color,color,transform] duration-200 ease-out hover:bg-white/8 hover:text-white active:scale-95 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none [&_svg]:size-[18px]"

/** Label that appears above an icon on hover or keyboard focus. */
function DockTooltip({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 translate-y-1 rounded-md border border-white/10 bg-[#161616] px-2 py-1 text-xs font-medium whitespace-nowrap text-neutral-100 opacity-0 shadow-md transition-[opacity,transform] duration-150 group-hover/dock:translate-y-0 group-hover/dock:opacity-100 group-focus-visible/dock:translate-y-0 group-focus-visible/dock:opacity-100 max-sm:hidden"
    >
      {children}
    </span>
  )
}

function Divider() {
  return <span aria-hidden className="mx-0.5 h-6 w-px shrink-0 bg-white/12" />
}

/** Tracks which home section is in view: the last one whose top has passed
 *  40% of the viewport, or Contact once the page is scrolled to the end. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId>("home")

  useEffect(() => {
    if (!enabled) return

    const elements = TRACKED_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    )
    if (elements.length === 0) return

    const pick = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (atBottom) {
        setActive("contact")
        return
      }
      const line = window.innerHeight * 0.4
      let current: SectionId = "home"
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id as SectionId
      }
      setActive(current)
    }

    // The observer only signals "something crossed"; `pick` decides.
    const observer = new IntersectionObserver(pick, {
      rootMargin: "-40% 0px -59% 0px",
      threshold: 0,
    })
    elements.forEach((el) => observer.observe(el))
    window.addEventListener("scroll", pick, { passive: true })
    pick()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", pick)
    }
  }, [enabled])

  // Keep the URL hash in step with the section in view.
  useEffect(() => {
    if (!enabled) return
    const wanted = active === "home" ? "" : `#${active}`
    if (window.location.hash === wanted) return
    window.history.replaceState(
      window.history.state,
      "",
      wanted || window.location.pathname + window.location.search
    )
  }, [active, enabled])

  return active
}

/**
 * Floating pill dock, fixed to the bottom centre of the viewport on every
 * screen size. On the home page each button smooth-scrolls to its section;
 * elsewhere it navigates back to that section of the home page.
 */
export function FloatingDock() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === "/"
  const playNavigation = useNavigationSound()
  const active = useActiveSection(isHome)
  const activeId: SectionId | null = isHome
    ? active
    : pathname.startsWith("/projects")
      ? "projects"
      : null

  const goTo = (id: SectionId) => {
    playNavigation()
    if (!isHome) {
      router.push(id === "home" ? "/" : `/#${id}`)
      return
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    // Sections carry `scroll-margin-top`, which smooth scrolling honours.
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#141414]/90 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
        <button
          type="button"
          aria-label={`${USER.displayName}, back to top`}
          onClick={() => goTo("home")}
          className="group/dock relative flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-100 font-mono text-[13px] font-semibold tracking-[-0.06em] text-neutral-950 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
        >
          {USER.initials}
          <DockTooltip>{USER.displayName}</DockTooltip>
        </button>

        <Divider />

        {SECTIONS.map((section) => {
          const isActive = activeId === section.id
          return (
            <button
              key={section.id}
              type="button"
              aria-label={section.label}
              aria-current={isActive ? "location" : undefined}
              onClick={() => goTo(section.id)}
              className={cn(
                ITEM_CLASS,
                isActive && "bg-white/12 text-white hover:bg-white/14"
              )}
            >
              {section.icon}
              <DockTooltip>{section.label}</DockTooltip>
            </button>
          )
        })}

        <Divider />

        <button
          type="button"
          aria-label="Contact"
          aria-current={activeId === "contact" ? "location" : undefined}
          onClick={() => goTo("contact")}
          className={cn(
            "group/dock relative flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-950 shadow-[0_2px_10px_rgba(255,255,255,0.12)] transition-[transform,background-color,box-shadow] duration-200 hover:scale-105 hover:bg-neutral-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none [&_svg]:size-[18px] [&_svg]:-translate-x-px [&_svg]:translate-y-px",
            activeId === "contact" &&
              "ring-2 ring-white/35 ring-offset-2 ring-offset-[#141414]"
          )}
        >
          <Send />
          <DockTooltip>Contact</DockTooltip>
        </button>
      </div>
    </nav>
  )
}
