import { Download, ExternalLink, Printer } from "lucide-react";
import cvFile from "@/assets/Eden_Alemneh_CV.pdf";
import { education, experience, profile, projects, skillGroups } from "@/data/portfolio";

export function Resume() {
  function printResume() {
    document.body.classList.add("printing-resume");
    window.addEventListener(
      "afterprint",
      () => document.body.classList.remove("printing-resume"),
      { once: true },
    );
    window.print();
  }

  return (
    <section id="resume" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <header className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary resume-accent">
              Curriculum Vitae
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Eden Alemneh</h2>
            <p className="mt-2 text-muted-foreground">IT Support Officer | Software Developer</p>
          </div>
          <div className="resume-action flex flex-wrap items-center gap-2">
            <a
              href="/cv"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ExternalLink aria-hidden className="h-4 w-4" />
              View CV
            </a>
            <a
              href={cvFile}
              download="Eden_Alemneh_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:brightness-110"
            >
              <Download aria-hidden className="h-4 w-4" />
              Download CV
            </a>
            <button
              type="button"
              onClick={printResume}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Printer aria-hidden className="h-4 w-4" />
              Print CV
            </button>
          </div>
        </header>

        <div className="resume-document mt-10 border-t border-border pt-8">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground resume-muted">
            <a href={`mailto:${profile.email}`} className="hover:text-primary">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="hover:text-primary">
              {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
              GitHub: zarihun-bayisa
            </a>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.8fr)] lg:gap-16">
            <div className="space-y-10">
              <section aria-labelledby="resume-summary">
                <h3 id="resume-summary" className="font-mono text-xs uppercase tracking-[0.18em] text-primary resume-accent">
                  Professional Summary
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground resume-muted">
                  Information Technology graduate and IT Support Officer experienced in maintaining IT
                  systems and supporting hardware, software, and networks. Builds full-stack applications
                  with React, TypeScript, Java, Spring Boot, and REST APIs, with project work across
                  database-driven systems and microservices.
                </p>
              </section>

              <section aria-labelledby="resume-experience">
                <h3 id="resume-experience" className="font-mono text-xs uppercase tracking-[0.18em] text-primary resume-accent">
                  Experience
                </h3>
                <div className="mt-4 space-y-6">
                  {experience.map((job) => (
                    <article key={job.company} className="resume-item">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="font-semibold">{job.role}</h4>
                        <span className="font-mono text-xs text-muted-foreground resume-muted">
                          {job.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-primary resume-accent">{job.company}</p>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground resume-muted">
                        {job.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="resume-projects">
                <h3 id="resume-projects" className="font-mono text-xs uppercase tracking-[0.18em] text-primary resume-accent">
                  Selected Projects
                </h3>
                <div className="mt-4 space-y-5">
                  {projects.slice(0, 4).map((project) => (
                    <article key={project.id} className="resume-item">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="font-semibold">{project.title}</h4>
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-xs text-primary resume-accent"
                          >
                            Repository
                          </a>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground resume-muted">
                        {project.description}
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground resume-muted">
                        {project.tech.join(", ")}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-10">
              <section aria-labelledby="resume-skills">
                <h3 id="resume-skills" className="font-mono text-xs uppercase tracking-[0.18em] text-primary resume-accent">
                  Technical Skills
                </h3>
                <dl className="mt-4 space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <dt className="text-sm font-semibold">{group.category}</dt>
                      <dd className="mt-1 text-sm leading-6 text-muted-foreground resume-muted">
                        {group.items.join(", ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section aria-labelledby="resume-education">
                <h3 id="resume-education" className="font-mono text-xs uppercase tracking-[0.18em] text-primary resume-accent">
                  Education
                </h3>
                <div className="resume-item mt-4">
                  <h4 className="font-semibold">{education.degree}</h4>
                  <p className="mt-1 text-sm text-muted-foreground resume-muted">{education.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground resume-muted">{education.period}</p>
                </div>
              </section>

              <section aria-labelledby="resume-languages">
                <h3 id="resume-languages" className="font-mono text-xs uppercase tracking-[0.18em] text-primary resume-accent">
                  Languages
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground resume-muted">
                  {profile.languages.join(", ")}
                </p>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}