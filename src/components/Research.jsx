const PUBLICATIONS = [
  {
    label: 'ICLR 2023 WORKSHOP',
    title: 'Optimizing Transformers for Low-Resource Neural Machine Translation',
    description:
      'Investigated novel attention mechanisms to improve translation accuracy for languages with limited parallel corpora. Proposed architecture achieved state-of-the-art results on several benchmark datasets.',
  },
  {
    label: 'ARXIV PREPRINT',
    title: 'Efficient Federated Learning via Model Pruning',
    description:
      'Developed a communication-efficient federated learning framework integrating iterative magnitude pruning, reducing bandwidth requirements by 60% without significant loss in global model accuracy.',
  },
]

export default function Research() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/5 in-view"
      id="research"
    >
      <div className="mb-stack-lg reveal in-view">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm drop-shadow-sm">
          Research & Publications
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant drop-shadow-sm">
          Academic contributions and active research areas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PUBLICATIONS.map((pub) => (
          <article
            key={pub.title}
            className="glass-card rounded-xl p-6 flex flex-col h-full relative group reveal in-view"
          >
            <div className="relative z-10 flex-grow">
              <span className="font-label-caps text-label-caps text-surface-tint block mb-stack-sm tracking-widest">
                {pub.label}
              </span>
              <h3 className="font-body-lg text-body-lg text-on-surface font-semibold mb-stack-md">
                {pub.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
                {pub.description}
              </p>
            </div>
            <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-stack-md border-t border-white/5">
              <a
                className="inline-flex items-center gap-2 text-primary hover:text-primary-fixed transition-colors font-code-sm text-code-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[16px]">menu_book</span> Read Paper
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}