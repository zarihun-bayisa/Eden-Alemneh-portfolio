import { ArrowRight, Download, FileText, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { heroBadges, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Available for opportunities
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Building Digital Experiences That{" "}
              <span className="text-gradient">Solve Real Problems.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Zarihun Bayisa, a Full-Stack Web Developer specializing in React, TypeScript,
              Java, Spring Boot, REST APIs, PostgreSQL, and microservices.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--color-glow)]"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/document?file=resume"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="/document?file=tempo"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                <FileText className="h-4 w-4" /> View Tempo
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Let's Work Together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="mx-auto max-w-[480px]">
            <div className="glow-ring relative overflow-hidden rounded-[24px] border border-border bg-surface-2/60 p-1.5 shadow-[0_0_50px_rgba(34,211,238,0.08)] sm:rounded-[28px] sm:p-2">
              <img
                src={profileImg}
                alt="Portrait of Zarihun Bayisa Gadisa"
                width={1200}
                height={1200}
                className="aspect-square w-full rounded-[18px] object-cover object-center sm:rounded-[20px]"
              />
            </div>

            <div className="mt-3 grid grid-cols-3 rounded-[20px] border border-border bg-surface px-3 py-3 text-center sm:mt-4 sm:rounded-[22px] sm:px-5 sm:py-4">
              <div>
                <p className="font-display text-base font-semibold sm:text-lg">14+</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Projects</p>
              </div>
              <div className="border-x border-border px-2">
                <p className="font-display text-base font-semibold sm:text-lg">Full-Stack</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Developer</p>
              </div>
              <div>
                <p className="font-display text-base font-semibold sm:text-lg">2024</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">BSc CS</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
