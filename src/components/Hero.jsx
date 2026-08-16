export default function Hero() {
  return (
    <section
      className="reveal relative pt-32 pb-section-gap px-gutter max-w-container-max mx-auto min-h-screen flex flex-col justify-center in-view"
      id="hero"
    >
      <div className="max-w-3xl relative z-10 text-left">
        <h1 className="text-5xl md:text-7xl font-display-lg font-bold text-primary mb-stack-md leading-tight drop-shadow-md">
          Welcome to Rittik Pati's Portfolio
        </h1>
        <h2 className="font-headline-md text-headline-md md:text-3xl text-on-surface mb-stack-lg leading-tight drop-shadow-md">
          Aspiring AI Engineer | LLM Engineer | Generative AI Developer
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface mb-stack-lg max-w-2xl leading-relaxed drop-shadow-sm">
          AI Engineer specializing in Retrieval-Augmented Generation (RAG) and Agentic AI. Proven
          track record of developing scalable data-driven solutions, resulting in productivity
          gains such as reducing latency by 35% and improving response times by 30%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="inline-flex items-center justify-center px-6 py-3 bg-primary/90 hover:bg-primary backdrop-blur-md text-on-primary rounded font-body-md text-body-md transition-colors font-medium border border-primary/20"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="inline-flex items-center justify-center px-6 py-3 bg-surface/40 backdrop-blur-md border border-primary/20 text-primary rounded font-body-md text-body-md hover:bg-surface-bright/50 transition-colors"
            href="/Rittik_Pati_AI_Engineer_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}