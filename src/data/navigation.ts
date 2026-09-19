export interface NavItem {
  id: string
  label: string
}

/** Order here drives both the sticky nav and the section numbering. */
export const navigation: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/** In-app link to a homepage section, works from case-study routes too. */
export function homeSection(id: string) {
  return { pathname: '/' as const, hash: `#${id}` }
}
