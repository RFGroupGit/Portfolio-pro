import { languages } from '../data/education'
import { Section } from './ui/Section'

export function Languages() {
  return (
    <Section id="languages" number="08" title="Languages" wide>
      <dl className="grid border-t border-ink sm:grid-cols-2">
        {languages.map((language) => (
          <div key={language.name} className="print-avoid-break border-ink/15 py-8 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
            <dt className="font-display text-5xl tracking-tight text-ink md:text-6xl">{language.name}</dt>
            <dd className="mt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-muted">{language.level}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
