import { Boxes, Database, Layers, Smartphone, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const icons: Record<string, typeof Layers> = {
  Frontend: Layers,
  Backend: Boxes,
  Database: Database,
  Mobile: Smartphone,
  Tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A practical toolkit built through full-stack projects — from React interfaces to Spring Boot microservices and relational database design."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.category] ?? Layers;
            return (
              <Reveal key={group.category} delay={i * 70}>
                <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-40px_var(--color-glow)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary transition-colors group-hover:border-primary/40">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-base font-semibold">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border/70 bg-surface-2/60 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
