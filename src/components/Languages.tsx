import { languages } from '../data/education'
import { Section } from './ui/Section'

export function Languages() {
  return (
    <Section id="languages" number="07" title="Languages" wide>
      <dl className="grid gap-4 sm:grid-cols-2">
        {languages.map((language, index) => (
          <div
            key={language.name}
            className="print-avoid-break rounded-2xl bg-night p-6 text-paper print:bg-transparent print:p-0 print:text-ink"
          >
            <dt className="font-display text-4xl tracking-tight">{language.name}</dt>
            <dd className={`mt-2 text-sm ${index === 0 ? 'text-gold' : 'text-fog'} print:text-muted`}>
              {language.level}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
