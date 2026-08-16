const CERTIFICATIONS = [
  {
    title: 'Oracle Cloud Infrastructure Certified Architect Associate',
    year: 'August 2026',
    link: '/Oracle_Certificate.pdf',
    badge:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7D89F607AB00AD005C6F0E8E55D7CFAC3EBCC7E4C50B70ACC67A255DBCFF7AA9',
  },
  {
    title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    year: 'August 2026',
    link: '/Oracle_AI_Foundations_Certificate.pdf',
    badge:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D30699EA0ABE429C25CEFB265AC6EACAD0B3B2D00171336D20372883B9D8EC20',
  },
  {
    title: 'Oracle Agentic AI Certified Foundations Associate',
    year: 'July 2026',
    link: '/Agentic_AI_Certificate.pdf',
    badge:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=CAF10C473B4098038F6A069C15F3E1C868BF47B2C2906C6EF5FCCF7F2D576156',
  },
  {
    title: 'Building RAG Applications Using MongoDB',
    year: 'July 2026',
    link: '/MongoDB_RAG_Certificate.pdf',
    badge: 'https://www.credly.com/users/rittik-pati.59d80275/edit/badges/credly',
  },
  {
    title: 'LinkedIn Learning: Generative AI & AI Literacy',
    year: 'July 2026',
    link: '/LinkedIn_Learning_Certificates.pdf',
  },
  {
    title: 'Salesforce AI & Cloud Solution Architect',
    year: 'Advanced level',
    badge: 'https://www.salesforce.com/trailblazer/profile',
  },
  {
    title: 'Microsoft Certified: AI Solutions & Azure Cloud Fundamentals',
    year: 'July 2026',
    link: '/Microsoft_AI_Certificate.pdf',
    badge: 'https://learn.microsoft.com/en-us/users/rittikpati-3950/',
  },
]

export default function Certifications() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/5 in-view"
      id="certifications"
    >
      <div className="mb-stack-lg reveal in-view">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm drop-shadow-sm">
          Certifications
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant drop-shadow-sm">
          Professional credentials and specialized training.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.title} className="glass-card rounded-xl p-6 flex flex-col gap-3">
            <span className="material-symbols-outlined text-surface-tint">verified</span>
            <h3 className="font-body-md text-body-md font-semibold text-on-surface">
              {cert.title}
            </h3>
            <p className="text-code-sm text-on-surface-variant">{cert.year}</p>
            <div className="flex gap-2 flex-wrap mt-auto">
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