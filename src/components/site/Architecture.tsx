import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { architecture } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Architecture() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="From interface to data layer"
          description="Hover or select a layer to see the technologies I use at each level of a distributed system."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ol className="space-y-3">
              {architecture.map((layer, i) => (
                <li key={layer.layer}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={cn(
                      "w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300",
                      active === i
                        ? "border-primary/50 bg-primary/10 text-foreground"
                        : "border-border bg-surface text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                      Layer {i + 1}
                    </span>
                    <span className="mt-1 block font-display text-base font-semibold">
                      {layer.layer}
                    </span>
                  </button>
                  {i < architecture.length - 1 ? (
                    <div className="flex justify-center py-1.5" aria-hidden>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-colors",
                          active > i ? "text-primary" : "text-border",
                        )}
                      />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid-bg relative h-full rounded-2xl border border-border bg-surface p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {architecture[active]?.layer}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {architecture[active]?.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-border bg-background px-3.5 py-2 font-mono text-sm text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Services communicate through an API gateway, register with Eureka for discovery,
                and call each other with Feign clients — keeping domains independent and
                deployable on their own.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
