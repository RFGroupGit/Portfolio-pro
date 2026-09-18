import { skillGroups } from '../data/skills'
import { Section } from './ui/Section'

export function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      title="Skills"
      intro="Organised by discipline, not by score. Each area reflects hands-on practice in real product teams."
      wide
    >
      <div className="border-t border-ink">
        {skillGroups.map((group) => (
          <div key={group.title} className="print-avoid-break grid gap-4 border-b border-ink/15 py-8 md:grid-cols-12 md:gap-8">
            <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink md:col-span-3">{group.title}</h3>
            <p className="text-lg leading-relaxed tracking-tight text-ink md:col-span-9 md:text-2xl">
              {group.skills.join('  /  ')}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
