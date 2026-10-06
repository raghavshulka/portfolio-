import { ArrowUpRight, Phone, Send } from "lucide-react"

import { USER } from "@/features/portfolio/data/user"

/** Closing call to action: email first, resume second, phone below. */
export function ContactSection() {
  return (
    <div className="flex flex-col items-center px-5 py-14 text-center sm:py-16">
      <p className="max-w-md text-lg leading-snug text-muted-foreground sm:text-xl">
        Hiring, or have a product to build? I&apos;m open for full-time and
        freelance work.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        <a
          href={`mailto:${USER.emailPlain}`}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-[transform,opacity] hover:-translate-y-0.5 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          <Send className="size-4" aria-hidden />
          Email me
        </a>
        <a
          href={USER.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-5 text-sm font-medium text-foreground transition-[transform,border-color] hover:-translate-y-0.5 hover:border-foreground/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Resume
          <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden />
        </a>
      </div>
      <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-1.5 font-mono text-xs text-muted-foreground">
        <span>{USER.emailPlain}</span>
        <span aria-hidden>·</span>
        <a
          href="tel:+919711948121"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          <Phone className="size-3" aria-hidden />
          {USER.phone}
        </a>
      </p>
    </div>
  )
}
