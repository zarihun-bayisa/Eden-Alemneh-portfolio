import { useState, type FormEvent } from "react";
import { Check, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-primary/25";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Great"
          description="Have a role, a project, or an idea in mind? Send a message and I'll get back to you."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium">
                    Name
                  </label>
                  <input id="name" name="name" required className={field} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={field}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-xs font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className={field}
                  placeholder="What is this about?"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-xs font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={field}
                  placeholder="Tell me a bit about it..."
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>

              <p
                aria-live="polite"
                className={`mt-4 flex items-center gap-2 text-sm text-primary transition-all duration-500 ${
                  sent ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
                }`}
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                Thanks — your message has been captured.
              </p>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-4">
              <ContactCard
                icon={<Phone className="h-4.5 w-4.5" />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
              />
              <ContactCard
                icon={<Mail className="h-4.5 w-4.5" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactCard
                icon={<Github className="h-4.5 w-4.5" />}
                label="GitHub"
                value="github.com/zarihun-bayisa"
                href={profile.github}
              />
              <ContactCard
                icon={<Linkedin className="h-4.5 w-4.5" />}
                label="LinkedIn"
                value="Connect on LinkedIn"
                href={profile.linkedin}
              />
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer noopener"
        className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
          <span className="mt-1 block truncate text-sm font-medium">{value}</span>
        </span>
      </a>
    </li>
  );
}
