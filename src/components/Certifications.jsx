const CERTIFICATIONS = [
  { title: 'Oracle Agentic AI Foundations Associate', year: '2026' },
  { title: 'Building RAG Applications Using MongoDB', year: 'July 2026' },
  { title: 'Microsoft: AI Solutions & Azure Cloud Fundamentals', year: '2025' },
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
          </div>
        ))}
      </div>
    </section>
  )
}