import type { Language } from "@/hooks/use-language-preference"

/**
 * Static UI copy: nav, labels, empty states, and the like. The site is
 * English only; the language plumbing is kept so components stay unchanged.
 */
const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    settings: "Settings",
  },
  settings: {
    language: "Language",
    english: "English",
    indonesian: "Indonesia",
    theme: "Theme",
    light: "Light",
    system: "System",
    dark: "Dark",
    sound: "Sound",
    soundOn: "Sound on",
    soundOff: "Sound off",
  },
  skipToContent: "Skip to content",
  overview: {
    sr: "Overview",
    location: "Location",
    phone: "Phone",
    personalWebsite: "Personal website",
    pronouns: "Pronouns",
    localTime: "Local time",
  },
  social: {
    sr: "Social Links",
  },
  github: {
    sr: "GitHub Contributions",
  },
  experiences: {
    title: "Experience",
    callout: "Where I've worked, newest first.",
    employmentType: "Employment Type",
    employmentPeriod: "Employment Period",
    duration: "Duration",
    present: "Present",
    ongoing: "Ongoing",
  },
  projects: {
    title: "Projects",
    viewAll: "View all",
    callout: "Things I've built and shipped. Open one for the details.",
  },
  techStack: {
    title: "Stack",
  },
  collapsibleList: {
    showMore: "Show more",
    showLess: "Show less",
  },
  projectDetail: {
    backToProjects: "Projects",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    ownership: "Ownership",
    role: "Role",
    team: "Team",
    myRole: "My Role",
    features: "Features",
    impact: "Impact",
    stack: "Stack",
    notes: "Notes",
  },
  footer: {
    contact: "Contact",
    index: "Index",
    home: "Home",
  },
  notFound: {
    message:
      "Looks like this page doesn’t exist (yet). Just like a blank space in a conversation, there’s nothing to respond to. Go back to",
    home: "home",
    suffix: "and rejoin the conversation.",
  },
} as const

const dictionary = {
  en,
  // English only; the template's Indonesian locale was removed.
  id: en,
} as const satisfies Record<Language, unknown>

export function getDictionary(language: Language) {
  return dictionary[language]
}

export type Dictionary = (typeof dictionary)[Language]
