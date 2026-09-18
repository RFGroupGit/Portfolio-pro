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
      <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 print:block print:space-y-3 print:overflow-visible print:border-0 print:bg-transparent">
        {projects.map((project, index) => (
          <li
            key={`${project.name}-${index}`}
            className="print-avoid-break bg-paper print:rounded-sm print:border print:border-line"
          >
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

  return (
    <article className="flex h-full flex-col p-6 md:p-8 print:p-3">
      <figure className="mb-8 print:mb-3">
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

      <header className="mb-6 print:mb-3">
        <p className="eyebrow mb-3">{project.category}</p>
        <h3 className="text-2xl font-medium tracking-tight text-ink">
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
        <dl className="mb-6 grid grid-cols-3 gap-4 border-y border-line py-5 print:mb-3 print:py-2">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs leading-snug text-muted">{metric.label}</dt>
              <dd className="text-xl font-medium tracking-tight text-ink md:text-2xl print:text-lg">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <dl className="flex-1 divide-y divide-line">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 py-3.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4 print:py-1">
            <dt className="text-xs font-medium uppercase tracking-[0.08em] text-muted sm:pt-0.5">{row.label}</dt>
            <dd className="text-[0.9375rem] leading-relaxed text-ink-soft print:text-[9pt] print:leading-snug">{row.value}</dd>
          </div>
        ))}
      </dl>

      <footer className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5 print:mt-3 print:pt-3">
        <span className="sr-only">Tools:</span>
        {project.tools.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
          >
            {tool}
          </span>
        ))}
      </footer>
    </article>
  )
}

/**
 * Deliberately quiet placeholder: fine grid on a paper surface with a
 * centred label. Swap for a real mockup via `project.image`.
 */
function ImagePlaceholder({ index }: { index: number }) {
  return (
    <div
      role="img"
      aria-label="Project visual placeholder"
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-sm border border-line bg-surface"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <span className="absolute left-4 top-3 text-xs tabular-nums text-muted">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-[0.12em] text-muted">Mockup</span>
    </div>
  )
}
