import { FloatingDock } from "@/components/floating-dock"
import { SiteFooter } from "@/components/site-footer"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    // Bottom padding keeps the fixed dock from covering the last content.
    <div className="relative overflow-x-clip pb-[calc(6rem+env(safe-area-inset-bottom))]">
      {/* Invisible until tabbed to. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-80 focus:rounded-lg focus:bg-popover focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg focus:ring-2 focus:ring-ring focus:outline-none"
      >
        Skip to content
      </a>

      <ProfileHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter />
      <FloatingDock />
    </div>
  )
}
