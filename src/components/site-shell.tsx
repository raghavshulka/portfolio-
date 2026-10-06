import { cn } from "@/lib/utils"

/** Centred content column with the vertical rails on both sides. */
export function Rail({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[720px] border-x border-line",
        className
      )}
      {...props}
    />
  )
}

/** Full-width diagonal band that separates sections. */
export function StripeBand({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("stripe-band h-6 w-full border-b border-line", className)}
    />
  )
}

/**
 * A home-page section: full-width ruled heading row, then the content column.
 * `scroll-mt` keeps the heading clear of the viewport edge on anchor jumps.
 */
export function HomeSection({
  id,
  title,
  aside,
  children,
  contentClassName,
}: {
  id: string
  title: React.ReactNode
  aside?: React.ReactNode
  children: React.ReactNode
  contentClassName?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-4">
      <StripeBand />
      <div className="border-b border-line">
        <Rail className="flex items-end justify-between gap-4 px-5 pt-5 pb-2.5">
          <h2
            id={`${id}-title`}
            className="text-[28px] leading-none font-normal tracking-tight text-foreground sm:text-[30px]"
          >
            {title}
          </h2>
          {aside}
        </Rail>
      </div>
      <div className="border-b border-line">
        <Rail className={contentClassName}>{children}</Rail>
      </div>
    </section>
  )
}
