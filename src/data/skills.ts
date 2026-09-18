import type { SkillGroup } from './types'

/** Skills grouped by category. No levels or scores on purpose. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'UX / Product',
    skills: [
      'User Research',
      'UX Design',
      'UI Design',
      'Design Systems',
      'Interaction Design',
      'Rapid Prototyping',
      'User Flows',
      'Usability Testing',
      'Design Thinking',
      'AI-assisted Design',
    ],
  },
  {
    title: 'Product / Project',
    skills: [
      'Product Strategy',
      'Product Thinking',
      'Product Management',
      'Project Management',
      'Agile / Scrum',
      'User Stories & Product Backlogs',
      'Roadmapping',
      'Stakeholder Management',
      'Cross-functional Collaboration',
    ],
  },
  {
    title: 'Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'CMS', 'Web Integration'],
  },
  {
    title: 'Digital Marketing',
    skills: ['SEO', 'Web Analytics', 'Conversion Optimization', 'Digital Strategy'],
  },
]

/** Tools, displayed as a plain visual list. */
export const tools: string[] = [
  'Figma',
  'Adobe Creative Cloud',
  'Canva',
  'WordPress',
  'Google Analytics',
  'Google Search Console',
  'Azure DevOps',
  'Jira',
  'Notion',
  'Miro',
  'Git',
  'Visual Studio Code',
  'Cursor',
  'Claude',
]
