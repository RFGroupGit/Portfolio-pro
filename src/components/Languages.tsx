import { languages } from '../data/education'
import { Section } from './ui/Section'

export function Languages() {
  return (
    <Section id="languages" number="07" title="Languages">
      <dl className="grid gap-8 sm:grid-cols-3">
        {languages.map((language) => (
          <div key={language.name} className="print-avoid-break border-t border-ink pt-4">
            <dt className="text-lg font-medium text-ink">{language.name}</dt>
            <dd className="mt-1 text-sm text-muted">{language.level}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
