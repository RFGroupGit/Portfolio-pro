import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'flight-ops',
    name: 'Flight Ops',
    company: 'Xpatial · Dronemapping',
    identity: 'ops',
    category: 'Xpatial Dronemapping · Internal ops tool · Desktop + field',
    timeframe: '2024 — 2026 · Melbourne',
    summary:
      'An internal tool for a drone survey team: plan the job, run the CASA pre-flight on a phone, check the imagery before processing.',
    thesis:
      'Xpatial sells drone surveys, not software. Every re-flight is a crew driving back to site. The tool I designed exists for one reason: catch an incomplete plan or an unusable dataset while it is still cheap to fix.',
    context:
      'Xpatial is a CASA-certified drone mapping and reality-capture company based in Melbourne. Its pilots fly construction progress surveys, stockpile volumes, roof and façade inspections and large-area mapping across Victoria; the office turns the imagery into orthomosaics, 3D models and reports for clients. I joined as UX Designer and worked with the operations lead, the pilots, the data processing team and the developer building the internal tools.',
    problem:
      'A job was spread across a shared calendar, flight-planning apps, a paper-style pre-flight checklist and folders on a drive. Pilots sometimes arrived on site with overlap or altitude that did not match the brief. Gaps or blurred images were often only noticed once the dataset was already in photogrammetry, which meant a second trip. Nobody could say at a glance which jobs were actually ready.',
    solution:
      'I shadowed pilots and processors, mapped the real job lifecycle and wrote the requirements around two states the team already used informally: “ready to fly” and “dataset usable”. I then designed a desktop view for planning and review, and a phone flow for the pre-flight checklist on site. Recurring elements — map controls, status chips, checklist rows, parameter fields — were built as Design System components in Figma so the developer could reuse them instead of redrawing each screen.',
    role: 'UX Designer — field research, requirements, wireframes and high-fidelity Figma prototypes, ops and field interfaces, geospatial data review, Design System components.',
    tools: ['Figma', 'Miro', 'Azure DevOps', 'Design System'],
    metrics: [
      { value: 'CASA', label: 'certified operations — the checklist follows them' },
      { value: '2 surfaces', label: 'office desktop · pilot phone' },
      { value: '2 years', label: 'in the Melbourne team' },
    ],
    result:
      'The pre-flight checklist and the job board were the first parts used day to day: pilots worked from the phone flow on site, and the ops lead planned the week from the board instead of the calendar. The dataset review screen was rolled out more gradually, as the developer connected it to the processing workflow. The component library kept those screens consistent as new ones were added.',
    image: '/projects/flight-ops.svg',
    imageAlt: 'Flight Ops dark operations console with survey map and readiness panel',
    responsibilities: [
      'Conducted user research with pilots, data processors and the operations lead',
      'Analysed functional requirements and turned them into user flows',
      'Designed wireframes and high-fidelity prototypes in Figma',
      'Created interfaces dedicated to professional drone operations, desktop and field',
      'Designed views to review and manage the geospatial data collected by drones',
      'Developed and maintained the Design System components handed to development',
    ],
    users: [
      {
        name: 'Remote pilot',
        role: 'On site — flies the job',
        need: 'A checklist that follows the CASA procedure and works on a phone, outdoors, without going back to the car for a laptop.',
      },
      {
        name: 'Data processor',
        role: 'Office — photogrammetry',
        need: 'To see gaps, blur or bad exposure before launching hours of processing on a dataset.',
      },
      {
        name: 'Operations lead',
        role: 'Schedules crews and jobs',
        need: 'One view of which jobs are ready, blocked by weather or waiting for review — not a calendar full of notes.',
      },
    ],
    constraints: [
      'A small team: one developer for internal tools, so screens had to reuse the same components',
      'Pre-flight steps come from CASA operating procedures — the UI could reorder them for the field, not remove them',
      'Sun, wind and gloves on site: large targets, high contrast, no dense tables on the phone',
    ],
    decisions: [
      {
        title: 'Show coverage on the map, not in a form',
        body: 'Altitude and overlap only mean something once you see the strips on the site polygon. Planning became a map with a readiness panel, so a gap at the edge of a site is visible before anyone leaves the office.',
      },
      {
        title: 'The phone does the checklist, nothing else',
        body: 'Pilots did not want the planner on a small screen. They needed ordered checks with big targets, and a clear “hold” when wind or airspace is not right. A shrunk desktop would have failed in the field.',
      },
      {
        title: 'Review before processing, with the processors',
        body: 'The quality flags (blur, gap, exposure) were defined with the people who run photogrammetry. The rule is theirs: a flagged set is accepted or re-flown before it goes into processing.',
      },
    ],
    process: [
      {
        title: 'Research on real jobs',
        body: 'Ride-alongs to sites and sessions with the processing team. I mapped the lifecycle as it actually happens — brief, weather window, batteries, pre-flight, capture, upload, processing, client delivery — and where it broke.',
        artifacts: ['Field notes', 'Job lifecycle map', 'Requirements'],
      },
      {
        title: 'Flows and wireframes',
        body: 'Low-fidelity flows for planning, pre-flight, upload and review, walked through with the ops lead and a pilot before any visual work. The map with live coverage was the screen to get right first.',
        artifacts: ['User flows', 'Wireframes', 'Walkthroughs'],
      },
      {
        title: 'High-fidelity prototypes',
        body: 'Figma prototypes of the desktop planning view and the phone checklist, tested with pilots on real upcoming jobs. Several checklist steps were reordered after the first test to match how crews actually set up.',
        artifacts: ['Hi-fi Figma', 'Test notes'],
      },
      {
        title: 'Dataset review',
        body: 'A review grid for the processing team: thumbnails, flags, and a hold before processing. Designed next to the processors, using their own examples of rejected sets.',
        artifacts: ['Review grid', 'Flag definitions'],
      },
      {
        title: 'Design System and hand-off',
        body: 'Map chrome, status chips, checklist rows, parameter fields and tables documented as components, with the same names in Figma and in the developer’s tickets. New screens start from the library.',
        artifacts: ['DS components', 'Hand-off specs'],
      },
    ],
    screens: [
      {
        id: 'flight-map',
        title: 'Job overview',
        caption:
          'Desktop planning view: site polygon, planned path and a readiness panel — the screen the ops lead checks before a crew leaves.',
        device: 'desktop',
      },
      {
        id: 'flight-params',
        title: 'Flight parameters',
        caption:
          'Altitude, overlap, GSD and speed update a coverage preview. A strip with insufficient overlap stays visible instead of hiding in the flight app.',
        device: 'desktop',
      },
      {
        id: 'flight-mobile',
        title: 'Pre-flight checklist',
        caption:
          'Phone flow on site. Ordered CASA checks with large targets; wind or airspace puts the job on hold rather than letting it be ticked off.',
        device: 'mobile',
      },
      {
        id: 'flight-review',
        title: 'Dataset review',
        caption:
          'Before photogrammetry: blur, gap and exposure flags. The set is held until a processor accepts it or asks for a re-flight.',
        device: 'desktop',
      },
      {
        id: 'flight-fleet',
        title: 'Job board',
        caption:
          'Ops lead view of the week: ready, on hold, in the field, in review. Built from the finding that a “filled form” was not the same as “ready”.',
        device: 'desktop',
      },
      {
        id: 'flight-ds',
        title: 'Design System',
        caption:
          'The component library behind these screens — tokens, statuses, checklist and map patterns — in the Xpatial navy, coral and cyan.',
        device: 'desktop',
      },
    ],
  },
  {
    slug: 'direct-suite',
    name: 'Direct suite UI kit',
    company: 'Lensys · Bow Medical group',
    identity: 'system',
    category: 'Lensys · Anaesthesia software · Design System',
    timeframe: '2023 — 2024 · France · Alternance',
    summary:
      'One shared UI kit for three anaesthesia products — appointments, pre-anaesthesia consultation and peri-operative follow-up.',
    thesis:
      'Lensys makes software used by anaesthetists in private clinics. Its three products had grown separately and looked it. The goal was not a rebrand: it was one set of components so the same field, table or alert behaves the same way in all three.',
    context:
      'Lensys is a small French publisher — around fifteen people — of an anaesthesia suite: Direct-Agenda (appointments), Direct-Consult (pre-anaesthesia consultation) and Direct-Op (peri- and post-operative follow-up), used by clinics and anaesthetists. It joined the Bow Medical group, publisher of the DIANE suite, in 2022. I worked there as a UX Designer in alternance, with the product owner and the development team.',
    problem:
      'Each product had its own buttons, forms, tables and alert styles. The same action looked different from one product to the next, which matters when the same anaesthetist uses Direct-Agenda in the morning and Direct-Consult during the consultation. New screens were designed from scratch, and contrast or error states were checked late, screen by screen.',
    solution:
      'I started with an inventory of the interface elements used across the three products and reviewed it in workshops with the product owner and developers. We kept what worked, merged duplicates, and I defined foundations (colour, type, spacing, contrast) and core components — buttons, fields, tables, statuses, alerts — with all their states in a shared Figma library. Each component had usage notes, and changes went through the team’s backlog like any other work.',
    role: 'UX Designer (alternance) — UI inventory, workshops, Design System in Figma, wireframes and interactive prototypes, Agile coordination with the product owner and developers.',
    tools: ['Figma', 'Figma Variables', 'Jira', 'Miro'],
    metrics: [
      { value: '3 products', label: 'Direct-Agenda · Direct-Consult · Direct-Op' },
      { value: '≈15 people', label: 'the Lensys team' },
      { value: 'WCAG AA', label: 'contrast checked on the foundations' },
    ],
    result:
      'The kit became the starting point for new screens during my alternance, and the first Direct-Consult screens were redesigned on it. Migrating the rest of the existing interface was planned in the backlog, product by product, rather than as a one-off redesign. Contrast and error states are now decided once, in the foundations.',
    image: '/projects/prism-design-system.svg',
    imageAlt: 'Design system documentation with tokens, component spec and contribution rules',
    responsibilities: [
      'Designed and maintained a scalable Design System (foundations and components)',
      'Created wireframes and interactive prototypes in Figma',
      'Facilitated UX workshops with the product owner and developers',
      'Managed the work in Agile and coordinated it with the development team',
    ],
    users: [
      {
        name: 'Anaesthetist',
        role: 'Consultation and follow-up',
        need: 'The same patterns in every product, so that reading a patient record or an alert never has to be re-learned.',
      },
      {
        name: 'Developer',
        role: 'Front-end implementation',
        need: 'Components with defined states and names that match Figma — not a screenshot to interpret.',
      },
      {
        name: 'Product owner',
        role: 'Backlog and roadmap',
        need: 'A migration that can be planned alongside regulatory and client features, without freezing the products.',
      },
    ],
    constraints: [
      'Three products in production with clinical users — no big-bang redesign',
      'A small development team: every component had to be realistic to implement and maintain',
      'Medical context: readability, error states and contrast are safety questions, not taste',
    ],
    decisions: [
      {
        title: 'Inventory before styling',
        body: 'Nothing was redesigned before every button, field and table in use was collected side by side. Most differences were accidents of history, and seeing them together made the case in the workshops.',
      },
      {
        title: 'Contrast and states in the foundations',
        body: 'Text colours, statuses and error states were fixed once, at the foundation level, with WCAG AA contrast — instead of being corrected screen by screen after testing.',
      },
      {
        title: 'Changes go through the backlog',
        body: 'A new component or variant is a backlog item reviewed with the product owner and a developer. If it is not accepted, the screen uses an existing component.',
      },
    ],
    process: [
      {
        title: 'UI inventory and workshops',
        body: 'Screenshots of the three products grouped by element — buttons, fields, tables, alerts. Reviewed with the product owner and developers to separate real needs from drift.',
        artifacts: ['UI inventory', 'Workshop board', 'Keep / merge list'],
      },
      {
        title: 'Foundations',
        body: 'Colour, type scale, spacing and contrast pairs as Figma Variables, named so developers could map them to their styles.',
        artifacts: ['Figma Variables', 'Contrast pairs', 'Type scale'],
      },
      {
        title: 'Components and states',
        body: 'Buttons, fields, tables, statuses and alerts with default, hover, focus, disabled and error states, plus short usage notes. Tested by redesigning real Direct-Consult screens with them.',
        artifacts: ['Component specs', 'Usage notes', 'Prototypes'],
      },
      {
        title: 'Working in Agile',
        body: 'Component work and screen migrations were tickets in the same Jira backlog as features, reviewed in the sprint rituals with the team.',
        artifacts: ['Jira tickets', 'Migration plan'],
      },
    ],
    screens: [
      {
        id: 'prism-audit',
        title: 'UI inventory',
        caption:
          'Workshop material: the button styles found across the three products before anything was redesigned.',
        device: 'desktop',
      },
      {
        id: 'prism-tokens',
        title: 'Foundations',
        caption: 'Colour, type and spacing tokens. Contrast is checked here, once, rather than on each screen.',
        device: 'desktop',
      },
      {
        id: 'prism-button',
        title: 'Component spec',
        caption: 'Button states and usage notes — the page a developer opens before implementing.',
        device: 'desktop',
      },
      {
        id: 'prism-a11y',
        title: 'Contrast pairs',
        caption: 'Colour pairs checked against WCAG. A pair that fails is not used for text.',
        device: 'desktop',
      },
      {
        id: 'prism-docs',
        title: 'Proposing a component',
        caption: 'How a new component or variant is requested: a backlog item, a Figma frame, a review with the team.',
        device: 'desktop',
      },
      {
        id: 'prism-product',
        title: 'In Direct-Consult',
        caption:
          'A pre-anaesthesia consultation list rebuilt with the kit — same table, statuses and actions as the spec. Patient data is fictional.',
        device: 'desktop',
      },
    ],
  },
  {
    slug: 'quote-builder',
    name: 'Quote Builder',
    company: 'Techform',
    identity: 'cpq',
    category: 'Techform · CPQ software · Front-end',
    timeframe: '2021 — 2022 · France · Alternance',
    summary:
      'Front-end work on a CPQ configurator: a step-by-step quote flow with live price and compatibility messages, built in HTML, CSS and JavaScript.',
    thesis:
      'Techform’s CPQ lets industrial manufacturers’ sales teams configure complex products and produce reliable quotes. As a front-end developer in alternance, my job was to turn the product team’s designs into a web interface that stays clear when the rules get complicated.',
    context:
      'Techform was a French publisher of CPQ (configure, price, quote) software for industrial SMEs: sales reps configure products with options and variants, the software checks compatibilities, prices in real time and generates the quote. The product was later acquired by Visiativ. I joined the development team as a Front-End Developer in alternance, working with developers, product managers and designers.',
    problem:
      'In the existing configurator, many options were shown on one long page. Incompatibilities between options only appeared at validation, and the interface did not adapt to smaller laptop screens used by reps on the move. Maintenance tickets regularly came back to the same confusing fields.',
    solution:
      'The product team designed a three-step flow — product, configuration, summary — with the price always visible and compatibility messages next to the option that causes them. I implemented it in HTML, CSS and JavaScript: step navigation, responsive layout, display of the rule messages returned by the configuration engine, and the summary before the quote PDF. In parallel I maintained and fixed the existing application.',
    role: 'Front-End Developer (alternance) — front-end features for the CPQ, responsive interfaces, collaboration with developers, product managers and designers, maintenance of the existing application, Agile cycles.',
    tools: ['HTML / CSS / JavaScript', 'Figma', 'Azure DevOps', 'Agile / Scrum'],
    metrics: [
      { value: 'Alternance', label: '2021 — 2022' },
      { value: 'Front-end', label: 'HTML · CSS · JavaScript' },
      { value: 'Industrial', label: 'SME manufacturers as clients' },
    ],
    result:
      'The step-based flow was delivered over several sprints, alongside the existing configurator which stayed available during the transition. Compatibility problems became visible while configuring instead of after submission. For me, it was a year of learning to build interfaces that have to follow a rule engine exactly — and of seeing, through maintenance tickets, where users actually got lost.',
    image: '/projects/cpq-quote-builder.svg',
    imageAlt: 'Three-step product configurator with live pricing column',
    previewScreen: 'quote-step1',
    responsibilities: [
      'Developed front-end features for CPQ software solutions',
      'Implemented responsive user interfaces',
      'Collaborated with developers, product managers and designers',
      'Maintained and improved the existing web application',
      'Contributed to Agile software development cycles',
    ],
    users: [
      {
        name: 'Sales rep',
        role: 'Office or customer site',
        need: 'To configure a product and send a correct quote without calling the technical office for every option.',
      },
      {
        name: 'New rep',
        role: 'Learning the catalogue',
        need: 'A path that shows only the options relevant to the chosen product, in a sensible order.',
      },
      {
        name: 'Support',
        role: 'Tickets',
        need: 'Fewer tickets about the same fields, thanks to clearer messages where the problem occurs.',
      },
    ],
    constraints: [
      'The compatibility and pricing rules live in the configuration engine — the front-end displays them, it does not re-implement them',
      'The existing configurator had to keep working while the new flow was delivered',
      'Laptops, not phones: responsive meant small laptop screens and resized windows',
    ],
    decisions: [
      {
        title: 'Three steps instead of one long page',
        body: 'Choose the product, then configure it, then check the summary. Options that do not apply to the chosen product are never shown. This was the product team’s design; my part was making the navigation and state between steps reliable.',
      },
      {
        title: 'Messages next to the option',
        body: 'When the engine returns an incompatibility, the message is shown on the field concerned, with the alternative, not as a list at the end.',
      },
      {
        title: 'Price always visible',
        body: 'A persistent price column, updated after each change, so reps see the impact of an option immediately.',
      },
    ],
    process: [
      {
        title: 'Learning the existing application',
        body: 'Maintenance tickets and bug fixes on the current configurator were my way into the product: where users got stuck, which fields generated questions.',
        artifacts: ['Bug fixes', 'Ticket themes'],
      },
      {
        title: 'From Figma to components',
        body: 'Working from the designers’ Figma screens, I broke the flow into reusable front-end pieces — step header, option field, message, price column — and raised the cases the mock-ups did not cover.',
        artifacts: ['Figma specs', 'Front-end components'],
      },
      {
        title: 'Building the flow',
        body: 'HTML, CSS and JavaScript for the three steps, responsive layout, and display of the engine’s rule messages. Reviewed by the senior developers before merge.',
        artifacts: ['Step navigation', 'Rule messages', 'Price column'],
      },
      {
        title: 'Delivering in sprints',
        body: 'Work tracked in Azure DevOps and delivered increment by increment, with the existing configurator kept in place until the new flow was ready.',
        artifacts: ['Azure DevOps', 'Code reviews'],
      },
    ],
    screens: [
      {
        id: 'quote-legacy',
        title: 'Before — one long page',
        caption: 'The previous configurator: many options at once, incompatibilities only reported on validation.',
        device: 'desktop',
      },
      {
        id: 'quote-step1',
        title: '01 · Product',
        caption: 'The rep picks the product family first. Only then do its options appear.',
        device: 'desktop',
      },
      {
        id: 'quote-config',
        title: '02 · Configuration',
        caption:
          'Options with the engine’s compatibility message on the field concerned, and the price updated in the side column.',
        device: 'desktop',
      },
      {
        id: 'quote-summary',
        title: '03 · Summary',
        caption: 'Selected items and total before generating the quote PDF.',
        device: 'desktop',
      },
      {
        id: 'quote-help',
        title: 'Contextual message',
        caption: 'Explanation shown on the field that triggers a recurring question, written with the support team.',
        device: 'desktop',
      },
      {
        id: 'quote-mobile',
        title: 'Small screen',
        caption: 'The same flow on a narrow window: steps as tabs, price under the options.',
        device: 'mobile',
      },
    ],
  },
  {
    slug: 'cegedim-web',
    name: 'Product pages & SEO',
    company: 'Cegedim Santé',
    identity: 'editorial',
    category: 'Cegedim Santé · Web · SEO',
    timeframe: '2022 — 2023 · France · Alternance',
    summary:
      'Responsive product pages for healthcare software, a simpler demo request form, and SEO work so doctors find the right page.',
    thesis:
      'Cegedim Santé sells software to doctors, pharmacists and other health professionals. Its product pages have one job: help a practitioner understand an offer and ask for a demo. I worked on making those pages responsive, easier to scan and easier to find.',
    context:
      'Cegedim Santé, part of the Cegedim group, publishes practice-management software and services for health professionals — doctors, paramedics, pharmacies, health centres. In alternance as UX Designer / Front-End Developer, I worked with the marketing team on the public product pages: workshops, page structure, front-end integration, SEO and follow-up in Google Analytics and Search Console.',
    problem:
      'Some product pages were hard to use on a phone, their structure differed from one product to the next, and the demo request form asked for more information than needed to call a practitioner back. On the search side, pages did not always match the words practitioners actually type, such as “logiciel médecin généraliste”.',
    solution:
      'Workshops with marketing and product to agree, for each page, on the audience, the main message and the single expected action: request a demo. From there I proposed a common page structure, mobile first, and integrated responsive templates in HTML, CSS and JavaScript. Heading hierarchy, titles, meta descriptions and internal links were handled with the layout, and the demo form was shortened to the fields sales needed to call back.',
    role: 'UX Designer / Front-End Developer (alternance) — UX workshops, page structure, responsive templates, front-end integration, SEO, analytics follow-up.',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Google Analytics', 'Google Search Console', 'Miro'],
    metrics: [
      { value: 'Alternance', label: '2022 — 2023' },
      { value: 'Practitioners', label: 'main audience of the pages' },
      { value: 'Search Console', label: 'queries reviewed with marketing' },
    ],
    result:
      'The redesigned pages shared one responsive structure, which made new product pages quicker to produce. Search Console and Analytics were reviewed regularly with marketing, and titles and content were adjusted from the queries practitioners actually used. The workshop format was reused for later pages.',
    image: '/projects/cegedim-web-seo.svg',
    imageAlt: 'Healthcare software product page with a single demo request action and a mobile form',
    responsibilities: [
      'Facilitated UX workshops with marketing, product and sales',
      'Developed responsive web pages and templates',
      'Improved website visibility through SEO best practices',
      'Followed page performance in Google Analytics and Search Console',
    ],
    users: [
      {
        name: 'Practitioner',
        role: 'Search → page → demo',
        need: 'To understand quickly what the software does for their practice and ask for a demo from a phone, between two appointments.',
      },
      {
        name: 'Marketing',
        role: 'Content and visibility',
        need: 'Pages that rank for the words practitioners use, not only for internal product names.',
      },
      {
        name: 'Sales',
        role: 'Demo requests',
        need: 'A short form with the information needed to call back — name, contact, profession.',
      },
    ],
    constraints: [
      'Several products and audiences on the same site — one structure had to fit them all',
      'Regulated sector: claims about certifications and funding had to stay accurate and validated by marketing',
      'SEO and design had to share one page outline, not two separate documents',
    ],
    decisions: [
      {
        title: 'One main action per page',
        body: 'Requesting a demo is the goal. Other links support it. This was agreed in the workshop so the template would not grow a second call to action.',
      },
      {
        title: 'The wireframe is the heading structure',
        body: 'One H1, then sections as H2 — what it does, for whom, proof, demo. The same outline serves readers and search engines.',
      },
      {
        title: 'Only the fields sales uses',
        body: 'The demo form was reduced to what the sales team needed to call back. Other questions are asked during the call.',
      },
    ],
    process: [
      {
        title: 'Workshops',
        body: 'With marketing, product and sales: who the page is for, the message, the queries we want to appear on, and what counts as success.',
        artifacts: ['Workshop board', 'Target queries', 'Page goal'],
      },
      {
        title: 'Structure and wireframes',
        body: 'A mobile-first page outline in Figma — hero, benefits, proof, demo — then the same structure in the templates.',
        artifacts: ['Page outline', 'Wireframes', 'Heading map'],
      },
      {
        title: 'Responsive integration',
        body: 'HTML, CSS and JavaScript templates, with the demo button reachable on mobile and a form usable with one thumb.',
        artifacts: ['Templates', 'Form'],
      },
      {
        title: 'SEO and follow-up',
        body: 'Titles, meta descriptions, internal links; then regular reviews of Search Console queries and Analytics with marketing to adjust content.',
        artifacts: ['Search Console', 'Google Analytics', 'Internal links'],
      },
    ],
    screens: [
      {
        id: 'ceg-workshop',
        title: 'Workshop',
        caption: 'Audience, message and target queries agreed with marketing, product and sales. One success: a demo request.',
        device: 'desktop',
      },
      {
        id: 'ceg-ia',
        title: 'Page outline',
        caption: 'The mobile-first outline that is also the heading structure — the same in Figma and in HTML.',
        device: 'desktop',
      },
      {
        id: 'ceg-desktop',
        title: 'Product page',
        caption: 'Desktop template: one message, scannable sections, one action. Product and copy are illustrative.',
        device: 'desktop',
      },
      {
        id: 'ceg-mobile',
        title: 'Mobile',
        caption: 'The same page on a phone, with the demo request always within reach.',
        device: 'mobile',
      },
      {
        id: 'ceg-form',
        title: 'Demo request',
        caption: 'A short form: only what sales needs to call a practitioner back.',
        device: 'mobile',
      },
      {
        id: 'ceg-seo',
        title: 'Search Console',
        caption: 'Queries reviewed with marketing to adjust titles and content. Figures are illustrative.',
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
