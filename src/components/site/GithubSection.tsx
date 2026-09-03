import { ArrowRight, GitBranch, Github, Star } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const repos = projects.filter((p) => p.github);
const techStats = [
  { label: "Java / Spring Boot", value: 40 },
  { label: "React / TypeScript", value: 32 },
  { label: "PHP / MySQL", value: 16 },
  { label: "Mobile", value: 12 },
];

export function GithubSection() {
  return (
    <section className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Open Source"
          title="Building in Public"
          description="Most of my work lives on GitHub — from full-stack platforms to distributed microservice experiments."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-surface-2 text-primary">
                  <Github className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-semibold">zarihun-bayisa</p>
                  <p className="truncate text-sm text-muted-foreground">
                    Full-Stack Developer · Ethiopia
                  </p>
                </div>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block h-full rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
                    >
                      <p className="flex items-center gap-2 text-sm font-medium">
                        <GitBranch className="h-4 w-4 text-primary" /> {repo.title}
                      </p>
                      <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                        {repo.description}
                      </p>
                      <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                        {repo.tech.slice(0, 3).join(" · ")}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Visit GitHub
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  Technology split
                </p>
                <ul className="mt-5 space-y-4">
                  {techStats.map((s) => (
                    <li key={s.label}>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{s.label}</span>
                        <span className="font-mono">{s.value}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                        <div
                          className="h-full rounded-full bg-primary/80"
                          style={{ width: `${s.value}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                  <Star className="h-3.5 w-3.5" /> Contribution activity
                </p>
                <div className="mt-5 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1" aria-hidden>
                  {Array.from({ length: 100 }).map((_, i) => (
                    <span
                      key={i}
                      className="aspect-square rounded-[3px] bg-primary"
                      style={{ opacity: 0.08 + ((i * 37) % 9) / 12 }}
                    />
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Activity graph placeholder — connect the GitHub API later for live data.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
