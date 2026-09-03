import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X, FileText } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.01, 0.25] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
            ZB
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight sm:text-base">
            Zarihun Bayisa
          </span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    active === item.href && "text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <IconLink href={profile.github} label="GitHub">
            <Github className="h-4 w-4" />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </IconLink>
          <button
            type="button"
            onClick={() => setLight((v) => !v)}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <a
            href="/document?file=resume"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-1 hidden items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <FileText className="h-4 w-4" /> View Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass border-t border-border lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/document?file=resume"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 block rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {children}
    </a>
  );
}
