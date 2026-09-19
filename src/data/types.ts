export interface Profile {
  firstName: string
  lastName: string
  /** Short role line shown under the name. Separated with " · " in the UI. */
  roles: string[]
  tagline: string
  location: string
  email: string
  /** Optional, displayed in the contact section and on the printed CV. */
  phone?: string
  linkedin: string
  /**
   * Optional URL to a static PDF (e.g. "/cv.pdf" placed in /public).
   * When undefined, the "Download CV" button opens the browser print dialog,
   * which renders the dedicated print stylesheet (Save as PDF).
   */
  cvPdfUrl?: string
  /** Canonical site URL, used for SEO metadata in index.html. */
  siteUrl: string
}

export interface AboutContent {
  /** Paragraphs rendered in order. Keep it short: 2–3 paragraphs. */
  paragraphs: string[]
  /** Short facts displayed as a compact list next to the text. */
  facts: { label: string; value: string }[]
}

export interface Experience {
  company: string
  role: string
  /** e.g. "2022 — Present" */
  period: string
  location?: string
  /** Optional one-line context about the company or team. */
  summary?: string
  highlights: string[]
}

export interface ProjectMetric {
  /** Short, scannable value, e.g. "−38 %" or "60+" */
  value: string
  label: string
}

export interface ProjectProcessStep {
  title: string
  body: string
  artifacts?: string[]
}

export interface ProjectScreen {
  id: string
  title: string
  caption: string
  device: 'desktop' | 'mobile'
}

export interface ProjectUser {
  name: string
  role: string
  need: string
}

export interface ProjectDecision {
  title: string
  body: string
}

/** Visual language of the case-study page and reconstructed product UI. */
export type ProjectIdentity = 'ops' | 'system' | 'cpq' | 'editorial'

export interface Project {
  slug: string
  name: string
  company: string
  identity: ProjectIdentity
  /** Short tag line under the name, e.g. "B2B SaaS · Redesign" */
  category: string
  /** e.g. "2024 — 2025 · 8 months" */
  timeframe?: string
  summary: string
  /** Longer framing paragraph on the case-study hero. */
  thesis: string
  context: string
  problem: string
  solution: string
  role: string
  tools: string[]
  result: string
  /** Up to three headline outcomes displayed above the details. */
  metrics?: ProjectMetric[]
  /** Path to an image in /public. When undefined a placeholder is rendered. */
  image?: string
  imageAlt?: string
  /** CV-aligned responsibilities shown on the case-study page. */
  responsibilities: string[]
  users: ProjectUser[]
  constraints: string[]
  decisions: ProjectDecision[]
  process: ProjectProcessStep[]
  screens: ProjectScreen[]
  /** Screen shown on the homepage card. Defaults to screens[0]. */
  previewScreen?: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Education {
  degree: string
  school: string
  period: string
  details?: string
}

export interface Language {
  name: string
  level: string
}
