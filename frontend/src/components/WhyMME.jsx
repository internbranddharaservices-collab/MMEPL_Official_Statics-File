import React from "react";
import { Check } from "lucide-react";
import { WHY, IMAGES } from "../content";

export default function WhyMME() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="img-zoom rounded-sm overflow-hidden shadow-2xl relative">
              <img src={IMAGES.whyMme} alt="MME safety engineer" className="w-full h-[380px] lg:h-[560px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/40 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal mb-12">
              <p className="kicker text-[#c8a25c] mb-5">{WHY.kicker}</p>
              <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                {WHY.heading}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {WHY.points.map((pt, i) => (
                <div key={i} className={`reveal reveal-delay-${(i % 2) + 1} flex gap-4`}>
                  <span className="shrink-0 w-10 h-10 rounded-full bg-[#0a1a2f] grid place-items-center">
                    <Check size={18} className="text-[#c8a25c]" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-[#0a1a2f] mb-1.5" style={{ fontWeight: 700 }}>{pt.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
