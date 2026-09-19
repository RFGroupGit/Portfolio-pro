import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'flight-ops',
    name: 'Flight Ops',
    company: 'Dronemapping',
    category: 'Dronemapping · Geospatial SaaS · Web + field app',
    timeframe: '2024 — 2025 · Melbourne',
    summary: 'A single mission flow for professional drone operations — from briefing to geospatial data review.',
    context:
      'At Dronemapping I designed interfaces for surveying, mining and energy crews. Pilots plan flights, capture thousands of images, and analysts turn them into orthomosaics and 3D models. The product had to work on a desktop in the office and on a phone in the field.',
    problem:
      'Mission planning was split across three tools plus a spreadsheet. Parameters were often incomplete at take-off, analysts received unusable datasets, and expensive re-flights were treated as normal rather than as a product failure.',
    solution:
      'I researched how pilots and analysts actually work, mapped the mission lifecycle, and designed a guided flow: brief, flight parameters with live coverage on the map, a mobile pre-flight checklist, then a review workspace with quality flags on the captured data. Components were added to the company Design System so engineering could ship in two increments.',
    role: 'UX Designer — user research, requirements, wireframes and high-fidelity Figma prototypes, drone-ops UI, geospatial data views, Design System components.',
    tools: ['Figma', 'Miro', 'Azure DevOps', 'Design System'],
    metrics: [
      { value: '1 flow', label: 'instead of 3 tools + spreadsheet' },
      { value: '2 apps', label: 'desktop ops + field checklist' },
      { value: 'DS', label: 'components handed to engineering' },
    ],
    result:
      'Operations moved onto a single planning and review path. Incomplete missions are caught before take-off, and the review workspace became the screen used in client demos.',
    image: '/projects/flight-ops.svg',
    imageAlt: 'Flight Ops mission overview with map, stats and a mobile pre-flight checklist',
    responsibilities: [
      'Conducted user research and analysed functional requirements with pilots and analysts',
      'Designed wireframes and high-fidelity prototypes in Figma',
      'Created interfaces dedicated to professional drone operations',
      'Designed views to analyse and manage geospatial data collected by drones',
      'Developed and maintained Design System components used by engineering',
    ],
    process: [
      {
        title: 'Research & requirements',
        body: 'Site visits and interviews with pilots and analysts to document the real mission lifecycle — not the one in the spec. Functional requirements were rewritten around “ready to fly” and “usable dataset”, not around form fields.',
      },
      {
        title: 'Wireframes & hi-fi in Figma',
        body: 'Low-fi flows for briefing, parameters, checklist and review, then high-fidelity prototypes tested with operations before hand-off. Coverage on the map was the key decision: show completeness before take-off, not after.',
      },
      {
        title: 'Drone-ops UI + field app',
        body: 'Desktop for planning and analysis, mobile for the pre-flight checklist. Same language, different density. The field screen is a sequence of checks, not a miniature of the desktop.',
      },
      {
        title: 'Geospatial data review',
        body: 'The review workspace surfaces quality flags on the captured imagery so analysts do not open a full processing job on a broken set. Designed with the people who actually run the models.',
      },
      {
        title: 'Design System',
        body: 'Map controls, status chips, checklists and data tables were documented as components so the two engineering increments stayed visually and behaviourally consistent.',
      },
    ],
    screens: [
      { id: 'flight-map', title: 'Mission overview', caption: 'Desktop — survey area, flight path and readiness before take-off.', device: 'desktop' },
      { id: 'flight-params', title: 'Flight parameters', caption: 'Altitude, overlap and GSD with a live coverage preview on the map.', device: 'desktop' },
      { id: 'flight-mobile', title: 'Pre-flight checklist', caption: 'Field app — sequential checks so a mission cannot launch incomplete.', device: 'mobile' },
      { id: 'flight-review', title: 'Data review', caption: 'Quality flags on captured imagery before it is sent to processing.', device: 'desktop' },
      { id: 'flight-ds', title: 'Design System', caption: 'Components documented for engineering: status, map chrome, checklist.', device: 'desktop' },
    ],
  },
  {
    slug: 'prism',
    name: 'Prism',
    company: 'Lensys',
    category: 'Lensys · B2B software · Design System',
    timeframe: '2023 — 2024 · France · Alternance',
    summary: 'A shared Design System so four product squads stop redrawing the same buttons.',
    context:
      'Lensys ships several B2B products, each owned by a different squad. In alternance as UX Designer I spent as much time redrawing existing patterns as designing new ones. There was no single source of truth between Figma and code.',
    problem:
      'Each squad had its own buttons, forms and tables. Accessibility was fixed screen by screen. A new developer needed weeks to understand “how we do UI here”, and every feature started from a blank artboard.',
    solution:
      'I ran a UI inventory in workshops with the squads, defined foundations (colour, type, spacing) and a documented component library with states and usage rules. Monthly design-system reviews and a shared Figma library kept design and engineering in the same file.',
    role: 'UX Designer — workshops, wireframes and interactive prototypes, scalable Design System, Agile coordination across squads.',
    tools: ['Figma', 'Figma Variables', 'Notion', 'Jira', 'Miro'],
    metrics: [
      { value: '1 library', label: 'shared Figma + documented usage' },
      { value: '4 squads', label: 'workshops and contribution rules' },
      { value: 'AA', label: 'contrast on foundations' },
    ],
    result:
      'Prism became the default starting point for new work. Two products began migrating within the first months, and accessibility fixes moved from individual screens to tokens.',
    image: '/projects/prism-design-system.svg',
    imageAlt: 'Prism Design System sheet with tokens, buttons and form components',
    responsibilities: [
      'Facilitated UX workshops with stakeholders from four product squads',
      'Designed and maintained a scalable Design System (foundations + components)',
      'Created wireframes and interactive prototypes in Figma',
      'Coordinated delivery in Agile with product and engineering',
    ],
    process: [
      {
        title: 'Workshops & inventory',
        body: 'A UI audit on a wall (and in Figma): every button, field and table in production. Workshops with each squad to agree what was a real variant and what was accidental drift.',
      },
      {
        title: 'Foundations',
        body: 'Colour, type, spacing and contrast as tokens. The goal was not a pretty palette — it was one primary, one text colour, and AA contrast so squads would stop inventing greys.',
      },
      {
        title: 'Components & prototypes',
        body: 'Buttons, forms, tables and cards with all states, documented in Figma. Interactive prototypes of a real feature in each product to prove the system could take a new screen.',
      },
      {
        title: 'Governance in Agile',
        body: 'A simple contribution rule: new patterns go through a monthly review, not a side file. Backlog items for “migrate this screen to Prism” sat next to feature work.',
      },
    ],
    screens: [
      { id: 'prism-audit', title: 'UI inventory', caption: 'Workshop output — existing variants collected before anything was redesigned.', device: 'desktop' },
      { id: 'prism-tokens', title: 'Foundations', caption: 'Colour, type and spacing tokens. Contrast checked at this layer, not on each screen.', device: 'desktop' },
      { id: 'prism-button', title: 'Component spec', caption: 'Button and field states, usage notes, and the do / don’t rules for squads.', device: 'desktop' },
      { id: 'prism-docs', title: 'Contribution', caption: 'How a squad proposes a new pattern without forking the library.', device: 'desktop' },
      { id: 'prism-product', title: 'In product', caption: 'A Lensys screen rebuilt on Prism — same feature, one system.', device: 'desktop' },
    ],
  },
  {
    slug: 'quote-builder',
    name: 'Quote Builder',
    company: 'Techform',
    category: 'Techform · CPQ software · Front-end & UX',
    timeframe: '2021 — 2022 · France · Alternance',
    summary: 'A guided CPQ flow I both designed and built, so sales could configure a quote without drowning in rules.',
    context:
      'Techform sells Configure-Price-Quote software to industrial equipment manufacturers. Sales reps assemble quotes with hundreds of options, dependencies and pricing rules. I joined as Front-End Developer, working with product managers and designers on the configurator.',
    problem:
      'The legacy configurator showed every rule at once. Errors were caught by engineering days later. A quote took an afternoon, and new reps were not trusted with a customer for months.',
    solution:
      'We reframed it as a three-step flow — product, configuration, summary — with progressive disclosure, inline validation of conflicts, and a live price. I implemented the front-end, kept the existing app running, and wrote contextual help from support tickets.',
    role: 'Front-End Developer — CPQ features, responsive UI, collaboration with PMs and designers, maintenance of the existing application, Agile delivery.',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Azure DevOps', 'Agile / Scrum'],
    metrics: [
      { value: '3 steps', label: 'product · configure · summary' },
      { value: 'Live', label: 'price and rule conflicts in the UI' },
      { value: 'Responsive', label: 'usable on a laptop in a plant' },
    ],
    result:
      'Reps could produce a complex quote in one sitting. Configuration errors dropped because conflicts were visible before submit, and the same pattern was reused on other product lines.',
    image: '/projects/cpq-quote-builder.svg',
    imageAlt: 'Quote Builder three-step configurator with live pricing',
    responsibilities: [
      'Developed front-end features for CPQ software solutions',
      'Implemented responsive user interfaces',
      'Collaborated with developers, product managers and designers',
      'Maintained and improved the existing web application',
      'Delivered inside Agile / Scrum cycles',
    ],
    process: [
      {
        title: 'Understand the existing app',
        body: 'Before adding screens I mapped the current configurator with support tickets: where reps got stuck, which rules exploded, which fields were never used. Maintenance work paid for the redesign.',
      },
      {
        title: 'Flow with PMs and designers',
        body: 'A three-step IA agreed in working sessions: pick the product, configure with progressive disclosure, then a summary that can be sent. I prototyped in Figma then in the actual front-end.',
      },
      {
        title: 'Build the UI',
        body: 'HTML / CSS / JavaScript, responsive so a rep on site could finish a quote on a laptop. Inline validation for incompatible options, live price in the summary column.',
      },
      {
        title: 'Ship in Agile',
        body: 'Increments in Azure DevOps: first the shell and navigation, then rules, then help content. The old configurator stayed alive until the new flow covered the main product line.',
      },
    ],
    screens: [
      { id: 'quote-legacy', title: 'Before', caption: 'The dense legacy form — every rule visible, nothing progressive.', device: 'desktop' },
      { id: 'quote-step1', title: '01 · Product', caption: 'Choose the equipment line before any option is shown.', device: 'desktop' },
      { id: 'quote-config', title: '02 · Configuration', caption: 'Options with inline conflict validation. Only relevant rules appear.', device: 'desktop' },
      { id: 'quote-summary', title: '03 · Summary', caption: 'Live price, BOM and a quote ready to send.', device: 'desktop' },
      { id: 'quote-mobile', title: 'Responsive', caption: 'Same flow on a laptop in the plant — not a separate mobile app.', device: 'mobile' },
    ],
  },
  {
    slug: 'cegedim-web',
    name: 'Product sites & SEO',
    company: 'Cegedim',
    category: 'Cegedim · Web + SEO',
    timeframe: '2022 — 2023 · France · Alternance',
    summary: 'Mobile-first product pages, a demo form that works on a phone, and SEO so prospects can actually find the software.',
    context:
      'Cegedim’s software products each had a public site used to discover offers and request demos. In alternance as UX Designer / Front-End Developer I worked with marketing, product and sales on those sites.',
    problem:
      'The sites were not responsive. They ranked poorly on the queries prospects typed. The demo form lost most of its traffic on mobile. Marketing, product and sales did not share a single idea of what a page was for.',
    solution:
      'Workshops to agree audiences and page goals, then a mobile-first IA and templates. I built the responsive front-end, implemented SEO (structure, metadata, internal linking, performance) and set up Analytics + Search Console so we could iterate on real queries.',
    role: 'UX Designer / Front-End Developer — workshops, IA, responsive templates, front-end, SEO, analytics.',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Google Analytics', 'Google Search Console', 'Miro'],
    metrics: [
      { value: 'Mobile-first', label: 'templates for product pages' },
      { value: 'SEO', label: 'structure, metadata, internal links' },
      { value: 'Measure', label: 'Analytics + Search Console' },
    ],
    result:
      'Organic traffic and mobile demo requests moved in the right direction over the following months. The workshop format and templates were reused for later product launches.',
    image: '/projects/cegedim-web-seo.svg',
    imageAlt: 'Responsive product landing and a mobile demo form',
    responsibilities: [
      'Facilitated UX workshops with marketing, product and sales',
      'Developed responsive web applications / templates',
      'Improved visibility through SEO best practices',
      'Set up measurement to iterate on real search and form data',
    ],
    process: [
      {
        title: 'Workshops',
        body: 'Same room, three briefs. We aligned on who the page is for (prospect vs. existing customer), what “success” is (demo request), and which queries we actually wanted to rank for.',
      },
      {
        title: 'IA & wireframes',
        body: 'Mobile-first templates: hero with one action, product blocks, proof, form. Wireframes in Figma, then the same structure in HTML so SEO and design were not two different outlines.',
      },
      {
        title: 'Responsive front-end',
        body: 'Implemented the templates so the demo form was usable with one thumb. Performance and semantic headings were treated as UX, not as a later SEO ticket.',
      },
      {
        title: 'SEO & measurement',
        body: 'Metadata, internal links, Search Console and Analytics. We looked at queries and bounce on mobile every sprint, then adjusted copy and the form — not a one-shot audit.',
      },
    ],
    screens: [
      { id: 'ceg-workshop', title: 'Workshop', caption: 'Audiences, page goals and search queries agreed with marketing, product and sales.', device: 'desktop' },
      { id: 'ceg-desktop', title: 'Product page', caption: 'Desktop template — one action, scannable blocks, semantic structure.', device: 'desktop' },
      { id: 'ceg-mobile', title: 'Mobile', caption: 'Same page on a phone. The demo CTA stays reachable.', device: 'mobile' },
      { id: 'ceg-form', title: 'Demo request', caption: 'Short form, designed after looking at where mobile traffic dropped.', device: 'mobile' },
      { id: 'ceg-seo', title: 'Search Console', caption: 'Queries and pages we actually used to iterate the templates.', device: 'desktop' },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return {}
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}
