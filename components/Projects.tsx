import Link from 'next/link';
import { projects } from '@/content/projects';

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article key={p.title} className="card p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{p.description}</p>
              </div>
            </div>
            <div className="mt-3 text-xs text-[var(--muted)]">Role: {p.role}</div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
              {p.tech.map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{t}</span>
              ))}
            </div>
            <div className="mt-3 text-sm text-tealAccent">{p.impact}</div>
          </article>
        ))}
      </div>
      <div className="text-center">
        <Link href="#contact" className="btn-secondary">Discuss a project</Link>
      </div>
    </section>
  );
}
