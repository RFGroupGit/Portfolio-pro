import { sites } from '../data/sites'
import { Section } from './ui/Section'

export function Sites() {
  return (
    <Section
      id="sites"
      number="04"
      title="Sites"
      intro="Live websites I built. More will land here."
      wide
    >
      <ul className="border-t border-ink">
        {sites.map((site) => {
          const host = site.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
          return (
            <li key={site.url} className="print-avoid-break border-b border-ink/15">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <p className="font-mono text-xs text-muted md:col-span-3">{host}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                    <span className="link-underline print:no-underline">{site.name}</span>
                    <span aria-hidden="true" className="print-hidden ml-3 text-sm text-muted transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{site.summary}</p>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
