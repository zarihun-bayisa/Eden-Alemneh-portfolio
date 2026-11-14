import { GraduationCap } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative border-t border-border/60 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[28px] border border-primary/25"
            />
            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative grid aspect-[4/5] w-full place-items-center rounded-3xl border border-border bg-surface text-center">
              <div>
                <GraduationCap aria-hidden className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-4 text-sm font-medium">Graduation photo coming soon</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About" title="About Me" />
          <Reveal delay={80}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm an Information Technology graduate and software developer passionate about
                building reliable, scalable, and intuitive software solutions.
              </p>
              <p>
                My experience spans frontend development, backend engineering, REST API
                development, database design, and microservice architectures.
              </p>
              <p>
                I enjoy turning real-world problems into practical software products and
                continuously learning new technologies.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal as="li" key={stat.label} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/40">
                  <p className="font-display text-lg font-semibold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground">
                Languages
              </span>{" "}
              — {profile.languages.join(" · ")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
