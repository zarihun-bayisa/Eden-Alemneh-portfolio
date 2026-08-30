import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold">Zarihun Bayisa Gadisa</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Full-Stack Web Developer · © {new Date().getFullYear()}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
