import { tools } from '../data/skills'
import { Section } from './ui/Section'

export function Tools() {
  return (
    <Section id="tools" number="05" title="Tools">
      <ul className="flex flex-wrap gap-2.5" aria-label="Tools I work with">
        {tools.map((tool) => (
          <li key={tool}>
            <span className="inline-flex rounded-full bg-night px-4 py-2 text-sm font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent print:bg-transparent print:px-0 print:text-ink">
              {tool}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
