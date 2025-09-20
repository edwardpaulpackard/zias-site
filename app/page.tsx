"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Zias — Apple-style marketing page starter (Next.js App Router)
 * Sections:
 * 1) Navbar
 * 2) Sticky Hero with kinetic headline + mock device
 * 3) Spec Grid
 * 4) Scroll Gallery (parallax)
 * 5) Marquee strip
 * 6) CTA
 */

export default function MarketingPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white/80 selection:text-black">
      <Navbar />
      <HeroSticky />
      <SpecGrid />
      <ScrollGallery />
      <MarqueeStrip />
      <CTA />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 rounded-lg bg-gradient-to-br from-white to-white/30" />
          <span className="font-medium tracking-tight">Zias</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#gallery" className="hover:text-white transition">Showcase</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <a href="#get-started" className="text-sm px-3 py-1.5 rounded-full bg-white text-black font-medium hover:opacity-90 transition">
          Get started
        </a>
      </div>
    </header>
  );
}

function HeroSticky() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-[180vh]">
      <div className="sticky top-14 h-[calc(100vh-56px)] flex items-center">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <KineticHeadline />
            <p className="text-white/70 max-w-prose leading-relaxed">
              Meet the AI sales co-pilot that keeps every conversation on-script, handles objections in real time,
              and makes human error disappear. Close more—consistently.
            </p>
            <div className="flex items-center gap-3">
              <a href="#get-started" className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
                Start free
              </a>
              <a href="#demo" className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-white/90 transition">
                Watch demo
              </a>
            </div>
            <div className="flex items-center gap-5 pt-2 text-xs text-white/60">
              <span className="inline-flex items-center gap-1"><Dot /> 20–30% avg. lift in close rate</span>
              <span className="inline-flex items-center gap-1"><Dot /> SOC2-ready architecture</span>
            </div>
          </div>

          <motion.div style={{ scale, y, opacity }} className="relative aspect-[9/19] w-full max-w-sm lg:max-w-md mx-auto">
            {/* Device frame mock */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]" />
            {/* Screen */}
            <div className="absolute inset-1.5 rounded-[2.6rem] overflow-hidden bg-[radial-gradient(120%_120%_at_0%_0%,#ffffff20,transparent_40%),radial-gradient(120%_120%_at_100%_100%,#ffffff10,transparent_40%)]">
              <div className="absolute inset-0 animate-[shine_6s_linear_infinite] opacity-40" />
              <div className="h-full w-full bg-gradient-to-b from-zinc-900 to-black grid place-items-center">
                <div className="text-center px-6">
                  <p className="text-xs uppercase tracking-widest text-white/50">Live Preview</p>
                  <p className="text-3xl font-semibold tracking-tight">Co-Pilot UI</p>
                  <p className="text-sm text-white/60 mt-1">Drop a screen recording or product render here.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shine { from { transform: translateX(-60%); } to { transform: translateX(120%); } }
      `}</style>
    </section>
  );
}

function KineticHeadline() {
  return (
    <div className="leading-none">
      <div className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60">
          Zias — the sales co-pilot
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight"
      >
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
          that never misses.
        </span>
      </motion.div>
    </div>
  );
}

function SpecGrid() {
  const items = [
    { k: "+27%", v: "avg. close rate lift", d: "Measured over first 60 days across pilot teams." },
    { k: "<1s", v: "latency", d: "Real-time guidance without breaking flow." },
    { k: "12", v: "stages tracked", d: "Your full script map, monitored live." },
    { k: ">95%", v: "adherence", d: "Say the right thing at the right time." },
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24">
      <div className="grid md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.v} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-3xl font-semibold">{it.k}</div>
            <div className="text-white/80 mt-1">{it.v}</div>
            <div className="text-white/60 text-sm mt-3">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScrollGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const card = (idx: number) => (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] aspect-[16/10]">
      <div className="h-full w-full grid place-items-center">
        <p className="text-white/70">Screenshot {idx}</p>
      </div>
    </div>
  );

  return (
    <section id="gallery" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Built for flow</h2>
          <p className="text-white/60 max-w-md text-sm">
            Pin, scrub, and reveal moments exactly when they matter—without distracting your reps.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div style={{ y: y1 }} className="space-y-6">
            {card(1)}
            {card(2)}
            {card(3)}
          </motion.div>
          <motion.div style={{ y: y2 }} className="space-y-6">
            {card(4)}
            {card(5)}
            {card(6)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  return (
    <section className="py-12 border-y border-white/10 bg-white/[0.02]">
      <div className="overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-white/60 text-sm">
              SOC2 • SSO • HubSpot • Salesforce • Zoom • Gong • Outreach • Webhooks • APIs
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee { animation: marquee 22s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}

function CTA() {
  return (
    <section id="get-started" className="mx-auto max-w-6xl px-4 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 md:p-14">
        <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
          Ready to add 20–30% to your close rate?
        </h3>
        <p className="text-white/70 mt-3 max-w-prose">
          Launch the co-pilot in days, not months. Start with your current script and calendar—no rip-and-replace required.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition" href="#">
            Start free
          </a>
          <a className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 transition" href="#">
            Book a demo
          </a>
        </div>
      </div>
      <p id="pricing" className="text-center text-white/50 text-xs mt-8">
        One product • One price • One promise
      </p>
    </section>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />;
}
