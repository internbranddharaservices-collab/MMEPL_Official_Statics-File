import React, { useState } from "react";
import { X, Award } from "lucide-react";
import { CERTIFICATES } from "../content";

export default function Certifications() {
  const [active, setActive] = useState(null);
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14 reveal">
          <p className="kicker text-[#c8a25c] mb-5">Our Achievements</p>
          <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
            Certifications & recognitions
          </h2>
          <p className="mt-6 text-gray-600 text-[15px] md:text-base leading-relaxed">
            Our commitment to quality and safety is reflected in the certifications and completion recognitions awarded by our esteemed clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CERTIFICATES.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(c)}
              className="reveal group relative bg-[#f5f4f1] rounded-sm overflow-hidden border border-gray-100 aspect-[3/4]"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("grid", "place-items-center");
                }}
              />
              <div className="absolute inset-0 bg-[#0a1a2f]/0 group-hover:bg-[#0a1a2f]/20 transition-colors" />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1a2f] to-transparent p-3 pt-8">
                <span className="flex items-center gap-2 text-white text-xs font-medium"><Award size={14} className="text-[#c8a25c]" /> {c.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4">
          <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-white/80 hover:text-white"><X size={30} /></button>
          <img src={active.img} alt={active.title} className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm bg-white" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
