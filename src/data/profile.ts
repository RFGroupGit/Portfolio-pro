import type { Profile, AboutContent } from './types'

/**
 * Personal identity & contact details.
 */
export const profile: Profile = {
  firstName: 'Robin',
  lastName: 'Fremy',
  roles: ['UX Designer', 'Product Designer', 'Digital Project Manager'],
  tagline:
    'Digital professional combining UX design, web development and project management to create clear, useful and business-oriented digital experiences.',
  location: 'Lausanne / Vaud, Switzerland',
  email: 'robin.fremy12@gmail.com',
  phone: '+33 6 15 91 06 64',
  // TODO: replace with your real LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/your-profile',
  // cvPdfUrl: '/cv.pdf',
  siteUrl: 'https://www.example.com',
}

export const about: AboutContent = {
  paragraphs: [
    'I am a UX Designer with three years of professional experience, gained through work-study programmes in companies specialised in software and drone-related technologies. Recently graduated with a Master’s degree in UX/UI Design, I specialise in user research, design systems, interaction design and rapid prototyping.',
    'My background as a front-end developer means I design with implementation in mind: interfaces that are feasible, maintainable and measurable. Working with cross-functional teams in Agile environments has also shaped how I approach products — with a clear strategy, structured backlogs and roadmaps, and a constant focus on business value.',
    'An international experience in Melbourne, Australia strengthened my communication skills and my ability to thrive in multicultural environments. I am passionate about AI-assisted design and enjoy building user-centred digital products that generate real value for the business.',
  ],
  facts: [
    { label: 'Based in', value: 'Lausanne, Switzerland' },
    { label: 'Education', value: 'Master UX/UI Design — Digital Campus' },
    { label: 'Experience', value: '3 years in software & drone technology' },
    { label: 'Worked in', value: 'France · Australia' },
    { label: 'Open to', value: 'UX / Product Design · Product & Project Management' },
  ],
}
