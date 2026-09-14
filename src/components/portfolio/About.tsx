import profileImg from "@/assets/profilepic.jpg";

export function About() {
  return (
    <section id="about" className="border-t border-edge">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-24 md:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]">
        <img
          src={profileImg}
          alt="Sandile Clifford Mkhwanazi"
          className="aspect-[4/5] w-full rounded-md object-cover"
          width={1024}
          height={1280}
          loading="lazy"
        />
        <div>
          <div className="mb-5 font-mono text-xs tracking-[0.35em] text-amber">
            01 — ABOUT
          </div>
          <p className="text-2xl font-medium leading-snug text-white md:text-3xl">
            Motivated Computer Science graduate with ten months of hands-on
            software development experience, gained through a Work Integrated
            Learning internship at CYBAUG (Pty) Ltd.
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-mist">
            I contributed to Project Phanda and Exse within the Product
            Development Division — building frontend and backend features with
            React, Node.js, RESTful APIs and MySQL, alongside testing, debugging
            and working in an Agile, Git-based team. I hold a Diploma in
            Information and Communication Technology (Computer Science) from
            Tshwane University of Technology (2026), and I'm seeking a Junior
            Developer role where I can contribute to production work while
            growing across modern web technologies and AI-assisted development.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-mist">
            <span>TUT · 2026</span>
            <span>WIL Internship</span>
            <span>Agile / Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}
