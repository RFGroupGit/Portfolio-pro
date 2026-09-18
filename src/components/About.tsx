import { about } from '../data/profile'
import { Section } from './ui/Section'

export function About() {
  return (
    <Section id="about" number="01" title="About" wide>
      <div className="grid items-start gap-10 lg:grid-cols-12 print:gap-6">
        <div className="space-y-6 lg:col-span-7 print:space-y-3">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'text-lg leading-relaxed text-ink md:text-[1.35rem] md:leading-relaxed'
                  : 'leading-relaxed text-ink-soft'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="print-avoid-break lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl bg-night p-7 text-paper shadow-[0_24px_60px_-28px_rgba(23,20,16,0.7)] print:bg-transparent print:p-0 print:text-ink print:shadow-none">
            <p className="eyebrow mb-6 text-gold">Snapshot</p>
            <dl className="print:grid print:grid-cols-2 print:gap-x-6">
              {about.facts.map((fact) => (
                <div key={fact.label} className="border-t border-paper/10 py-4 first:border-t-0 first:pt-0 print:border-line print:py-2">
                  <dt className="eyebrow mb-1.5 text-fog print:text-muted">{fact.label}</dt>
                  <dd className="text-sm leading-snug text-paper print:text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div
              className="print-hidden pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-accent/50 blur-2xl"
              aria-hidden="true"
            />
          </div>
        </aside>
      </div>
    </Section>
  )
}
