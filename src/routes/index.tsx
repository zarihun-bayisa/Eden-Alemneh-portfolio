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
import { ResumeCta } from "@/components/site/ResumeCta";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Zarihun Bayisa — Full-Stack & Spring Boot Developer";
const description =
  "Portfolio of Zarihun Bayisa Gadisa, Full-Stack Web Developer building React, TypeScript, Java, Spring Boot, and microservice applications.";

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
          name: "Zarihun Bayisa Gadisa",
          jobTitle: "Full-Stack Web Developer",
          alumniOf: "Arsi University",
          knowsLanguage: ["English", "Amharic", "Afaan Oromo"],
          sameAs: ["https://github.com/zarihun-bayisa"],
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
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
