import { about } from '../data/profile'
import { Section } from './ui/Section'

export function About() {
  return (
    <Section id="about" number="01" title="About" wide>
      <div className="grid items-start gap-12 lg:grid-cols-12 print:gap-6">
        <div className="space-y-8 lg:col-span-8 print:space-y-3">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'font-display text-2xl leading-snug tracking-tight text-ink md:text-4xl md:leading-[1.15]'
                  : 'max-w-2xl leading-relaxed text-ink-soft'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="print-avoid-break border-t border-ink lg:col-span-4 print:grid print:grid-cols-2 print:gap-x-6">
          {about.facts.map((fact) => (
            <div key={fact.label} className="border-b border-ink/15 py-4 print:py-2">
              <dt className="eyebrow mb-2">{fact.label}</dt>
              <dd className="text-sm leading-snug text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
