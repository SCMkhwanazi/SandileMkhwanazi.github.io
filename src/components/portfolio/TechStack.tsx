const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "HTML", "CSS3", "SQL", "PL/SQL"],
  },
  {
    title: "Frameworks / Libraries",
    skills: ["React", "React Native", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Visual Studio Code", "NetBeans", "XAMPP"],
  },
  {
    title: "Concepts",
    skills: [
      "RESTful APIs",
      "OOP Design",
      "Auth & Authorization",
      "Database Management",
      "SDLC",
      "Agile",
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="border-t border-edge bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 font-mono text-xs tracking-[0.35em] text-amber">
          02 — TECH STACK
        </div>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={
                index === skillGroups.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
              }
            >
              <div className="mb-4 text-sm font-semibold tracking-wide text-white">
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-edge px-3 py-1.5 text-sm text-mist transition-colors hover:border-amber hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
