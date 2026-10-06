"use client"

import { ThemeProvider } from "next-themes"

import { TooltipProvider } from "@/components/base/ui/tooltip"
import { SoundPreferenceProvider } from "@/hooks/soundcn/use-sound-preference"
import { LanguagePreferenceProvider } from "@/hooks/use-language-preference"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
      defaultTheme="system"
      attribute="class"
    >
      <TooltipProvider delayDuration={150}>
        <LanguagePreferenceProvider>
          <SoundPreferenceProvider>
            {children}
          </SoundPreferenceProvider>
        </LanguagePreferenceProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}
