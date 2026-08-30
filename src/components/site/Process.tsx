import { process } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  return (
    <section className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Approach"
          title="How I Build Software"
          description="A simple, repeatable process that keeps projects predictable from first conversation to production."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 90}>
                <article className="group relative h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-background font-mono text-xs text-primary">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
