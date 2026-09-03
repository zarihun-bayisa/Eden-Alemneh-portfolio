import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/document")({
  validateSearch: (search: Record<string, unknown>) => ({
    file: search.file === "tempo" ? "tempo" : "resume",
  }),
  head: () => ({
    meta: [{ title: "Zarihun Bayisa — Document" }],
  }),
  component: DocumentPage,
});

function DocumentPage() {
  const { file } = useSearch({ from: "/document" });
  const documentUrl = file === "tempo" ? profile.tempo : profile.resume;
  const documentName = file === "tempo" ? "Tempo" : "Zarihun Bayisa Gadisa CV";

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <header className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <a
          href={documentUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Open PDF <ExternalLink className="h-4 w-4" />
        </a>
      </header>
      <h1 className="sr-only">{documentName}</h1>
      <iframe title={documentName} src={documentUrl} className="min-h-0 flex-1 border-0" />
    </main>
  );
}