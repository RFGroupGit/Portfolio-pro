import { useEffect, useMemo, useRef, useState } from 'react'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { DownloadCvButton } from './ui/DownloadCvButton'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const ids = useMemo(() => navigation.map((n) => n.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape and restore focus to the toggle
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

  // Close the menu automatically if the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const initials = `${profile.firstName.replace(/[[\]]/g, '').charAt(0)}${profile.lastName
    .replace(/[[\]]/g, '')
    .charAt(0)}`

  return (
    <header
      className={`print-hidden sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-paper/90 backdrop-blur-md' : 'border-transparent bg-paper'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-xl tracking-tight text-ink transition-colors hover:text-accent">
          {initials || 'CV'}
          <span className="text-accent">.</span>
          <span className="sr-only">
            {' '}
            — {profile.firstName} {profile.lastName}, back to top
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative py-1 text-sm transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out-quart hover:text-ink ${
                    isActive ? 'text-ink after:scale-x-100' : 'text-muted'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
          <li>
            <DownloadCvButton variant="secondary" className="h-9 px-4 text-xs" />
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink md:hidden"
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
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
