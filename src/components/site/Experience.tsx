import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="relative mt-12 space-y-8 border-l border-border pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 90} className="relative">
              <span
                aria-hidden
                className="animate-pulse-line absolute -left-[31px] top-6 grid h-4 w-4 place-items-center rounded-full bg-primary sm:-left-[47px]"
              />
              <article className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 sm:p-8">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="mt-1 text-sm text-primary">{job.company}</p>
                  </div>
                  <span className="shrink-0 rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
