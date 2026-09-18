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
  tone?: 'sand' | 'cream' | 'night'
}

const tones = {
  sand: 'bg-paper text-ink',
  cream: 'bg-surface text-ink',
  night: 'bg-night text-paper',
} as const

/**
 * Numbered section with a large display title. `wide` stacks the header
 * above the content; otherwise the title sits on the left on desktop.
 */
export function Section({
  id,
  number,
  title,
  intro,
  children,
  className = '',
  wide = false,
  tone = 'sand',
}: SectionProps) {
  const night = tone === 'night'
  const header = (
    <header className={wide ? 'mb-12 md:mb-16 print:mb-5' : 'md:col-span-4 lg:col-span-4 print:mb-5'}>
      <p className={`eyebrow mb-4 ${night ? 'text-gold' : 'text-accent'}`} aria-hidden="true">
        {number} — {title}
      </p>
      <h2 id={`${id}-title`} className={`font-display text-h2 ${night ? 'text-paper' : 'text-ink'}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 max-w-md text-sm leading-relaxed ${night ? 'text-fog' : 'text-muted'}`}>{intro}</p>
      ) : null}
    </header>
  )

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative py-20 md:py-28 lg:py-32 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {wide ? (
          <>
            {header}
            {children}
          </>
        ) : (
          <div className="grid gap-10 md:grid-cols-12 md:gap-10 print:block">
            {header}
            <div className="md:col-span-8 lg:col-span-8">{children}</div>
          </div>
        )}
      </div>
    </section>
  )
}
