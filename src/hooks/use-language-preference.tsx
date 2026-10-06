"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Language = "en" | "id"

type LanguagePreference = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguagePreferenceContext = createContext<LanguagePreference | null>(null)

export function LanguagePreferenceProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] = useState<Language>("en")

  // English only: the Indonesian locale from the original template is disabled.

  const setLanguage = (value: Language) => {
    setLanguageState(value)
    document.documentElement.lang = value
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguagePreferenceContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguagePreferenceContext.Provider>
  )
}

export function useLanguagePreference() {
  const context = useContext(LanguagePreferenceContext)
  if (!context) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
    }
  }

  return context
}
