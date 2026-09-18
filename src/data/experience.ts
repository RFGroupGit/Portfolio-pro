import type { Experience } from './types'

/**
 * Professional experience, most recent first.
 * Each entry renders as one row of the timeline. Add, remove or reorder freely.
 */
export const experience: Experience[] = [
  {
    company: 'Dronemapping',
    role: 'UX Designer',
    period: '2024 — 2026',
    location: 'Melbourne, Australia',
    summary: 'Drone mapping and geospatial technology company.',
    highlights: [
      'Developed and maintained the components of the Design System',
      'Conducted user research and analysed functional requirements',
      'Designed wireframes and high-fidelity prototypes in Figma',
      'Created intuitive interfaces dedicated to professional drone operations',
      'Analysed and managed geospatial data collected by drones',
    ],
  },
  {
    company: 'Lensys',
    role: 'UX Designer',
    period: '2023 — 2024',
    location: 'France',
    summary: 'Software company — work-study programme (alternance).',
    highlights: [
      'Designed and maintained scalable Design Systems',
      'Created wireframes and interactive prototypes in Figma',
      'Facilitated UX workshops with stakeholders',
      'Managed projects with Agile methodology and coordinated cross-functional teams',
    ],
  },
  {
    company: 'Cegedim',
    role: 'UX Designer / Front-End Developer',
    period: '2022 — 2023',
    location: 'France',
    summary: 'Software and technology group — work-study programme (alternance).',
    highlights: [
      'Developed responsive web applications',
      'Improved website visibility through SEO best practices',
      'Facilitated UX workshops with multidisciplinary teams',
    ],
  },
  {
    company: 'Techform',
    role: 'Front-End Developer',
    period: '2021 — 2022',
    location: 'France',
    summary: 'CPQ software solutions — work-study programme (alternance).',
    highlights: [
      'Developed front-end features for CPQ software solutions',
      'Implemented responsive user interfaces',
      'Collaborated with developers, product managers and designers',
      'Maintained and improved existing web applications',
      'Contributed to Agile software development cycles',
    ],
  },
]
