export type TechStack = {
  key: string
  title: string
  href?: string
  /** Symbol id in /icons/tech-stack-v1.svg; omitted for concepts without a logo. */
  iconId?: string
  categories: string[]
}
