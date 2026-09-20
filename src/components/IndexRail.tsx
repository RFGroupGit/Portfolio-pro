import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { homeSection, navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { chromeBar, chromeThemeFromPath } from '../lib/chromeTheme'

/**
 * Book-spine index: a fixed left rail with initials, live section
 * numbers and the year. Hidden on small screens and in print.
 */
export function IndexRail() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const theme = chromeThemeFromPath(pathname)
  const bar = chromeBar[theme]
  const ids = useMemo(() => navigation.map((n) => n.id), [])
  const active = useActiveSection(onHome ? ids : [])
  const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`
  const year = new Date().getFullYear()

  return (
    <nav
      aria-label="Section index"
      className={`print-hidden fixed top-0 left-0 z-40 hidden h-dvh w-16 flex-col items-center justify-between border-r py-8 lg:flex ${bar.header.replace('/95', '')}`}
    >
      <Link to={homeSection('top')} className={`text-[11px] font-medium tracking-[0.28em] ${bar.word}`}>
        {initials}
        <span className="sr-only">
          {' '}
          — {profile.firstName} {profile.lastName}, back to top
        </span>
      </Link>

      <ol className="flex flex-col items-center gap-3 font-mono text-[10px] tabular-nums">
        {navigation.map((item, i) => {
          const folio = String(i + 1).padStart(2, '0')
          const isActive = onHome && active === item.id
          return (
            <li key={item.id}>
              <Link
                to={homeSection(item.id)}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`${folio} ${item.label}`}
                className={`block transition-colors ${isActive ? bar.linkActive : bar.link}`}
              >
                {folio}
              </Link>
            </li>
          )
        })}
      </ol>

      <p className={`spine-year font-mono text-[10px] tracking-[0.28em] ${bar.year}`}>{year}</p>
    </nav>
  )
}
