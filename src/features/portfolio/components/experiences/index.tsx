import { EXPERIENCES } from "../../data/experiences"
import { ExperienceItem } from "./experience-item"

export function Experiences() {
  return (
    <div>
      {EXPERIENCES.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  )
}
