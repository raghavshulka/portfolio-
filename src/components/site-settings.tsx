"use client"

import { Monitor, Moon, Sun, Volume2, VolumeX } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { useNavigationSound } from "@/hooks/soundcn/use-navigation-sound"
import { useSoundPreference } from "@/hooks/soundcn/use-sound-preference"

const emptySubscribe = () => () => {}

const BUTTON_CLASS =
  "flex size-7 cursor-pointer items-center justify-center rounded-full border border-line bg-background/60 text-muted-foreground backdrop-blur-sm transition-colors hover:border-foreground/25 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [&_svg]:size-3.5"

/** Theme and sound toggles: two small icon buttons in the banner corner. */
export function SiteSettings({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const { enabled: soundEnabled, setEnabled: setSoundEnabled } =
    useSoundPreference()
  const playNavigation = useNavigationSound()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
  // Cycles system -> light -> dark -> system. "System" follows the OS.
  const current = mounted ? (theme ?? "system") : "system"
  const next =
    current === "system" ? "light" : current === "light" ? "dark" : "system"
  const label = { system: "System theme", light: "Light theme", dark: "Dark theme" }
  const soundOn = mounted && soundEnabled

  return (
    <div className={className}>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          aria-label={`${label[current as keyof typeof label] ?? "Theme"}; switch to ${label[next].toLowerCase()}`}
          title={`${label[current as keyof typeof label] ?? "Theme"} (click for ${next})`}
          onClick={() => {
            playNavigation()
            setTheme(next)
          }}
          className={BUTTON_CLASS}
        >
          {current === "light" ? <Sun /> : current === "dark" ? <Moon /> : <Monitor />}
        </button>
        <button
          type="button"
          aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
          aria-pressed={soundOn}
          title={soundOn ? "Sound on" : "Sound off"}
          onClick={() => {
            const next = !soundEnabled
            setSoundEnabled(next)
            if (next) playNavigation()
          }}
          className={BUTTON_CLASS}
        >
          {soundOn ? <Volume2 /> : <VolumeX />}
        </button>
      </div>
    </div>
  )
}
