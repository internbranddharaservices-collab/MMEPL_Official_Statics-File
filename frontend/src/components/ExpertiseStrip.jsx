import React from "react";
import { EXPERTISE, IMAGES } from "../content";

export default function ExpertiseStrip() {
  return (
    <section className="bg-[#0a1a2f]">
      <div className="grid md:grid-cols-3">
        {EXPERTISE.map((e, i) => (
          <div key={i} className="group relative h-[300px] md:h-[420px] overflow-hidden cursor-default">
            <div className="img-zoom absolute inset-0">
              <img src={IMAGES.expertise[i]} alt={e.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/95 via-[#0a1a2f]/30 to-transparent group-hover:from-[#0a1a2f] transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="font-display text-[#c8a25c] text-sm mb-2">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-white text-2xl lg:text-3xl" style={{ fontWeight: 700 }}>{e.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mt-3 max-w-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {e.desc}
              </p>
            </div>
            {i < EXPERTISE.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
