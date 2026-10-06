import { Rail, StripeBand } from "@/components/site-shell"
import { USER } from "@/features/portfolio/data/user"

/** Plain centred colophon over a dot-grid strip. */
export function SiteFooter() {
  // Baked at build time on statically prerendered routes.
  const year = new Date().getFullYear()

  return (
    <footer>
      <StripeBand />
      <div className="border-b border-line">
        <Rail className="py-8 text-center text-sm text-muted-foreground">
          <p>
            © {year}{" "}
            <span className="font-medium text-foreground">
              {USER.displayName}
            </span>
          </p>
          <p className="mt-1">{USER.address}</p>
        </Rail>
      </div>
      <div className="border-b border-line">
        <Rail className="h-28 sm:h-36">
          <div aria-hidden className="dot-grid absolute inset-2" />
        </Rail>
      </div>
    </footer>
  )
}
