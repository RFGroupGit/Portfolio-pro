import { projects } from '../data/projects'
import type { Project } from '../data/types'
import { Section } from './ui/Section'
import { ImageLightbox } from './ui/ImageLightbox'

const accents = ['bg-accent', 'bg-moss', 'bg-gold', 'bg-cobalt'] as const
const accentText = ['text-accent', 'text-moss', 'text-gold', 'text-cobalt'] as const

export function Projects() {
  return (
    <Section
      id="projects"
      number="03"
      title="Selected projects"
      intro="A few examples of how I approach digital products: understand the context, frame the problem, design and ship a measurable answer."
      wide
    >
      <ul className="space-y-8 print:space-y-3">
        {projects.map((project, index) => (
          <li key={`${project.name}-${index}`} className="print-avoid-break">
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rows: { label: string; value: string }[] = [
    { label: 'Context', value: project.context },
    { label: 'Problem', value: project.problem },
    { label: 'Solution', value: project.solution },
    { label: 'My role', value: project.role },
    { label: 'Result', value: project.result },
  ]
  const flipped = index % 2 === 1

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-32px_rgba(22,18,15,0.45)] print:rounded-sm print:shadow-none">
      <div className={`h-2 ${accents[index % accents.length]} print:hidden`} aria-hidden="true" />

      <div className="grid gap-0 lg:grid-cols-12">
        <figure className={`p-6 md:p-8 lg:col-span-5 print:p-3 ${flipped ? 'lg:order-2' : ''}`}>
          {project.image ? (
            <ImageLightbox
              src={project.image}
              alt={project.imageAlt ?? `${project.name} — preview`}
              caption={`${project.name} — ${project.category}`}
              className="print:h-[48mm] print:w-full print:object-cover print:object-top"
            />
          ) : (
            <div className="print-hidden">
              <ImagePlaceholder index={index} />
            </div>
          )}
        </figure>

        <div className={`flex flex-col p-6 md:p-8 lg:col-span-7 print:p-3 ${flipped ? 'lg:order-1' : ''}`}>
          <header className="mb-6 print:mb-3">
            <p className="eyebrow mb-3">
              <span className={accentText[index % accentText.length]} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mx-2 text-line-strong">/</span>
              {project.category}
            </p>
            <h3 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            {project.timeframe ? <p className="mt-2 text-sm text-muted">{project.timeframe}</p> : null}
          </header>

          {project.metrics && project.metrics.length > 0 ? (
            <dl className="mb-6 grid grid-cols-3 gap-3 print:mb-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl bg-paper px-3 py-3 print:bg-transparent print:px-0 print:py-1">
                  <dt className="text-[0.7rem] uppercase tracking-[0.1em] text-muted">{metric.label}</dt>
                  <dd className="mt-1 font-display text-2xl tracking-tight text-ink md:text-3xl print:text-lg">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <dl className="flex-1 divide-y divide-line">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 py-3.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4 print:py-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-muted sm:pt-0.5">{row.label}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-ink-soft print:text-[9pt] print:leading-snug">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <footer className="mt-6 flex flex-wrap gap-2 print:mt-3">
            <span className="sr-only">Tools:</span>
            {project.tools.map((tool, i) => (
              <span key={`${tool}-${i}`} className="chip">
                {tool}
              </span>
            ))}
          </footer>
        </div>
      </div>
    </article>
  )
}

function ImagePlaceholder({ index }: { index: number }) {
  return (
    <div
      role="img"
      aria-label="Project visual placeholder"
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-paper"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(22,18,15,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,18,15,0.05) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <span className="absolute left-4 top-3 font-display text-2xl text-muted">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-[0.12em] text-muted">Mockup</span>
    </div>
  )
}
