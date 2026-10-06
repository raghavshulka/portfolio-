import { cn } from "@/lib/utils"

/** Logos drawn in black that need inverting on the dark theme. */
const MONOCHROME = new Set([
  "aws",
  "express",
  "github",
  "langchain",
  "modelcontextprotocol",
  "nextjs",
  "prisma",
  "shadcnui",
  "vercel",
])

/**
 * A brand logo from /public/icons/tech (Devicon, MIT, and Simple Icons, CC0;
 * licences alongside the files).
 */
export function TechLogo({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
     
    <img
      src={`/icons/tech/${name}.svg`}
      alt=""
      aria-hidden
      width={16}
      height={16}
      loading="lazy"
      className={cn(
        "size-3.5 shrink-0 object-contain",
        MONOCHROME.has(name) && "dark:invert",
        className
      )}
    />
  )
}
