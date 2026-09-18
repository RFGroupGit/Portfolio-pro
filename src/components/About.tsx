import { about } from '../data/profile'
import { Section } from './ui/Section'

export function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="grid gap-12 lg:grid-cols-12 print:gap-6">
        <div className="space-y-6 lg:col-span-8 print:space-y-3">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={i === 0 ? 'text-lg leading-relaxed text-ink md:text-xl' : 'leading-relaxed text-ink-soft'}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="print-avoid-break lg:col-span-4 print:grid print:grid-cols-2 print:gap-x-6">
          {about.facts.map((fact) => (
            <div key={fact.label} className="border-t border-line py-4 print:py-2">
              <dt className="eyebrow mb-1.5">{fact.label}</dt>
              <dd className="text-sm text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
