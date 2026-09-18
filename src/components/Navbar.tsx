import { useEffect, useMemo, useRef, useState } from 'react'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { DownloadCvButton } from './ui/DownloadCvButton'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const ids = useMemo(() => navigation.map((n) => n.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top')
      const threshold = Math.max((hero?.offsetHeight ?? 520) - 72, 80)
      setOverHero(window.scrollY < threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const initials = `${profile.firstName.replace(/[[\]]/g, '').charAt(0)}${profile.lastName
    .replace(/[[\]]/g, '')
    .charAt(0)}`

  const inverted = overHero && !open

  return (
    <header
      className={`print-hidden sticky top-0 z-50 transition-colors duration-300 ${
        inverted ? 'bg-transparent' : 'border-b border-line/80 bg-paper/80 backdrop-blur-xl'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className={`flex items-center gap-2 font-display text-2xl tracking-tight transition-colors ${
            inverted ? 'text-paper hover:text-gold' : 'text-ink hover:text-accent'
          }`}
        >
          {initials || 'CV'}
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span className="sr-only">
            {' '}
            — {profile.firstName} {profile.lastName}, back to top
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-3 py-1.5 text-[0.8125rem] font-medium transition-colors duration-200 ${
                    inverted
                      ? isActive
                        ? 'bg-paper/10 text-paper'
                        : 'text-fog hover:text-paper'
                      : isActive
                        ? 'bg-ink text-paper'
                        : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
          <li className="ml-2">
            <DownloadCvButton
              variant={inverted ? 'primary' : 'secondary'}
              className={`h-9 px-4 text-xs ${inverted ? 'btn-on-dark' : ''}`}
            />
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className={`-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            inverted ? 'text-paper' : 'text-ink'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ease-out-quart ${
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

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-paper md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`flex items-center justify-between border-b border-line py-4 text-base transition-colors hover:text-accent ${
                  active === item.id ? 'text-ink' : 'text-ink-soft'
                }`}
              >
                {item.label}
                {active === item.id ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                ) : null}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <DownloadCvButton variant="primary" className="w-full" onDone={() => setOpen(false)} />
          </li>
        </ul>
      </div>
    </header>
  )
}
