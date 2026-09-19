import { Link, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { homeSection, navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { chromeBar, chromeThemeFromPath } from '../lib/chromeTheme'
import { DownloadCvButton } from './ui/DownloadCvButton'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const theme = chromeThemeFromPath(pathname)
  const bar = chromeBar[theme]
  const ids = useMemo(() => navigation.map((n) => n.id), [])
  const active = useActiveSection(onHome ? ids : [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`print-hidden sticky top-0 z-50 border-b backdrop-blur-md lg:ml-16 ${bar.header}`}>
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to={homeSection('top')} className={`text-xs font-medium tracking-[0.22em] uppercase ${bar.word}`}>
          {profile.firstName} {profile.lastName}
          <span className="sr-only">, back to top</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const isActive = onHome && active === item.id
            return (
              <li key={item.id}>
                <Link
                  to={homeSection(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`text-[11px] font-medium tracking-[0.16em] uppercase transition-colors ${
                    isActive ? bar.linkActive : bar.link
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li>
            <DownloadCvButton variant="primary" className={`h-8 px-4 text-[10px] ${bar.cv}`} />
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className={`-mr-2 inline-flex h-10 w-10 items-center justify-center md:hidden ${bar.toggle}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute top-0 left-0 h-px w-5 bg-current transition-transform duration-300 ease-out-quart ${
                open ? 'translate-y-[5.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 ease-out-quart ${
                open ? '-translate-y-[5.5px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className={`border-t md:hidden ${bar.menu}`}>
        <ul className="flex flex-col px-6 py-2">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                to={homeSection(item.id)}
                onClick={() => setOpen(false)}
                aria-current={onHome && active === item.id ? 'true' : undefined}
                className={`flex items-center justify-between border-b py-4 text-sm tracking-[0.12em] uppercase ${bar.menuItem} ${
                  onHome && active === item.id ? bar.linkActive : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-5">
            <DownloadCvButton variant="primary" className={`w-full ${bar.cv}`} onDone={() => setOpen(false)} />
          </li>
        </ul>
      </div>
    </header>
  )
}
