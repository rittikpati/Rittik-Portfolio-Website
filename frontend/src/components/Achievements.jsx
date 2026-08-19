const ORACLE_EXAMS = [
  {
    name: 'OCI Architect Associate',
    badge: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7D89F607AB00AD005C6F0E8E55D7CFAC3EBCC7E4C50B70ACC67A255DBCFF7AA9',
  },
  {
    name: 'AI Foundations Associate',
    badge: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D30699EA0ABE429C25CEFB265AC6EACAD0B3B2D00171336D20372883B9D8EC20',
  },
  {
    name: 'Agentic AI Foundations Associate',
    badge: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=CAF10C473B4098038F6A069C15F3E1C868BF47B2C2906C6EF5FCCF7F2D576156',
  },
]

const ACHIEVEMENTS = [
  {
    icon: 'workspace_premium',
    title: '15+ Industry Certifications',
    description:
      'Earned 15 certifications across Oracle, Microsoft, MongoDB, AWS, LangChain Academy, Anthropic, Hugging Face, Salesforce and more — every one backed by a verifiable credential.',
    link: '#certifications',
    linkLabel: 'View all certifications',
  },
  {
    icon: 'business_center',
    title: '10 Global Job Simulations',
    description:
      'Completed hands-on job simulations with Mastercard, Goldman Sachs, Walmart, TCS, BCG X, Deloitte, Commonwealth Bank, Skyscanner and DATACOM — solving real-world AI, data and engineering tasks.',
    link: '#job-simulations',
    linkLabel: 'View simulations',
  },
  {
    icon: 'school',
    title: 'Academic Excellence',
    description:
      'B.Tech in Computer Science Engineering (AI & ML) at Chandigarh University with a CGPA of 8.2/10 — focused on machine learning, deep learning and AI engineering.',
    link: 'https://www.cuchd.in/',
    linkLabel: 'Chandigarh University',
  },
]

export default function Achievements() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/10 in-view"
      id="achievements"
    >
      <div className="section-head">
        <div>
          <span className="eyebrow mb-4 block">Proven Track Record</span>
          <h2 className="font-headline-md text-headline-md md:text-3xl text-primary">
            Achievements
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Milestones earned the hard way — exams, credentials and recognition.
          </p>
        </div>
        <span className="section-index">04 — ACHIEVEMENTS</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="project-card p-5 sm:p-7 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-4">
            <img
              alt="Oracle logo"
              className="w-12 h-12 object-contain rounded-lg bg-white p-1.5 shrink-0 border border-white/10"
              loading="lazy"
              src="/logos/oracle.png"
            />
            <div>
              <h3 className="font-body-lg text-body-lg font-semibold text-on-surface leading-tight">
                Cleared 3 Oracle Certification Exams — Online Proctored
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Passed three Oracle professional exams in online proctored mode — 2026
              </p>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
            Validated across cloud architecture, AI foundations and agentic AI through
            rigorous proctored examinations — verified with official Oracle badges and
            certificates.
          </p>
          <div className="flex flex-wrap gap-2">
            {ORACLE_EXAMS.map((exam) => (
              <a
                key={exam.name}
                className="tech-tag rounded px-2.5 py-1.5 font-code-sm text-[12px] inline-flex items-center gap-1.5 hover:bg-primary/10 transition-colors"
                href={exam.badge}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                {exam.name} — Badge
              </a>
            ))}
            <a
              className="tech-tag rounded px-2.5 py-1.5 font-code-sm text-[12px] inline-flex items-center gap-1.5 hover:bg-primary/10 transition-colors"
              href="/Agentic_AI_Certificate.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[14px]">description</span>
              View Certificate
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.title} className="ach-card flex flex-col gap-3">
              <span className="ach-icon material-symbols-outlined text-[22px]">{item.icon}</span>
              <h3 className="font-body-md text-body-md font-semibold text-on-surface leading-tight">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
                {item.description}
              </p>
              <a
                className="tech-tag self-start mt-auto rounded px-2.5 py-1.5 font-code-sm text-[12px] inline-flex items-center gap-1.5 hover:bg-primary/10 transition-colors"
                href={item.link}
                rel={item.link.startsWith('#') ? undefined : 'noopener noreferrer'}
                target={item.link.startsWith('#') ? undefined : '_blank'}
              >
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                {item.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}