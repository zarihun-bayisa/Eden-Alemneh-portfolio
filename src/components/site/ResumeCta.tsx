import { Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ResumeCta() {
  return (
    <section className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="glow-ring relative overflow-hidden rounded-3xl border border-border bg-surface p-8 text-center sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
            />
            <h2 className="relative text-3xl font-semibold sm:text-4xl">
              Interested in working together?
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I'm currently open to opportunities where I can build meaningful software, solve
              challenging problems, and grow as a developer.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="/document?file=resume"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
