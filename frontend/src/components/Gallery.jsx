import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../content";

export default function Gallery() {
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const prev = (e) => { e.stopPropagation(); setActive((a) => (a - 1 + GALLERY.length) % GALLERY.length); };
  const next = (e) => { e.stopPropagation(); setActive((a) => (a + 1) % GALLERY.length); };

  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14 reveal">
          <p className="kicker text-[#c8a25c] mb-5">Our Gallery</p>
          <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
            A closer look at our work
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
          {GALLERY.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal group relative rounded-sm overflow-hidden img-zoom ${
                i === 0 || i === 5 ? "col-span-2 row-span-1" : ""
              }`}
            >
              <img src={src} alt={`MME project ${i + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0a1a2f]/0 group-hover:bg-[#0a1a2f]/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div onClick={close} className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4">
          <button onClick={close} className="absolute top-6 right-6 text-white/80 hover:text-white"><X size={30} /></button>
          <button onClick={prev} className="absolute left-4 md:left-10 text-white/70 hover:text-[#c8a25c] p-2"><ChevronLeft size={40} /></button>
          <img src={GALLERY[active]} alt="enlarged" className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm" onClick={(e) => e.stopPropagation()} />
          <button onClick={next} className="absolute right-4 md:right-10 text-white/70 hover:text-[#c8a25c] p-2"><ChevronRight size={40} /></button>
        </div>
      )}
    </section>
  );
}
