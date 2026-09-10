import React, { useEffect, useRef, useState } from "react";
import { STATS } from "../content";

function Stat({ value, suffix, label, isYear, run }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = null;
    let raf;
    const dur = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  const text = isYear ? display : display.toLocaleString("en-IN");
  return (
    <div className="text-center px-4">
      <p className="font-display text-white text-5xl md:text-6xl lg:text-7xl" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
        {text}
        <span className="text-[#c8a25c]">{suffix}</span>
      </p>
      <p className="mt-3 text-white/55 text-xs md:text-sm tracking-widest uppercase">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#0a1a2f] py-20 lg:py-28">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "38px 38px" }} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="kicker text-[#c8a25c] text-center mb-14">Our Strength in Numbers</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 divide-x-0 lg:divide-x lg:divide-white/10">
          {STATS.map((s, i) => (
            <Stat key={i} {...s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
