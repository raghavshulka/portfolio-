export type TechStack = {
  key: string
  title: string
  href?: string
  /** File name (no extension) in /public/icons/tech. */
  logo?: string
  /** Lucide icon for skills with no brand mark. */
  icon?: React.ReactNode
  categories: string[]
}
