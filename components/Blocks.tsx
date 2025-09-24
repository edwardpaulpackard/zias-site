"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const y = useTransform(scrollYProgress, [0,1], ["0%","-12%"]);
  const opacity = useTransform(scrollYProgress, [0,1], [1,0.4]);

  return (
    <section ref={ref} className="section pt-20 md:pt-28">
      <div className="section-inner">
        <div className="k text-center">
          <p className="text-sm text-brand font-semibold tracking-wide uppercase">Zias</p>
          <h1 className="hMega">PRO</h1>
          <p className="h0 mt-6">Your new sales copilot is impossibly fast.</p>
          <p className="lead mt-4">Zias preps calls, writes follow-ups, and updates your CRM automatically—so reps spend time selling, not clicking.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#get" className="btn">Start free</a>
            <a href="#demos" className="btn-outline">Watch demo</a>
          </div>
        </div>

        {/* full-bleed hero visual */}
        <motion.div style={{ y, opacity }} className="panel mt-14" />
      </div>
    </section>
  );
}

export function SplitFeature(props: { id?: string; eyebrow?: string; title: string; copy: string; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%","end 40%"] });
  const y = useTransform(scrollYProgress, [0,1], [30,0]);
  const op = useTransform(scrollYProgress, [0,1], [0,1]);

  return (
    <section id={props.id} ref={ref} className="section py-24 md:py-32">
      <div className="section-inner grid md:grid-cols-2 gap-10 items-center">
        <motion.div style={{ y: props.reverse ? 0 : y, opacity: op }} className={props.reverse ? "order-2 md:order-1" : ""}>
          {props.eyebrow && <p className="text-brand font-semibold uppercase tracking-wide text-sm mb-2">{props.eyebrow}</p>}
          <h2 className="h0">{props.title}</h2>
          <p className="lead mt-4">{props.copy}</p>
          <div className="mt-6 flex gap-3">
            <a className="btn">Get started</a>
            <a className="btn-outline">See pricing</a>
          </div>
        </motion.div>

        <motion.div style={{ y: props.reverse ? y : 0, opacity: op }} className={props.reverse ? "order-1 md:order-2" : ""}>
          <div className="panel" />
        </motion.div>
      </div>
    </section>
  );
}

export function SpecRow() {
  const specs = [
    { k: "Prep", v: "Briefs, research, talk tracks—instantly" },
    { k: "Follow-ups", v: "On-brand and personalized—auto-sent" },
    { k: "CRM", v: "Hands-free updates that stay clean" },
  ];
  return (
    <section className="section py-16">
      <div className="section-inner">
        <div className="grid md:grid-cols-3 gap-6">
          {specs.map((s) => (
            <div key={s.k} className="rounded-3xl border border-white/10 p-6">
              <p className="text-sm text-dim">{s.k}</p>
              <p className="mt-2 font-medium">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StackedPanels() {
  // simple stacked effect
  return (
    <section className="section py-24">
      <div className="section-inner k text-center">
        <p className="text-brand font-semibold uppercase text-sm">Automation</p>
        <h2 className="h0">Launch your co-pilot in days, not months.</h2>
        <p className="lead mt-4">Works with your current script and calendar—no rip-and-replace required.</p>
      </div>
      <div className="container mt-10 grid md:grid-cols-2 gap-6">
        <div className="panel" />
        <div className="panel" />
        <div className="panel md:col-span-2" />
      </div>
    </section>
  );
}

