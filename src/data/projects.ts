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
      'It started with a stockpile survey that had to be re-flown: the front overlap had been left at the previous job’s setting, and the gaps only showed up two days later, in photogrammetry. It was not a one-off. A job was spread across a shared calendar, the flight-planning app, a paper-style pre-flight checklist and folders on a drive. Nobody could say at a glance which jobs were actually ready, and quality problems were found when fixing them meant driving back to site.',
    solution:
      'I shadowed pilots and processors, mapped the real job lifecycle and wrote the requirements around two states the team already used informally: “ready to fly” and “dataset usable”. I then designed a desktop view for planning and review, and a phone flow for the pre-flight checklist on site. Recurring elements — map controls, status chips, checklist rows, parameter fields — were built as Design System components in Figma so the developer could reuse them instead of redrawing each screen.',
    role: 'UX Designer — field research, requirements, wireframes and high-fidelity Figma prototypes, ops and field interfaces, geospatial data review, Design System components.',
    team: 'Operations lead · 5 remote pilots · 2 data processors · 1 developer · me (UX)',
    duration: '6 weeks of discovery, first release after about 4 months, then iterations through 2025',
    tools: ['Figma', 'Miro', 'Azure DevOps', 'Design System'],
    metrics: [
      { value: 'CASA', label: 'certified operations — the checklist follows them' },
      { value: '2 surfaces', label: 'office desktop · pilot phone' },
      { value: '2 years', label: 'in the Melbourne team' },
    ],
    result:
      'The pre-flight checklist and the job board were the first parts used every day: pilots ran the checklist on their phone on site, and the ops lead planned the week from the board instead of the calendar. Re-flights caused by wrong overlap or altitude became rare, according to the ops lead. The dataset review screen was rolled out more gradually, as the developer connected it to the processing workflow, and the component library kept new screens consistent.',
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
    findings: [
      {
        quote: 'I plan in the flight app, check the weather on my phone and tick the checklist on paper. Three places, and none of them talk to each other.',
        who: 'Remote pilot, 4 years at Xpatial',
        insight: 'The pre-flight was not missing — it was scattered. The tool had to bring the existing CASA steps into one ordered flow, not invent a new procedure.',
      },
      {
        quote: 'By the time I see the blur, the crew is already on another site.',
        who: 'Data processor',
        insight: 'Quality was checked too late. A quick review right after upload, before processing starts, catches most of what used to cost a re-flight.',
      },
      {
        quote: 'The calendar tells me who is where. It doesn’t tell me who can actually fly.',
        who: 'Operations lead',
        insight: '“Scheduled” and “ready” are two different states. The job board shows readiness and the reason a job is blocked, not just dates.',
      },
      {
        quote: 'Gloves on, sun on the screen — if the button is small, I’ll skip it.',
        who: 'Remote pilot, during a site visit',
        insight: 'Field constraints set the phone UI: one check per screen, large targets, high contrast, nothing else on it.',
      },
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
    iterations: [
      {
        title: 'Pre-flight checklist',
        before: 'One scrolling list of 14 checks, like the paper form.',
        after: 'Six grouped steps, one per screen, with a “hold” state for wind and airspace.',
        why: 'On the first two real jobs, pilots scrolled past items in bright sun and ticked the list at the end, from memory.',
      },
      {
        title: 'Readiness indicator',
        before: 'A score: “83 % ready”.',
        after: 'Ready or Blocked, with the blocking reason written out.',
        why: 'The ops lead’s reaction in the walkthrough: “83 % of what?” A partial score did not help decide whether to send a crew.',
      },
      {
        title: 'Dataset flags',
        before: 'A flag on every image under the blur threshold.',
        after: 'Flags grouped by flight strip; the processor accepts or rejects a strip.',
        why: 'Façade and roof jobs produced dozens of false positives. Processors think in strips, not single images.',
      },
    ],
    limits: [
      'Offline mode for the phone checklist was designed but not built while I was there — pilots still need signal to sync.',
      'Wind and weather are entered by hand; connecting a weather service stayed in the backlog.',
      'Re-flights were tracked in the ops spreadsheet, not measured before and after properly. “Fewer re-flights” is the team’s observation, not a figure I can prove.',
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
      'The trigger was small: a developer was rebuilding a date picker for Direct-Op, the third one in the suite, because nobody knew the Direct-Agenda one could be reused. The inventory that followed found 11 button styles and 4 different date pickers across the three products. The same action looked different from one product to the next — which matters when the same anaesthetist uses Direct-Agenda in the morning and Direct-Consult during the consultation — and contrast or error states were checked late, screen by screen.',
    solution:
      'I started with an inventory of the interface elements used across the three products and reviewed it in workshops with the product owner and developers. We kept what worked, merged duplicates, and I defined foundations (colour, type, spacing, contrast) and core components — buttons, fields, tables, statuses, alerts — with all their states in a shared Figma library. Each component had usage notes, and changes went through the team’s backlog like any other work.',
    role: 'UX Designer (alternance) — UI inventory, workshops, Design System in Figma, wireframes and interactive prototypes, Agile coordination with the product owner and developers.',
    team: 'Product owner · 4 developers · 1 QA · me (UX Designer, alternance)',
    duration: '12 months of alternance, in a company / school rhythm',
    tools: ['Figma', 'Figma Variables', 'Jira', 'Miro'],
    metrics: [
      { value: '3 products', label: 'Direct-Agenda · Direct-Consult · Direct-Op' },
      { value: '≈15 people', label: 'the Lensys team' },
      { value: 'WCAG AA', label: 'contrast checked on the foundations' },
    ],
    result:
      'The kit became the starting point for every new screen during my alternance, and the first Direct-Consult screens were rebuilt on it. Developers stopped asking which button to use, because the answer was in the spec. Migrating the rest of the suite was planned in the backlog, product by product, rather than as a one-off redesign.',
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
    findings: [
      {
        quote: 'In the agenda, red means cancelled. In the consultation, red means allergy. I shouldn’t have to think about that.',
        who: 'Anaesthetist at a client clinic, interview organised with the product owner',
        insight: 'Colour meaning had to be shared. Appointment statuses and clinical alerts became two separate families of tokens, and red is reserved for clinical risk.',
      },
      {
        quote: 'I copy the CSS from the other product and hope it’s the latest version.',
        who: 'Front-end developer',
        insight: 'There was no single source. Every component in the kit has a name and states that map one-to-one to what developers implement.',
      },
      {
        quote: 'We can’t stop features for six months to redo the interface.',
        who: 'Product owner',
        insight: 'No big-bang redesign: the kit is applied screen by screen, through the same backlog as client features.',
      },
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
    iterations: [
      {
        title: 'Colour tokens',
        before: 'Named by colour: blue-500, red-600.',
        after: 'Named by role: action, danger, info, text-muted.',
        why: 'In the first review, two developers mapped the same blue to different uses. Role names removed the guesswork.',
      },
      {
        title: 'Buttons',
        before: 'Five variants, including an outlined “tertiary”.',
        after: 'Three variants plus a destructive one.',
        why: 'The product owner and developers asked to cut: nobody could explain when to use tertiary instead of secondary.',
      },
      {
        title: 'Clinical alerts',
        before: 'A banner at the top of the screen.',
        after: 'The alert sits next to the information concerned — an allergy next to the patient’s name.',
        why: 'In a test on the consultation screen, the anaesthetist scrolled past the banner without reading it.',
      },
    ],
    limits: [
      'During my alternance, only part of Direct-Consult was migrated; Direct-Op kept its old interface.',
      'The kit lived in Figma. Each product still implemented its own coded components — a shared front-end library was the next step, not something we delivered.',
      'Accessibility work covered contrast and states. There was no audit with screen-reader users.',
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
      'The most frequent support ticket read like this: the quote had been rejected by the technical office, because the rep had chosen an option incompatible with the motor voltage and only found out at validation. In the existing configurator, many options were shown on one long page, incompatibilities appeared only at the end, and the interface did not adapt to the small laptop screens reps used on the move.',
    solution:
      'The product team designed a three-step flow — product, configuration, summary — with the price always visible and compatibility messages next to the option that causes them. I implemented it in HTML, CSS and JavaScript: step navigation, responsive layout, display of the rule messages returned by the configuration engine, and the summary before the quote PDF. In parallel I maintained and fixed the existing application.',
    role: 'Front-End Developer (alternance) — front-end features for the CPQ, responsive interfaces, collaboration with developers, product managers and designers, maintenance of the existing application, Agile cycles.',
    team: 'Lead developer (my tutor) · 3 developers · product manager · UI designer · me (front-end, alternance)',
    duration: '12 months of alternance, two-week sprints',
    tools: ['HTML / CSS / JavaScript', 'Figma', 'Azure DevOps', 'Agile / Scrum'],
    metrics: [
      { value: 'Alternance', label: '2021 — 2022' },
      { value: 'Front-end', label: 'HTML · CSS · JavaScript' },
      { value: 'Industrial', label: 'SME manufacturers as clients' },
    ],
    result:
      'The step-based flow was delivered over several sprints, while the old configurator stayed available during the transition. Compatibility problems became visible during configuration instead of after submission, and support saw fewer tickets about the fields that had their own explanation. For me, it was the year I learned to build interfaces that follow a rule engine exactly.',
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
    findings: [
      {
        quote: 'I filled in the whole page and at the end it tells me the motor doesn’t fit. Which field am I supposed to change?',
        who: 'Sales rep, support ticket',
        insight: 'A rule message is only useful on the field that causes it, with the alternative — not in a list after submission.',
      },
      {
        quote: 'Half of these fields don’t apply to this compressor, but I still have to scroll past them.',
        who: 'Sales rep, feedback session with the product manager',
        insight: 'Choose the product family first, then show only the options that apply to it.',
      },
      {
        quote: 'We get the same call every week about direct starting above 11 kW.',
        who: 'Support team',
        insight: 'Recurring questions got a short explanation on the field itself, written with support.',
      },
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
    iterations: [
      {
        title: 'State between steps',
        before: 'Each step kept its own state; going back to step 1 lost the configuration.',
        after: 'One configuration state shared by the three steps and kept in session storage.',
        why: 'Found in my first code review with the lead developer, before it reached users.',
      },
      {
        title: 'Price updates',
        before: 'The price was recalculated on every keystroke.',
        after: 'Recalculated on change, with a short delay and a “calculating…” state.',
        why: 'Each keystroke called the pricing engine; on large configurations the column lagged and flickered.',
      },
      {
        title: 'Rule messages',
        before: 'The engine’s error text displayed as-is.',
        after: 'Error codes mapped to messages written with support, including the alternative to choose.',
        why: '“RULE_ERR_4312: incompatible voltage” meant nothing to a sales rep.',
      },
    ],
    limits: [
      'It was my first year on a production codebase: my first merge requests came back with a lot of review comments, and I learned the team’s conventions the hard way.',
      'Responsive work stopped at laptops and tablets; phones were not a target for this product.',
      'I had no access to usage analytics. Feedback came through support tickets and the product manager.',
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
      'Marketing noticed a gap: most visits to the doctors’ software pages came from phones, but almost all demo requests came from desktop. On a phone, the demo button sat below a long introduction, and the form asked for eleven fields. Page structures also differed from one product to the next, and pages ranked for internal product names rather than the words practitioners type, such as “logiciel médecin généraliste”.',
    solution:
      'Workshops with marketing and product to agree, for each page, on the audience, the main message and the single expected action: request a demo. From there I proposed a common page structure, mobile first, and integrated responsive templates in HTML, CSS and JavaScript. Heading hierarchy, titles, meta descriptions and internal links were handled with the layout, and the demo form was shortened to the fields sales needed to call back.',
    role: 'UX Designer / Front-End Developer (alternance) — UX workshops, page structure, responsive templates, front-end integration, SEO, analytics follow-up.',
    team: 'Web marketing manager · 2 product marketers · 1 web developer · sales contact · me (UX / front-end, alternance)',
    duration: '12 months of alternance',
    tools: ['Figma', 'HTML / CSS / JavaScript', 'Google Analytics', 'Google Search Console', 'Miro'],
    metrics: [
      { value: 'Alternance', label: '2022 — 2023' },
      { value: 'Practitioners', label: 'main audience of the pages' },
      { value: 'Search Console', label: 'queries reviewed with marketing' },
    ],
    result:
      'The redesigned pages shared one responsive structure, which made new product pages quicker to produce. The demo request became reachable in the first screen on mobile, and Search Console and Analytics were reviewed regularly with marketing to adjust titles from the queries practitioners actually used. The workshop format was reused for later pages.',
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
    findings: [
      {
        quote: 'I look at software between two patients, on my phone. If it’s long, I tell myself I’ll come back later — and I don’t.',
        who: 'General practitioner, call organised through sales',
        insight: 'The page must say what the software does and offer a demo within the first screen on mobile.',
      },
      {
        quote: 'Half of what the form asks, I ask again on the phone anyway.',
        who: 'Sales representative',
        insight: 'The form only needs what sales uses to call back and route the request.',
      },
      {
        quote: 'Top queries: product names. “Logiciel médecin” barely appears.',
        who: 'Search Console review with marketing',
        insight: 'Titles and H1s were written in practitioners’ words, product names came second.',
      },
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
    iterations: [
      {
        title: 'Demo form',
        before: 'Cut to three fields: name, email, phone.',
        after: 'Four fields, with profession as a list.',
        why: 'Sales needed the profession to route the request to the right team. We added it back — as a list, not free text.',
      },
      {
        title: 'Hero',
        before: 'A carousel of product screenshots.',
        after: 'One static image and one message.',
        why: 'The carousel was the heaviest element on mobile and slowed the first display; nobody clicked beyond the first slide.',
      },
      {
        title: 'Titles and claims',
        before: 'Titles rewritten with strong marketing wording.',
        after: 'Factual titles, validated by marketing.',
        why: 'Some claims could not be backed up in a regulated sector. Accurate beats catchy.',
      },
    ],
    limits: [
      'The results were followed over a few months; with seasonality and other campaigns running, the effect of the SEO work alone cannot be isolated.',
      'Some product pages stayed on the old template when my alternance ended.',
      'The CMS did not allow A/B testing, so changes were compared before and after, not tested side by side.',
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
