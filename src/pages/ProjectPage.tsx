import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectMock } from '../components/screens/ProjectMocks'
import { homeSection } from '../data/navigation'
import { getAdjacentProjects, getProject, projects } from '../data/projects'
import { profile } from '../data/profile'
import { NotFoundPage } from './NotFoundPage'

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'responsibilities', label: 'Role' },
  { id: 'process', label: 'Process' },
  { id: 'screens', label: 'Screens' },
  { id: 'outcome', label: 'Outcome' },
] as const

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  const index = slug ? projects.findIndex((item) => item.slug === slug) : -1

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.name} — ${profile.firstName} ${profile.lastName}`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) return <NotFoundPage />

  const { prev, next } = getAdjacentProjects(project.slug)
  const shortRole = project.role.split('—')[0]?.trim() ?? project.role
  const folio = String(index + 1).padStart(2, '0')

  return (
    <main id="main" className="bg-paper">
      <article>
        <header className="relative overflow-hidden border-b border-ink/15">
          <span
            aria-hidden="true"
            className="print-hidden pointer-events-none absolute -top-10 right-0 font-display text-[28vw] leading-none font-medium text-ink/[0.045] select-none"
          >
            {folio}
          </span>

          <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-20 md:px-10 md:pt-20 md:pb-28">
            <Link
              to={homeSection('projects')}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-muted hover:text-ink"
            >
              <span aria-hidden="true">←</span>
              Selected projects
            </Link>

            <p className="eyebrow mt-12 mb-6">
              {folio}
              <span className="mx-3 text-ink/30">/</span>
              {project.category}
            </p>

            <h1 className="font-display text-h2 max-w-5xl font-medium text-ink md:text-[clamp(3.5rem,8vw,6.5rem)] md:leading-[0.92]">
              {project.name}
            </h1>
            <p className="mt-8 max-w-2xl text-lede text-ink-soft">{project.summary}</p>

            <dl className="mt-16 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
              <Meta label="Client" value={project.company} />
              <Meta label="Role" value={shortRole} />
              <Meta label="When" value={project.timeframe ?? '—'} />
              <Meta label="Tools" value={project.tools.join(' · ')} />
            </dl>
          </div>
        </header>

        <nav
          aria-label="Case study sections"
          className="print-hidden sticky top-14 z-30 border-b border-ink/10 bg-paper/90 backdrop-blur-md"
        >
          <ol className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3 md:gap-10 md:px-10">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-mono text-[10px] tracking-[0.16em] whitespace-nowrap uppercase text-muted hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {project.metrics && project.metrics.length > 0 ? (
          <div className="border-b border-ink/15">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-ink/15 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-paper px-6 py-10 md:px-10">
                  <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">{metric.label}</dt>
                  <dd className="mt-3 font-display text-4xl leading-none font-medium tracking-tight text-ink md:text-5xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}

        <section id="overview" className="scroll-mt-28 border-b border-ink/15 py-20 md:scroll-mt-16 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="eyebrow mb-10">Overview</p>
            <div className="grid gap-12 lg:grid-cols-3">
              <OverviewBlock title="Context" body={project.context} />
              <OverviewBlock title="Problem" body={project.problem} />
              <OverviewBlock title="Approach" body={project.solution} />
            </div>
          </div>
        </section>

        <section id="responsibilities" className="scroll-mt-28 border-b border-ink/15 py-20 md:scroll-mt-16 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">Role</p>
              <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">What I owned</h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">{project.role}</p>
            </div>
            <ol className="lg:col-span-8">
              {project.responsibilities.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-5 border-t border-ink/15 py-5 text-sm leading-relaxed text-ink first:border-t-0"
                >
                  <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="process" className="scroll-mt-28 border-b border-ink/15 py-20 md:scroll-mt-16 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="eyebrow mb-5">Process</p>
            <h2 className="font-display mb-16 max-w-3xl text-3xl tracking-tight text-ink md:text-5xl">
              How the work actually happened
            </h2>
            <ol>
              {project.process.map((step, i) => (
                <li
                  key={step.title}
                  className="grid gap-4 border-t border-ink py-10 md:grid-cols-12 md:gap-10 md:py-14"
                >
                  <p className="font-display text-4xl leading-none font-medium text-ink md:col-span-2 md:text-5xl">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="md:col-span-10 lg:col-span-8">
                    <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">{step.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="screens" className="scroll-mt-28 border-b border-ink/15 py-20 md:scroll-mt-16 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="eyebrow mb-5">Screens</p>
            <h2 className="font-display mb-6 max-w-3xl text-3xl tracking-tight text-ink md:text-5xl">
              Interfaces designed for this work
            </h2>
            <p className="mb-16 max-w-xl text-sm leading-relaxed text-muted">
              Reconstructed product UI from the problems, flows and responsibilities on the CV — not client screenshots.
              Each frame corresponds to a concrete step in the delivery.
            </p>

            <ol className="space-y-24">
              {project.screens.map((screen, i) => (
                <li key={screen.id} className="grid items-start gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted">
                      {String(i + 1).padStart(2, '0')}
                      <span className="mx-2 text-ink/30">/</span>
                      {screen.device}
                    </p>
                    <h3 className="font-display mt-3 text-2xl tracking-tight text-ink md:text-3xl">{screen.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">{screen.caption}</p>
                  </div>
                  <div className={`lg:col-span-8 ${screen.device === 'mobile' ? 'flex justify-center lg:justify-start' : ''}`}>
                    <ProjectMock id={screen.id} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="outcome" className="scroll-mt-28 py-20 md:scroll-mt-16 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">Outcome</p>
              <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">What changed</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-ink lg:col-span-8 md:text-xl md:leading-relaxed">
              {project.result}
            </p>
          </div>
        </section>

        <nav
          aria-label="Other projects"
          className="border-t border-ink bg-night text-paper"
        >
          <div className="mx-auto grid max-w-7xl md:grid-cols-2">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="group border-b border-paper/15 px-6 py-12 md:border-r md:border-b-0 md:px-10 md:py-16"
              >
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-paper/45">Previous</p>
                <p className="font-display mt-3 text-2xl text-paper md:text-3xl group-hover:underline group-hover:decoration-paper/40 group-hover:underline-offset-8">
                  {prev.name}
                </p>
                <p className="mt-2 text-sm text-paper/55">{prev.company}</p>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}
            {next ? (
              <Link
                to={`/projects/${next.slug}`}
                className={`group px-6 py-12 text-right md:px-10 md:py-16 ${prev ? '' : 'md:col-start-2'}`}
              >
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-paper/45">Next</p>
                <p className="font-display mt-3 text-2xl text-paper md:text-3xl group-hover:underline group-hover:decoration-paper/40 group-hover:underline-offset-8">
                  {next.name}
                </p>
                <p className="mt-2 text-sm text-paper/55">{next.company}</p>
              </Link>
            ) : null}
          </div>
        </nav>
      </article>
    </main>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper px-5 py-5 md:px-6">
      <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">{label}</dt>
      <dd className="mt-2 text-sm leading-snug text-ink">{value}</dd>
    </div>
  )
}

function OverviewBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl tracking-tight text-ink">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  )
}
