const SKILL_GROUPS = [
  {
    icon: 'psychology',
    title: 'AI & Generative AI',
    skills: [
      { name: 'LLMs & DeepSeek API', level: 'w-full' },
      { name: 'RAG & Vector Databases', level: 'w-11/12' },
      { name: 'Agentic AI & AI Agents', level: 'w-full' },
      { name: 'Prompt Engineering & NLP', level: 'w-4/5' },
      { name: 'LangChain & LlamaIndex', level: 'w-11/12' },
      { name: 'ChromaDB & Pinecone', level: 'w-3/4' },
    ],
  },
  {
    icon: 'api',
    title: 'Backend & APIs',
    skills: [
      { name: 'Django & Django REST Framework', level: 'w-full' },
      { name: 'FastAPI', level: 'w-4/5' },
      { name: 'Node.js & Express.js', level: 'w-11/12' },
      { name: 'RESTful APIs & Microservices', level: 'w-full' },
      { name: 'JWT Authentication & CSRF Security', level: 'w-3/4' },
    ],
  },
  {
    icon: 'cloud',
    title: 'Cloud, DevOps & Databases',
    skills: [
      { name: 'Docker', level: 'w-full' },
      { name: 'AWS (Amazon S3, Amazon EC2)', level: 'w-11/12' },
      { name: 'PostgreSQL & Neon', level: 'w-11/12' },
      { name: 'MongoDB & Redis', level: 'w-4/5' },
      { name: 'Git & GitHub Actions', level: 'w-full' },
      { name: 'CI/CD', level: 'w-3/4' },
      { name: 'Vercel, Cloudinary & WhiteNoise', level: 'w-3/4' },
    ],
  },
  {
    icon: 'web',
    title: 'Frontend & Visualization',
    skills: [
      { name: 'Python & SQL', level: 'w-11/12' },
      { name: 'JavaScript (ES6+) & HTML5', level: 'w-full' },
      { name: 'CSS3', level: 'w-3/4' },
      { name: 'React.js & Redux', level: 'w-11/12' },
      { name: 'Bootstrap 5', level: 'w-4/5' },
      { name: 'Chart.js', level: 'w-3/4' },
      { name: 'Responsive Web Design', level: 'w-full' },
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
                <li key={skill.name} className="flex items-center justify-between gap-3">
                  <span className="font-body-md text-body-md text-on-surface min-w-0">{skill.name}</span>
                  <div className="h-1.5 w-16 bg-surface-container-highest rounded-full overflow-hidden shrink-0">
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