import { tools } from '../data/skills'
import { Section } from './ui/Section'

export function Tools() {
  return (
    <Section id="tools" number="05" title="Tools">
      <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3" aria-label="Tools I work with">
        {tools.map((tool) => (
          <li key={tool} className="border-t border-line py-3.5 text-base text-ink md:text-lg">
            {tool}
          </li>
        ))}
      </ul>
    </Section>
  )
}
