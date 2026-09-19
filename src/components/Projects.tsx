import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project } from '../data/types'
import { Section } from './ui/Section'

export function Projects() {
  return (
    <Section
      id="projects"
      number="03"
      title="Selected projects"
      intro="Four pieces of work, each opened as a case study: the problem, the process that matches the CV, and the screens that were designed or built."
      wide
    >
      <ul>
        {projects.map((project, index) => (
          <li key={project.slug} className="print-avoid-break">
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = `/projects/${project.slug}`
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
          <Link to={href} className="print-hidden group block" aria-label={`Open case study: ${project.name}`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt ?? `${project.name} — preview`}
                loading="eager"
                decoding="async"
                width={1200}
                height={750}
                className="aspect-[16/10] w-full border border-ink/15 object-cover grayscale transition duration-500 group-hover:grayscale-0"
              />
            ) : (
              <ImagePlaceholder index={index} />
            )}
          </Link>
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt ?? `${project.name} — preview`}
              className="hidden aspect-[16/10] w-full object-cover print:block print:h-[48mm] print:object-top"
            />
          ) : null}
        </figure>

        <div className={`flex flex-col lg:col-span-7 ${flipped ? 'lg:order-1' : ''}`}>
          <header className="mb-8 print:mb-3">
            <p className="eyebrow mb-4">
              {String(index + 1).padStart(2, '0')}
              <span className="mx-3 text-ink/30">/</span>
              {project.category}
            </p>
            <h3 className="font-display text-3xl tracking-tight text-ink md:text-5xl">
              <Link to={href} className="link-underline print:no-underline">
                {project.name}
              </Link>
            </h3>
            {project.timeframe ? <p className="mt-3 text-sm text-muted">{project.timeframe}</p> : null}
            <p className="print-hidden mt-5 max-w-xl text-sm leading-relaxed text-ink-soft">{project.summary}</p>
          </header>

          {project.metrics && project.metrics.length > 0 ? (
            <dl className="mb-8 grid grid-cols-3 gap-px bg-ink/15 print:mb-3 print:bg-transparent">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-paper px-3 py-4 print:px-0 print:py-1">
                  <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">{metric.label}</dt>
                  <dd className="mt-2 font-display text-3xl leading-none font-medium tracking-tight text-ink md:text-4xl print:font-sans print:text-lg">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <dl className="hidden flex-1 print:block">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 border-t border-ink/15 py-1 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted sm:pt-0.5">{row.label}</dt>
                <dd className="text-[9pt] leading-snug text-ink-soft">{row.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-auto border-t border-ink/15 pt-5 font-mono text-[11px] leading-relaxed text-muted print:mt-3 print:pt-3">
            <span className="sr-only">Tools: </span>
            {project.tools.join('  /  ')}
          </p>

          <p className="print-hidden mt-6">
            <Link to={href} className="btn-secondary">
              Open case study
            </Link>
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
