import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-end overflow-hidden pt-16"
    >
      <img
        src={heroBg}
        alt="Johannesburg skyline at golden hour"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
        <div className="mb-6 font-mono text-xs tracking-[0.35em] text-amber">
          JUNIOR FULL-STACK · JOHANNESBURG, ZA
        </div>
        <h1 className="font-poster text-[18vw] leading-[0.82] tracking-tight text-white md:text-[9rem]">
          SANDILE
          <br />
          CLIFFORD
          <br />
          <span className="text-amber">MKHWANAZI</span>
        </h1>
        <p className="mt-8 max-w-md text-lg font-medium text-mist">
          Full-stack developer building for the web &amp; mobile — shipping
          production features with React and Node.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-sm bg-amber px-7 py-4 font-semibold text-ink transition-colors hover:bg-white"
          >
            View My Work{" "}
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="mailto:sandilec930@gmail.com"
            className="inline-flex items-center gap-3 rounded-sm border border-edge px-7 py-4 font-semibold text-white transition-colors hover:border-amber hover:text-amber"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
