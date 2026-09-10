import React from "react";
import PageHero from "../components/PageHero";
import Clients from "../components/Clients";
import Certifications from "../components/Certifications";
import CTA from "../components/CTA";
import { IMAGES, OUR_CLIENTS } from "../content";
import { MapPin } from "lucide-react";

export default function OurClientsPage() {
  return (
    <div data-testid="our-clients-page">
      <PageHero
        kicker="We Are · Clients"
        title="Trusted by India's industry leaders"
        subtitle="We are proud to have partnered with some of the most respected names in cement, steel, power and infrastructure."
        image={IMAGES.expertise[2]}
        crumbs={[{ label: "We Are" }, { label: "Our Client" }]}
      />

      <Clients />

      {/* Client directory */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-14">
            <p className="kicker text-[#c8a25c] mb-5">Where We Work</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Marquee clients across the nation
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-testid="client-grid">
            {OUR_CLIENTS.map((c, i) => (
              <div
                key={c.name}
                data-testid={`client-card-${i}`}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative bg-[#f5f4f1] rounded-sm p-7 border border-transparent hover:border-[#c8a25c]/40 hover:bg-white hover:shadow-xl transition-all duration-400 overflow-hidden`}
              >
                <span className="inline-block text-[11px] tracking-widest uppercase text-[#c8a25c] font-semibold mb-4">{c.sector}</span>
                <h3 className="font-display text-[#0a1a2f] text-lg leading-snug mb-3" style={{ fontWeight: 800 }}>{c.name}</h3>
                <p className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={14} className="text-[#c8a25c]" /> {c.location}
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-[#c8a25c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />
      <CTA />
    </div>
  );
}
