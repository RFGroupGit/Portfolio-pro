import { experience } from '../data/experience'
import { Section } from './ui/Section'

export function Experience() {
  return (
    <Section id="experience" number="02" title="Experience" tone="cream" wide>
      <ol className="space-y-4">
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${index}`}
            className="print-avoid-break group relative overflow-hidden rounded-2xl border border-line bg-paper p-6 transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 md:p-8 print:border-line print:p-3"
          >
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-0 top-0 w-1.5 ${index === 0 ? 'bg-accent' : index === 1 ? 'bg-gold' : index === 2 ? 'bg-moss' : 'bg-cobalt'}`}
            />

            <div className="grid gap-5 pl-3 md:grid-cols-12 md:gap-8 print:grid-cols-12 print:gap-4">
              <div className="md:col-span-4 print:col-span-3">
                <p className="font-display text-3xl tracking-tight text-ink md:text-4xl">{item.period}</p>
                {item.location ? <p className="mt-2 text-sm text-muted">{item.location}</p> : null}
              </div>

              <div className="md:col-span-8 print:col-span-9">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">{item.company}</p>
                <h3 className="mt-1 text-2xl font-medium tracking-tight text-ink">{item.role}</h3>
                {item.summary ? <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p> : null}

                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
