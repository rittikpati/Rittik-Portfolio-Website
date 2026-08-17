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
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/5 in-view"
      id="projects"
    >
      <div className="mb-stack-lg reveal in-view">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm drop-shadow-sm">
          Featured Work
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant drop-shadow-sm">
          Select technical implementations and research.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="glass-card rounded-xl p-6 flex flex-col h-full relative group reveal in-view"
          >
            <div className="relative z-10 flex-grow">
              <span className="font-label-caps text-label-caps text-surface-tint block mb-stack-sm tracking-widest">
                {project.label}
              </span>
              <h3 className="font-body-lg text-body-lg text-on-surface font-semibold mb-stack-md">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
                {project.description}
              </p>
            </div>
            <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-stack-md border-t border-white/5">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag rounded px-2 py-1 font-code-sm text-code-sm">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}