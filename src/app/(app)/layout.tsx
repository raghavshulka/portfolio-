import { FloatingDock } from "@/components/floating-dock"
import { PixelBlast } from "@/components/pixel-blast"
import { SiteFooter } from "@/components/site-footer"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/layout relative pb-[calc(6rem+env(safe-area-inset-bottom))]">
      <PixelBlast />
      {/* Invisible until tabbed to. Without it, reaching the content by keyboard
          means walking the whole header and nav on every single page. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-80 focus:rounded-lg focus:bg-popover focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg focus:ring-2 focus:ring-ring focus:outline-none"
      >
        Skip to content
      </a>

      <main className="max-w-screen overflow-x-clip sm:px-2">
        <div className="relative z-1 mx-auto bg-card md:max-w-[720px] *:[[id]]:scroll-mt-4">
          <ProfileHeader />
          <div id="main" tabIndex={-1} className="outline-none">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingDock />
    </div>
  )
}
