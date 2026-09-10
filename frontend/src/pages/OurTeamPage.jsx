import React from "react";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { TEAM, IMAGES } from "../content";

const GRADIENTS = [
  "from-[#0a1a2f] to-[#1c3a5e]",
  "from-[#1c3a5e] to-[#0a1a2f]",
  "from-[#0d2240] to-[#243b53]",
];

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function OurTeamPage() {
  return (
    <div data-testid="our-team-page">
      <PageHero
        kicker="We Are · Our People"
        title="The team behind every milestone"
        subtitle="A group of dedicated engineers and managers driving quality, safety and timely delivery on every site across India."
        image={IMAGES.teamHero}
        crumbs={[{ label: "We Are" }, { label: "Our Team" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-16">
            <p className="kicker text-[#c8a25c] mb-5">Meet Our Experts</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Skilled professionals, one shared standard
            </h2>
            <p className="mt-6 text-gray-600 text-[15px] md:text-base leading-relaxed">
              Our project and HR managers bring decades of combined experience across cement, steel, power and infrastructure — ensuring every mandate is delivered with discipline and precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="team-grid">
            {TEAM.map((m, i) => (
              <div
                key={m.name}
                data-testid={`team-member-${i}`}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
              >
                <div className={`relative h-56 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} grid place-items-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "22px 22px" }} />
                  <span className="font-display text-5xl text-white/90 relative z-10 tracking-tight" style={{ fontWeight: 800 }}>
                    {initials(m.name)}
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#c8a25c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-[#0a1a2f] text-lg" style={{ fontWeight: 800 }}>{m.name}</h3>
                  <p className="text-sm text-[#c8a25c] mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
