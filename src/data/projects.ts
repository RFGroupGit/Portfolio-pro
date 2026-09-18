import type { Project } from './types'

/**
 * Selected projects — case studies written for recruiters:
 * context → problem → solution → role → outcome, plus three headline metrics.
 * Visuals live in /public/projects (SVG frames exported from the design files).
 */
export const projects: Project[] = [
  {
    name: 'Flight Ops — mission planning & data review',
    category: 'Dronemapping · Geospatial SaaS · Web + field app',
    timeframe: '2024 — 2025 · 9 months',
    context:
      'Dronemapping provides mapping software to surveying, mining and energy companies. Pilots plan flights, capture thousands of images and hand them over to analysts who turn them into orthomosaics and 3D models.',
    problem:
      'Planning a mission required three separate tools and a spreadsheet. Pilots regularly launched flights with incomplete parameters, analysts received unusable datasets, and 1 in 5 missions had to be re-flown — the most expensive failure in the whole workflow.',
    solution:
      'Interviewed 14 pilots and analysts across three client sites, mapped the end-to-end mission lifecycle and redesigned it as a single guided flow: mission brief, flight parameters with live coverage preview on the map, pre-flight checklist on mobile, then a review workspace with quality flags. Built the components into the company Design System so engineering could ship it in two increments.',
    role: 'Lead UX Designer — research, service blueprint, information architecture, prototyping, usability testing (2 rounds, 11 participants), Design System components, developer hand-off.',
    tools: ['Figma', 'Miro', 'Azure DevOps', 'Design System', 'Usability testing'],
    metrics: [
      { value: '−38 %', label: 'mission planning time' },
      { value: '−62 %', label: 're-flown missions' },
      { value: '4.6 / 5', label: 'post-launch SUS-derived satisfaction' },
    ],
    result:
      'Adopted by all active client accounts within one quarter. Re-flights dropped from 19 % to 7 % of missions, planning time fell from 45 to 28 minutes on average, and the review workspace became the reference screen for the sales demo.',
    image: '/projects/flight-ops.svg',
    imageAlt:
      'Flight Ops mission overview: map with survey area and flight path, mission stats panel, and a mobile pre-flight checklist frame',
  },
  {
    name: 'Prism — a multi-product Design System',
    category: 'Lensys · B2B software · Design System & governance',
    timeframe: '2023 — 2024 · 10 months',
    context:
      'Lensys ships four B2B products maintained by separate squads. Each squad had accumulated its own buttons, forms and tables, and the design team spent most of its time re-drawing existing patterns.',
    problem:
      'Audit revealed 31 button variants and 9 shades of the primary colour across products. Onboarding a new developer took weeks, accessibility issues were fixed screen by screen, and every redesign started from zero.',
    solution:
      'Ran a UI inventory with the squads, defined foundations (tokens for colour, type, spacing, elevation) and a component library with documented states, accessibility notes and usage rules. Set up a contribution process, monthly design-system reviews and a shared component documentation with engineering so Figma and code stayed in sync.',
    role: 'UX Designer & Design System lead — audit, tokens, component design, documentation, governance, workshops with 4 squads, Agile coordination.',
    tools: ['Figma', 'Figma Variables', 'Notion', 'Jira', 'Miro'],
    metrics: [
      { value: '64', label: 'documented components' },
      { value: '−45 %', label: 'design-to-dev hand-off time' },
      { value: 'AA', label: 'WCAG contrast on all foundations' },
    ],
    result:
      'Prism is now the default starting point for every new feature at Lensys. Two products were migrated within the first six months, hand-off time was nearly halved, and accessibility fixes moved from screens to tokens — fixed once, everywhere.',
    image: '/projects/prism-design-system.svg',
    imageAlt:
      'Prism Design System sheet: colour and type tokens, button states, form fields and a card component with Figma-style component labels',
  },
  {
    name: 'Quote Builder — CPQ configurator redesign',
    category: 'Techform · CPQ software · Front-end & UX',
    timeframe: '2021 — 2022 · 7 months',
    context:
      'Techform sells Configure-Price-Quote software to industrial equipment manufacturers. Sales reps assemble quotes with hundreds of options, dependencies and pricing rules.',
    problem:
      'The legacy configurator exposed every rule at once in a dense form. Reps made errors that engineering caught days later, quotes took a full afternoon, and new hires needed two months before being trusted with a customer.',
    solution:
      'Reframed the configurator as a three-step guided flow — product, configuration, summary — with progressive disclosure of options, inline validation of rule conflicts and a live pricing summary. Implemented the front-end components myself in close collaboration with the back-end team, and paired the rollout with contextual help written from support tickets.',
    role: 'Front-End Developer & UX Designer — user flows, wireframes, responsive UI implementation, validation patterns, Agile delivery.',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Azure DevOps', 'Agile / Scrum'],
    metrics: [
      { value: '−54 %', label: 'time to produce a quote' },
      { value: '−71 %', label: 'configuration errors' },
      { value: '3 wks', label: 'new-rep onboarding (from 8)' },
    ],
    result:
      'Quote creation dropped from an average of 3 h 20 to 1 h 30 for complex products. Configuration errors caught in engineering fell by 71 %, and the guided flow became the template for the two other product lines.',
    image: '/projects/cpq-quote-builder.svg',
    imageAlt:
      'Quote Builder configurator: three-step progress, product options with inline validation, and a live pricing summary panel',
  },
  {
    name: 'Responsive web platform redesign & SEO',
    category: 'Cegedim · Software & technology group · Web + SEO',
    timeframe: '2022 — 2023 · 8 months',
    context:
      'Cegedim operates a portfolio of software solutions, each with its own public web presence used by prospects to discover products, compare offers and request demos.',
    problem:
      'The main product sites were not responsive, ranked poorly on the queries prospects actually typed, and the demo-request form lost most of its traffic on mobile. Marketing, product and sales each had a different idea of what the sites were for.',
    solution:
      'Facilitated UX workshops with marketing, product and sales to agree on audiences and page goals, then redesigned the information architecture and page templates mobile-first. Implemented the responsive front-end, applied SEO best practices (semantic structure, performance, metadata, internal linking) and set up measurement with Google Analytics and Search Console to iterate on real data.',
    role: 'UX Designer / Front-End Developer — workshops, IA and wireframes, responsive templates, front-end integration, SEO implementation, analytics set-up.',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Google Analytics', 'Google Search Console', 'Miro'],
    metrics: [
      { value: '+64 %', label: 'organic traffic in 6 months' },
      { value: '−35 %', label: 'mobile bounce rate' },
      { value: '×2.1', label: 'demo requests from mobile' },
    ],
    result:
      'Organic traffic grew by 64 % over six months, mobile bounce rate fell by a third and demo requests from mobile more than doubled. The workshop format and the page templates were reused for the next two product launches.',
    image: '/projects/cegedim-web-seo.svg',
    imageAlt:
      'Responsive website redesign: desktop landing page with product sections next to a mobile version, and an analytics panel showing organic traffic growth',
  },
]
