import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { DsPanel, dsNav, isDsPageId, type DsPageId } from '../design-system/flight-ops/panels'

export function FlightOpsSystemPage() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const requested = params.get('p') ?? 'overview'
  const page: DsPageId = isDsPageId(requested) ? requested : 'overview'

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return dsNav
    return dsNav
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.label.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  useEffect(() => {
    const previous = document.title
    document.title = `Flight Ops Design System — Robin Fremy`
    return () => {
      document.title = previous
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [page])

  return (
    <main id="main" className="min-h-svh bg-[#0b0b0b] text-white print:bg-white print:text-black">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/40">Dronemapping</p>
            <p className="font-display text-lg">Flight Ops Design System</p>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-[10px] tracking-[0.14em] uppercase">
            <Link to="/projects/flight-ops" className="text-white/45 hover:text-white">
              ← Case study
            </Link>
            <span className="text-white/25">v0.5</span>
            <span className="text-white/25">Increment 2</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[90rem] items-start">
        <nav
          aria-label="Design system"
          className="print-hidden sticky top-14 hidden max-h-[calc(100svh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-white/10 py-8 pr-4 pl-6 lg:block md:pl-10"
        >
          <label className="mb-6 block">
            <span className="sr-only">Search the design system</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-full border border-white/15 bg-transparent px-2 py-1.5 font-mono text-[11px] text-white outline-none placeholder:text-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            />
          </label>
          {groups.length === 0 ? (
            <p className="font-mono text-[11px] text-white/35">No matching pages.</p>
          ) : (
            groups.map((group) => (
              <div key={group.group} className="mb-8">
                <p className="mb-2 font-mono text-[9px] tracking-[0.16em] uppercase text-white/30">{group.group}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={`/projects/flight-ops/system?p=${item.id}`}
                        aria-current={page === item.id ? 'page' : undefined}
                        className={`block py-1 font-mono text-[11px] ${
                          page === item.id ? 'text-white' : 'text-white/40 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </nav>

        <div className="min-w-0 flex-1 px-6 py-10 md:px-10 md:py-14">
          <label className="print-hidden mb-8 block lg:hidden">
            <span className="sr-only">Design system section</span>
            <select
              className="w-full border border-white/20 bg-[#0b0b0b] px-3 py-3 font-mono text-[12px] text-white"
              value={page}
              onChange={(event) => setParams({ p: event.target.value })}
            >
              {dsNav.map((group) => (
                <optgroup key={group.group} label={group.group}>
                  {group.items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <DsPanel id={page} />
        </div>
      </div>
    </main>
  )
}
