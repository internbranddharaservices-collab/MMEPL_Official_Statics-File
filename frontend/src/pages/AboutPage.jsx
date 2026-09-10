import React from "react";
import PageHero from "../components/PageHero";
import Stats from "../components/Stats";
import Director from "../components/Director";
import WhyMME from "../components/WhyMME";
import CTA from "../components/CTA";
import { ABOUT, IMAGES, HR } from "../content";
import { Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About MME"
        title="Defining engineering excellence since 2019"
        subtitle="Specialists in civil and mechanical development work, delivering large industrial projects across India with discipline, quality and precision."
        image={IMAGES.about}
        crumbs={[{ label: "About" }]}
      />

      {/* Intro */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="reveal img-zoom rounded-sm overflow-hidden shadow-2xl">
            <img src={IMAGES.aboutSecondary} alt="MME plant" className="w-full h-[440px] lg:h-[520px] object-cover" />
          </div>
          <div className="reveal reveal-delay-1">
            <p className="kicker text-[#c8a25c] mb-5">Who We Are</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl leading-[1.1] mb-8" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>{ABOUT.heading}</h2>
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] md:text-base leading-relaxed text-gray-600 mb-5">{p}</p>
            ))}
            <p className="text-[15px] md:text-base leading-relaxed text-gray-600">
              We kindly request to be enlisted on your contractor's panel and given the opportunity to work with your esteemed organization.
            </p>
          </div>
        </div>
      </section>

      <Stats />
      <Director />

      {/* HR message */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-8 order-2 lg:order-1 reveal">
            <p className="kicker text-[#c8a25c] mb-6">Human Resources</p>
            <Quote size={44} className="text-[#c8a25c]/30 mb-4" />
            <p className="font-display text-[#0a1a2f] text-xl md:text-2xl lg:text-[1.8rem] leading-[1.5]" style={{ fontWeight: 500 }}>
              {HR.quote}
            </p>
            <div className="mt-8">
              <p className="font-display text-lg text-[#0a1a2f]" style={{ fontWeight: 800 }}>{HR.name}</p>
              <p className="text-sm text-gray-500">{HR.role}</p>
            </div>
          </div>
          <div className="lg:col-span-4 order-1 lg:order-2 reveal reveal-delay-1">
            <div className="img-zoom rounded-sm overflow-hidden max-w-xs mx-auto">
              <img src={HR.image} alt={HR.name} className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <WhyMME />
      <CTA />
    </>
  );
}
