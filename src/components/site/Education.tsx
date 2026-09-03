import { Award, GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ol className="border-l border-border pl-6 sm:pl-10">
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-6 h-4 w-4 rounded-full bg-primary sm:-left-[47px]"
                />
                <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold">{education.degree}</h3>
                      <p className="mt-1 text-sm text-primary">{education.school}</p>
                    </div>
                    <span className="shrink-0 rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                      {education.period}
                    </span>
                  </div>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm text-primary">
                    <Award className="h-4 w-4" /> CGPA {education.cgpa}
                  </p>
                </article>
              </li>
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid-bg grid h-full min-h-[220px] place-items-center rounded-2xl border border-border bg-surface p-8 text-center">
              <div>
                <GraduationCap className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-4 font-display text-sm font-semibold">Graduated 2024</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Certificate / graduation visual placeholder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
