import Link from 'next/link';

export function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-tealAccent">Aftab</span> — SRE & DevOps Engineer
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)] max-w-prose">
          I design and run scalable, reliable cloud infrastructure. I automate everything,
          build robust CI/CD, and help teams ship faster with confidence.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#projects" className="btn-primary">View My Work</Link>
          <Link href="#contact" className="btn-secondary">Contact Me</Link>
          <a href="/Aftab_Resume.pdf" className="btn-secondary">Download CV</a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <span>Key tech:</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">AWS</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">Kubernetes</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">Terraform</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">CI/CD</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">Observability</span>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-tealAccent/20 to-transparent" />
      </div>
    </section>
  );
}
