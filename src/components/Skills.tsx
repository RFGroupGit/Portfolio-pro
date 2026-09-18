import { skillGroups } from '../data/skills'
import { Section } from './ui/Section'

export function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      title="Skills"
      intro="Organised by discipline, not by score. Each area reflects hands-on practice in real product teams."
      tone="cream"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            className="print-avoid-break rounded-2xl border border-line bg-paper p-5 md:p-6"
          >
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-ink">
              <span
                className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-accent' : index === 1 ? 'bg-gold' : index === 2 ? 'bg-moss' : 'bg-cobalt'}`}
                aria-hidden="true"
              />
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <li key={`${skill}-${i}`} className="chip">
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
