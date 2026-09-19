import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectMock } from '../components/screens/ProjectMocks'
import { homeSection } from '../data/navigation'
import { getAdjacentProjects, getProject, projects } from '../data/projects'
import { profile } from '../data/profile'
import type { Project, ProjectIdentity } from '../data/types'
import { NotFoundPage } from './NotFoundPage'

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'people', label: 'People' },
  { id: 'process', label: 'Process' },
  { id: 'screens', label: 'Screens' },
  { id: 'outcome', label: 'Outcome' },
] as const

const identityLabel: Record<ProjectIdentity, string> = {
  ops: 'Operations console',
  system: 'Design-system documentation',
  cpq: 'Industrial CPQ',
  editorial: 'Product marketing',
}

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
  const id = project.identity

  return (
    <main id="main" className={`${shellClass(id)} print:bg-white print:text-black`}>
      <article>
        <CaseHero project={project} folio={folio} shortRole={shortRole} />

        <nav
          aria-label="Case study sections"
          className={`print-hidden sticky top-14 z-30 border-b ${navClass(id)}`}
        >
          <ol className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3 md:gap-10 md:px-10">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={`font-mono text-[10px] tracking-[0.16em] whitespace-nowrap uppercase ${linkMute(id)}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {project.metrics && project.metrics.length > 0 ? <MetricsBand project={project} /> : null}

        <OverviewSection project={project} />
        <PeopleSection project={project} />
        <DecisionsSection project={project} />
        <ProcessSection project={project} />
        <ScreensSection project={project} />
        <OutcomeSection project={project} />

        <nav aria-label="Other projects" className={adjacentClass(id)}>
          <div className="mx-auto grid max-w-7xl md:grid-cols-2">
            {prev ? (
              <Link
                to={`/projects/${prev.slug}`}
                className="group border-b border-current/15 px-6 py-12 md:border-r md:border-b-0 md:px-10 md:py-16"
              >
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-50">Previous</p>
                <p className="font-display mt-3 text-2xl md:text-3xl group-hover:underline group-hover:underline-offset-8">
                  {prev.name}
                </p>
                <p className="mt-2 text-sm opacity-55">{prev.company}</p>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}
            {next ? (
              <Link
                to={`/projects/${next.slug}`}
                className={`group px-6 py-12 text-right md:px-10 md:py-16 ${prev ? '' : 'md:col-start-2'}`}
              >
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-50">Next</p>
                <p className="font-display mt-3 text-2xl md:text-3xl group-hover:underline group-hover:underline-offset-8">
                  {next.name}
                </p>
                <p className="mt-2 text-sm opacity-55">{next.company}</p>
              </Link>
            ) : null}
          </div>
        </nav>
      </article>
    </main>
  )
}

function CaseHero({
  project,
  folio,
  shortRole,
}: {
  project: Project
  folio: string
  shortRole: string
}) {
  const id = project.identity
  const back = (
    <Link
      to={homeSection('projects')}
      className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase ${linkMute(id)}`}
    >
      <span aria-hidden="true">←</span>
      Selected projects
    </Link>
  )

  if (id === 'ops') {
    return (
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-14 pb-16 md:px-10 md:pt-20 md:pb-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            {back}
            <p className="mt-10 font-mono text-[10px] tracking-[0.18em] uppercase text-white/40">
              {folio} · {identityLabel.ops}
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[0.9] font-medium tracking-tight md:text-7xl">{project.name}</h1>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/70">{project.thesis}</p>
            <dl className="mt-10 grid grid-cols-2 gap-6 font-mono text-[11px]">
              <MetaDark label="Client" value={project.company} />
              <MetaDark label="Role" value={shortRole} />
              <MetaDark label="When" value={project.timeframe ?? '—'} />
              <MetaDark label="Tools" value={project.tools.join(' · ')} />
            </dl>
            <Link
              to="/projects/flight-ops/system"
              className="mt-10 inline-flex items-center gap-2 border border-white/25 px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] uppercase text-white hover:border-white hover:bg-white hover:text-black"
            >
              Open Design System
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="lg:col-span-6">
            <ProjectMock id="flight-map" />
          </div>
        </div>
      </header>
    )
  }

  if (id === 'system') {
    return (
      <header className="border-b border-ink/15 bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-16 md:px-10 md:pt-20 md:pb-20">
          {back}
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                {folio} / {identityLabel.system}
              </p>
              <h1 className="font-display mt-4 text-5xl leading-none tracking-tight md:text-6xl">{project.name}</h1>
              <p className="mt-2 font-mono text-sm text-muted">{project.company} library</p>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:col-span-8">{project.thesis}</p>
          </div>
          <dl className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-4">
            <Meta label="Client" value={project.company} />
            <Meta label="Role" value={shortRole} />
            <Meta label="When" value={project.timeframe ?? '—'} />
            <Meta label="Tools" value={project.tools.join(' · ')} />
          </dl>
          <div className="mt-10 flex flex-wrap items-center gap-2 border border-dashed border-ink/20 bg-[#fafafa] p-4">
            <span className="rounded-sm bg-ink px-4 py-2 text-xs text-white">Primary</span>
            <span className="rounded-sm border border-ink px-4 py-2 text-xs">Secondary</span>
            <span className="px-4 py-2 text-xs text-muted">Disabled</span>
            <span className="ml-auto font-mono text-[10px] text-muted">Prism / button · stable</span>
          </div>
        </div>
      </header>
    )
  }

  if (id === 'cpq') {
    return (
      <header className="border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-0 md:px-10 md:pt-20">
          {back}
          <p className="mt-10 font-mono text-[10px] uppercase">
            {folio} — {identityLabel.cpq}
          </p>
          <h1 className="font-display mt-3 text-5xl leading-none tracking-tight md:text-7xl">{project.name}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed">{project.thesis}</p>
          <ol className="mt-10 grid border-2 border-ink md:grid-cols-3">
            {['01 Product', '02 Configuration', '03 Summary'].map((step, i) => (
              <li
                key={step}
                className={`px-4 py-3 font-mono text-[11px] uppercase ${i > 0 ? 'border-t-2 border-ink md:border-t-0 md:border-l-2' : ''}`}
              >
                {step}
              </li>
            ))}
          </ol>
          <dl className="mb-0 grid border-2 border-t-0 border-ink sm:grid-cols-4">
            <MetaHeavy label="Client" value={project.company} />
            <MetaHeavy label="Role" value={shortRole} />
            <MetaHeavy label="When" value={project.timeframe ?? '—'} />
            <MetaHeavy label="Tools" value={project.tools.join(' · ')} />
          </dl>
        </div>
      </header>
    )
  }

  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-20 text-center md:px-10 md:pt-24 md:pb-28">
        {back}
        <p className="mt-12 text-[10px] tracking-[0.22em] uppercase text-muted">
          {folio} · {identityLabel.editorial}
        </p>
        <h1 className="font-display mt-6 text-5xl leading-[0.92] tracking-tight md:text-7xl">{project.name}</h1>
        <p className="mt-8 text-lede text-ink-soft">{project.thesis}</p>
        <p className="mt-8 font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
          {project.company} · {shortRole} · {project.timeframe}
        </p>
      </div>
    </header>
  )
}

function MetricsBand({ project }: { project: Project }) {
  const id = project.identity
  const items = project.metrics ?? []
  if (id === 'ops') {
    return (
      <dl className="grid border-b border-white/10 sm:grid-cols-3">
        {items.map((metric) => (
          <div key={metric.label} className="border-white/10 px-6 py-8 sm:border-r last:border-r-0 md:px-10">
            <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/40">{metric.label}</dt>
            <dd className="mt-2 font-display text-4xl">{metric.value}</dd>
          </div>
        ))}
      </dl>
    )
  }
  if (id === 'cpq') {
    return (
      <dl className="grid border-b-2 border-ink sm:grid-cols-3">
        {items.map((metric) => (
          <div key={metric.label} className="border-ink px-6 py-6 sm:border-r-2 last:border-r-0 md:px-10">
            <dt className="font-mono text-[10px] uppercase">{metric.label}</dt>
            <dd className="mt-1 font-display text-3xl">{metric.value}</dd>
          </div>
        ))}
      </dl>
    )
  }
  if (id === 'editorial') {
    return (
      <dl className="mx-auto grid max-w-3xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        {items.map((metric) => (
          <div key={metric.label} className="text-center">
            <dd className="font-display text-3xl">{metric.value}</dd>
            <dt className="mt-2 text-[11px] text-muted">{metric.label}</dt>
          </div>
        ))}
      </dl>
    )
  }
  return (
    <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-ink/10 sm:grid-cols-3">
      {items.map((metric) => (
        <div key={metric.label} className="bg-white px-6 py-10 md:px-10">
          <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">{metric.label}</dt>
          <dd className="mt-3 font-display text-4xl leading-none tracking-tight md:text-5xl">{metric.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function OverviewSection({ project }: { project: Project }) {
  const id = project.identity
  const blocks = [
    { title: 'Context', body: project.context },
    { title: 'Problem', body: project.problem },
    { title: 'Approach', body: project.solution },
  ]
  return (
    <section id="overview" className={`scroll-mt-32 ${sectionRule(id)} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className={`mb-10 ${eyebrow(id)}`}>Overview</p>
        {id === 'editorial' ? (
          <div className="mx-auto max-w-2xl space-y-12">
            {blocks.map((block) => (
              <OverviewBlock key={block.title} title={block.title} body={block.body} />
            ))}
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-3">
            {blocks.map((block) => (
              <OverviewBlock key={block.title} title={block.title} body={block.body} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function PeopleSection({ project }: { project: Project }) {
  const id = project.identity
  return (
    <section id="people" className={`scroll-mt-32 ${sectionRule(id)} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className={`mb-5 ${eyebrow(id)}`}>People</p>
        <h2 className="font-display mb-12 max-w-3xl text-3xl tracking-tight md:text-5xl">Who this was for</h2>
        <ul className={id === 'cpq' ? 'grid border-2 border-ink md:grid-cols-3' : 'grid gap-8 md:grid-cols-3'}>
          {project.users.map((user) => (
            <li
              key={user.name}
              className={
                id === 'cpq'
                  ? 'border-ink p-5 md:border-r-2 last:border-r-0'
                  : id === 'ops'
                    ? 'border border-white/15 p-5'
                    : 'border-t border-current/15 pt-5'
              }
            >
              <p className="font-display text-2xl">{user.name}</p>
              <p className={`mt-1 font-mono text-[10px] tracking-[0.14em] uppercase ${id === 'ops' ? 'text-white/40' : 'text-muted'}`}>
                {user.role}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${id === 'ops' ? 'text-white/70' : 'text-ink-soft'}`}>{user.need}</p>
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <p className={`mb-5 ${eyebrow(id)}`}>Constraints</p>
          <ul className="max-w-3xl space-y-3">
            {project.constraints.map((item) => (
              <li key={item} className={`text-sm leading-relaxed ${id === 'ops' ? 'text-white/70' : 'text-ink-soft'}`}>
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function DecisionsSection({ project }: { project: Project }) {
  const id = project.identity
  return (
    <section className={`scroll-mt-32 ${sectionRule(id)} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className={`mb-5 ${eyebrow(id)}`}>Decisions</p>
        <h2 className="font-display mb-12 max-w-3xl text-3xl tracking-tight md:text-5xl">Calls that shaped the product</h2>
        <ol>
          {project.decisions.map((item, i) => (
            <li key={item.title} className={`grid gap-4 py-8 md:grid-cols-12 ${id === 'cpq' ? 'border-t-2 border-ink' : 'border-t border-current/20'}`}>
              <p className="font-display text-3xl md:col-span-2">{String(i + 1).padStart(2, '0')}</p>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <p className={`mt-3 max-w-2xl text-sm leading-relaxed ${id === 'ops' ? 'text-white/70' : 'text-ink-soft'}`}>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProcessSection({ project }: { project: Project }) {
  const id = project.identity
  return (
    <section id="process" className={`scroll-mt-32 ${sectionRule(id)} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className={`mb-5 ${eyebrow(id)}`}>Process</p>
        <h2 className="font-display mb-16 max-w-3xl text-3xl tracking-tight md:text-5xl">How the work actually happened</h2>
        <ol className={id === 'ops' ? 'relative border-l border-white/20 pl-8 md:pl-12' : undefined}>
          {project.process.map((step, i) => (
            <li
              key={step.title}
              className={
                id === 'ops'
                  ? 'relative pb-12 last:pb-0'
                  : id === 'system'
                    ? 'grid gap-6 border-t border-ink/15 py-10 md:grid-cols-12'
                    : id === 'cpq'
                      ? 'grid gap-4 border-t-2 border-ink py-10 md:grid-cols-12'
                      : 'py-10 first:pt-0'
              }
            >
              {id === 'ops' ? (
                <span className="absolute top-1.5 -left-[2.15rem] h-3 w-3 bg-white md:-left-[3.15rem]" />
              ) : null}
              {id === 'editorial' ? (
                <>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-display mt-2 text-3xl tracking-tight">{step.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </>
              ) : (
                <>
                  <p className={`font-display text-4xl leading-none md:col-span-2 ${id === 'ops' ? '' : ''}`}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="md:col-span-9">
                    {id !== 'ops' ? null : <span className="sr-only">Step</span>}
                    <h3 className={`font-display tracking-tight ${id === 'ops' ? 'text-2xl' : 'text-2xl md:text-3xl'}`}>{step.title}</h3>
                    <p className={`mt-4 max-w-2xl text-sm leading-relaxed ${id === 'ops' ? 'text-white/70' : 'text-ink-soft'}`}>
                      {step.body}
                    </p>
                    {step.artifacts ? (
                      <p className={`mt-4 font-mono text-[10px] tracking-[0.08em] uppercase ${id === 'ops' ? 'text-white/40' : 'text-muted'}`}>
                        {step.artifacts.join(' · ')}
                      </p>
                    ) : null}
                  </div>
                </>
              )}
              {id === 'editorial' && step.artifacts ? (
                <p className="mt-3 font-mono text-[10px] tracking-[0.08em] uppercase text-muted">{step.artifacts.join(' · ')}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ScreensSection({ project }: { project: Project }) {
  const id = project.identity
  return (
    <section id="screens" className={`scroll-mt-32 ${sectionRule(id)} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className={`mb-5 ${eyebrow(id)}`}>Screens</p>
        <h2 className="font-display mb-6 max-w-3xl text-3xl tracking-tight md:text-5xl">
          {id === 'system' ? 'The library, specified' : id === 'editorial' ? 'Templates and measurement' : 'Interfaces designed for this work'}
        </h2>
        <p className={`mb-16 max-w-xl text-sm leading-relaxed ${id === 'ops' ? 'text-white/50' : 'text-muted'}`}>
          Reconstructed product UI from the problems, flows and responsibilities on the CV — not client screenshots.
          Each frame is a concrete step in the delivery, in the visual language of that product.
        </p>
        <ol className="space-y-24">
          {project.screens.map((screen, i) => (
            <li key={screen.id} className={`grid items-start gap-8 ${id === 'editorial' ? 'lg:grid-cols-1' : 'lg:grid-cols-12'}`}>
              <div className={id === 'editorial' ? 'max-w-xl' : 'lg:col-span-4'}>
                <p className={`font-mono text-[10px] tracking-[0.16em] uppercase ${id === 'ops' ? 'text-white/40' : 'text-muted'}`}>
                  {String(i + 1).padStart(2, '0')}
                  <span className="mx-2 opacity-30">/</span>
                  {screen.device}
                </p>
                <h3 className="font-display mt-3 text-2xl tracking-tight md:text-3xl">{screen.title}</h3>
                <p className={`mt-3 max-w-sm text-sm leading-relaxed ${id === 'ops' ? 'text-white/70' : 'text-ink-soft'}`}>
                  {screen.caption}
                </p>
              </div>
              <div
                className={`${id === 'editorial' ? '' : 'lg:col-span-8'} ${
                  screen.device === 'mobile' ? 'flex justify-center lg:justify-start' : ''
                }`}
              >
                <ProjectMock id={screen.id} />
              </div>
            </li>
          ))}
        </ol>
        {id === 'ops' ? (
          <p className="mt-16 max-w-xl text-sm leading-relaxed text-white/50">
            The live library — tokens, 20 components, patterns and hand-off — is the Flight Ops Design System.{' '}
            <Link
              to="/projects/flight-ops/system"
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              Open it
            </Link>
            .
          </p>
        ) : null}
      </div>
    </section>
  )
}

function OutcomeSection({ project }: { project: Project }) {
  const id = project.identity
  return (
    <section id="outcome" className="scroll-mt-32 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className={`mb-5 ${eyebrow(id)}`}>Outcome</p>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">What changed</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="max-w-2xl text-lg leading-relaxed md:text-xl">{project.result}</p>
          <p className={`mt-8 max-w-2xl text-sm leading-relaxed ${id === 'ops' ? 'text-white/50' : 'text-muted'}`}>{project.role}</p>
        </div>
      </div>
    </section>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white px-5 py-5 md:px-6">
      <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">{label}</dt>
      <dd className="mt-2 text-sm leading-snug">{value}</dd>
    </div>
  )
}

function MetaHeavy({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-ink px-5 py-4 sm:border-r-2 last:border-r-0">
      <dt className="font-mono text-[10px] uppercase">{label}</dt>
      <dd className="mt-1 text-sm">{value}</dd>
    </div>
  )
}

function MetaDark({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] tracking-[0.14em] uppercase text-white/40">{label}</dt>
      <dd className="mt-1 text-white">{value}</dd>
    </div>
  )
}

function OverviewBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl tracking-tight">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed opacity-80">{body}</p>
    </div>
  )
}

function shellClass(id: ProjectIdentity) {
  switch (id) {
    case 'ops':
      return 'bg-[#0b0b0b] text-paper'
    case 'system':
      return 'bg-[#f7f7f5] text-ink'
    case 'cpq':
      return 'bg-[#e8e6e1] text-ink'
    case 'editorial':
      return 'bg-paper text-ink'
  }
}

function navClass(id: ProjectIdentity) {
  switch (id) {
    case 'ops':
      return 'border-white/10 bg-[#0b0b0b]'
    case 'system':
      return 'border-ink/10 bg-white'
    case 'cpq':
      return 'border-ink bg-[#e8e6e1]'
    case 'editorial':
      return 'border-ink/10 bg-paper'
  }
}

function linkMute(id: ProjectIdentity) {
  return id === 'ops' ? 'text-white/45 hover:text-white' : 'text-muted hover:text-ink'
}

function sectionRule(id: ProjectIdentity) {
  if (id === 'cpq') return 'border-b-2 border-ink'
  if (id === 'ops') return 'border-b border-white/10'
  return 'border-b border-ink/15'
}

function eyebrow(id: ProjectIdentity) {
  return id === 'ops'
    ? 'font-mono text-[10px] tracking-[0.18em] uppercase text-white/40'
    : 'eyebrow'
}

function adjacentClass(id: ProjectIdentity) {
  if (id === 'ops') return 'border-t border-white/15 bg-black text-paper'
  if (id === 'cpq') return 'border-t-2 border-ink bg-ink text-[#e8e6e1]'
  if (id === 'system') return 'border-t border-ink bg-ink text-paper'
  return 'border-t border-ink bg-night text-paper'
}
