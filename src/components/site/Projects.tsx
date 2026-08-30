import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Smartphone, X } from "lucide-react";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [detail, setDetail] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Full-stack platforms, distributed systems, and mobile applications built end to end."
        />

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-lg border px-3.5 py-2 text-sm transition-colors",
                  filter === f
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border bg-surface text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal as="article" key={project.id} delay={i * 60} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_30px_70px_-45px_var(--color-glow)]">
                <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-surface-2">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Placeholder project={project} />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border/70 bg-surface-2/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setDetail(project)}
                      className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {detail ? <DetailModal project={detail} onClose={() => setDetail(null)} /> : null}
    </section>
  );
}

function Placeholder({ project }: { project: Project }) {
  if (project.mobile) {
    return (
      <div className="grid-bg grid h-full place-items-center">
        <div className="flex items-end gap-3">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className="rounded-[14px] border border-border bg-background p-1 shadow-lg"
              style={{ width: 56, height: n === 1 ? 112 : 92 }}
            >
              <div className="h-full w-full rounded-[10px] bg-gradient-to-b from-primary/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid-bg grid h-full place-items-center p-6">
      <div className="glass w-full max-w-[240px] rounded-xl p-4 font-mono text-[11px] text-muted-foreground">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-destructive/70" />
          <span className="h-2 w-2 rounded-full bg-primary/70" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
        </div>
        <p className="truncate">
          <span className="text-primary">const</span> project = "{project.id}";
        </p>
        <p className="mt-1 truncate">stack: {project.tech.slice(0, 2).join(", ")}</p>
      </div>
    </div>
  );
}

function DetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <h3 className="min-w-0 text-lg font-semibold">{project.title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.features ? (
          <>
            <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-primary">
              Features
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Smartphone className="hidden" aria-hidden />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-primary">Stack</h4>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border/70 bg-surface-2/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Github className="h-4 w-4" /> View repository
          </a>
        ) : null}
      </div>
    </div>
  );
}
