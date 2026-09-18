import { useMemo } from 'react'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const numbers = ['01', '02', '03', '04', '05', '06']

/**
 * Book-spine index: a fixed left rail with initials, live section
 * numbers and the year. Hidden on small screens and in print.
 */
export function IndexRail() {
  const ids = useMemo(() => navigation.map((n) => n.id), [])
  const active = useActiveSection(ids)
  const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`
  const year = new Date().getFullYear()

  return (
    <nav
      aria-label="Section index"
      className="print-hidden fixed top-0 left-0 z-40 hidden h-dvh w-16 flex-col items-center justify-between border-r border-ink/15 bg-paper py-8 lg:flex"
    >
      <a href="#top" className="text-[11px] font-medium tracking-[0.28em] text-ink">
        {initials}
        <span className="sr-only">
          {' '}
          — {profile.firstName} {profile.lastName}, back to top
        </span>
      </a>

      <ol className="flex flex-col items-center gap-3 font-mono text-[10px] tabular-nums">
        {navigation.map((item, i) => {
          const isActive = active === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`${numbers[i]} ${item.label}`}
                className={`block transition-colors ${isActive ? 'text-ink' : 'text-ink/30 hover:text-ink'}`}
              >
                {numbers[i]}
              </a>
            </li>
          )
        })}
      </ol>

      <p className="spine-year font-mono text-[10px] tracking-[0.28em] text-ink/50">{year}</p>
    </nav>
  )
}
