import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

// No public domain yet; set APP_URL when the site is deployed.
const DEFAULT_SITE_URL = "http://localhost:3000"

function normalizeSiteUrl(value?: string) {
  if (!value) return DEFAULT_SITE_URL

  const url = value.startsWith("http") ? value : `https://${value}`
  return url.replace(/\/+$/, "")
}

export const SITE_INFO = {
  name: USER.displayName,
  url: normalizeSiteUrl(process.env.APP_URL),
  ogImage: USER.ogImage,
  description: USER.seoDescription ?? USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#fafafa",
  dark: "#0a0a0a",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Projects",
    href: "/projects",
  },
]

export const GITHUB_USERNAME = "raghavshulka"
export const GITHUB_REPO = "raghavshulka/ai-draw"
export const GITHUB_REPO_URL = `https://github.com/${GITHUB_REPO}`
export const UTM_PARAMS = {
  utm_source: "raghavshulka",
}

