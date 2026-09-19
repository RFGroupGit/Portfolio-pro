import {
  ChecklistRow,
  CoverageGrid,
  CrewRow,
  LaunchLock,
  LiveBadge,
  MapToolbar,
  OpsButton,
  OpsNav,
  ParamRow,
  QualityFlag,
  ReadinessMetric,
  SequenceStep,
  StatusChip,
} from '../../design-system/flight-ops/components'
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
          <div className="absolute top-3 right-3">
            <MapToolbar />
          </div>
          <div className="relative p-4">
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Mission</p>
            <p className="mt-1 text-sm font-medium">Solar farm — Ballarat West</p>
            <p className="font-mono text-[10px] text-white/45">Polygon · 64 ha · GSD 2.6 cm</p>
          </div>
        </div>
        <aside className="space-y-4 border-t border-white/10 p-4 md:border-t-0 md:border-l">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Readiness</p>
          <p className="font-display text-3xl leading-none">Ready</p>
          <ul>
            <ReadinessMetric label="Coverage" value="100%" />
            <ReadinessMetric label="Batteries" value="4 / 4" />
            <ReadinessMetric label="Window" value="2 h" />
            <ReadinessMetric label="Checklist" value="8 / 8" />
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
          <ParamRow label="Altitude" value="120 m" />
          <ParamRow label="Front overlap" value="80 %" />
          <ParamRow label="Side overlap" value="70 %" />
          <ParamRow label="GSD" value="2.6 cm/px" />
          <ParamRow label="Speed" value="8 m/s" />
          <div className="pt-2">
            <OpsButton size="sm">Recalculate coverage</OpsButton>
          </div>
        </div>
        <div className="bg-[#161616] p-4">
          <p className="mb-3 font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Live coverage</p>
          <CoverageGrid />
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
        <div className="mt-3">
          <SequenceStep current={5} total={6} label="Checks" />
        </div>
        <ul className="mt-5 space-y-1.5">
          <ChecklistRow label="Airspace NOTAM" state="ok" density="field" />
          <ChecklistRow label="Batteries 4/4" state="ok" density="field" />
          <ChecklistRow label="SD formatted" state="ok" density="field" />
          <ChecklistRow label="Home point" state="ok" density="field" />
          <ChecklistRow label="Coverage 100%" state="ok" density="field" />
          <ChecklistRow label="Wind < 8 m/s" state="hold" density="field" />
        </ul>
        <div className="mt-6">
          <LaunchLock locked />
        </div>
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
          <OpsButton size="sm" variant="hold">
            Hold processing
          </OpsButton>
        </div>
        <div className="grid grid-cols-4 gap-1 md:grid-cols-6">
          {Array.from({ length: 12 }, (_, i) =>
            i === 2 ? (
              <QualityFlag key={i} kind="blur" />
            ) : i === 7 ? (
              <QualityFlag key={i} kind="gap" />
            ) : i === 10 ? (
              <QualityFlag key={i} kind="exposure" />
            ) : (
              <div key={i} className="aspect-[4/3] bg-white/10" />
            ),
          )}
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
      <div className="flex min-h-[320px]">
        <OpsNav items={['Missions', 'Fleet', 'Datasets', 'Reports']} active="Fleet" />
        <div className="flex-1 p-4">
          <p className="mb-4 font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">Crew board</p>
          <div className="grid gap-2">
            <CrewRow id="SOL-441" place="Ballarat West" status="ready" />
            <CrewRow id="MIN-208" place="Open cut north" status="blocked" />
            <CrewRow id="CON-055" place="Rail corridor" status="inflight" />
            <CrewRow id="SOL-390" place="Mildura array" status="review" />
          </div>
        </div>
      </div>
    </OpsFrame>
  )
}

export function FlightDsScreen() {
  return (
    <OpsFrame title="ds.dronemapping.com / components / status">
      <div className="flex min-h-[320px]">
        <aside className="hidden w-40 shrink-0 border-r border-white/10 bg-[#0a0a0a] p-3 md:block">
          <p className="mb-3 font-mono text-[9px] tracking-[0.16em] uppercase text-white/35">Flight Ops DS</p>
          {['Colour', 'Type', 'Status', 'Checklist', 'Map', 'Voice'].map((item) => (
            <p
              key={item}
              className={`px-2 py-1.5 font-mono text-[10px] ${item === 'Status' ? 'bg-white text-black' : 'text-white/40'}`}
            >
              {item}
            </p>
          ))}
        </aside>
        <div className="flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-display text-lg">Status</p>
            <LiveBadge />
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusChip status="ready" />
            <StatusChip status="blocked" />
            <StatusChip status="inflight" />
            <StatusChip status="review" />
          </div>
          <p className="mt-6 font-mono text-[10px] text-white/40">
            Ready is a fill. Blocked is an outline. Colour is not used as the only signal.
          </p>
        </div>
      </div>
    </OpsFrame>
  )
}
