import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="scroll-mt-4 space-y-4 border-b border-line px-5 py-5 last:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              width={24}
              height={24}
              quality={85}
              className={`rounded-full ${experience.companyLogo.endsWith(".svg") ? "" : "dark:bg-white dark:p-0.5"}`}
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-muted-foreground/40" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-semibold">
          {experience.companyWebsite ? (
            <a
              className="group/company inline-flex items-center gap-1 underline decoration-muted-foreground/40 decoration-1 underline-offset-4 transition-colors hover:decoration-foreground"
              href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`${experience.companyName} website (opens in a new tab)`}
            >
              {experience.companyName}
              <ArrowUpRightIcon
                className="size-4 text-muted-foreground transition-transform group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5 group-hover/company:text-foreground"
                aria-hidden
              />
            </a>
          ) : (
            experience.companyName
          )}
        </h3>
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}
