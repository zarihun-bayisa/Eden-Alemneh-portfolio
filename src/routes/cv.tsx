import { Download, House } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import cvFile from "@/assets/Eden_Alemneh_CV.pdf";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [{ title: "Eden Alemneh | CV" }],
    links: [{ rel: "icon", href: "/favicon.svg?v=3", type: "image/svg+xml" }],
  }),
  component: CvViewer,
});

function CvViewer() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <header className="glass relative z-10 flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
        >
          <House aria-hidden className="h-4 w-4" />
          Eden Alemneh
        </a>
        <a
          href={cvFile}
          download="Eden_Alemneh_CV.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          <Download aria-hidden className="h-4 w-4" />
          Download CV
        </a>
      </header>
      <iframe
        title="Eden Alemneh CV"
        src={cvFile}
        className="min-h-[calc(100vh-64px)] w-full flex-1 border-0 bg-white"
      />
    </main>
  );
}