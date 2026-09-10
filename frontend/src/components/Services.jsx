import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../content";

export default function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="bg-[#f5f4f1] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
          <div className="reveal">
            <p className="kicker text-[#c8a25c] mb-5">Our Services</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              <span className="accent-bar" />Decades of dedication,<br className="hidden md:block" /> a lifetime of excellence
            </h2>
          </div>
          <p className="reveal reveal-delay-1 text-gray-600 leading-relaxed text-[15px] md:text-base max-w-xl">
            We deliver complete engineering solutions across India's core industries — from cement and power to steel, chemical and balance-of-plant. Each mandate is executed with precision, discipline and an uncompromising commitment to quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => navigate(`/services/${s.id}`)}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative text-left rounded-sm overflow-hidden bg-[#0a1a2f] min-h-[380px] flex ${
                i === 0 ? "lg:row-span-2 lg:min-h-[600px]" : ""
              }`}
            >
              <div className="img-zoom absolute inset-0">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-55 transition-opacity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-[#0a1a2f]/50 to-transparent" />
              <div className="relative z-10 mt-auto p-7 lg:p-8 w-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-white text-2xl lg:text-[28px] leading-tight" style={{ fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <span className="shrink-0 w-11 h-11 rounded-full border border-white/25 grid place-items-center text-white group-hover:bg-[#c8a25c] group-hover:border-[#c8a25c] group-hover:text-[#0a1a2f] transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-md opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                  {s.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
