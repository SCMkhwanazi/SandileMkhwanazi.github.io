export function Header() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/80 bg-ink/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-xs tracking-[0.25em] text-mist">
          SCM<span className="text-amber">/</span>DEV
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-mist md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:sandilec930@gmail.com"
          className="rounded-sm bg-amber px-4 py-2 font-mono text-xs font-bold tracking-widest text-ink transition-colors hover:bg-white"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
