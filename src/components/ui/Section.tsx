import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  /** Two-digit index displayed as an editorial marker, e.g. "01". */
  number: string
  title: string
  /** Optional short intro under the title. */
  intro?: string
  children: ReactNode
  className?: string
  /** Render children full-width under the header instead of in the right column. */
  wide?: boolean
}

/**
 * Editorial section: numbered label + title on the left column,
 * content on the right (stacked on mobile). Provides consistent rhythm.
 */
export function Section({ id, number, title, intro, children, className = '', wide = false }: SectionProps) {
  const header = (
    <header className={wide ? 'mb-12 md:mb-16 print:mb-5' : 'md:col-span-4 lg:col-span-3 print:mb-5'}>
      <p className="eyebrow mb-4 text-accent" aria-hidden="true">
        {number}
      </p>
      <h2 id={`${id}-title`} className="font-display text-h2 text-ink">
        {title}
      </h2>
      {intro ? <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{intro}</p> : null}
    </header>
  )

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line py-20 md:py-28 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {wide ? (
          <>
            {header}
            {children}
          </>
        ) : (
          <div className="grid gap-10 md:grid-cols-12 md:gap-8 print:block">
            {header}
            <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">{children}</div>
          </div>
        )}
      </div>
    </section>
  )
}
