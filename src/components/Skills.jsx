const SKILL_GROUPS = [
  {
    icon: 'psychology',
    title: 'AI & Generative AI',
    skills: [
      { name: 'DeepSeek & NLP', level: 'w-full' },
      { name: 'LangChain', level: 'w-11/12' },
      { name: 'RAG', level: 'w-4/5' },
    ],
  },
  {
    icon: 'api',
    title: 'Backend & APIs',
    skills: [
      { name: 'Django & DRF', level: 'w-full' },
      { name: 'FastAPI', level: 'w-11/12' },
      { name: 'REST Architecture', level: 'w-3/4' },
    ],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 'w-11/12' },
      { name: 'Docker', level: 'w-full' },
      { name: 'CI/CD', level: 'w-4/5' },
    ],
  },
  {
    icon: 'web',
    title: 'Frontend & Viz',
    skills: [
      { name: 'React', level: 'w-4/5' },
      { name: 'Tailwind CSS', level: 'w-11/12' },
      { name: 'Streamlit', level: 'w-3/4' },
    ],
  },
]

export default function Skills() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/5 in-view"
      id="skills"
    >
      <div className="mb-stack-lg reveal in-view">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm drop-shadow-sm">
          Technical Arsenal
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant drop-shadow-sm">
          Core competencies and preferred tooling.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="glass-card rounded-xl p-6 reveal in-view">
            <div className="flex items-center gap-3 mb-stack-md border-b border-white/5 pb-stack-sm">
              <span className="material-symbols-outlined text-surface-tint">{group.icon}</span>
              <h3 className="font-body-lg text-body-lg font-semibold text-on-surface">
                {group.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className="font-body-md text-body-md text-on-surface">{skill.name}</span>
                  <div className="h-1.5 w-16 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full bg-primary ${skill.level} rounded-full`} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}