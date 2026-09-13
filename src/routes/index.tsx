import { createFileRoute } from "@tanstack/react-router";
import {
  Header,
  Hero,
  About,
  TechStack,
  Projects,
  Experience,
  Footer,
} from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sandile Clifford Mkhwanazi | Junior Full-Stack Developer",
      },
      {
        name: "description",
        content:
          "Portfolio of Sandile Clifford Mkhwanazi, a Junior Full-Stack Developer based in Johannesburg, South Africa.",
      },
      {
        property: "og:title",
        content: "Sandile Clifford Mkhwanazi | Junior Full-Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Portfolio showcasing React, Node.js, React Native and MySQL projects by a Johannesburg-based junior developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink text-white antialiased selection:bg-amber selection:text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
