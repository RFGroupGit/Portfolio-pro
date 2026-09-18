import { experience } from '../data/experience'
import { Section } from './ui/Section'

export function Experience() {
  return (
    <Section id="experience" number="02" title="Experience" wide>
      <ol>
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${index}`}
            className="print-avoid-break grid gap-6 border-t border-ink py-10 first:border-t-2 md:grid-cols-12 md:gap-8 md:py-14 print:py-5"
          >
            <div className="md:col-span-4">
              <p className="font-sans text-4xl leading-none font-medium tracking-tight text-ink md:text-5xl">
                {item.period}
              </p>
              {item.location ? (
                <p className="mt-3 font-mono text-[10px] tracking-[0.16em] uppercase text-muted">{item.location}</p>
              ) : null}
            </div>

            <div className="md:col-span-8">
              <h3 className="font-display text-3xl tracking-tight text-ink md:text-4xl">{item.role}</h3>
              <p className="mt-2 text-sm font-medium tracking-[0.14em] uppercase text-ink">{item.company}</p>
              {item.summary ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{item.summary}</p> : null}

              <ul className="mt-6 max-w-2xl space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="font-mono text-[10px] text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
