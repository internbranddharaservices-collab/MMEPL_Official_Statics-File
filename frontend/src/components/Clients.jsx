import React from "react";
import { CLIENTS } from "../content";

function Logo({ c }) {
  return (
    <div className="mx-5 shrink-0 h-24 w-44 bg-white rounded-sm border border-gray-100 shadow-sm grid place-items-center px-6 grayscale hover:grayscale-0 transition-all duration-500">
      <img
        src={c.logo}
        alt={c.name}
        className="max-h-14 max-w-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.innerHTML = `<span class=\"font-display text-[#0a1a2f] text-center text-sm font-bold\">${c.name}</span>`;
        }}
      />
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="bg-[#f5f4f1] py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-14">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="kicker text-[#c8a25c] mb-5">Our Prestigious Clients</p>
          <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
            Trusted by India's industry leaders
          </h2>
          <p className="mt-6 text-gray-600 text-[15px] md:text-base leading-relaxed">
            We are proud to have partnered with some of the most respected names in cement, steel, power and infrastructure.
          </p>
        </div>
      </div>

      <div className="marquee-wrap relative">
        <div className="marquee-track">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <Logo key={i} c={c} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f4f1] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f4f1] to-transparent" />
      </div>
    </section>
  );
}
