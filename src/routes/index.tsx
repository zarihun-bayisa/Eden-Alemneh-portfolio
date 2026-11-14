import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Education } from "@/components/site/Education";
import { Architecture } from "@/components/site/Architecture";
import { GithubSection } from "@/components/site/GithubSection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Eden Alemneh — Information Technology Professional";
const description =
  "Portfolio of Eden Alemneh, Information Technology graduate and software developer building modern web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Eden Alemneh",
          jobTitle: "Information Technology Professional",
          alumniOf: "Arsi University",
          knowsLanguage: ["English", "Amharic", "Afaan Oromo"],
          sameAs: ["https://github.com/eden-alemneh"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <Education />
        <Architecture />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
