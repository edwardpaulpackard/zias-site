// app/page.tsx
"use client";

import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen page">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="section flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="font-medium tracking-tight">Zias</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white transition" href="#design">Design</a>
            <a className="hover:text-white transition" href="#automation">Automation</a>
            <a className="btn primary" href="#get-started">Get started</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="section text-center py-24 md:py-32">
        <p className="text-xs tracking-[0.35em] text-white/50">PRO</p>
        <h1 className="h-hero mt-6 max-w-3xl mx-auto">
          Say the right words, right on time.
        </h1>
        <p className="h-lead mt-6 max-w-2xl mx-auto">
          Zias listens to your calls and gives you exactly what to say next—questions that open prospects up and rebuttals that remove friction—while learning from every conversation to raise your close rate.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a className="btn" href="#live">▶ See it live on a call</a>
          <a className="btn primary" href="#get-started">Start a demo</a>
        </div>

        {/* Hero image */}
        <div className="mt-14 grid place-items-center">
          <div className="frame bg-gradient-to-b from-white/5 to-white/[0.02] ring-[var(--ring)] shadow-soft overflow-hidden rounded-2xl w-full max-w-5xl">
            <Image
              src="/zias-hero.png"
              alt="Zias live sales copilot: stage tracker, say-this guidance, and outcomes"
              width={2400}
              height={1400}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* SECTION: Design */}
      <section id="design" className="section py-24 md:py-32 border-t border-white/10">
        <p className="text-xs tracking-[0.35em] text-white/50">HOW IT WORKS</p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Prep */}
          <div className="frame p-6 bg-gradient-to-b from-white/5 to-white/[0.02]">
            <h3 className="text-white/80 font-medium mb-4">Prep</h3>
            <p className="text-white/70 text-sm">Your script, offer profile &amp; CRM.</p>
          </div>
          {/* Go live */}
          <div className="frame p-6 bg-gradient-to-b from-white/5 to-white/[0.02]">
            <h3 className="text-white/80 font-medium mb-4">Go live</h3>
            <p className="text-white/70 text-sm">Zias tracks stages and feeds speak-aloud lines.</p>
          </div>
          {/* Improve */}
          <div className="frame p-6 bg-gradient-to-b from-white/5 to-white/[0.02]">
            <h3 className="text-white/80 font-medium mb-4">Improve</h3>
            <p className="text-white/70 text-sm">Auto follow-ups + learning loop raise win-rate.</p>
          </div>
        </div>
      </section>

      {/* SECTION: Automation */}
      <section id="automation" className="section py-24 md:py-32 border-t border-white/10">
        <p className="text-xs tracking-[0.35em] text-white/50">AUTOMATION</p>
        <h2 className="h-hero text-4xl sm:text-5xl">A big zoom forward.</h2>
        <p className="h-lead mt-6 max-w-3xl">
          See deeper context with automatic research and call prep. Zoom into the details that
          close deals—not the CRM.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="frame h-[36vh] bg-gradient-to-b from-white/5 to-white/[0.02] grid place-items-center">
            <span className="text-white/60">Panel A (motion)</span>
          </div>
          <div className="frame h-[36vh] bg-gradient-to-b from-white/5 to-white/[0.02] grid place-items-center">
            <span className="text-white/60">Panel B (motion)</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="section py-24 md:py-32 border-t border-white/10">
        <div className="text-center">
          <h2 className="h-hero text-4xl sm:text-5xl">Launch your co-pilot in days, not months.</h2>
          <p className="h-lead mt-6">Works with your current script and calendar—no rip-and-replace required.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a className="btn primary" href="#">Start free</a>
            <a className="btn" href="#pricing">See pricing</a>
          </div>
          <p className="text-xs text-white/40 mt-10">© {new Date().getFullYear()} Zias, Inc.</p>
        </div>
      </section>
    </main>
  );
}

