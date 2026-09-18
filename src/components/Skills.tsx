import { skillGroups } from '../data/skills'
import { Section } from './ui/Section'

export function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      title="Skills"
      intro="Organised by discipline, not by score. Each area reflects hands-on practice in real product teams."
    >
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="print-avoid-break">
            <h3 className="mb-5 border-b border-line pb-3 text-sm font-medium uppercase tracking-[0.08em] text-ink">
              {group.title}
            </h3>
            <ul className="space-y-2.5">
              {group.skills.map((skill, i) => (
                <li key={`${skill}-${i}`} className="text-[0.9375rem] text-ink-soft">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
