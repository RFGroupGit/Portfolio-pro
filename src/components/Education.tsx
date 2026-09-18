import { education } from '../data/education'
import { Section } from './ui/Section'

export function Education() {
  return (
    <Section id="education" number="06" title="Education">
      <ul className="divide-y divide-line border-y border-line">
        {education.map((item, index) => (
          <li
            key={`${item.degree}-${index}`}
            className="print-avoid-break grid gap-2 py-6 md:grid-cols-12 md:gap-8"
          >
            <p className="text-sm font-medium tabular-nums text-ink md:col-span-4">{item.period}</p>
            <div className="md:col-span-8">
              <h3 className="text-lg font-medium tracking-tight text-ink">{item.degree}</h3>
              <p className="mt-1 text-muted">{item.school}</p>
              {item.details ? <p className="mt-2 text-sm text-ink-soft">{item.details}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
