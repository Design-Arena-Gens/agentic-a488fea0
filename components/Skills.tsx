import { skillGroups } from '@/content/skills';

export function Skills() {
  const skills = skillGroups;
  return (
    <section id="skills" className="space-y-6">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map(s => (
          <div key={s.group} className="card p-5">
            <div className="font-semibold text-white mb-2">{s.group}</div>
            <div className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
              {s.items.map(it => (
                <span key={it} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
