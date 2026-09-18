import { experience } from '../data/experience'
import { Section } from './ui/Section'

export function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <ol className="relative border-l border-line">
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${index}`}
            className="print-avoid-break relative pb-14 pl-8 last:pb-0 md:pl-12 print:pb-6 print:pl-6"
          >
            {/* Timeline marker */}
            <span
              aria-hidden="true"
              className={`absolute -left-[4.5px] top-2 h-2 w-2 rounded-full ${
                index === 0 ? 'bg-accent' : 'bg-line-strong'
              }`}
            />

            <div className="grid gap-4 md:grid-cols-12 md:gap-8 print:grid-cols-12 print:gap-4">
              <div className="md:col-span-4 print:col-span-3">
                <p className="text-sm font-medium tabular-nums text-ink">{item.period}</p>
                {item.location ? <p className="mt-1 text-sm text-muted">{item.location}</p> : null}
              </div>

              <div className="md:col-span-8 print:col-span-9">
                <h3 className="text-xl font-medium tracking-tight text-ink">{item.role}</h3>
                <p className="mt-1 text-base text-muted">{item.company}</p>
                {item.summary ? <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p> : null}

                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong" />
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
