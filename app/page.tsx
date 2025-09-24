"use client";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="font-medium tracking-tight">Zias</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white transition" href="#design">Design</a>
            <a className="hover:text-white transition" href="#automation">Automation</a>
            <a className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition ring-1 ring-[var(--ring)]" href="#get-started">
              Get started
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto max-w-6xl px-4 md:px-6 text-center py-24 md:py-32">
        <p className="text-xs tracking-[0.35em] text-white/50">PRO</p>

        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
          Your new sales copilot is impossibly fast.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[var(--dim)] max-w-2xl mx-auto">
          Zias preps calls, writes follow-ups, and updates your CRM automatically—so reps spend time
          selling, not clicking.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition ring-1 ring-[var(--ring)]"
            href="#"
          >
            Start free
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white/10 hover:bg-white/20 text-white ring-1 ring-[var(--ring)] transition"
            href="#pricing"
          >
            See pricing
          </a>
        </div>

        {/* Placeholder for your hero media */}
        <div className="mt-14 grid place-items-center">
          <div className="rounded-2xl overflow-hidden ring-1 ring-[var(--ring)] shadow-[0_20px_60px_rgba(0,0,0,.45)] h-[40vh] md:h-[56vh] bg-gradient-to-b from-white/5 to-white/[0.02] grid place-items-center">
            <span className="text-white/40">Hero visual goes here (video / WebGL / canvas)</span>
          </div>
        </div>
      </section>

      {/* SECTION: Design */}
      <section id="design" className="container mx-auto max-w-6xl px-4 md:px-6 py-24 md:py-32 border-t border-white/10">
        <p className="text-xs tracking-[0.35em] text-white/50">DESIGN</p>

        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
          Unibody workflow. Makes a strong case for itself.
        </h2>

        <p className="mt-6 text-lg text-[var(--dim)] max-w-3xl">
          At the core is a heat-forged automation engine that maximizes rep velocity. Fewer
          clicks, fewer tabs, more pipeline.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Prep", "Follow-ups", "CRM"].map((title) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden ring-1 ring-[var(--ring)] shadow-[0_20px_60px_rgba(0,0,0,.45)] h-[36vh] bg-gradient-to-b from-white/5 to-white/[0.02] grid place-items-center"
            >
              <p className="text-white/60">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Automation */}
      <section id="automation" className="container mx-auto max-w-6xl px-4 md:px-6 py-24 md:py-32 border-t border-white/10">
        <p className="text-xs tracking-[0.35em] text-white/50">AUTOMATION</p>

        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
          A big zoom forward.
        </h2>

        <p className="mt-6 text-lg text-[var(--dim)] max-w-3xl">
          See deeper context with automatic research and call prep. Zoom into the details that close
          deals—not the CRM.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Panel A (motion)", "Panel B (motion)"].map((title) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden ring-1 ring-[var(--ring)] shadow-[0_20px_60px_rgba(0,0,0,.45)] h-[36vh] bg-gradient-to-b from-white/5 to-white/[0.02] grid place-items-center"
            >
              <span className="text-white/60">{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="container mx-auto max-w-6xl px-4 md:px-6 py-24 md:py-32 border-t border-white/10 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Launch your co-pilot in days, not months.
        </h2>

        <p className="mt-6 text-lg text-[var(--dim)]">
          Works with your current script and calendar—no rip-and-replace required.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition ring-1 ring-[var(--ring)]"
            href="#"
          >
            Start free
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white/10 hover:bg-white/20 text-white ring-1 ring-[var(--ring)] transition"
            href="#pricing"
          >
            See pricing
          </a>
        </div>

        <p className="text-xs text-white/40 mt-10">
          © {new Date().getFullYear()} Zias, Inc.
        </p>
      </section>
    </main>
  );
}

