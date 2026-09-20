import { tools } from '../data/skills'
import { Section } from './ui/Section'

export function Tools() {
  return (
    <Section id="tools" number="06" title="Tools" wide>
      <ul className="grid grid-cols-2 border-t border-ink sm:grid-cols-3 md:grid-cols-4" aria-label="Tools I work with">
        {tools.map((tool) => (
          <li key={tool} className="border-r border-b border-ink/15 px-4 py-5 text-sm text-ink sm:px-5">
            {tool}
          </li>
        ))}
      </ul>
    </Section>
  )
}
