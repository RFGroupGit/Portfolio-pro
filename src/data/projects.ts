import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'flight-ops',
    name: 'Flight Ops',
    company: 'Dronemapping',
    identity: 'ops',
    category: 'Dronemapping · Geospatial SaaS · Web + field app',
    timeframe: '2024 — 2025 · Melbourne',
    summary: 'A single mission flow for professional drone operations — from briefing to geospatial data review.',
    thesis:
      'Surveying, mining and energy crews were running the same mission across a desktop planner, a vendor app and a spreadsheet. I designed one operational path: you only take off when coverage is complete, and you only send a dataset to processing when the imagery is usable.',
    context:
      'Dronemapping builds software for professional drone mapping. Pilots plan flights over mines, solar farms and construction sites, capture thousands of images, then analysts turn those captures into orthomosaics and 3D models. I joined as UX Designer. The work had to survive a site office laptop and a phone in the wind, and it had to talk to an existing Design System used by engineering.',
    problem:
      'Mission planning lived in three tools plus a spreadsheet. Parameters were often incomplete at take-off. Analysts opened full processing jobs on blurred or gapped sets. Re-flights were treated as a cost of doing business instead of a product failure. Nobody owned a single “ready to fly / ready to process” state.',
    solution:
      'I interviewed pilots and analysts on site, rewrote requirements around those two states, and designed a guided lifecycle: briefing, flight parameters with live coverage on the map, a field checklist that can block launch, then a review workspace with quality flags. Map controls, status and checklists were added to the Design System so engineering could ship in two increments without redrawing the language.',
    role: 'UX Designer — user research, requirements, wireframes and high-fidelity Figma prototypes, drone-ops UI, geospatial data views, Design System components.',
    tools: ['Figma', 'Miro', 'Azure DevOps', 'Design System'],
    metrics: [
      { value: '1 flow', label: 'instead of 3 tools + spreadsheet' },
      { value: '2 apps', label: 'desktop ops + field checklist' },
      { value: 'DS', label: 'components handed to engineering' },
    ],
    result:
      'Operations moved onto a single planning and review path. Incomplete missions are caught before take-off. The review workspace became the screen used in client demos, because it is the first time quality is visible without opening a processing job.',
    image: '/projects/flight-ops.svg',
    imageAlt: 'Flight Ops dark operations console with survey map and readiness panel',
    responsibilities: [
      'Conducted user research and analysed functional requirements with pilots and analysts',
      'Designed wireframes and high-fidelity prototypes in Figma',
      'Created interfaces dedicated to professional drone operations',
      'Designed views to analyse and manage geospatial data collected by drones',
      'Developed and maintained Design System components used by engineering',
    ],
    users: [
      {
        name: 'Pilot',
        role: 'Field — takes off',
        need: 'A briefing that is complete on a phone, with gloves, without opening a laptop.',
      },
      {
        name: 'Analyst',
        role: 'Office — processing',
        need: 'To reject a broken set before a full orthomosaic job is started.',
      },
      {
        name: 'Ops lead',
        role: 'Fleet — readiness',
        need: 'To see which missions are actually ready across crews, not which forms were filled.',
      },
    ],
    constraints: [
      'Desktop in a site office and a phone in the field — same language, different density',
      'Coverage and GSD are safety and cost, not decoration on a map',
      'Engineering capacity: two increments, so new UI had to land as Design System components',
    ],
    decisions: [
      {
        title: 'Show coverage before take-off',
        body: 'The map is the source of truth for “ready to fly”. Overlap, GSD and remaining strips sit on the polygon, not in a settings modal opened after the fact.',
      },
      {
        title: 'The field app is a sequence, not a miniature desktop',
        body: 'Pilots do not need the planner on a small screen. They need ordered checks that can lock launch. Shrinking the desktop would have failed in the wind.',
      },
      {
        title: 'Flag imagery before processing',
        body: 'Blur, gaps and exposure are cheaper to catch on a review grid than after an orthomosaic. Analysts designed the flags with me; I did not invent them from a spec.',
      },
    ],
    process: [
      {
        title: 'Research on the actual mission',
        body: 'Site visits and interviews with pilots and analysts. I mapped the lifecycle they actually run — brief, weather window, batteries, coverage, capture, dump, process — not the one in the ticket. Functional requirements were rewritten around “ready to fly” and “usable dataset”.',
        artifacts: ['Interview notes', 'Journey map', 'Requirements rewrite'],
      },
      {
        title: 'Wireframes then hi-fi in Figma',
        body: 'Low-fi flows for briefing, parameters, checklist and review. High-fidelity prototypes were tested with operations before hand-off. The key frame to get right was the map with live coverage — if that failed, the rest of the UI was decoration.',
        artifacts: ['User flows', 'Hi-fi Figma', 'Ops review'],
      },
      {
        title: 'Drone-ops desktop',
        body: 'A dense operations console: missions, fleet, datasets. Planning is a map with a readiness rail, not a form with a map thumbnail. Status is a state the whole crew can read from across the room.',
        artifacts: ['Mission overview', 'Parameters + coverage'],
      },
      {
        title: 'Field checklist',
        body: 'Mobile only does what a laptop cannot: sequential checks, large targets, a lock on launch until the list is complete. Same vocabulary as desktop (coverage, batteries, home point) so the two apps do not feel like two products.',
        artifacts: ['Field prototype', 'Launch lock rule'],
      },
      {
        title: 'Geospatial review',
        body: 'A workspace for the people who run the models: thumbnail grid, quality flags, hold on processing. Designed sitting with analysts, not handed to them afterwards.',
        artifacts: ['Review grid', 'Flag taxonomy'],
      },
      {
        title: 'Design System hand-off',
        body: 'Map chrome, status chips, checklist rows and data tables documented as components. Two engineering increments could ship without inventing a third visual language.',
        artifacts: ['DS components', 'Azure DevOps slices'],
      },
    ],
    screens: [
      {
        id: 'flight-map',
        title: 'Mission overview',
        caption:
          'Operations console. Survey polygon, planned path and a readiness rail. This is the screen a crew looks at before anyone drives to site.',
        device: 'desktop',
      },
      {
        id: 'flight-params',
        title: 'Flight parameters',
        caption:
          'Altitude, overlap, GSD and speed drive a live coverage preview. Incomplete strips stay visible on the western edge instead of hiding in a log.',
        device: 'desktop',
      },
      {
        id: 'flight-mobile',
        title: 'Pre-flight checklist',
        caption:
          'Field app. Ordered checks with a launch lock. Built as a sequence because a miniature of the desktop is unusable with gloves.',
        device: 'mobile',
      },
      {
        id: 'flight-review',
        title: 'Data review',
        caption:
          'Geospatial QA before processing. Flags for blur, gap and exposure — the set is held until an analyst accepts or rejects it.',
        device: 'desktop',
      },
      {
        id: 'flight-fleet',
        title: 'Fleet readiness',
        caption:
          'Ops lead view: which missions are ready, blocked or in flight. Designed from the research finding that “filled form” was not the same as “ready”.',
        device: 'desktop',
      },
      {
        id: 'flight-ds',
        title: 'Design System',
        caption:
          'Status, map chrome and checklist documented for engineering so both increments stayed visually and behaviourally consistent.',
        device: 'desktop',
      },
    ],
  },
  {
    slug: 'prism',
    name: 'Prism',
    company: 'Lensys',
    identity: 'system',
    category: 'Lensys · B2B software · Design System',
    timeframe: '2023 — 2024 · France · Alternance',
    summary: 'A shared Design System so four product squads stop redrawing the same buttons.',
    thesis:
      'Prism is not a UI kit dropped on a Figma page. It is a working agreement: foundations that pass contrast, components with all states, and a monthly review so a squad cannot fork the library in a private file.',
    context:
      'Lensys ships several B2B products, each owned by a different squad. In alternance as UX Designer I was redrawing existing patterns as often as I was designing new ones. Figma and code did not share a source of truth. Accessibility was a per-screen patch. A new engineer needed weeks to learn “how we do UI here”.',
    problem:
      'Four squads, four button models, nine “primary” greys. Forms and tables drifted every sprint. Contrast was fixed after QA, not in the tokens. Every feature started from a blank artboard because nobody trusted the last file.',
    solution:
      'I ran a UI inventory in workshops with the squads, killed accidental variants, then defined colour, type and spacing as tokens with AA contrast. Components were documented with states and do/don’t rules in a shared Figma library. Contribution went through a monthly review in Jira, next to feature work — not a side channel.',
    role: 'UX Designer — workshops, wireframes and interactive prototypes, scalable Design System, Agile coordination across squads.',
    tools: ['Figma', 'Figma Variables', 'Notion', 'Jira', 'Miro'],
    metrics: [
      { value: '1 library', label: 'shared Figma + documented usage' },
      { value: '4 squads', label: 'workshops and contribution rules' },
      { value: 'AA', label: 'contrast on foundations' },
    ],
    result:
      'Prism became the default starting point for new work. Two products began migrating within the first months. Accessibility fixes moved from individual screens to tokens, which is the only way they survive a new squad.',
    image: '/projects/prism-design-system.svg',
    imageAlt: 'Prism documentation site with tokens, component spec and contribution rules',
    responsibilities: [
      'Facilitated UX workshops with stakeholders from four product squads',
      'Designed and maintained a scalable Design System (foundations + components)',
      'Created wireframes and interactive prototypes in Figma',
      'Coordinated delivery in Agile with product and engineering',
    ],
    users: [
      {
        name: 'Product designer',
        role: 'Squad 1–4',
        need: 'A library they can start from, and a way to propose a real new pattern without a private file.',
      },
      {
        name: 'Front-end engineer',
        role: 'Implementation',
        need: 'Tokens and states that match Figma, not a screenshot in Slack.',
      },
      {
        name: 'PM',
        role: 'Backlog',
        need: 'Migration work that can sit next to features, with a clear “this screen is on Prism” status.',
      },
    ],
    constraints: [
      'Four squads already in production — no freeze, no big-bang redesign',
      'Figma Variables had to match what engineering could actually tokenise',
      'Accessibility had to be decided at foundation level or it would be renegotiated every sprint',
    ],
    decisions: [
      {
        title: 'Inventory before aesthetics',
        body: 'Nothing was restyled until every button, field and table in production was on a wall. Most “new” variants were accidents. The workshops made that visible to the people who had created them.',
      },
      {
        title: 'Contrast lives in tokens',
        body: 'One primary, one text colour, AA on the foundation layer. Squads were no longer allowed to invent a grey to “fix” a screen.',
      },
      {
        title: 'Contribution is a backlog item',
        body: 'A new pattern is an RFC in Jira, reviewed monthly with design and one engineer per squad. If it is not accepted, the squad uses an existing component. That rule is the system.',
      },
    ],
    process: [
      {
        title: 'Workshops and UI inventory',
        body: 'A wall (then a Figma file) of every button, field and table shipping in the four products. Each squad walked their own screens. We tagged real variants versus drift. The number that stuck: 31 button styles, 9 of them calling themselves primary.',
        artifacts: ['UI audit', 'Workshop boards', 'Kill / keep list'],
      },
      {
        title: 'Foundations',
        body: 'Colour, type, spacing, contrast. Tokens in Figma Variables with names engineering could map. The goal was not a palette — it was to stop inventing greys.',
        artifacts: ['Figma Variables', 'Contrast pairs', 'Type scale'],
      },
      {
        title: 'Components and states',
        body: 'Buttons, fields, tables, cards — default, hover, focus, disabled, error, documented in the shared library with usage notes. Interactive prototypes of a real feature in each product to prove the system could take a new screen, not only a kitchen sink page.',
        artifacts: ['Component specs', 'Do / don’t', 'Feature prototypes'],
      },
      {
        title: 'Governance in Agile',
        body: 'RFC in the Prism Jira project. Monthly review. Backlog items for “migrate this screen to Prism” sat next to features so the system was not unpaid overtime.',
        artifacts: ['RFC template', 'Jira board', 'Migration tickets'],
      },
    ],
    screens: [
      {
        id: 'prism-audit',
        title: 'UI inventory',
        caption:
          'Workshop output. Existing variants collected from four products before anything was redesigned. This is the argument, not a moodboard.',
        device: 'desktop',
      },
      {
        id: 'prism-tokens',
        title: 'Foundations',
        caption:
          'Documentation site. Colour, type and spacing tokens. Contrast is checked here so squads stop negotiating it on each screen.',
        device: 'desktop',
      },
      {
        id: 'prism-button',
        title: 'Component spec',
        caption:
          'Storybook-style spec: all button and field states, usage notes, do / don’t. The file engineers open, not a slide.',
        device: 'desktop',
      },
      {
        id: 'prism-a11y',
        title: 'Contrast pairs',
        caption:
          'AA pairs on the foundation layer. If a combination fails here, it is not a component.',
        device: 'desktop',
      },
      {
        id: 'prism-docs',
        title: 'Contribution RFC',
        caption:
          'How a squad proposes a new pattern without forking the library. Jira + shared Figma, monthly review.',
        device: 'desktop',
      },
      {
        id: 'prism-product',
        title: 'In a Lensys product',
        caption:
          'An orders screen rebuilt on Prism — same feature, one table, one button, one status. Proof the system can take production work.',
        device: 'desktop',
      },
    ],
  },
  {
    slug: 'quote-builder',
    name: 'Quote Builder',
    company: 'Techform',
    identity: 'cpq',
    category: 'Techform · CPQ software · Front-end & UX',
    timeframe: '2021 — 2022 · France · Alternance',
    summary: 'A guided CPQ flow I both designed and built, so sales could configure a quote without drowning in rules.',
    thesis:
      'Configure-Price-Quote software fails when every rule is visible at once. I helped turn a dense legacy form into three steps with a live price and inline conflicts — then implemented the front-end and kept the old app running until the new flow covered the main line.',
    context:
      'Techform sells CPQ software to industrial equipment manufacturers. Sales reps assemble quotes with hundreds of options, dependencies and pricing rules, often on a laptop in a plant. I joined as Front-End Developer, working with product managers and designers on the configurator, and on maintenance of the existing application.',
    problem:
      'The legacy configurator dumped every rule on one page. Errors were caught by engineering days later. A complex quote took an afternoon. New reps were not trusted with a customer for months. Support tickets were a map of the UI we had not drawn.',
    solution:
      'Working with PMs and designers, we reframed the job as product → configuration → summary. Progressive disclosure, inline validation of incompatible options, a live price in a persistent column. I built the HTML/CSS/JavaScript, kept the legacy app alive, and turned recurring tickets into contextual help.',
    role: 'Front-End Developer — CPQ features, responsive UI, collaboration with PMs and designers, maintenance of the existing application, Agile delivery.',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Azure DevOps', 'Agile / Scrum'],
    metrics: [
      { value: '3 steps', label: 'product · configure · summary' },
      { value: 'Live', label: 'price and rule conflicts in the UI' },
      { value: 'Responsive', label: 'usable on a laptop in a plant' },
    ],
    result:
      'Reps could produce a complex quote in one sitting. Conflicts were visible before submit, so engineering stopped being the validation layer. The same three-step pattern was reused on other product lines.',
    image: '/projects/cpq-quote-builder.svg',
    imageAlt: 'Quote Builder industrial three-step configurator with live pricing column',
    responsibilities: [
      'Developed front-end features for CPQ software solutions',
      'Implemented responsive user interfaces',
      'Collaborated with developers, product managers and designers',
      'Maintained and improved the existing web application',
      'Delivered inside Agile / Scrum cycles',
    ],
    users: [
      {
        name: 'Sales rep',
        role: 'On site or at a desk',
        need: 'To finish a quote without calling engineering, including on a laptop in a plant.',
      },
      {
        name: 'New rep',
        role: 'Learning the catalogue',
        need: 'A path that does not show every rule on day one.',
      },
      {
        name: 'Support',
        role: 'Tickets',
        need: 'Help that sits next to the field that explodes, not in a PDF.',
      },
    ],
    constraints: [
      'The old configurator had to stay in production until the new flow covered the main line',
      'Rules and pricing already existed in the back end — the UI had to surface them, not reinvent them',
      'Responsive meant a 13-inch laptop in a noisy plant, not a consumer phone app',
    ],
    decisions: [
      {
        title: 'Three steps, not a smarter form',
        body: 'Pick the equipment line first. Only then show options. Only then a summary that can be sent. Progressive disclosure was an IA decision, not a CSS trick.',
      },
      {
        title: 'Conflicts in the UI, not in a ticket',
        body: 'If ATEX housing fights IE3 75 kW, the page says so immediately. Engineering should not discover that two days later.',
      },
      {
        title: 'Help is written from tickets',
        body: 'Maintenance work paid for the redesign. Recurring support questions became contextual copy on the fields that generated them.',
      },
    ],
    process: [
      {
        title: 'Map the existing application',
        body: 'Before adding screens I sat with support tickets: where reps got stuck, which rules exploded, which fields were never used. Maintenance of the current app was the research.',
        artifacts: ['Ticket themes', 'Field inventory', 'Dead-end list'],
      },
      {
        title: 'Flow with PMs and designers',
        body: 'Working sessions on the three-step IA. I prototyped in Figma, then in the actual front-end so we were not designing a picture of a configurator.',
        artifacts: ['IA', 'Figma prototype', 'HTML spike'],
      },
      {
        title: 'Build the UI',
        body: 'HTML / CSS / JavaScript. Persistent price column. Inline validation. Responsive so a rep on site could finish on a laptop. Same code path as desktop — not a separate mobile product.',
        artifacts: ['Step shell', 'Rules UI', 'Live price'],
      },
      {
        title: 'Ship in Agile, keep the old app alive',
        body: 'Azure DevOps increments: navigation, then rules, then help. The legacy configurator remained until the new flow covered the main product line. That was the delivery constraint, not a footnote.',
        artifacts: ['Azure DevOps', 'Feature flags', 'Help content'],
      },
    ],
    screens: [
      {
        id: 'quote-legacy',
        title: 'Before — legacy form',
        caption:
          'Every rule on one page, no progressive disclosure. This is the screen support tickets were written about.',
        device: 'desktop',
      },
      {
        id: 'quote-step1',
        title: '01 · Product',
        caption:
          'Choose the equipment line before any option is shown. The catalogue is the first decision, not the fortieth field.',
        device: 'desktop',
      },
      {
        id: 'quote-config',
        title: '02 · Configuration',
        caption:
          'Options with inline conflict validation. Only relevant rules appear. The live price stays in the right column.',
        device: 'desktop',
      },
      {
        id: 'quote-summary',
        title: '03 · Summary',
        caption:
          'BOM, total, generate PDF. The quote a rep can send without exporting a spreadsheet.',
        device: 'desktop',
      },
      {
        id: 'quote-help',
        title: 'Contextual help',
        caption:
          'Copy taken from recurring tickets, placed on the field that caused them. Maintenance as UX.',
        device: 'desktop',
      },
      {
        id: 'quote-mobile',
        title: 'Plant laptop',
        caption:
          'Same three steps on a narrow screen. Not a consumer app — a configurator that still works on a 13-inch in a plant.',
        device: 'mobile',
      },
    ],
  },
  {
    slug: 'cegedim-web',
    name: 'Product sites & SEO',
    company: 'Cegedim',
    identity: 'editorial',
    category: 'Cegedim · Web + SEO',
    timeframe: '2022 — 2023 · France · Alternance',
    summary: 'Mobile-first product pages, a demo form that works on a phone, and SEO so prospects can actually find the software.',
    thesis:
      'Public product sites are a sales instrument. I aligned marketing, product and sales on who the page is for, built mobile-first templates, and treated structure, metadata and Search Console as part of the UX — not a later audit.',
    context:
      'Cegedim’s software products each had a public site used to discover offers and request demos. In alternance as UX Designer / Front-End Developer I worked with marketing, product and sales on those sites: workshops, information architecture, front-end, SEO and measurement.',
    problem:
      'The sites were not responsive. They ranked poorly on the queries prospects actually typed. The demo form had eleven fields and dropped most of its mobile traffic. Marketing, product and sales did not share a single idea of what a page was for.',
    solution:
      'Workshops to lock audience, success (a demo request) and target queries. Then a mobile-first IA and templates I implemented in HTML/CSS/JavaScript. Semantic headings, metadata, internal links and performance were designed with the layout. Analytics and Search Console ran every sprint, not as a quarterly PDF.',
    role: 'UX Designer / Front-End Developer — workshops, IA, responsive templates, front-end, SEO, analytics.',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Google Analytics', 'Google Search Console', 'Miro'],
    metrics: [
      { value: 'Mobile-first', label: 'templates for product pages' },
      { value: 'SEO', label: 'structure, metadata, internal links' },
      { value: 'Measure', label: 'Analytics + Search Console' },
    ],
    result:
      'Organic traffic and mobile demo requests moved in the right direction over the following months. The workshop format and templates were reused for later product launches, which is the actual sign the work stuck.',
    image: '/projects/cegedim-web-seo.svg',
    imageAlt: 'Editorial product landing with a single demo action and a mobile form',
    responsibilities: [
      'Facilitated UX workshops with marketing, product and sales',
      'Developed responsive web applications / templates',
      'Improved visibility through SEO best practices',
      'Set up measurement to iterate on real search and form data',
    ],
    users: [
      {
        name: 'Prospect',
        role: 'Search → page → demo',
        need: 'To understand the software and request a demo with one thumb, from a query they actually type.',
      },
      {
        name: 'Marketing',
        role: 'Queries and proof',
        need: 'Pages that can rank for the language people use, not internal product names only.',
      },
      {
        name: 'Sales',
        role: 'Demo pipeline',
        need: 'A form that still converts on mobile, with three fields, not eleven.',
      },
    ],
    constraints: [
      'Three briefs in one room: brand, product truth, demo as the only success metric',
      'SEO and design had to share one outline — two sitemaps would have failed immediately',
      'Performance and headings were treated as UX because they decide whether the page is found and usable',
    ],
    decisions: [
      {
        title: 'One action per page',
        body: 'Request a demo. Everything else is supporting. Sales, marketing and product had to agree on that in the workshop or the template would have grown a second CTA.',
      },
      {
        title: 'Mobile-first is the SEO outline',
        body: 'Hero, product blocks, proof, form. The HTML heading structure is the same as the wireframe so crawlers and humans share one IA.',
      },
      {
        title: 'Three fields, then measure',
        body: 'The old form had eleven fields. We cut it after looking at where mobile traffic dropped, then watched Search Console and Analytics every sprint.',
      },
    ],
    process: [
      {
        title: 'Workshops with three briefs',
        body: 'Marketing brought queries and proof. Product brought what the software actually does. Sales brought the demo. We locked audience (prospect vs. existing customer), success, and the queries we wanted to rank for.',
        artifacts: ['Workshop board', 'Query list', 'Page goal'],
      },
      {
        title: 'IA and wireframes',
        body: 'Mobile-first templates in Figma, then the same structure in HTML. One H1, scannable blocks, form in reach. SEO was not a second sitemap.',
        artifacts: ['Sitemap', 'Wireframes', 'Heading map'],
      },
      {
        title: 'Responsive front-end',
        body: 'Implemented the templates so the demo CTA stays reachable and the form is usable with one thumb. Performance and semantic headings were part of the build, not a later ticket.',
        artifacts: ['HTML templates', 'CSS', 'Form'],
      },
      {
        title: 'SEO and measurement',
        body: 'Metadata, internal links, Search Console, Analytics. Queries and mobile bounce were reviewed every sprint. Copy and the form moved because of those numbers, not a one-shot audit.',
        artifacts: ['Search Console', 'Analytics', 'Internal links'],
      },
    ],
    screens: [
      {
        id: 'ceg-workshop',
        title: 'Workshop',
        caption:
          'Audiences, page goals and search queries agreed with marketing, product and sales. Three briefs, one success: request a demo.',
        device: 'desktop',
      },
      {
        id: 'ceg-ia',
        title: 'Information architecture',
        caption:
          'Mobile-first outline that is also the heading structure. Hero, product, proof, form — the same tree in Figma and in HTML.',
        device: 'desktop',
      },
      {
        id: 'ceg-desktop',
        title: 'Product page',
        caption:
          'Desktop template. One action, scannable blocks, semantic structure written for both humans and search.',
        device: 'desktop',
      },
      {
        id: 'ceg-mobile',
        title: 'Mobile template',
        caption:
          'Same page on a phone. The demo CTA stays in reach. This is the viewport most of the traffic actually uses.',
        device: 'mobile',
      },
      {
        id: 'ceg-form',
        title: 'Demo request',
        caption:
          'Three fields. The previous form had eleven. Designed after looking at where mobile sessions died.',
        device: 'mobile',
      },
      {
        id: 'ceg-seo',
        title: 'Search Console',
        caption:
          'Queries and pages used in the sprint review with marketing — the measurement loop, not a quarterly PDF.',
        device: 'desktop',
      },
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
