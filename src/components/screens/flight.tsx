import {
  BatteryStrip,
  ChecklistRow,
  CoverageGrid,
  FilterChip,
  LaunchLock,
  LiveBadge,
  MapToolbar,
  MissionId,
  OpsBanner,
  OpsButton,
  OpsNav,
  ParamRow,
  ReadinessMetric,
  SearchField,
  SegmentedControl,
  SequenceStep,
  StatusChip,
  WeatherRow,
} from '../../design-system/flight-ops/components'
import { CaptureTile, SurveyPlot } from '../../design-system/flight-ops/survey-map'
import { surveyMapStyle } from '../../design-system/flight-ops/brand'
import { FieldDevice, OpsFrame } from './chrome'

const JOB_META = 'CON-214 · Fishermans Bend · 09:14 AEST · CASA ReOC · J. Chen RePL'

function MapLayers({ active }: { active: string }) {
  return (
    <div className="flex flex-wrap gap-1">
      {['Nadir', 'Plan', 'Terrain'].map((layer) => (
        <span
          key={layer}
          className={`rounded-full px-2 py-0.5 font-sans text-[9px] font-medium tracking-[0.08em] uppercase ${
            layer === active ? 'bg-[#4EC8FF] text-[#15202C]' : 'border border-white/15 text-white/50'
          }`}
        >
          {layer}
        </span>
      ))}
    </div>
  )
}

function TelemetryStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-white/10 bg-[#1F232C]/80 px-3 py-1.5 font-mono text-[9px] text-white/50">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

export function FlightMapScreen() {
  return (
    <OpsFrame title="Jobs / CON-214" meta={JOB_META}>
      <div className="grid min-h-[360px] md:grid-cols-[1fr_16.5rem]">
        <div className="relative min-h-[280px]" style={surveyMapStyle}>
          <SurveyPlot mode="plan" className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" />
          <div className="absolute top-3 right-3">
            <MapToolbar />
          </div>
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-3 p-3">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Job</p>
              <p className="mt-1 text-sm font-medium">Fishermans Bend — progress</p>
              <p className="font-sans text-[11px] text-white/50">18 ha · Polygon · 40 strips · lawnmower</p>
            </div>
            <MapLayers active="Plan" />
          </div>
        </div>
        <aside className="space-y-3 border-t border-white/10 p-4 md:border-t-0 md:border-l">
          <div className="flex items-center justify-between">
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Readiness</p>
            <StatusChip status="ready" />
          </div>
          <p className="font-display text-3xl leading-none text-[#FF6161]">Ready</p>
          <p className="font-sans text-[11px] text-white/45">Take-off 09:14 · Window 2 h 08 min</p>
          <ul>
            <ReadinessMetric label="Coverage" value="100 %" />
            <ReadinessMetric label="Batteries" value="TB60 4 / 4" />
            <ReadinessMetric label="RTK" value="FIX · 18 sats" />
            <ReadinessMetric label="Wind" value="5 m/s" />
            <ReadinessMetric label="Checklist" value="8 / 8" />
          </ul>
          <div className="pt-1">
            <p className="font-sans text-[10px] text-white/40">Airframe</p>
            <p className="text-[12px]">Matrice 350 RTK · P1 24 mm</p>
          </div>
        </aside>
      </div>
      <TelemetryStrip
        items={[
          'M350 RTK',
          'P1 24 mm',
          'AGL 80 m',
          'GSD 2.2 cm',
          '80 / 70 %',
          '18 ha',
          '37.833°S 144.931°E',
          'RTK FIX',
          'Wind 5 m/s SSW',
          'CASA ReOC',
        ]}
      />
    </OpsFrame>
  )
}

export function FlightParamsScreen() {
  return (
    <OpsFrame title="Jobs / CON-214 / Parameters" meta={JOB_META}>
      <div className="grid min-h-[360px] md:grid-cols-[17.5rem_1fr]">
        <div className="space-y-1 border-b border-white/10 p-4 md:border-r md:border-b-0">
          <p className="mb-2 font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">
            Parameters
          </p>
          <ParamRow label="AGL" value="80 m" />
          <ParamRow label="Front overlap" value="80 %" />
          <ParamRow label="Side overlap" value="70 %" />
          <ParamRow label="GSD" value="2.2 cm/px" />
          <ParamRow label="Speed" value="7 m/s" />
          <ParamRow label="Line spacing" value="22.6 m" />
          <ParamRow label="Trigger" value="1.6 s" />
          <ParamRow label="Shutter / ISO" value="1/1000 · 100" />
          <p className="pt-2 font-sans text-[11px] text-white/45">486 frames · 28 min · 3 packs</p>
          <div className="pt-2">
            <OpsButton size="sm">Recalculate coverage</OpsButton>
          </div>
        </div>
        <div className="flex flex-col" style={surveyMapStyle}>
          <div className="flex items-center justify-between px-4 pt-3">
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#4EC8FF]">
              Live coverage
            </p>
            <MapLayers active="Nadir" />
          </div>
          <div className="relative min-h-[200px] flex-1">
            <SurveyPlot mode="coverage" className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)]" />
          </div>
          <div className="border-t border-white/10 bg-[#1F232C]/80 p-3">
            <CoverageGrid covered={37} total={40} />
          </div>
        </div>
      </div>
    </OpsFrame>
  )
}

export function FlightMobileScreen() {
  return (
    <FieldDevice>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">Pre-flight</p>
          <span className="font-mono text-[9px] text-white/40">09:09 AEST</span>
        </div>
        <h3 className="mt-1 font-display text-2xl">Checklist</h3>
        <p className="font-sans text-[11px] text-white/45">Fishermans Bend · J. Chen RePL</p>
        <div className="mt-3">
          <WeatherRow wind="9.4 m/s" limit="8 m/s" gust="11.2" state="hold" />
        </div>
        <div className="mt-3">
          <SequenceStep current={5} total={6} label="Checks" />
        </div>
        <ul className="mt-3 space-y-1.5">
          <ChecklistRow label="CASA NOTAM nil" state="ok" density="field" />
          <ChecklistRow label="TB60 packs 4/4" state="ok" density="field" />
          <ChecklistRow label="SD 256 GB formatted" state="ok" density="field" />
          <ChecklistRow label="Home point RTK FIX" state="ok" density="field" />
          <ChecklistRow label="Coverage 100 %" state="ok" density="field" />
          <ChecklistRow label="Wind < 8 m/s" state="hold" density="field" />
        </ul>
        <div className="mt-4">
          <BatteryStrip count={4} charged={4} />
        </div>
        <div className="mt-4">
          <LaunchLock locked />
        </div>
      </div>
    </FieldDevice>
  )
}

const reviewFlags = [
  { seed: 2, flag: 'blur' as const, frame: '0241', note: 'Strip 12 · motion blur' },
  { seed: 7, flag: 'gap' as const, frame: '0688', note: 'West edge · missing trigger' },
  { seed: 10, flag: 'exposure' as const, frame: '1102', note: 'Façade glare · overexposed' },
]

export function FlightReviewScreen() {
  return (
    <OpsFrame title="Datasets / CON-214 / Review" meta="DS-214-A · 486 images · P1 24 mm · GSD 2.2 cm">
      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">
              Geospatial QA
            </p>
            <p className="font-display text-2xl">486 images · 3 flags</p>
            <p className="mt-1 font-mono text-[10px] text-white/45">Tie 94 % · RMSE 2.1 cm · nadir · 18 ha</p>
          </div>
          <OpsButton size="sm" variant="hold">
            Hold processing
          </OpsButton>
        </div>
        <div className="grid grid-cols-4 gap-1.5 md:grid-cols-6">
          {Array.from({ length: 18 }, (_, i) => {
            const flagged = reviewFlags.find((item) => item.seed === i)
            return (
              <CaptureTile
                key={i}
                seed={i}
                flag={flagged?.flag}
                frame={String(i * 67 + 12).padStart(4, '0')}
              />
            )
          })}
        </div>
        <ul className="mt-3 space-y-1 font-sans text-[11px] text-white/55">
          {reviewFlags.map((item) => (
            <li key={item.frame} className="flex justify-between gap-3 border-b border-white/10 py-1.5 last:border-0">
              <span>
                <span className="font-mono text-[#FF6161]">DJI_{item.frame}.JPG</span>
                <span className="ml-2">{item.note}</span>
              </span>
              <span className="uppercase tracking-[0.08em] text-[#FF6161]">{item.flag}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-sans text-[11px] text-white/40">
          Flags must be accepted or the set is rejected before orthomosaic generation.
        </p>
      </div>
    </OpsFrame>
  )
}

const fleet = [
  {
    id: 'CON-214',
    client: 'BuildCo',
    site: 'Fishermans Bend',
    air: 'M350 RTK',
    pic: 'J. Chen',
    window: '09:14–11:22',
    cov: '100 %',
    status: 'ready' as const,
  },
  {
    id: 'STK-087',
    client: 'Quarry Vic',
    site: 'Lysterfield',
    air: 'M350 RTK',
    pic: 'R. Patel',
    window: '07:00–09:10',
    cov: '62 %',
    status: 'blocked' as const,
  },
  {
    id: 'RF-132',
    client: 'Private',
    site: 'Dandenong South',
    air: 'M3E',
    pic: 'A. Nguyen',
    window: '05:40–07:15',
    cov: '88 %',
    status: 'inflight' as const,
  },
  {
    id: 'SOL-441',
    client: 'AGL Energy',
    site: 'Ballarat West',
    air: 'M350 RTK',
    pic: 'K. Walsh',
    window: '08:30–10:00',
    cov: '100 %',
    status: 'review' as const,
  },
  {
    id: 'INF-112',
    client: 'VicTrack',
    site: 'Geelong siding',
    air: 'M3E',
    pic: '—',
    window: 'Hold wx',
    cov: '—',
    status: 'blocked' as const,
  },
]

export function FlightFleetScreen() {
  return (
    <OpsFrame title="Job board / this week" meta="This week · 5 crews · VIC · AEST">
      <div className="flex min-h-[320px]">
        <OpsNav items={['Jobs', 'Board', 'Datasets', 'Reports']} active="Board" />
        <div className="min-w-0 flex-1 p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <p className="mr-auto font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#FF6161]">
              This week
            </p>
            <FilterChip label="Today" selected />
            <FilterChip label="Civil" />
            <FilterChip label="Stockpile" />
            <FilterChip label="Roof" />
          </div>
          <div className="mb-3 max-w-xs">
            <SearchField placeholder="Search job, PIC, site" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-[11px]">
              <thead className="font-sans text-[9px] font-medium tracking-[0.1em] uppercase text-white/40">
                <tr>
                  {['Job', 'Client', 'Site', 'Airframe', 'PIC', 'Window', 'Cov.', ''].map((col) => (
                    <th key={col} className="border-b border-white/10 py-2 pr-3 font-medium">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fleet.map((row) => (
                  <tr key={row.id}>
                    <td className="border-b border-white/10 py-2 pr-3">
                      <MissionId id={row.id} />
                    </td>
                    <td className="border-b border-white/10 py-2 pr-3 text-white/70">{row.client}</td>
                    <td className="border-b border-white/10 py-2 pr-3 text-white/70">{row.site}</td>
                    <td className="border-b border-white/10 py-2 pr-3 font-mono text-[10px] text-white/55">{row.air}</td>
                    <td className="border-b border-white/10 py-2 pr-3">{row.pic}</td>
                    <td className="border-b border-white/10 py-2 pr-3 font-mono text-[10px] text-white/55">
                      {row.window}
                    </td>
                    <td className="border-b border-white/10 py-2 pr-3 tabular-nums">{row.cov}</td>
                    <td className="border-b border-white/10 py-2">
                      <StatusChip status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-sans text-[10px] text-white/40">
            Fishermans Bend 5 m/s · Lysterfield 11 m/s hold · Ballarat 3.2 m/s · Geelong 9.8 m/s hold
          </p>
        </div>
      </div>
    </OpsFrame>
  )
}

export function FlightDsScreen() {
  return (
    <OpsFrame title="Design system / Status" meta="Flight Ops DS · Xpatial navy / coral / cyan">
      <div className="flex min-h-[320px]">
        <aside className="hidden w-40 shrink-0 border-r border-white/10 bg-[#1F232C] p-3 md:block">
          <p className="mb-3 font-sans text-[9px] font-semibold tracking-[0.14em] uppercase text-[#FF6161]">
            Flight Ops DS
          </p>
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
          <div className="mt-5 grid max-w-md gap-3 sm:grid-cols-2">
            <OpsBanner kind="hold" title="Hold processing">
              BLUR · GAP · EXPO uncleared.
            </OpsBanner>
            <div className="rounded-xl border border-white/10 p-3">
              <CoverageGrid covered={37} total={40} />
            </div>
          </div>
          <div className="mt-4">
            <SegmentedControl options={['Nadir', 'Oblique']} value="Nadir" ariaLabel="Capture mode" />
          </div>
          <p className="mt-5 font-sans text-[11px] text-white/50">
            Ready is coral. In flight is cyan. Blocked is an outline — never a traffic-light palette.
          </p>
        </div>
      </div>
    </OpsFrame>
  )
}
