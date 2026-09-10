import React from "react";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { BOARD, IMAGES } from "../content";
import { Quote } from "lucide-react";

export default function BoardOfDirectorsPage() {
  return (
    <div data-testid="board-of-directors-page">
      <PageHero
        kicker="We Are · Leadership"
        title="Board of Directors"
        subtitle="Meet the leaders steering MME Private Limited with vision, integrity and decades of engineering expertise."
        image={IMAGES.boardHero}
        crumbs={[{ label: "We Are" }, { label: "Board of Director" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-24 lg:space-y-32">
          {BOARD.map((d, idx) => (
            <div
              key={d.name}
              data-testid={`director-card-${idx}`}
              className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? "" : ""}`}
            >
              <div className={`lg:col-span-4 reveal ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute -inset-3 border border-[#c8a25c]/40 rounded-sm" />
                  <div className="img-zoom rounded-sm overflow-hidden relative shadow-2xl">
                    <img src={d.image} alt={d.name} className={`w-full h-[440px] lg:h-[520px] object-cover ${d.imgPos || ""}`} />
                  </div>
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#c8a25c] text-[#0a1a2f] px-7 py-3 rounded-sm shadow-xl whitespace-nowrap text-center">
                    <p className="font-display text-lg leading-tight" style={{ fontWeight: 800 }}>{d.name}</p>
                    <p className="text-xs">{d.role}</p>
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-8 reveal reveal-delay-1 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="kicker text-[#c8a25c] mb-4">Message from the Desk</p>
                <Quote size={44} className="text-[#c8a25c]/30 mb-5" />
                <div className="space-y-5">
                  {d.message.map((p, i) => (
                    <p key={i} className="text-[15px] md:text-base leading-relaxed text-gray-600">{p}</p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-display text-xl text-[#0a1a2f]" style={{ fontWeight: 800 }}>{d.name}</p>
                  <p className="text-sm text-[#c8a25c]">{d.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
