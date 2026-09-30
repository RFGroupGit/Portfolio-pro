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
import { mapGridStyle } from '../../design-system/flight-ops/brand'
import { FieldDevice, OpsFrame } from './chrome'

export function FlightMapScreen() {
  return (
    <OpsFrame title="Jobs / CON-214">
      <div className="grid min-h-[360px] md:grid-cols-[1fr_15rem]">
        <div className="relative" style={mapGridStyle}>
          <svg className="absolute inset-6" viewBox="0 0 400 240" fill="none" aria-hidden="true">
            <polygon
              points="36,48 290,28 340,188 52,210"
              stroke="#4EC8FF"
              strokeWidth="1.6"
              fill="rgba(78,200,255,0.12)"
            />
            <path d="M70 62 L250 52 L300 168 L88 184 Z" stroke="#FF6161" strokeDasharray="4 5" />
            <circle cx="70" cy="62" r="3.5" fill="#FF6161" />
            <text x="78" y="58" fill="#FF6161" fontSize="11" fontFamily="sans-serif">
              WP1
            </text>
          </svg>
          <div className="absolute top-3 right-3">
            <MapToolbar />
          </div>
          <div className="relative p-4">
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Job</p>
            <p className="mt-1 text-sm font-medium">Fishermans Bend — progress</p>
            <p className="font-sans text-[11px] text-white/50">18 ha · GSD 2.2 cm</p>
          </div>
        </div>
        <aside className="space-y-4 border-t border-white/10 p-4 md:border-t-0 md:border-l">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Readiness</p>
          <p className="font-display text-3xl leading-none text-[#FF6161]">Ready</p>
          <ul>
            <ReadinessMetric label="Coverage" value="100%" />
            <ReadinessMetric label="Batteries" value="4 / 4" />
            <ReadinessMetric label="Wind" value="5 m/s" />
            <ReadinessMetric label="Checklist" value="6 / 6" />
          </ul>
        </aside>
      </div>
    </OpsFrame>
  )
}

export function FlightParamsScreen() {
  return (
    <OpsFrame title="Jobs / CON-214 / Parameters">
      <div className="grid min-h-[360px] md:grid-cols-[17rem_1fr]">
        <div className="space-y-3 border-b border-white/10 p-4 md:border-r md:border-b-0">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Parameters</p>
          <ParamRow label="Altitude" value="80 m AGL" />
          <ParamRow label="Front overlap" value="80 %" />
          <ParamRow label="Side overlap" value="70 %" />
          <ParamRow label="GSD" value="2.2 cm/px" />
          <ParamRow label="Speed" value="7 m/s" />
          <div className="pt-2">
            <OpsButton size="sm">Recalculate coverage</OpsButton>
          </div>
        </div>
        <div className="p-4" style={mapGridStyle}>
          <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#4EC8FF]">Live coverage</p>
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
        <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Pre-flight</p>
        <h3 className="mt-1 font-display text-2xl">Checklist</h3>
        <div className="mt-3">
          <SequenceStep current={5} total={6} label="Checks" />
        </div>
        <ul className="mt-5 space-y-1.5">
          <ChecklistRow label="Airspace check" state="ok" density="field" />
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
    <OpsFrame title="Datasets / CON-214 / Review">
      <div className="p-4">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Geospatial QA</p>
            <p className="font-display text-2xl">486 images · 3 flags</p>
          </div>
          <OpsButton size="sm" variant="hold">
            Hold processing
          </OpsButton>
        </div>
        <div className="grid grid-cols-4 gap-1.5 md:grid-cols-6">
          {Array.from({ length: 12 }, (_, i) =>
            i === 2 ? (
              <QualityFlag key={i} kind="blur" />
            ) : i === 7 ? (
              <QualityFlag key={i} kind="gap" />
            ) : i === 10 ? (
              <QualityFlag key={i} kind="exposure" />
            ) : (
              <div key={i} className="aspect-[4/3] rounded-md bg-[#4EC8FF]/15" />
            ),
          )}
        </div>
        <p className="mt-3 font-sans text-[11px] text-white/50">
          Flags must be accepted or the set is rejected before orthomosaic generation.
        </p>
      </div>
    </OpsFrame>
  )
}

export function FlightFleetScreen() {
  return (
    <OpsFrame title="Job board / this week">
      <div className="flex min-h-[320px]">
        <OpsNav items={['Jobs', 'Board', 'Datasets', 'Reports']} active="Board" />
        <div className="flex-1 p-4">
          <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">This week</p>
          <div className="grid gap-2">
            <CrewRow id="CON-214" place="Fishermans Bend" status="ready" />
            <CrewRow id="STK-087" place="Quarry stockpiles, Lysterfield" status="blocked" />
            <CrewRow id="RF-132" place="Roof inspection, Dandenong South" status="inflight" />
            <CrewRow id="SOL-441" place="Solar farm, Ballarat West" status="review" />
          </div>
        </div>
      </div>
    </OpsFrame>
  )
}

export function FlightDsScreen() {
  return (
    <OpsFrame title="Design system / Status">
      <div className="flex min-h-[320px]">
        <aside className="hidden w-40 shrink-0 border-r border-white/10 bg-[#1F232C] p-3 md:block">
          <p className="mb-3 font-sans text-[9px] font-semibold tracking-[0.14em] uppercase text-[#FF6161]">Flight Ops DS</p>
          {['Colour', 'Type', 'Status', 'Checklist', 'Map', 'Voice'].map((item) => (
            <p
              key={item}
              className={`rounded-md px-2 py-1.5 font-sans text-[11px] ${item === 'Status' ? 'bg-[#FF6161] text-white' : 'text-white/45'}`}
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
          <p className="mt-6 font-sans text-[11px] text-white/50">
            Ready is coral. In flight is cyan. Blocked is an outline — never a traffic-light palette.
          </p>
        </div>
      </div>
    </OpsFrame>
  )
}
