import React from "react";
import { Factory, Zap, Layers, FlaskConical, Fuel, Route } from "lucide-react";
import { INDUSTRIES } from "../content";

const ICONS = [Factory, Zap, Layers, FlaskConical, Fuel, Route];

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 reveal">
          <p className="kicker text-[#c8a25c] mb-5">Industries We Serve</p>
          <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
            Innovation has no limits
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-[15px] md:text-base">
            Our expertise spans a wide spectrum of India's heavy industry, integrating quality engineering with disciplined execution to deliver results that meet — and exceed — the highest standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={ind.name}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative p-9 lg:p-10 border-b border-r border-gray-200 hover:bg-[#0a1a2f] transition-colors duration-500`}
              >
                <div className="w-14 h-14 rounded-full bg-[#0a1a2f]/5 group-hover:bg-[#c8a25c] grid place-items-center mb-7 transition-colors duration-500">
                  <Icon size={24} className="text-[#0a1a2f] group-hover:text-[#0a1a2f] transition-colors" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl lg:text-2xl text-[#0a1a2f] group-hover:text-white transition-colors mb-3" style={{ fontWeight: 700 }}>
                  {ind.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 group-hover:text-white/70 transition-colors">
                  {ind.desc}
                </p>
                <span className="absolute top-9 right-9 font-display text-sm text-gray-300 group-hover:text-[#c8a25c] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
