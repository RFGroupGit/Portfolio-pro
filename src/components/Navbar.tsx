import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { homeSection, navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { DownloadCvButton } from './ui/DownloadCvButton'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
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
    <header className="print-hidden sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur-md lg:ml-16">
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to={homeSection('top')} className="text-xs font-medium tracking-[0.22em] uppercase text-ink">
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
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li>
            <DownloadCvButton variant="primary" className="h-8 px-4 text-[10px]" />
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
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

      <div id="mobile-menu" hidden={!open} className="border-t border-ink/15 bg-paper md:hidden">
        <ul className="flex flex-col px-6 py-2">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                to={homeSection(item.id)}
                onClick={() => setOpen(false)}
                aria-current={onHome && active === item.id ? 'true' : undefined}
                className={`flex items-center justify-between border-b border-ink/10 py-4 text-sm tracking-[0.12em] uppercase ${
                  onHome && active === item.id ? 'text-ink' : 'text-ink-soft'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-5">
            <DownloadCvButton variant="primary" className="w-full" onDone={() => setOpen(false)} />
          </li>
        </ul>
      </div>
    </header>
  )
}
