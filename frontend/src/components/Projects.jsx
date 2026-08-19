const PROJECTS = [
  {
    label: 'AI-POWERED CRM',
    title: 'RittikDesk AI',
    description:
      'A comprehensive AI-powered CRM system featuring DeepSeek LLM integration for automated customer insights, built with Django, React, and Docker. Implemented advanced analytics to boost user engagement.',
    tags: ['DeepSeek', 'Django', 'React', 'Docker'],
  },
]

export default function Projects() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/10 in-view"
      id="projects"
    >
      <div className="section-head">
        <div>
          <span className="eyebrow mb-4 block">Featured Work</span>
          <h2 className="font-headline-md text-headline-md md:text-3xl text-primary">
            Featured Work
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Select technical implementations and research.
          </p>
        </div>
        <span className="section-index">02 — PROJECTS</span>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {PROJECTS.map((project, i) => (
          <article
            key={project.title}
            className="project-card p-6 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start"
          >
            <span className="project-index hidden md:block leading-none" aria-hidden="true">
              0{i + 1}
            </span>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-label-caps text-label-caps text-surface-tint">
                  {project.label}
                </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">
                · 2026
              </span>
              </div>
              <h3 className="font-display-lg text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-4">
                {project.title}
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag rounded px-2.5 py-1 font-code-sm text-code-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="btn-primary btn-sm"
                  href="https://github.com/rittikpati/RittikDesk-AI"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  View Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}