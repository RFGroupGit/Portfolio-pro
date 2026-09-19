import { FieldDevice, OpsFrame } from './chrome'

export function FlightMapScreen() {
  return (
    <OpsFrame title="missions / SOL-441">
      <div className="grid min-h-[360px] md:grid-cols-[1fr_15rem]">
        <div className="relative bg-[#161616]">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <svg className="absolute inset-6" viewBox="0 0 400 240" fill="none" aria-hidden="true">
            <polygon points="36,48 290,28 340,188 52,210" stroke="white" strokeWidth="1.2" fill="rgba(255,255,255,0.04)" />
            <path d="M70 62 L250 52 L300 168 L88 184 Z" stroke="white" strokeDasharray="3 5" />
            <circle cx="70" cy="62" r="3" fill="white" />
            <text x="78" y="58" fill="white" fontSize="10">
              WP1
            </text>
          </svg>
          <div className="relative p-4">
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Mission</p>
            <p className="mt-1 text-sm font-medium">Solar farm — Ballarat West</p>
            <p className="font-mono text-[10px] text-white/45">Polygon · 64 ha · GSD 2.6 cm</p>
          </div>
        </div>
        <aside className="space-y-4 border-t border-white/10 p-4 md:border-t-0 md:border-l">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Readiness</p>
          <p className="font-display text-3xl leading-none">Ready</p>
          <ul className="space-y-2 font-mono text-[10px] text-white/55">
            <li className="flex justify-between border-b border-white/10 pb-2 text-white">
              <span>Coverage</span>
              <span>100%</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Batteries</span>
              <span>4 / 4</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Window</span>
              <span>2 h</span>
            </li>
            <li className="flex justify-between">
              <span>Checklist</span>
              <span>8 / 8</span>
            </li>
          </ul>
        </aside>
      </div>
    </OpsFrame>
  )
}

export function FlightParamsScreen() {
  return (
    <OpsFrame title="missions / SOL-441 / parameters">
      <div className="grid min-h-[360px] md:grid-cols-[17rem_1fr]">
        <div className="space-y-3 border-b border-white/10 p-4 md:border-r md:border-b-0">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Parameters</p>
          {[
            ['Altitude', '120 m'],
            ['Front overlap', '80 %'],
            ['Side overlap', '70 %'],
            ['GSD', '2.6 cm/px'],
            ['Speed', '8 m/s'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-b border-white/10 py-2 font-mono text-[11px]">
              <span className="text-white/45">{label}</span>
              <span>{value}</span>
            </div>
          ))}
          <p className="mt-4 bg-white py-2 text-center font-mono text-[10px] tracking-[0.12em] uppercase text-black">
            Recalculate coverage
          </p>
        </div>
        <div className="bg-[#161616] p-4">
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Live coverage</p>
          <div className="grid h-52 grid-cols-8 grid-rows-5 gap-px bg-white/10 p-px">
            {Array.from({ length: 40 }, (_, i) => (
              <span key={i} className={i < 37 ? 'bg-white/80' : 'bg-white/15'} />
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] text-white/45">37 / 40 strips · 3 remaining west</p>
        </div>
      </div>
    </OpsFrame>
  )
}

export function FlightMobileScreen() {
  return (
    <FieldDevice>
      <div className="p-4">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/40">Pre-flight</p>
        <h3 className="mt-1 font-display text-2xl">Checklist</h3>
        <ul className="mt-5 space-y-1.5">
          {[
            ['Airspace NOTAM', true],
            ['Batteries 4/4', true],
            ['SD formatted', true],
            ['Home point', true],
            ['Coverage 100%', true],
            ['Wind < 8 m/s', false],
          ].map(([label, done]) => (
            <li
              key={String(label)}
              className={`flex items-center justify-between px-3 py-3 font-mono text-[11px] ${
                done ? 'bg-white text-black' : 'border border-white/20 text-white/50'
              }`}
            >
              <span>{label}</span>
              <span>{done ? 'OK' : 'HOLD'}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border border-white/20 py-3 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">
          Launch locked
        </p>
      </div>
    </FieldDevice>
  )
}

export function FlightReviewScreen() {
  return (
    <OpsFrame title="datasets / SOL-441 / review">
      <div className="p-4">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Geospatial QA</p>
            <p className="font-display text-2xl">1,248 images · 3 flags</p>
          </div>
          <p className="bg-white px-3 py-1 font-mono text-[10px] uppercase text-black">Hold processing</p>
        </div>
        <div className="grid grid-cols-4 gap-1 md:grid-cols-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={`aspect-[4/3] ${[2, 7, 10].includes(i) ? 'bg-white' : 'bg-white/10'}`}>
              {[2, 7, 10].includes(i) ? (
                <p className="p-2 font-mono text-[9px] text-black">{i === 2 ? 'BLUR' : i === 7 ? 'GAP' : 'EXPO'}</p>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] text-white/45">
          Flags must be accepted or the set is rejected before orthomosaic generation.
        </p>
      </div>
    </OpsFrame>
  )
}

export function FlightFleetScreen() {
  return (
    <OpsFrame title="fleet / today">
      <div className="p-4">
        <p className="mb-4 font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Crew board</p>
        <div className="grid gap-2">
          {[
            ['SOL-441', 'Ballarat West', 'Ready', true],
            ['MIN-208', 'Open cut north', 'Blocked — wind', false],
            ['CON-055', 'Rail corridor', 'In flight', true],
            ['SOL-390', 'Mildura array', 'Review', true],
          ].map(([id, place, status, ok]) => (
            <div key={String(id)} className="grid grid-cols-[6rem_1fr_auto] items-center gap-3 border border-white/10 px-3 py-2.5">
              <span className="font-mono text-[10px]">{id}</span>
              <span className="text-white/70">{place}</span>
              <span className={`font-mono text-[10px] uppercase ${ok ? 'text-white' : 'text-white/40'}`}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </OpsFrame>
  )
}

export function FlightDsScreen() {
  return (
    <OpsFrame title="ds / components">
      <div className="grid gap-3 p-4 md:grid-cols-3">
        <div className="border border-white/15 p-3">
          <p className="mb-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">Status</p>
          <div className="flex flex-wrap gap-1">
            {['Ready', 'Blocked', 'In flight', 'Review'].map((s) => (
              <span key={s} className="border border-white/30 px-2 py-1 font-mono text-[10px]">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-white/15 p-3">
          <p className="mb-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">Checklist row</p>
          <div className="space-y-1">
            <div className="bg-white px-2 py-2 font-mono text-[10px] text-black">Complete</div>
            <div className="border border-white/20 px-2 py-2 font-mono text-[10px] text-white/50">Pending</div>
          </div>
        </div>
        <div className="border border-white/15 p-3">
          <p className="mb-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">Map chrome</p>
          <div className="h-20 bg-[#161616] p-2">
            <div className="ml-auto w-7 space-y-1">
              <span className="block h-7 bg-white/10" />
              <span className="block h-7 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </OpsFrame>
  )
}
