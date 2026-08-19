const CERTIFICATIONS = [
  {
    title: 'Oracle Cloud Infrastructure Certified Architect Associate',
    year: 'August 2026',
    logo: '/logos/oracle.png',
    link: '/Oracle_Certificate.pdf',
    badge:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7D89F607AB00AD005C6F0E8E55D7CFAC3EBCC7E4C50B70ACC67A255DBCFF7AA9',
  },
  {
    title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    year: 'August 2026',
    logo: '/logos/oracle.png',
    link: '/Oracle_AI_Foundations_Certificate.pdf',
    badge:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D30699EA0ABE429C25CEFB265AC6EACAD0B3B2D00171336D20372883B9D8EC20',
  },
  {
    title: 'Oracle Agentic AI Certified Foundations Associate',
    year: 'July 2026',
    logo: '/logos/oracle.png',
    link: '/Agentic_AI_Certificate.pdf',
    badge:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=CAF10C473B4098038F6A069C15F3E1C868BF47B2C2906C6EF5FCCF7F2D576156',
  },
  {
    title: 'Building RAG Applications Using MongoDB',
    year: 'July 2026',
    logo: '/logos/mongodb.png',
    link: '/MongoDB_RAG_Certificate.pdf',
    badge: 'https://www.credly.com/users/rittik-pati.59d80275/edit/badges/credly',
  },
  {
    title: 'Career Essentials in Generative AI by Microsoft & LinkedIn',
    year: 'July 2026',
    logo: '/logos/microsoft.png',
    link: '/Career_Essentials_Generative_AI.pdf',
  },
  {
    title: 'Microsoft Certified: AI Solutions & Azure Cloud Fundamentals',
    year: 'July 2026',
    logo: '/logos/microsoft.png',
    link: '/Microsoft_AI_Certificate.pdf',
    badge: 'https://learn.microsoft.com/en-us/users/rittikpati-3950/',
  },
  {
    title: 'LinkedIn Learning: Generative AI & AI Literacy',
    year: 'July 2026',
    logo: '/logos/linkedin.png',
    link: '/LinkedIn_Learning_Certificates.pdf',
  },
  {
    title: 'Machine Learning Using Python (Simplilearn SkillUp)',
    year: 'September 2025',
    logo: '/logos/simplilearn.png',
    link: '/Machine_Learning_Using_Python_Certificate.pdf',
  },
  {
    title: 'Database and SQL — Certified by Infosys',
    year: 'September 2025',
    logo: '/logos/infosys.png',
    link: '/Infosys_Database_SQL_Certificate.pdf',
  },
  {
    title: 'AWS Cloud, Containers & ML — AWS Training & Certification',
    year: 'September 2025',
    logo: '/logos/aws.png',
    link: '/AWS_Training_Certificates.pdf',
  },
  {
    title: 'Building Reliable Agents — LangChain Academy',
    year: 'July 2026',
    logo: '/logos/langchain.png',
    link: '/LangChain_Academy_Certificates.pdf',
    badges: [
      'https://academy.langchain.com/certificates/dbhj7owcpz',
      'https://academy.langchain.com/certificates/rxrnvjqyjm',
      'https://academy.langchain.com/certificates/pkihygxjnp',
      'https://academy.langchain.com/certificates/t9gil8trrm',
    ],
  },
  {
    title: 'Hugging Face: LLM & AI Agents Course',
    year: 'July 2026',
    logo: '/logos/huggingface.png',
    link: '/HuggingFace_LLM_Agents_Certificate.pdf',
  },
  {
    title: 'Model Context Protocol (MCP): Advanced Topics — Certified by Anthropic',
    year: 'July 2026',
    logo: '/logos/anthropic.png',
    link: '/Anthropic_MCP_Advanced_Certificate.pdf',
    badge: 'https://verify.skilljar.com/c/s672ysjj6x94',
  },
  {
    title: 'Gen AI 360: LangChain & LlamaIndex in Production — Certified by Activeloop & Intel',
    year: 'July 2026',
    logo: '/logos/activeloop.png',
    link: '/Activeloop_GenAI360_Certificate.pdf',
    badges: [
      'https://learn.activeloop.ai/certificates/hcfeg4flr4',
      'https://learn.activeloop.ai/certificates/tqvio9ork3',
    ],
  },
  {
    title: 'Salesforce AI & Cloud Solution Architect',
    year: 'Advanced level',
    logo: '/logos/salesforce.png',
    badge: 'https://www.salesforce.com/trailblazer/profile',
  },
]

export default function Certifications() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/10 in-view"
      id="certifications"
    >
      <div className="section-head">
        <div>
          <span className="eyebrow mb-4 block">Credentials</span>
          <h2 className="font-headline-md text-headline-md md:text-3xl text-primary">
            Certifications
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Professional credentials and specialized training.
          </p>
        </div>
        <span className="section-index">07 — CERTIFICATIONS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.title} className="cert-card">
            <div className="flex items-start gap-3">
              {cert.logo && (
                <img
                  alt={`${cert.title} logo`}
                  className="cert-logo"
                  loading="lazy"
                  src={cert.logo}
                />
              )}
              <div className="min-w-0">
                <h3 className="font-body-md text-body-md font-semibold text-on-surface leading-snug">
                  {cert.title}
                </h3>
                <p className="text-code-sm text-on-surface-variant mt-1">{cert.year}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-auto pt-1">
              {cert.link && (
                <a
                  className="tech-tag self-start rounded px-2 py-1 font-code-sm text-[12px] inline-flex items-center gap-1 hover:bg-primary/10 transition-colors"
                  href={cert.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[14px]">description</span> View
                  Certificate
                </a>
              )}
              {cert.badges &&
                cert.badges.map((b) => (
                  <a
                    key={b}
                    className="tech-tag self-start rounded px-2 py-1 font-code-sm text-[12px] inline-flex items-center gap-1 hover:bg-primary/10 transition-colors"
                    href={b}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                    View Badge
                  </a>
                ))}
              {cert.badge && (
                <a
                  className="tech-tag self-start rounded px-2 py-1 font-code-sm text-[12px] inline-flex items-center gap-1 hover:bg-primary/10 transition-colors"
                  href={cert.badge}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                  View Badge
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}