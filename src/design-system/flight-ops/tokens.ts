/** Flight Ops tokens — Xpatial / Dronemapping charter. */

export const opsColor = {
  canvas: '#1F232C',
  panel: '#262C38',
  map: '#15202C',
  chrome: '#1F232C',
  ink: '#ffffff',
  muted: 'rgba(255,255,255,0.62)',
  faint: 'rgba(255,255,255,0.38)',
  line: 'rgba(255,255,255,0.10)',
  lineStrong: 'rgba(255,255,255,0.22)',
  inverse: '#ffffff',
  inverseInk: '#1F232C',
  accent: '#FF6161',
  accentInk: '#ffffff',
  geo: '#4EC8FF',
} as const

export const opsColorCss: Record<string, { token: string; value: string; use: string }> = {
  canvas: { token: '--ops-canvas', value: opsColor.canvas, use: 'Page, header, DS chrome — Xpatial navy' },
  panel: { token: '--ops-panel', value: opsColor.panel, use: 'Frames, rails, cards' },
  map: { token: '--ops-map', value: opsColor.map, use: 'Geospatial workspace' },
  chrome: { token: '--ops-chrome', value: opsColor.chrome, use: 'Window chrome, field status bar' },
  ink: { token: '--ops-ink', value: '#FFFFFF', use: 'Primary text' },
  muted: { token: '--ops-muted', value: 'rgba(255,255,255,.62)', use: 'Secondary labels' },
  faint: { token: '--ops-faint', value: 'rgba(255,255,255,.38)', use: 'Pending, disabled copy' },
  line: { token: '--ops-line', value: 'rgba(255,255,255,.10)', use: 'Hairlines, card edges' },
  accent: { token: '--ops-accent', value: opsColor.accent, use: 'Headings, primary actions, Ready' },
  geo: { token: '--ops-geo', value: opsColor.geo, use: 'Live capture, coverage, map grid' },
  inverse: { token: '--ops-inverse', value: '#FFFFFF', use: 'Text on accent' },
  inverseInk: { token: '--ops-inverse-ink', value: '#1F232C', use: 'Text on white tiles' },
}

export const opsSpace = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
} as const

export const opsType = {
  display: 'Outfit',
  sans: 'Plus Jakarta Sans',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  tracking: {
    ui: '0.04em',
    kicker: '0.12em',
    micro: '0.14em',
  },
  sizes: {
    micro: 9,
    caption: 10,
    body: 12,
    ui: 13,
    title: 24,
    readout: 32,
  },
} as const

export const opsMotion = {
  status: 160,
  panel: 220,
  none: 0,
} as const

export const opsDensity = {
  desktop: { row: 36, tap: 32, type: 12 },
  field: { row: 48, tap: 44, type: 13 },
} as const

export const opsLayout = {
  console: 1440,
  nav: 144,
  rail: 240,
  field: 390,
  mapMin: 640,
  breakpoint: 1024,
} as const

export const opsStroke = {
  hairline: 1,
  radius: 10,
  pill: 999,
} as const

export const opsZ = {
  map: 0,
  rail: 1,
  chrome: 2,
  overlay: 20,
  toast: 30,
} as const

export type MissionStatus = 'ready' | 'blocked' | 'inflight' | 'review'
export type CheckState = 'ok' | 'hold' | 'pending'
export type FlagKind = 'blur' | 'gap' | 'exposure'
export type OpsButtonVariant = 'primary' | 'ghost' | 'hold'
export type OpsButtonSize = 'sm' | 'md' | 'lg'
export type OpsBannerKind = 'hold' | 'info' | 'locked'
export type CaptureMode = 'nadir' | 'oblique'
export type TelemetryState = 'ok' | 'hold'

export const statusCopy: Record<MissionStatus, string> = {
  ready: 'Ready',
  blocked: 'Blocked',
  inflight: 'In flight',
  review: 'Review',
}

export const flagCopy: Record<FlagKind, string> = {
  blur: 'BLUR',
  gap: 'GAP',
  exposure: 'EXPO',
}

export const units = [
  { measure: 'Altitude', unit: 'm', example: '120 m' },
  { measure: 'Speed / wind', unit: 'm/s', example: '8 m/s' },
  { measure: 'GSD', unit: 'cm/px', example: '2.6 cm/px' },
  { measure: 'Area', unit: 'ha', example: '64 ha' },
  { measure: 'Overlap', unit: '%', example: '80 %' },
  { measure: 'Battery', unit: '%', example: '74%' },
  { measure: 'Window', unit: 'h', example: '2 h' },
] as const

export const idPattern = {
  solar: 'SOL-441',
  mining: 'MIN-208',
  construction: 'CON-055',
  rule: 'AAA-000 · three-letter site type, hyphen, three digits',
} as const

export const vocabulary = [
  { use: 'Ready', not: 'Good to go / All set', why: 'A binary operational state, readable across the room.' },
  { use: 'Blocked', not: 'Warning / Attention', why: 'Launch is not allowed. Soft language hides the lock.' },
  { use: 'Hold processing', not: 'Please review', why: 'The job must not start. Politeness is not a control.' },
  { use: 'Coverage', not: 'Map completeness', why: 'The word pilots already use.' },
  { use: 'Launch locked', not: 'Almost ready', why: 'The field app either arms or it does not.' },
  { use: 'In flight', not: 'Live mission / Active', why: 'Capture is happening. Parameters are frozen.' },
  { use: 'Review', not: 'QA pending', why: 'Imagery is on the grid. Processing has not started.' },
  { use: 'GSD', not: 'Resolution / Ground sample', why: 'The unit analysts quote on site.' },
  { use: 'Home point', not: 'Return-to-home location', why: 'Field English. One term, both apps.' },
  { use: 'Strip', not: 'Flight line / transect', why: 'What the coverage grid is counting.' },
] as const
