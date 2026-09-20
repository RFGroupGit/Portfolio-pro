import { education } from '../data/education'
import { Section } from './ui/Section'

export function Education() {
  return (
    <Section id="education" number="07" title="Education" wide>
      <ul className="border-t border-ink">
        {education.map((item, index) => (
          <li
            key={`${item.degree}-${index}`}
            className="print-avoid-break grid gap-2 border-b border-ink/15 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
          >
            <p className="font-mono text-xs tabular-nums text-ink md:col-span-3">{item.period}</p>
            <div className="md:col-span-9">
              <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">{item.degree}</h3>
              <p className="mt-2 text-sm text-muted">{item.school}</p>
              {item.details ? <p className="mt-2 text-sm text-ink-soft">{item.details}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
