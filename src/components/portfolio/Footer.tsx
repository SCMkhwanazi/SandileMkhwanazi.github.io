export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-edge px-5 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber"></span>
              </span>
              <span className="font-mono text-xs tracking-widest text-white">
                AVAILABLE FOR JUNIOR ROLES · FULL-TIME
              </span>
            </div>
            <h2 className="mt-8 font-poster text-5xl tracking-tight text-white">
              LET'S BUILD.
            </h2>
          </div>
          <div className="space-y-3 font-mono text-sm">
            <a
              href="mailto:sandilec930@gmail.com"
              className="flex items-center gap-3 text-mist transition-colors hover:text-amber"
            >
              <span className="text-amber">&gt;</span> sandilec930@gmail.com
            </a>
            <a
              href="tel:0815744751"
              className="flex items-center gap-3 text-mist transition-colors hover:text-amber"
            >
              <span className="text-amber">&gt;</span> 081 574 4751
            </a>
            <a
              href="https://github.com/SCMkhwanazi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-mist transition-colors hover:text-amber"
            >
              <span className="text-amber">&gt;</span> github.com/SCMkhwanazi
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-edge pt-6 font-mono text-[11px] tracking-widest text-mist/60">
          <span>© 2026 SANDILE CLIFFORD MKHWANAZI</span>
          <span>JOHANNESBURG · ALEXANDRA · ZA</span>
        </div>
      </div>
    </footer>
  );
}
