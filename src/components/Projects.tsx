import { projects } from '../data/projects'
import type { Project } from '../data/types'
import { Section } from './ui/Section'
import { ImageLightbox } from './ui/ImageLightbox'

export function Projects() {
  return (
    <Section
      id="projects"
      number="03"
      title="Selected projects"
      intro="A few examples of how I approach digital products: understand the context, frame the problem, design and ship a measurable answer."
      wide
    >
      <ul>
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
    <article className="border-t border-ink py-12 md:py-16 print:py-4">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <figure className={`lg:col-span-5 ${flipped ? 'lg:order-2' : ''}`}>
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

        <div className={`flex flex-col lg:col-span-7 ${flipped ? 'lg:order-1' : ''}`}>
          <header className="mb-8 print:mb-3">
            <p className="eyebrow mb-4">
              {String(index + 1).padStart(2, '0')}
              <span className="mx-3 text-ink/30">/</span>
              {project.category}
            </p>
            <h3 className="font-display text-3xl tracking-tight text-ink md:text-5xl">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            {project.timeframe ? <p className="mt-3 text-sm text-muted">{project.timeframe}</p> : null}
          </header>

          {project.metrics && project.metrics.length > 0 ? (
            <dl className="mb-8 grid grid-cols-3 gap-px bg-ink/15 print:mb-3 print:bg-transparent">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-paper px-3 py-4 print:px-0 print:py-1">
                  <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">{metric.label}</dt>
                  <dd className="mt-2 font-sans text-3xl leading-none font-medium tracking-tight text-ink md:text-4xl print:text-lg">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <dl className="flex-1">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 border-t border-ink/15 py-3.5 sm:grid-cols-[7rem_1fr] sm:gap-6 print:py-1">
                <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted sm:pt-0.5">{row.label}</dt>
                <dd className="text-sm leading-relaxed text-ink-soft print:text-[9pt] print:leading-snug">{row.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 border-t border-ink/15 pt-5 font-mono text-[11px] leading-relaxed text-muted print:mt-3 print:pt-3">
            <span className="sr-only">Tools: </span>
            {project.tools.join('  /  ')}
          </p>
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
      className="relative flex aspect-[16/10] w-full items-center justify-center border border-ink/20 bg-surface"
    >
      <span className="absolute top-3 left-4 font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">Mockup</span>
    </div>
  )
}
