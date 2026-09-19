import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { XpatialMark } from '../design-system/flight-ops/brand'
import { DsPanel, dsNav, isDsPageId, type DsPageId } from '../design-system/flight-ops/panels'

export function FlightOpsSystemPage() {
  const { search } = useLocation()
  const [, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const requested = new URLSearchParams(search).get('p') ?? 'overview'
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
    <main id="main" className="min-h-svh bg-[#1F232C] text-white print:bg-white print:text-black">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <XpatialMark className="h-8 w-8 text-white" />
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#FF6161]">Xpatial</p>
              <p className="font-display text-lg">Flight Ops Design System</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-sans text-[11px]">
            <Link
              to="/projects/flight-ops"
              className="rounded-full border border-[#FF6161] px-3 py-1.5 text-[#FF6161] hover:bg-[#FF6161] hover:text-white"
            >
              ← Case study
            </Link>
            <span className="text-white/35">v0.6</span>
            <span className="text-white/35">Charter</span>
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
              className="w-full rounded-full border border-white/15 bg-transparent px-3 py-1.5 font-sans text-[12px] text-white outline-none placeholder:text-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6161]"
            />
          </label>
          {groups.length === 0 ? (
            <p className="font-sans text-[12px] text-white/35">No matching pages.</p>
          ) : (
            groups.map((group) => (
              <div key={group.group} className="mb-8">
                <p className="mb-2 font-sans text-[9px] font-semibold tracking-[0.16em] uppercase text-[#FF6161]/70">{group.group}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={{ pathname: '/projects/flight-ops/system', search: `?p=${item.id}` }}
                        onClick={() => setParams({ p: item.id })}
                        aria-current={page === item.id ? 'page' : undefined}
                        className={`block rounded-md py-1 pl-2 font-sans text-[12px] ${
                          page === item.id ? 'bg-[#FF6161]/15 text-[#FF6161]' : 'text-white/45 hover:text-white'
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
              className="w-full rounded-xl border border-white/20 bg-[#1F232C] px-3 py-3 font-sans text-[13px] text-white"
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
