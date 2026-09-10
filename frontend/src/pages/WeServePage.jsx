import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { WE_SERVE, WESERVE_HERO } from "../weServe";
import { ArrowUpRight } from "lucide-react";

export default function WeServePage() {
  return (
    <div data-testid="we-serve-page">
      <PageHero
        kicker="We Serve"
        title="Engineering solutions across every core industry"
        subtitle="From cement, power and steel to civil, mechanical and electrical works — MME delivers complete, disciplined execution for India's heavy industry."
        image={WESERVE_HERO}
        crumbs={[{ label: "We Serve" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-16">
            <p className="kicker text-[#c8a25c] mb-5">Our Capabilities</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Four disciplines, every plant sector
            </h2>
            <p className="mt-6 text-gray-600 text-[15px] md:text-base leading-relaxed">
              Mechanical, civil, electrical and support services — delivered across cement, power, steel and fertilizer plants with a single, accountable partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" data-testid="we-serve-grid">
            {WE_SERVE.map((c, i) => (
              <Link
                key={c.slug}
                to={`/we-serve/${c.slug}`}
                data-testid={`we-serve-card-${c.slug}`}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative rounded-sm overflow-hidden bg-[#0a1a2f] min-h-[360px] flex`}
              >
                <div className="img-zoom absolute inset-0">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-45 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-[#0a1a2f]/60 to-transparent" />
                <div className="relative z-10 mt-auto p-7 w-full">
                  <span className="text-[11px] tracking-widest uppercase text-[#c8a25c] font-semibold">0{i + 1}</span>
                  <div className="flex items-start justify-between gap-4 mt-2">
                    <h3 className="font-display text-white text-xl lg:text-2xl leading-tight" style={{ fontWeight: 700 }}>{c.title}</h3>
                    <span className="shrink-0 w-10 h-10 rounded-full border border-white/25 grid place-items-center text-white group-hover:bg-[#c8a25c] group-hover:border-[#c8a25c] group-hover:text-[#0a1a2f] transition-all">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{c.tagline}</p>
                  <p className="mt-4 text-[#c8a25c] text-xs font-semibold">Serving {c.subs.length} plant sectors</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
