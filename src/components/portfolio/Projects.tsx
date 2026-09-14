import panelImg from "@/assets/panelSA.png";
import navigateImg from "@/assets/navigateSA.png";
import eventsImg from "@/assets/HackTrack.png";

const projects = [
  {
    id: "01",
    shortLabel: "PANEL",
    title: "ThePanelbeatSA",
    description:
      "A full-stack platform connecting vehicle owners with trusted panel-beating and auto-repair services across South Africa.",
    image: panelImg,
    imageAlt: "ThePanelbeatSA dashboard preview",
    href: "https://github.com/SCMkhwanazi/ThePanelbeatSA.git",
  },
  {
    id: "02",
    shortLabel: "MAPS",
    title: "NavigateSA",
    description:
      "A route-planning and navigation tool built to help users find their way across South African roads, towns and cities.",
    image: navigateImg,
    imageAlt: "NavigateSA map interface preview",
    href: "https://github.com/SCMkhwanazi/NavigateSA.git",
  },
  {
    id: "03",
    shortLabel: "EVENTS",
    title: "EventManagementSystem",
    description:
      "A full-stack event management system for scheduling, bookings, attendee tracking and venue coordination.",
    image: eventsImg,
    imageAlt: "EventManagementSystem dashboard preview",
    href: "https://github.com/SCMkhwanazi/EventManagementSystem.git",
  },
];

export function Projects() {
  return (
    <section id="work" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div className="font-mono text-xs tracking-[0.35em] text-amber">
            03 — SELECTED WORK
          </div>
          <div className="font-poster text-4xl text-white">REPOS</div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-md border border-edge bg-panel/40 transition-all duration-300 hover:-translate-y-1 hover:border-amber/60"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="aspect-[4/3] w-full object-cover"
                width={1024}
                height={768}
                loading="lazy"
              />
              <div className="p-5">
                <div className="font-mono text-[10px] tracking-[0.2em] text-amber">
                  {project.id} / {project.shortLabel}
                </div>
                <h3 className="mt-2 font-poster text-2xl tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-amber">
                  View on GitHub{" "}
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
