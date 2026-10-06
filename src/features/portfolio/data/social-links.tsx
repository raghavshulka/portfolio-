import { PhoneIcon } from "lucide-react"

import { Icons } from "@/components/icons"

import type { SocialLink } from "../types/social-links"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <Icons.github />,
    title: "GitHub",
    href: "https://github.com/raghavshulka",
  },
  {
    icon: <Icons.linkedin />,
    title: "LinkedIn",
    href: "https://linkedin.com/in/himanshushukla121",
  },
  {
    icon: <Icons.email />,
    title: "Email",
    href: "mailto:himanshu4shukla4l@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    href: "tel:+919711948121",
  },
]
