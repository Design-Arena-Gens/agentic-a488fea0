import { testimonials } from '@/content/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="space-y-6">
      <h2 className="section-title">What People Say</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map(t => (
          <figure key={t.quote} className="card p-5">
            <blockquote className="text-[var(--fg)]">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">— {t.author}, {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
