import type { ReactNode } from 'react'
import {
  BatteryStrip,
  ChecklistRow,
  CoverageGrid,
  CrewRow,
  EmptyState,
  FieldBar,
  FilterChip,
  LaunchLock,
  LiveBadge,
  MapToolbar,
  MissionId,
  OpsBanner,
  OpsButton,
  OpsField,
  OpsKbd,
  OpsNav,
  OpsTable,
  ParamRow,
  QualityFlag,
  ReadinessMetric,
  SearchField,
  SegmentedControl,
  SequenceStep,
  StatusChip,
  UnitValue,
  WeatherRow,
} from './components'
import { idPattern, opsColorCss, opsDensity, opsLayout, opsMotion, opsSpace, opsStroke, opsType, opsZ, units, vocabulary } from './tokens'

export const dsNav = [
  {
    group: 'Start',
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'principles', label: 'Principles' },
      { id: 'using', label: 'How to use' },
    ],
  },
  {
    group: 'Foundations',
    items: [
      { id: 'colour', label: 'Colour' },
      { id: 'type', label: 'Typography' },
      { id: 'spacing', label: 'Spacing' },
      { id: 'density', label: 'Density' },
      { id: 'layout', label: 'Layout' },
      { id: 'stroke', label: 'Stroke' },
      { id: 'motion', label: 'Motion' },
      { id: 'iconography', label: 'Iconography' },
      { id: 'tokens', label: 'Token index' },
    ],
  },
  {
    group: 'Components',
    items: [
      { id: 'button', label: 'Button' },
      { id: 'status', label: 'Status' },
      { id: 'checklist', label: 'Checklist' },
      { id: 'launch', label: 'Launch lock' },
      { id: 'readiness', label: 'Readiness' },
      { id: 'map', label: 'Map chrome' },
      { id: 'coverage', label: 'Coverage' },
      { id: 'flag', label: 'Quality flag' },
      { id: 'param', label: 'Parameter' },
      { id: 'crew', label: 'Crew row' },
      { id: 'live', label: 'Live badge' },
      { id: 'chrome', label: 'App chrome' },
      { id: 'segmented', label: 'Segmented' },
      { id: 'field', label: 'Field' },
      { id: 'filter', label: 'Filter & search' },
      { id: 'table', label: 'Table' },
      { id: 'banner', label: 'Banner' },
      { id: 'empty', label: 'Empty state' },
      { id: 'weather', label: 'Weather' },
      { id: 'battery', label: 'Battery' },
    ],
  },
  {
    group: 'Patterns',
    items: [
      { id: 'ready-to-fly', label: 'Ready to fly' },
      { id: 'field-desktop', label: 'Field vs desktop' },
      { id: 'hold', label: 'Hold processing' },
      { id: 'recalculate', label: 'Recalculate' },
      { id: 'fleet', label: 'Fleet board' },
      { id: 'briefing', label: 'Briefing' },
      { id: 'review-qa', label: 'Review QA' },
    ],
  },
  {
    group: 'Content & a11y',
    items: [
      { id: 'voice', label: 'Voice' },
      { id: 'units', label: 'Units & IDs' },
      { id: 'a11y', label: 'Accessibility' },
      { id: 'keyboard', label: 'Keyboard' },
      { id: 'handoff', label: 'Hand-off' },
      { id: 'contribute', label: 'Contribute' },
    ],
  },
] as const

export type DsPageId = (typeof dsNav)[number]['items'][number]['id']

export function isDsPageId(value: string): value is DsPageId {
  return dsNav.some((group) => group.items.some((item) => item.id === value))
}

export function DsPanel({ id }: { id: DsPageId }) {
  switch (id) {
    case 'overview':
      return <Overview />
    case 'principles':
      return <Principles />
    case 'using':
      return <Using />
    case 'colour':
      return <Colour />
    case 'type':
      return <Type />
    case 'spacing':
      return <Spacing />
    case 'density':
      return <Density />
    case 'layout':
      return <Layout />
    case 'stroke':
      return <Stroke />
    case 'motion':
      return <Motion />
    case 'iconography':
      return <Iconography />
    case 'tokens':
      return <TokenIndex />
    case 'button':
      return <ButtonSpec />
    case 'status':
      return <StatusSpec />
    case 'checklist':
      return <ChecklistSpec />
    case 'launch':
      return <LaunchSpec />
    case 'readiness':
      return <ReadinessSpec />
    case 'map':
      return <MapSpec />
    case 'coverage':
      return <CoverageSpec />
    case 'flag':
      return <FlagSpec />
    case 'param':
      return <ParamSpec />
    case 'crew':
      return <CrewSpec />
    case 'live':
      return <LiveSpec />
    case 'chrome':
      return <ChromeSpec />
    case 'segmented':
      return <SegmentedSpec />
    case 'field':
      return <FieldSpec />
    case 'filter':
      return <FilterSpec />
    case 'table':
      return <TableSpec />
    case 'banner':
      return <BannerSpec />
    case 'empty':
      return <EmptySpec />
    case 'weather':
      return <WeatherSpec />
    case 'battery':
      return <BatterySpec />
    case 'ready-to-fly':
      return <ReadyPattern />
    case 'field-desktop':
      return <FieldPattern />
    case 'hold':
      return <HoldPattern />
    case 'recalculate':
      return <RecalculatePattern />
    case 'fleet':
      return <FleetPattern />
    case 'briefing':
      return <BriefingPattern />
    case 'review-qa':
      return <ReviewPattern />
    case 'voice':
      return <Voice />
    case 'units':
      return <Units />
    case 'a11y':
      return <A11y />
    case 'keyboard':
      return <Keyboard />
    case 'handoff':
      return <Handoff />
    case 'contribute':
      return <Contribute />
  }
}

function Spec({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: string
  title: string
  intro: string
  children: ReactNode
}) {
  return (
    <article>
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/35">{kicker ?? 'Flight Ops DS'}</p>
      <h1 className="font-display mt-3 text-4xl leading-none tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">{intro}</p>
      <div className="mt-12 space-y-12">{children}</div>
    </article>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/40">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function DoDont({ do: d, dont }: { do: string; dont: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <p className="border border-white/15 p-4 text-sm leading-relaxed">
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase">Do. </span>
        {d}
      </p>
      <p className="border border-white/15 p-4 text-sm leading-relaxed text-white/55">
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">Don’t. </span>
        {dont}
      </p>
    </div>
  )
}

function Canvas({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="border border-white/10 bg-[#111]">
      {label ? (
        <p className="border-b border-white/10 px-3 py-2 font-mono text-[9px] tracking-[0.14em] uppercase text-white/35">
          {label}
        </p>
      ) : null}
      <div className="p-5">{children}</div>
    </div>
  )
}

function Props({ rows }: { rows: [string, string, string][] }) {
  return (
    <Block title="API">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] text-left text-[12px]">
          <thead className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">
            <tr>
              <th className="border-b border-white/10 py-2 pr-4">Prop</th>
              <th className="border-b border-white/10 py-2 pr-4">Type</th>
              <th className="border-b border-white/10 py-2">Notes</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {rows.map(([p, t, n]) => (
              <tr key={p}>
                <td className="border-b border-white/10 py-2 pr-4 text-white">{p}</td>
                <td className="border-b border-white/10 py-2 pr-4 text-white/45">{t}</td>
                <td className="border-b border-white/10 py-2 text-white/55">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Block>
  )
}

function Overview() {
  return (
    <Spec
      title="Flight Ops Design System"
      intro="The language for planning a mission, locking a launch, and holding a dataset. Built so desktop ops and the field app stay one product, and so engineering could ship two increments without inventing a third look."
    >
      <div className="grid gap-px bg-white/10 sm:grid-cols-4">
        {[
          ['2 surfaces', 'Desktop console + field device'],
          ['20 components', 'States, API and usage'],
          ['7 patterns', 'Ready-to-fly through review'],
          ['2 increments', 'Handed over as this library'],
        ].map(([v, l]) => (
          <div key={l} className="bg-[#0b0b0b] px-5 py-6">
            <p className="font-display text-2xl">{v}</p>
            <p className="mt-2 font-mono text-[10px] text-white/40">{l}</p>
          </div>
        ))}
      </div>
      <Block title="What this system is for">
        <p className="max-w-2xl text-sm leading-relaxed text-white/65">
          Not a generic dark UI kit. Every component exists because of a failure we saw in research: incomplete take-off,
          unusable imagery, or a form that looked “filled” while the mission was not ready. If a pattern does not serve
          ready-to-fly or usable-dataset, it does not belong here.
        </p>
      </Block>
      <Block title="Surfaces">
        <div className="grid gap-4 md:grid-cols-2">
          <Canvas label="Desktop — ops console">
            <div className="flex flex-wrap gap-2">
              <StatusChip status="ready" />
              <StatusChip status="blocked" />
              <LiveBadge />
            </div>
            <p className="mt-4 font-mono text-[10px] text-white/40">Dense. Map is the source of truth.</p>
          </Canvas>
          <Canvas label="Field — pre-flight">
            <div className="max-w-[220px] space-y-1">
              <SequenceStep current={5} total={6} label="Pre-flight" />
              <div className="h-2" />
              <ChecklistRow label="Coverage 100%" state="ok" density="field" />
              <ChecklistRow label="Wind < 8 m/s" state="hold" density="field" />
            </div>
          </Canvas>
        </div>
      </Block>
      <Block title="Governance">
        <p className="max-w-2xl text-sm leading-relaxed text-white/65">
          Names in Figma, Azure DevOps and this site are identical. A squad that needs a new control writes it here first.
          Screenshots in Slack are not a source of truth.
        </p>
      </Block>
    </Spec>
  )
}

function Principles() {
  return (
    <Spec
      kicker="Principles"
      title="Four rules"
      intro="These are not posters. They are the tests a new component has to pass before it enters the library."
    >
      {[
        [
          '01 · State before chrome',
          'Ready, blocked, hold. If a crew cannot read the state from across the room, the component failed — regardless of how the map looks.',
        ],
        [
          '02 · One vocabulary, two densities',
          'Coverage, batteries, home point mean the same on desktop and in the field. The field app is a sequence, not a miniature of the console.',
        ],
        [
          '03 · The map tells the truth',
          'Coverage, GSD and remaining strips live on the polygon. A settings modal is not a source of truth.',
        ],
        [
          '04 · Colour is not the signal',
          'Black and white, fill versus outline. Flags are labels (BLUR, GAP, EXPO), not a traffic-light palette. This keeps the product operational and accessible.',
        ],
      ].map(([t, b]) => (
        <div key={t} className="border-t border-white/10 pt-8">
          <h2 className="font-display text-2xl">{t}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">{b}</p>
        </div>
      ))}
    </Spec>
  )
}

function Using() {
  return (
    <Spec
      kicker="Start"
      title="How to use"
      intro="Designers and engineers share the same names. If the Figma component is StatusChip, the React export is StatusChip."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-white/10 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">Design</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/65">
            <li>Open the Figma library <span className="text-white">Flight Ops</span>.</li>
            <li>Start from a pattern (Ready to fly, Review QA), not a blank frame.</li>
            <li>If a control is missing, add it to this site before drawing it twice.</li>
          </ul>
        </div>
        <div className="border border-white/10 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">Engineering</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/65">
            <li>
              Import from <span className="font-mono text-[11px] text-white">design-system/flight-ops</span>.
            </li>
            <li>Do not restyle StatusChip per screen. Change the token.</li>
            <li>Azure DevOps items name the component, not a PNG.</li>
          </ul>
        </div>
      </div>
      <Block title="Import">
        <pre className="overflow-x-auto border border-white/10 bg-[#111] p-4 font-mono text-[11px] leading-relaxed text-white/70">
          {`import {
  StatusChip,
  ChecklistRow,
  LaunchLock,
} from 'src/design-system/flight-ops'`}
        </pre>
      </Block>
    </Spec>
  )
}

function Colour() {
  return (
    <Spec
      kicker="Foundations"
      title="Colour"
      intro="A black operations canvas. White is information, not decoration. There is no success green or warning amber — those would compete with the map and fail in sunlight on a phone."
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(opsColorCss).map(([key, { token, value, use }]) => (
          <div key={key} className="border border-white/10">
            <div className="h-20 border-b border-white/10" style={{ background: value, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }} />
            <div className="p-3">
              <p className="font-mono text-[10px]">{token}</p>
              <p className="mt-1 font-mono text-[10px] text-white/40">{value}</p>
              <p className="mt-2 text-[11px] text-white/55">{use}</p>
            </div>
          </div>
        ))}
      </div>
      <Block title="Contrast">
        <ul className="max-w-xl space-y-2 font-mono text-[11px]">
          <li className="flex justify-between border-b border-white/10 py-2">
            <span>Ink on canvas</span>
            <span>AAA</span>
          </li>
          <li className="flex justify-between border-b border-white/10 py-2">
            <span>Muted on canvas</span>
            <span>AA large / UI labels</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Inverse ink on inverse</span>
            <span>AAA</span>
          </li>
        </ul>
      </Block>
      <DoDont
        do="Use fill versus outline to separate Ready from Blocked."
        dont="Add a green or red to “make status clearer”. It fights the map and breaks in the field."
      />
    </Spec>
  )
}

function Type() {
  return (
    <Spec
      kicker="Foundations"
      title="Typography"
      intro="Three roles, not a scale for its own sake. Display is the readiness readout. Mono is the operational layer (IDs, parameters, status). Sans is rare — captions and DS documentation."
    >
      <div className="space-y-8">
        <div>
          <p className="font-mono text-[10px] text-white/40">Display · Outfit · readout</p>
          <p className="font-display mt-2 text-6xl leading-none">Ready</p>
        </div>
        <div>
          <p className="font-mono text-[10px] text-white/40">Mono · IDs, params, status</p>
          <p className="mt-2 font-mono text-lg tracking-[0.08em]">SOL-441 · 2.6 cm/px · HOLD</p>
        </div>
        <div>
          <p className="font-mono text-[10px] text-white/40">Sans · {opsType.sans} · documentation only</p>
          <p className="mt-2 max-w-md text-sm text-white/70">
            Product UI does not editorialize. If a sentence is needed, it is an operational instruction.
          </p>
        </div>
      </div>
      <Block title="Sizes">
        <ul className="max-w-lg font-mono text-[11px]">
          {Object.entries(opsType.sizes).map(([name, px]) => (
            <li key={name} className="flex justify-between border-b border-white/10 py-2">
              <span>{name}</span>
              <span>{px} px</span>
            </li>
          ))}
        </ul>
      </Block>
      <Block title="Tracking">
        <ul className="max-w-lg font-mono text-[11px]">
          {Object.entries(opsType.tracking).map(([name, val]) => (
            <li key={name} className="flex justify-between border-b border-white/10 py-2">
              <span>{name}</span>
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </Block>
    </Spec>
  )
}

function Spacing() {
  return (
    <Spec
      kicker="Foundations"
      title="Spacing"
      intro="A 4 px base. Desktop is tight so a map and a rail can share 1440. Field rows jump to 48 px so a gloved thumb hits the check."
    >
      <div className="flex items-end gap-3">
        {Object.entries(opsSpace).map(([step, px]) => (
          <div key={step} className="text-center">
            <div className="w-6 bg-white" style={{ height: px }} />
            <p className="mt-2 font-mono text-[9px] text-white/40">
              {step}/{px}
            </p>
          </div>
        ))}
      </div>
      <Block title="Usage">
        <ul className="max-w-xl space-y-2 text-sm text-white/65">
          <li>Stack space-2 (8) between checklist rows.</li>
          <li>Rail padding is space-4 (16). Map tools inset is space-3 (12).</li>
          <li>Never invent a 10 or 20. Snap to the scale.</li>
        </ul>
      </Block>
    </Spec>
  )
}

function Density() {
  return (
    <Spec
      kicker="Foundations"
      title="Density"
      intro="Same component, two densities. Never scale the desktop down and call it mobile."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Canvas label={`Desktop · row ${opsDensity.desktop.row}px`}>
          <ChecklistRow label="Coverage 100%" state="ok" />
          <div className="h-1.5" />
          <ChecklistRow label="Wind < 8 m/s" state="hold" />
        </Canvas>
        <Canvas label={`Field · row ${opsDensity.field.row}px · tap ${opsDensity.field.tap}px`}>
          <ChecklistRow label="Coverage 100%" state="ok" density="field" />
          <div className="h-1.5" />
          <ChecklistRow label="Wind < 8 m/s" state="hold" density="field" />
        </Canvas>
      </div>
      <DoDont
        do="Use field density on the pre-flight sequence only."
        dont="Pinch the console onto a phone. Pilots do not plan polygons with gloves."
      />
    </Spec>
  )
}

function Layout() {
  return (
    <Spec
      kicker="Foundations"
      title="Layout"
      intro="The console is a map with a rail, not a dashboard of cards. Field is a single column sequence. Break at 1024 — below that, the rail stacks under the map; the planner is not a phone app."
    >
      <Canvas label={`Console · ${opsLayout.console} wide`}>
        <div className="flex h-32 border border-white/10 font-mono text-[9px] tracking-[0.1em] uppercase">
          <div className="flex w-16 items-center justify-center border-r border-white/10 bg-[#0a0a0a] text-white/40">
            Nav {opsLayout.nav}
          </div>
          <div className="flex flex-1 items-center justify-center bg-[#161616] text-white/50">Map min {opsLayout.mapMin}</div>
          <div className="flex w-24 items-center justify-center border-l border-white/10 text-white/40">Rail {opsLayout.rail}</div>
        </div>
      </Canvas>
      <Block title="Measures">
        <ul className="max-w-lg font-mono text-[11px]">
          {Object.entries(opsLayout).map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-white/10 py-2">
              <span>{k}</span>
              <span>{v} px</span>
            </li>
          ))}
        </ul>
      </Block>
      <DoDont
        do="Keep the map as the largest region. The rail is a readout, not a form."
        dont="Wrap the map in a card with a drop shadow. Elevation is not in this system."
      />
    </Spec>
  )
}

function Stroke() {
  return (
    <Spec
      kicker="Foundations"
      title="Stroke"
      intro="Everything is a hairline. Radius is 0. The product is an instrument, not a consumer app. Rounding is reserved for the marketing site, never for ops."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Canvas label={`${opsStroke.hairline}px hairline`}>
          <div className="h-16 border border-white/20" />
        </Canvas>
        <Canvas label="Dashed · pending">
          <div className="h-16 border border-dashed border-white/20" />
        </Canvas>
        <Canvas label={`Radius ${opsStroke.radius}`}>
          <div className="h-16 bg-white" />
        </Canvas>
      </div>
      <Block title="Z-index">
        <ul className="max-w-lg font-mono text-[11px]">
          {Object.entries(opsZ).map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-white/10 py-2">
              <span>{k}</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </Block>
    </Spec>
  )
}

function Motion() {
  return (
    <Spec
      kicker="Foundations"
      title="Motion"
      intro="Status can move. The map should not entertain. Durations stay under 200 ms. Reduced motion: snap, no coverage fill animation."
    >
      <ul className="max-w-lg font-mono text-[11px]">
        <li className="flex justify-between border-b border-white/10 py-2">
          <span>Status / lock</span>
          <span>{opsMotion.status} ms</span>
        </li>
        <li className="flex justify-between border-b border-white/10 py-2">
          <span>Panel / rail</span>
          <span>{opsMotion.panel} ms</span>
        </li>
        <li className="flex justify-between py-2">
          <span>Reduced motion</span>
          <span>{opsMotion.none} ms · snap</span>
        </li>
      </ul>
      <DoDont
        do="Cross-fade Ready ↔ Blocked in 120 ms. Coverage fills instantly when reduced-motion is set."
        dont="Animate the polygon, pulse the live dot, or bounce the launch button."
      />
    </Spec>
  )
}

function Iconography() {
  return (
    <Spec
      kicker="Foundations"
      title="Iconography"
      intro="Almost none. Map tools are +, −, ⊙. Flags are type (BLUR), not pictograms. Icons that need a legend have already failed in the field."
    >
      <Canvas label="Map toolbar">
        <MapToolbar />
      </Canvas>
      <DoDont do="Label the control in mono next to it if there is any doubt." dont="Invent a drone glyph for status." />
    </Spec>
  )
}

function TokenIndex() {
  return (
    <Spec
      kicker="Foundations"
      title="Token index"
      intro="The contract with engineering. Copy these names into Figma variables. Do not introduce a parallel palette."
    >
      <pre className="overflow-x-auto border border-white/10 bg-[#111] p-4 font-mono text-[11px] leading-relaxed text-white/70">
        {Object.values(opsColorCss)
          .map((t) => `${t.token}: ${t.value};`)
          .join('\n')}
      </pre>
      <Block title="Type roles">
        <p className="font-mono text-[11px] text-white/60">
          --ops-font-display: Outfit · --ops-font-mono: system mono · --ops-font-sans: Plus Jakarta Sans (docs only)
        </p>
      </Block>
    </Spec>
  )
}

function ButtonSpec() {
  return (
    <Spec
      kicker="Component · 1.2"
      title="Button"
      intro="One primary per view. Primary is inverse (white). Ghost is an outline for secondary. Hold processing uses primary on purpose — it is the action, not a suggestion."
    >
      <Canvas label="States">
        <div className="flex flex-wrap gap-3">
          <OpsButton size="sm">Primary</OpsButton>
          <OpsButton size="sm" variant="ghost">
            Ghost
          </OpsButton>
          <OpsButton size="sm" variant="hold">
            Hold processing
          </OpsButton>
          <OpsButton size="sm" disabled>
            Disabled
          </OpsButton>
        </div>
        <p className="mt-6 font-mono text-[10px] text-white/40">Field size (44 px min)</p>
        <div className="mt-2">
          <OpsButton size="lg">Launch</OpsButton>
        </div>
      </Canvas>
      <Props
        rows={[
          ['variant', 'primary | ghost | hold', 'Default primary'],
          ['size', 'sm | md | lg', 'lg is the field target'],
          ['disabled', 'boolean', 'Opacity 35, no pointer'],
        ]}
      />
      <DoDont do="One filled button per screen." dont="Stack two primaries. The map already competes for attention." />
    </Spec>
  )
}

function StatusSpec() {
  return (
    <Spec
      kicker="Component · 1.4"
      title="Status"
      intro="Four mission states. Ready is a fill so it reads at distance. Blocked is an outline so it never looks done. In flight carries a live mark. Review is a quiet fill for analysts."
    >
      <Canvas>
        <div className="flex flex-wrap gap-2">
          <StatusChip status="ready" />
          <StatusChip status="blocked" />
          <StatusChip status="inflight" />
          <StatusChip status="review" />
        </div>
      </Canvas>
      <Block title="When to use which">
        <ul className="max-w-xl space-y-3 text-sm text-white/65">
          <li>
            <span className="text-white">Ready</span> — coverage, batteries, window and checklist are all true.
          </li>
          <li>
            <span className="text-white">Blocked</span> — any of those is false. Say why next to the chip (wind, gap…).
          </li>
          <li>
            <span className="text-white">In flight</span> — capture in progress. Do not edit parameters.
          </li>
          <li>
            <span className="text-white">Review</span> — imagery is on the grid, processing is not started.
          </li>
        </ul>
      </Block>
      <Props rows={[['status', 'ready | blocked | inflight | review', 'Required. Copy is not overridable.']]} />
      <DoDont do="Pair Blocked with the missing check." dont="Use Ready while the checklist still has a Hold." />
    </Spec>
  )
}

function ChecklistSpec() {
  return (
    <Spec
      kicker="Component · 1.3"
      title="Checklist row"
      intro="The unit of the field app. OK is inverse. Hold is an outline. Pending is dashed — used on desktop when a check has not been run yet."
    >
      <Canvas label="Field density">
        <div className="max-w-sm space-y-1.5">
          <ChecklistRow label="Airspace NOTAM" state="ok" density="field" />
          <ChecklistRow label="Batteries 4/4" state="ok" density="field" />
          <ChecklistRow label="Wind < 8 m/s" state="hold" density="field" />
          <ChecklistRow label="Radio check" state="pending" density="field" />
        </div>
      </Canvas>
      <Props
        rows={[
          ['label', 'string', 'Operational English, not a sentence'],
          ['state', 'ok | hold | pending', 'Pending is dashed'],
          ['density', 'desktop | field', 'Default desktop'],
        ]}
      />
      <DoDont
        do="Keep the row full-width. The thumb needs a large target, not a checkbox."
        dont="Use a native checkbox. It is unusable with gloves and does not match desktop status."
      />
    </Spec>
  )
}

function LaunchSpec() {
  return (
    <Spec
      kicker="Component · 1.1"
      title="Launch lock"
      intro="The field app’s only irreversible action. Locked until every row is OK. There is no “launch anyway”."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Canvas label="Locked">
          <LaunchLock locked />
        </Canvas>
        <Canvas label="Armed">
          <LaunchLock locked={false} />
        </Canvas>
      </div>
      <Props rows={[['locked', 'boolean', 'True renders the inert label, false renders Launch']]} />
      <DoDont do="Disable launch when any row is Hold or Pending." dont="Add a skip. Re-flights cost more than a lock." />
    </Spec>
  )
}

function ReadinessSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Readiness rail"
      intro="The right column of mission overview. A large Ready/Blocked readout plus four metrics. This is what an ops lead reads from across the room."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Canvas label="Ready">
          <p className="font-display text-4xl">Ready</p>
          <ul className="mt-4 max-w-xs">
            <ReadinessMetric label="Coverage" value="100%" />
            <ReadinessMetric label="Batteries" value="4 / 4" />
            <ReadinessMetric label="Window" value="2 h" />
            <ReadinessMetric label="Checklist" value="8 / 8" />
          </ul>
        </Canvas>
        <Canvas label="Blocked">
          <p className="font-display text-4xl text-white/50">Blocked</p>
          <ul className="mt-4 max-w-xs">
            <ReadinessMetric label="Coverage" value="92%" ok={false} />
            <ReadinessMetric label="Batteries" value="4 / 4" />
            <ReadinessMetric label="Window" value="2 h" />
            <ReadinessMetric label="Checklist" value="7 / 8" ok={false} />
          </ul>
        </Canvas>
      </div>
      <Props
        rows={[
          ['label', 'string', 'Coverage, Batteries, Window, Checklist'],
          ['value', 'string', 'Include the unit'],
          ['ok', 'boolean', 'Default true. False mutes the row'],
        ]}
      />
      <DoDont
        do="If any metric fails, the readout becomes Blocked and the failing row uses muted ink."
        dont="Show Ready with a red metric underneath. The readout is the truth."
      />
    </Spec>
  )
}

function MapSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Map chrome"
      intro="The map is a workspace, not a thumbnail. Grid, polygon, dashed plan, waypoint. Tools sit on the map: zoom in, zoom out, locate. No extra card around the tools."
    >
      <Canvas>
        <div className="relative h-48 bg-[#161616]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="absolute top-3 right-3">
            <MapToolbar />
          </div>
        </div>
      </Canvas>
      <Block title="Tools">
        <p className="max-w-xl text-sm leading-relaxed text-white/65">
          + zoom in · − zoom out · ⊙ locate home point. Each control is 32 px on desktop. aria-label on the group is “Map
          controls”.
        </p>
      </Block>
    </Spec>
  )
}

function CoverageSpec() {
  return (
    <Spec
      kicker="Component · 1.1"
      title="Coverage"
      intro="A strip grid bound to altitude, overlap and GSD. Missing strips stay visible. Recalculate is a primary on the parameter panel, not a toast."
    >
      <Canvas>
        <CoverageGrid covered={37} total={40} />
      </Canvas>
      <Props
        rows={[
          ['covered', 'number', 'Default 37'],
          ['total', 'number', 'Default 40. Western remainder is the point'],
        ]}
      />
      <DoDont
        do="Leave unfilled strips in the same grid. The western edge is the point."
        dont="Hide remainder in a log file or a tooltip."
      />
    </Spec>
  )
}

function FlagSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Quality flag"
      intro="Blur, gap, exposure. Inverse tiles on the review grid. Designed with analysts. A flagged set holds processing until accept or reject."
    >
      <Canvas>
        <div className="grid max-w-md grid-cols-4 gap-1">
          <QualityFlag kind="blur" />
          <div className="aspect-[4/3] bg-white/10" />
          <QualityFlag kind="gap" />
          <QualityFlag kind="exposure" />
        </div>
      </Canvas>
      <Props rows={[['kind', 'blur | gap | exposure', 'Renders BLUR / GAP / EXPO. No other codes.']]} />
      <DoDont do="Use the three codes. They match how analysts already talk." dont="Invent a severity colour scale." />
    </Spec>
  )
}

function ParamSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Parameter"
      intro="Label left, value right, mono. Used for altitude, overlap, GSD, speed. Editing happens in place; the coverage grid updates on Recalculate."
    >
      <Canvas>
        <div className="max-w-xs">
          <ParamRow label="Altitude" value="120 m" />
          <ParamRow label="GSD" value="2.6 cm/px" />
        </div>
      </Canvas>
      <Props
        rows={[
          ['label', 'string', 'Left, muted'],
          ['value', 'string', 'Always include the unit'],
        ]}
      />
    </Spec>
  )
}

function CrewSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Crew row"
      intro="Ops lead board. Mission ID, place, status chip. “Filled form” is not a column — only operational status."
    >
      <Canvas>
        <div className="space-y-2">
          <CrewRow id="SOL-441" place="Ballarat West" status="ready" />
          <CrewRow id="MIN-208" place="Open cut north" status="blocked" />
        </div>
      </Canvas>
      <Props
        rows={[
          ['id', 'string', 'SOL-441 pattern'],
          ['place', 'string', 'Truncates'],
          ['status', 'MissionStatus', 'Renders StatusChip'],
        ]}
      />
    </Spec>
  )
}

function LiveSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Live badge"
      intro="Marks a stream that is currently true: in-flight capture, live coverage preview. Inverse, tiny, uppercase. Not a marketing pill."
    >
      <Canvas>
        <LiveBadge />
      </Canvas>
      <DoDont
        do="Put Live next to a feed that is updating now."
        dont="Use it as a ‘new feature’ badge. That is not this product."
      />
    </Spec>
  )
}

function ChromeSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="App chrome"
      intro="Desktop: a 144 px ops nav, inverse for the current item. Field: a 24 px status bar with GPS, mission ID and battery. Both are instrument chrome, not marketing headers."
    >
      <Canvas label="Ops nav">
        <div className="flex min-h-[160px] border border-white/10">
          <OpsNav items={['Missions', 'Fleet', 'Datasets', 'Reports']} active="Fleet" />
          <div className="flex-1 p-4 font-mono text-[10px] text-white/40">Workspace</div>
        </div>
      </Canvas>
      <Canvas label="Field bar">
        <div className="max-w-[260px] border border-white/10">
          <FieldBar />
        </div>
      </Canvas>
      <Props
        rows={[
          ['OpsNav.items', 'string[]', 'Four items. Do not grow this into a mega-menu'],
          ['OpsNav.active', 'string', 'Must match an item'],
          ['FieldBar.mission / gps / battery', 'string', 'Defaults SOL-441 · GPS 12 · 74%'],
        ]}
      />
    </Spec>
  )
}

function SegmentedSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Segmented"
      intro="Mutually exclusive capture modes. Nadir versus oblique. Two or three options. Inverse fill on the selected segment."
    >
      <Canvas>
        <SegmentedControl options={['Nadir', 'Oblique']} value="Nadir" ariaLabel="Capture mode" />
      </Canvas>
      <Props
        rows={[
          ['options', 'string[]', '2–3 items'],
          ['value', 'string', 'Must be in options'],
          ['ariaLabel', 'string', 'Required for the group'],
        ]}
      />
      <DoDont do="Use for a mode that changes the map immediately." dont="Use for filters of more than three values — that is FilterChip." />
    </Spec>
  )
}

function FieldSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Field"
      intro="Numeric parameters that need a unit. Label above, value in mono, unit on the right. Recalculate is a separate primary — the field does not auto-submit on blur."
    >
      <Canvas>
        <div className="grid max-w-sm gap-4">
          <OpsField label="Altitude" value="120" unit="m" />
          <OpsField label="Speed" value="8" unit="m/s" />
        </div>
      </Canvas>
      <DoDont
        do="Keep the unit outside the value so a pilot can scan a column of numbers."
        dont="Put the unit inside a placeholder. Placeholders disappear on focus."
      />
    </Spec>
  )
}

function FilterSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Filter & search"
      intro="Fleet and datasets. Search is a slash field. Filters are chips. Selected is inverse. Never hide Ready missions behind a dropdown."
    >
      <Canvas>
        <div className="max-w-md space-y-4">
          <SearchField />
          <div className="flex flex-wrap gap-2">
            <FilterChip label="All" selected />
            <FilterChip label="Ready" />
            <FilterChip label="Blocked" />
            <FilterChip label="In flight" />
          </div>
        </div>
      </Canvas>
      <DoDont do="Default the board to All so an ops lead sees Blocked first." dont="Add colour dots next to each chip." />
    </Spec>
  )
}

function TableSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Table"
      intro="Dense, mono, hairline. For reports and dataset lists. Status still uses the chip, not a word in a cell, when the row is operational."
    >
      <Canvas>
        <OpsTable
          columns={['ID', 'Place', 'Images', 'GSD']}
          rows={[
            ['SOL-441', 'Ballarat West', '1,248', '2.6 cm/px'],
            ['MIN-208', 'Open cut north', '—', '—'],
          ]}
        />
      </Canvas>
      <DoDont do="Align numbers to a tabular mono." dont="Zebra-stripe. Hairlines are enough." />
    </Spec>
  )
}

function BannerSpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Banner"
      intro="Three kinds. Hold is inverse — processing must not start. Locked is an outline. Info is a quiet border. Banners sit above the workspace, never as a toast that disappears."
    >
      <div className="space-y-3">
        <OpsBanner kind="hold" title="Hold processing">
          3 quality flags must be accepted or rejected.
        </OpsBanner>
        <OpsBanner kind="locked" title="Launch locked">
          Wind is outside the window.
        </OpsBanner>
        <OpsBanner kind="info" title="Coverage recalculated">
          37 of 40 strips. Western edge still open.
        </OpsBanner>
      </div>
      <Props
        rows={[
          ['kind', 'hold | info | locked', 'Hold is the only inverse'],
          ['title', 'string', 'Uppercase mono'],
          ['children', 'ReactNode', 'One sentence of cause'],
        ]}
      />
    </Spec>
  )
}

function EmptySpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Empty state"
      intro="A dashed frame, a readout, one action. Used when there are no missions today or no flags on a clean set."
    >
      <Canvas>
        <EmptyState title="No missions today" body="Plan from the polygon. The board stays empty until a crew is assigned." action="Plan mission" />
      </Canvas>
      <DoDont do="Give one next action." dont="Illustrate a drone. Empty is a fact, not a mascot." />
    </Spec>
  )
}

function WeatherSpec() {
  return (
    <Spec
      kicker="Component · 1.1"
      title="Weather"
      intro="Wind versus the mission limit. Inside window is a quiet panel. Outside window is Hold — the same word as the checklist. Gust is always shown so a pilot is not surprised on site."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Canvas label="Inside window">
          <WeatherRow wind="6.2 m/s" limit="8 m/s" gust="7.1 m/s" />
        </Canvas>
        <Canvas label="Hold">
          <WeatherRow wind="9.4 m/s" limit="8 m/s" gust="12.0 m/s" state="hold" />
        </Canvas>
      </div>
      <DoDont
        do="If gust exceeds the limit, the row is Hold even if average wind is fine."
        dont="Colour the number green or red. The word Hold is the signal."
      />
    </Spec>
  )
}

function BatterySpec() {
  return (
    <Spec
      kicker="Component · 1.0"
      title="Battery"
      intro="A pack count, not a consumer battery icon. Four slots because that is how the kits are packed. Unfilled slots are the missing packs."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Canvas label="4 / 4">
          <BatteryStrip />
        </Canvas>
        <Canvas label="2 / 4">
          <BatteryStrip charged={2} />
        </Canvas>
      </div>
      <Props
        rows={[
          ['count', 'number', 'Default 4'],
          ['charged', 'number', 'Filled slots'],
        ]}
      />
    </Spec>
  )
}

function ReadyPattern() {
  return (
    <Spec
      kicker="Pattern"
      title="Ready to fly"
      intro="A mission is Ready only when coverage, batteries, weather window and checklist are all true. The map, the rail and the field lock must agree. If they disagree, Blocked wins."
    >
      <Block title="Rule">
        <p className="max-w-2xl text-sm leading-relaxed text-white/65">
          Desktop may show the rail. Field may show the sequence. Neither can override the other. Launch is armed only
          when the field list is complete, even if the desktop already says Ready.
        </p>
      </Block>
      <Canvas label="Composition">
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="max-w-xs">
            <ReadinessMetric label="Coverage" value="100%" />
            <ReadinessMetric label="Batteries" value="4 / 4" />
            <ReadinessMetric label="Window" value="2 h" />
            <ReadinessMetric label="Checklist" value="8 / 8" />
          </ul>
          <div className="space-y-2">
            <StatusChip status="ready" />
            <p className="font-mono text-[10px] text-white/40">Readout, chips and lock all say Ready — or none of them do.</p>
          </div>
        </div>
      </Canvas>
    </Spec>
  )
}

function FieldPattern() {
  return (
    <Spec
      kicker="Pattern"
      title="Field vs desktop"
      intro="Desktop: map + rail + tables. Field: ordered checks + launch lock. Same words. Different density. Never a responsive squash of the planner."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Canvas label="Desktop">
          <StatusChip status="ready" />
          <p className="mt-3 font-mono text-[10px] text-white/40">Read at 1440 · 11 px</p>
        </Canvas>
        <Canvas label="Field">
          <SequenceStep current={5} total={6} label="Pre-flight" />
          <div className="mt-3">
            <LaunchLock locked />
          </div>
          <p className="mt-3 font-mono text-[10px] text-white/40">Thumb · 44 px min</p>
        </Canvas>
      </div>
    </Spec>
  )
}

function HoldPattern() {
  return (
    <Spec
      kicker="Pattern"
      title="Hold processing"
      intro="A flagged set cannot start an orthomosaic. Hold processing is a primary action on the review workspace. Accept or reject each flag first."
    >
      <OpsBanner kind="hold" title="Hold processing">
        BLUR · GAP · EXPO must be cleared before the job starts.
      </OpsBanner>
      <Canvas>
        <div className="flex items-center justify-between gap-4">
          <div className="grid grid-cols-4 gap-1">
            <QualityFlag kind="blur" />
            <QualityFlag kind="gap" />
            <QualityFlag kind="exposure" />
            <div className="aspect-[4/3] bg-white/10" />
          </div>
          <OpsButton size="sm" variant="hold">
            Hold processing
          </OpsButton>
        </div>
      </Canvas>
    </Spec>
  )
}

function RecalculatePattern() {
  return (
    <Spec
      kicker="Pattern"
      title="Recalculate"
      intro="Altitude, overlap and GSD drive the strip grid. Changing a field does not silently rewrite coverage. Recalculate is the only primary on the parameter panel."
    >
      <Canvas>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <ParamRow label="Altitude" value="120 m" />
            <ParamRow label="Front overlap" value="80 %" />
            <ParamRow label="GSD" value="2.6 cm/px" />
            <OpsButton size="sm">Recalculate coverage</OpsButton>
          </div>
          <CoverageGrid covered={37} total={40} />
        </div>
      </Canvas>
      <DoDont
        do="Show the previous grid until Recalculate runs, then replace it."
        dont="Live-update on every keystroke. A half-typed altitude is not a flight plan."
      />
    </Spec>
  )
}

function FleetPattern() {
  return (
    <Spec
      kicker="Pattern"
      title="Fleet board"
      intro="The ops-lead surface. Filter, then rows. Status is the last column because that is what they came to read. Place is a name, not a coordinate."
    >
      <Canvas>
        <div className="mb-4 flex flex-wrap gap-2">
          <FilterChip label="All" selected />
          <FilterChip label="Ready" />
          <FilterChip label="Blocked" />
        </div>
        <div className="space-y-2">
          <CrewRow id="SOL-441" place="Ballarat West" status="ready" />
          <CrewRow id="MIN-208" place="Open cut north" status="blocked" />
          <CrewRow id="CON-055" place="Rail corridor" status="inflight" />
        </div>
      </Canvas>
    </Spec>
  )
}

function BriefingPattern() {
  return (
    <Spec
      kicker="Pattern"
      title="Briefing"
      intro="What a crew looks at before anyone drives to site. Mission ID, polygon, weather, batteries, window. If any of those is missing, the mission is Blocked — not ‘awaiting confirmation’."
    >
      <Canvas>
        <div className="grid gap-6 md:grid-cols-[1fr_12rem]">
          <div>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">Mission</p>
            <p className="mt-1">
              <MissionId id="SOL-441" />
            </p>
            <p className="mt-1 text-sm">Solar farm — Ballarat West</p>
            <p className="font-mono text-[10px] text-white/45">Polygon · 64 ha · GSD 2.6 cm</p>
          </div>
          <div className="space-y-4">
            <WeatherRow wind="6.2 m/s" limit="8 m/s" gust="7.1 m/s" />
            <BatteryStrip />
          </div>
        </div>
      </Canvas>
    </Spec>
  )
}

function ReviewPattern() {
  return (
    <Spec
      kicker="Pattern"
      title="Review QA"
      intro="Analysts see the grid first, the hold second. Flags are tiles, not a sidebar list. A clean set can still be held if metadata is incomplete."
    >
      <Canvas>
        <div className="mb-4 flex items-end justify-between">
          <p className="font-display text-2xl">1,248 images · 3 flags</p>
          <OpsButton size="sm" variant="hold">
            Hold processing
          </OpsButton>
        </div>
        <div className="grid grid-cols-6 gap-1">
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
      </Canvas>
    </Spec>
  )
}

function Voice() {
  return (
    <Spec
      kicker="Content"
      title="Voice"
      intro="Operational English. Short. No cheerleading. The words come from pilots and analysts, then get frozen here so the two apps do not drift."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">
            <tr>
              <th className="border-b border-white/10 py-2 pr-4">Use</th>
              <th className="border-b border-white/10 py-2 pr-4">Not</th>
              <th className="border-b border-white/10 py-2">Why</th>
            </tr>
          </thead>
          <tbody>
            {vocabulary.map((row) => (
              <tr key={row.use}>
                <td className="border-b border-white/10 py-3 pr-4 font-medium">{row.use}</td>
                <td className="border-b border-white/10 py-3 pr-4 text-white/45">{row.not}</td>
                <td className="border-b border-white/10 py-3 text-white/55">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Spec>
  )
}

function Units() {
  return (
    <Spec
      kicker="Content"
      title="Units & IDs"
      intro="A number without a unit is decoration. IDs follow a site-type prefix so a board can be scanned without opening the row."
    >
      <Block title="Units">
        <ul className="max-w-lg font-mono text-[11px]">
          {units.map((row) => (
            <li key={row.measure} className="flex justify-between gap-4 border-b border-white/10 py-2">
              <span>{row.measure}</span>
              <span className="text-white/45">
                {row.unit} · {row.example}
              </span>
            </li>
          ))}
        </ul>
      </Block>
      <Block title="Mission ID">
        <p className="text-sm text-white/65">
          <MissionId id={idPattern.solar} /> · <MissionId id={idPattern.mining} /> · <MissionId id={idPattern.construction} />
        </p>
        <p className="mt-3 max-w-xl font-mono text-[11px] text-white/45">{idPattern.rule}</p>
        <p className="mt-6 font-mono text-[12px]">
          Example readout: <UnitValue value="2.6" unit="cm/px" />
        </p>
      </Block>
      <DoDont do="Always write the unit. 120 is not an altitude." dont="Localise to feet in the field app only. One unit system, both surfaces." />
    </Spec>
  )
}

function A11y() {
  return (
    <Spec
      kicker="Accessibility"
      title="Accessible by default"
      intro="Status is fill versus outline, not hue. Focus is a 2 px white ring. Field targets are 44 px. Reduced motion disables coverage animation. Screen readers get the state in text (Ready, Hold, Launch locked)."
    >
      <ul className="max-w-2xl space-y-3 text-sm text-white/65">
        <li>— Contrast: ink on canvas AAA; inverse ink on flags AAA.</li>
        <li>— Do not rely on the live dot alone; the word Live or In flight is always present.</li>
        <li>— Launch locked is announced as a disabled action, not as a colour change.</li>
        <li>— Map tools have visible labels in the DS; in-product they have aria-label.</li>
        <li>— Segmented uses aria-pressed. Filter chips do the same.</li>
        <li>— Banners use role=status. Hold is persistent, not a timed toast.</li>
      </ul>
      <Canvas label="Focus">
        <OpsButton size="sm">Tab here</OpsButton>
        <p className="mt-3 font-mono text-[10px] text-white/40">Ring: 2px white · offset 2px</p>
      </Canvas>
    </Spec>
  )
}

function Keyboard() {
  return (
    <Spec
      kicker="Accessibility"
      title="Keyboard"
      intro="The console is used at a desk. Shortcuts are documented in mono. The field app does not take a keyboard — targets stay at 44 px."
    >
      <ul className="max-w-lg space-y-3 font-mono text-[12px]">
        {[
          ['/', 'Focus mission search'],
          ['G then M', 'Go to missions'],
          ['G then F', 'Go to fleet'],
          ['R', 'Recalculate coverage (parameters)'],
          ['Esc', 'Close overlay, keep map'],
        ].map(([k, a]) => (
          <li key={k} className="flex items-center justify-between border-b border-white/10 py-2">
            <span className="text-white/55">{a}</span>
            <span className="flex gap-1">
              {k.split(' ').map((part) =>
                part === 'then' ? (
                  <span key={part} className="px-1 text-white/30">
                    then
                  </span>
                ) : (
                  <OpsKbd key={part}>{part}</OpsKbd>
                ),
              )}
            </span>
          </li>
        ))}
      </ul>
    </Spec>
  )
}

function Handoff() {
  return (
    <Spec
      kicker="Delivery"
      title="Hand-off"
      intro="This library was the contract with engineering. Increment 1: map chrome, status, parameters, coverage. Increment 2: checklist, launch lock, review flags, crew board. Azure DevOps items pointed at these component names, not at screenshots in Slack."
    >
      <ol className="max-w-xl space-y-4 font-mono text-[12px]">
        {[
          ['0.1', 'Foundations + status + map chrome'],
          ['0.2', 'Parameters, coverage, readiness rail'],
          ['0.3', 'Field checklist + launch lock'],
          ['0.4', 'Quality flags + hold processing + crew row'],
          ['0.5', 'Chrome, telemetry, tables, this documentation'],
        ].map(([v, n]) => (
          <li key={v} className="flex gap-4 border-b border-white/10 pb-3">
            <span className="text-white/40">{v}</span>
            <span>{n}</span>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/55">
        Figma library uses the same names as this documentation. If a squad needs a new pattern, it is added here first —
        the same governance idea as a design system, scoped to one operational product.
      </p>
    </Spec>
  )
}

function Contribute() {
  return (
    <Spec
      kicker="Delivery"
      title="Contribute"
      intro="A new control is a product decision. The test is the four principles. If it only exists to decorate a mock, it does not ship."
    >
      <ol className="max-w-xl space-y-6">
        {[
          ['1', 'Write the job', 'One sentence: what operational failure this prevents.'],
          ['2', 'Name it', 'Same string in Figma, this site, and the Azure DevOps item.'],
          ['3', 'States', 'Default, hold/blocked, disabled, field density if it leaves the desk.'],
          ['4', 'Do / don’t', 'One of each. If you cannot write the don’t, the component is not ready.'],
          ['5', 'Ship the token', 'No one-off hex. If colour is required, you are probably wrong — reread principle 04.'],
        ].map(([n, t, b]) => (
          <li key={n} className="grid gap-2 border-t border-white/10 pt-6 md:grid-cols-[4rem_1fr]">
            <p className="font-mono text-[10px] text-white/40">{n}</p>
            <div>
              <p className="font-display text-xl">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{b}</p>
            </div>
          </li>
        ))}
      </ol>
    </Spec>
  )
}
