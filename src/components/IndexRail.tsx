import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { homeSection, navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const numbers = ['01', '02', '03', '04', '05', '06']

/**
 * Book-spine index: a fixed left rail with initials, live section
 * numbers and the year. Hidden on small screens and in print.
 */
export function IndexRail() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const onOps = pathname.startsWith('/projects/flight-ops')
  const ids = useMemo(() => navigation.map((n) => n.id), [])
  const active = useActiveSection(onHome ? ids : [])
  const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`
  const year = new Date().getFullYear()

  return (
    <nav
      aria-label="Section index"
      className={`print-hidden fixed top-0 left-0 z-40 hidden h-dvh w-16 flex-col items-center justify-between border-r py-8 lg:flex ${
        onOps ? 'border-white/10 bg-[#1F232C]' : 'border-ink/15 bg-paper'
      }`}
    >
      <Link
        to={homeSection('top')}
        className={`text-[11px] font-medium tracking-[0.28em] ${onOps ? 'text-white' : 'text-ink'}`}
      >
        {initials}
        <span className="sr-only">
          {' '}
          — {profile.firstName} {profile.lastName}, back to top
        </span>
      </Link>

      <ol className="flex flex-col items-center gap-3 font-mono text-[10px] tabular-nums">
        {navigation.map((item, i) => {
          const isActive = onHome && active === item.id
          return (
            <li key={item.id}>
              <Link
                to={homeSection(item.id)}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`${numbers[i]} ${item.label}`}
                className={`block transition-colors ${
                  isActive
                    ? onOps
                      ? 'text-white'
                      : 'text-ink'
                    : onOps
                      ? 'text-white/30 hover:text-white'
                      : 'text-ink/30 hover:text-ink'
                }`}
              >
                {numbers[i]}
              </Link>
            </li>
          )
        })}
      </ol>

      <p className={`spine-year font-mono text-[10px] tracking-[0.28em] ${onOps ? 'text-white/40' : 'text-ink/50'}`}>
        {year}
      </p>
    </nav>
  )
}
