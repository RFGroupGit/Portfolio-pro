import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  number: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
  wide?: boolean
  inverted?: boolean
}

/**
 * Monograph section: ghost folio number, hairline, display title.
 */
export function Section({
  id,
  number,
  title,
  intro,
  children,
  className = '',
  wide = false,
  inverted = false,
}: SectionProps) {
  const ink = inverted ? 'text-paper' : 'text-ink'
  const mute = inverted ? 'text-paper/50' : 'text-muted'

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative overflow-hidden border-t border-ink/15 py-20 md:py-28 lg:py-36 ${
        inverted ? 'bg-night text-paper' : 'bg-paper text-ink'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`print-hidden pointer-events-none absolute -top-8 right-0 font-sans text-[28vw] leading-none font-medium text-ink/[0.045] select-none ${
          inverted ? 'text-paper/5' : ''
        }`}
      >
        {number}
      </span>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {wide ? (
          <>
            <header className="mb-12 max-w-4xl md:mb-16 print:mb-5">
              <p className={`eyebrow mb-5 ${mute}`}>{number}</p>
              <h2 id={`${id}-title`} className={`font-display text-h2 ${ink}`}>
                {title}
              </h2>
              {intro ? <p className={`mt-6 max-w-xl text-sm leading-relaxed ${mute}`}>{intro}</p> : null}
            </header>
            {children}
          </>
        ) : (
          <div className="grid gap-10 md:grid-cols-12 md:gap-12 print:block">
            <header className="md:col-span-4 print:mb-5">
              <p className={`eyebrow mb-5 ${mute}`}>{number}</p>
              <h2 id={`${id}-title`} className={`font-display text-h2 ${ink}`}>
                {title}
              </h2>
              {intro ? <p className={`mt-6 max-w-sm text-sm leading-relaxed ${mute}`}>{intro}</p> : null}
            </header>
            <div className="md:col-span-8">{children}</div>
          </div>
        )}
      </div>
    </section>
  )
}
