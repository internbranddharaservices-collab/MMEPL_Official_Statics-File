import React from "react";
import { Quote } from "lucide-react";
import { DIRECTOR } from "../content";

export default function Director() {
  return (
    <section className="relative bg-[#0d2240] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "34px 34px" }} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-4 reveal">
            <div className="relative max-w-xs mx-auto lg:mx-0">
              <div className="img-zoom rounded-sm overflow-hidden">
                <img src={DIRECTOR.image} alt={DIRECTOR.name} className="w-full h-[440px] object-cover" />
              </div>
              <div className="absolute -bottom-5 left-1/2 lg:left-6 -translate-x-1/2 lg:translate-x-0 bg-[#c8a25c] text-[#0a1a2f] px-6 py-3 rounded-sm shadow-xl whitespace-nowrap">
                <p className="font-display text-lg leading-tight" style={{ fontWeight: 800 }}>{DIRECTOR.name}</p>
                <p className="text-xs">{DIRECTOR.role}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <p className="kicker text-[#c8a25c] mb-6">{DIRECTOR.kicker}</p>
            <Quote size={46} className="text-[#c8a25c]/30 mb-4" />
            <p className="font-display text-white text-xl md:text-2xl lg:text-[2rem] leading-[1.5]" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>
              {DIRECTOR.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
