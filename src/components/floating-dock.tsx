"use client"

import {
  HouseIcon,
  LayersIcon,
  MoonIcon,
  SendIcon,
  SlidersHorizontalIcon,
  SunIcon,
  UserRoundIcon,
  Volume2Icon,
  VolumeXIcon,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState, useSyncExternalStore } from "react"

import { USER } from "@/features/portfolio/data/user"
import { useNavigationSound } from "@/hooks/soundcn/use-navigation-sound"
import { useSoundPreference } from "@/hooks/soundcn/use-sound-preference"
import { cn } from "@/lib/utils"

const emptySubscribe = () => () => {}

const ITEM_CLASS =
  "group/dock relative flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition-[background-color,color,transform] duration-200 ease-out hover:bg-white/8 hover:text-white active:scale-95 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none [&_svg]:size-[18px]"

/** Label that appears above an icon on hover or keyboard focus. */
function DockTooltip({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 translate-y-1 rounded-md border border-white/10 bg-[#1a1a1a] px-2 py-1 text-xs font-medium whitespace-nowrap text-neutral-100 opacity-0 shadow-md transition-[opacity,transform] duration-150 group-hover/dock:translate-y-0 group-hover/dock:opacity-100 group-focus-visible/dock:translate-y-0 group-focus-visible/dock:opacity-100 max-sm:hidden"
    >
      {children}
    </span>
  )
}

function Divider() {
  return <span aria-hidden className="mx-1 h-6 w-px shrink-0 bg-white/12" />
}

/**
 * Floating pill dock, fixed to the bottom centre of the viewport on every
 * screen size. Replaces the template's tab row; routes are unchanged.
 */
export function FloatingDock() {
  const pathname = usePathname()
  const playNavigation = useNavigationSound()
  const { theme, setTheme } = useTheme()
  const { enabled: soundEnabled, setEnabled: setSoundEnabled } =
    useSoundPreference()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
  const [settingsOpen, setSettingsOpen] = useState(false)
  const settingsRef = useRef<HTMLDivElement>(null)

  const isDark = !mounted || theme !== "light"

  useEffect(() => {
    if (!settingsOpen) return
    const onPointerDown = (event: PointerEvent) => {
      if (!settingsRef.current?.contains(event.target as Node)) {
        setSettingsOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSettingsOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [settingsOpen])

  const links = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: <HouseIcon />,
      active: pathname === "/",
    },
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
      icon: <LayersIcon />,
      active: pathname.startsWith("/projects"),
    },
    {
      id: "experience",
      label: "Experience",
      href: "/#experience",
      icon: <UserRoundIcon />,
      active: false,
    },
  ]

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#1a1a1a]/92 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur-md">
        <Link
          href="/"
          aria-label={`${USER.displayName}, home`}
          onClick={() => pathname !== "/" && playNavigation()}
          className="group/dock relative flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 font-mono text-[13px] font-semibold tracking-[-0.06em] text-neutral-950 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
        >
          {USER.initials}
          <DockTooltip>{USER.displayName}</DockTooltip>
        </Link>

        <Divider />

        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            aria-label={link.label}
            aria-current={link.active ? "page" : undefined}
            onClick={() => !link.active && playNavigation()}
            className={cn(
              ITEM_CLASS,
              link.active && "bg-white/12 text-white hover:bg-white/14"
            )}
          >
            {link.icon}
            <DockTooltip>{link.label}</DockTooltip>
          </Link>
        ))}

        <div ref={settingsRef} className="relative">
          <button
            type="button"
            aria-label="Settings"
            aria-haspopup="menu"
            aria-expanded={settingsOpen}
            onClick={() => {
              playNavigation()
              setSettingsOpen((open) => !open)
            }}
            className={cn(ITEM_CLASS, settingsOpen && "bg-white/12 text-white")}
          >
            <SlidersHorizontalIcon />
            {!settingsOpen && <DockTooltip>Settings</DockTooltip>}
          </button>

          {settingsOpen && (
            <div
              role="menu"
              className="absolute bottom-full left-1/2 mb-3 w-44 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#1a1a1a] p-1.5 text-sm text-neutral-200 shadow-xl"
            >
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  playNavigation()
                  setTheme(isDark ? "light" : "dark")
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/8"
              >
                <span>Theme</span>
                <span className="flex items-center gap-1.5 text-neutral-400 [&_svg]:size-4">
                  {isDark ? <MoonIcon /> : <SunIcon />}
                  {isDark ? "Dark" : "Light"}
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  const next = !soundEnabled
                  setSoundEnabled(next)
                  if (next) playNavigation()
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/8"
              >
                <span>Sound</span>
                <span className="flex items-center gap-1.5 text-neutral-400 [&_svg]:size-4">
                  {soundEnabled ? <Volume2Icon /> : <VolumeXIcon />}
                  {soundEnabled ? "On" : "Off"}
                </span>
              </button>
            </div>
          )}
        </div>

        <Divider />

        <a
          href={`mailto:${USER.emailPlain}`}
          aria-label={`Email ${USER.displayName}`}
          onClick={() => playNavigation()}
          className="group/dock relative flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 shadow-[0_2px_10px_rgba(255,255,255,0.15)] transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-neutral-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none [&_svg]:size-[18px] [&_svg]:-translate-x-px [&_svg]:translate-y-px"
        >
          <SendIcon />
          <DockTooltip>Get in touch</DockTooltip>
        </a>
      </div>
    </nav>
  )
}
