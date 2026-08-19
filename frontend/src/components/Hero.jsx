const HERO_STATS = [
  { value: '15+', label: 'Certifications' },
  { value: '10', label: 'Job Simulations' },
  { value: '3', label: 'Internships' },
  { value: '8.2', label: 'CGPA / 10' },
]

const HERO_META = [
  { key: 'ROLE', value: 'AI / ML Engineer' },
  { key: 'FOCUS', value: 'RAG · Agentic AI' },
  { key: 'LOCATION', value: 'India · Remote' },
  { key: 'EDUCATION', value: 'B.Tech CSE (AI & ML)' },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/rittikpati', icon: 'code' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rittik-pati-229389290/', icon: 'work' },
  { label: 'Instagram', href: 'https://www.instagram.com/rittikpati/', icon: 'photo_camera' },
]

export default function Hero() {
  return (
    <section
      className="reveal relative pt-24 md:pt-28 pb-16 md:pb-20 px-gutter max-w-container-max mx-auto min-h-screen flex flex-col justify-center in-view"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        <div className="relative z-10 text-left">
          <span className="eyebrow animate-rise mb-6 block">
            AI Engineer · LLM Engineer · Generative AI Developer
          </span>
          <h1 className="animate-rise delay-1 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display-lg font-bold text-primary leading-[1.05] tracking-tight drop-shadow-md mb-6">
            Welcome to Rittik Pati's Portfolio
          </h1>
          <h2 className="animate-rise delay-2 font-headline-md text-headline-md md:text-3xl text-on-surface leading-tight mb-6 drop-shadow-md">
            Aspiring AI Engineer | LLM Engineer | Generative AI Developer
          </h2>
          <p className="animate-rise delay-2 font-body-lg text-body-lg text-on-surface max-w-2xl leading-relaxed drop-shadow-sm">
            AI Engineer specializing in Retrieval-Augmented Generation (RAG) and Agentic AI. Proven
            track record of developing scalable data-driven solutions, resulting in productivity
            gains such as reducing latency by 35% and improving response times by 30%.
          </p>
          <div className="animate-rise delay-3 flex flex-col sm:flex-row gap-4 mt-8">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn-ghost"
              href="/Rittik_Pati_AI_Engineer_Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <div className="animate-rise delay-4 flex items-center gap-5 mt-8">
            <span className="font-label-caps text-label-caps text-on-surface-variant">Connect</span>
            <div className="h-px w-8 bg-white/10" />
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                aria-label={s.label}
                className="inline-flex items-center gap-1.5 font-code-sm text-code-sm text-on-surface-variant hover:text-primary transition-colors"
                href={s.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-rise delay-3 relative z-10 hidden md:block">
          <div className="hero-panel">
            <div className="hero-panel-top">
              <span className="status-dot" />
              <span>rittikpati@ai-engineer — portfolio</span>
            </div>
            <div className="py-1">
              {HERO_META.map((row) => (
                <div key={row.key} className="hero-row">
                  <span className="hero-row-key">{row.key}</span>
                  <span className="hero-row-val">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 px-4 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                terminal
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                python · sql · javascript · django · react
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-rise delay-4 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-14 md:mt-20">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}