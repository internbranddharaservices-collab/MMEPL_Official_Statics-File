import React from "react";
import PageHero from "../components/PageHero";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import { ABOUT, IMAGES, MISSION_VISION, COMPANY } from "../content";
import { Target, Eye, Handshake, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";

const valueIcons = [ShieldCheck, Target, Eye, Handshake];

export default function AboutCompanyPage() {
  return (
    <div data-testid="about-company-page">
      <PageHero
        kicker="We Are · About Company"
        title="Defining engineering excellence since 2019"
        subtitle="Specialists in civil and mechanical development work, delivering large industrial projects across India with discipline, quality and precision."
        image={IMAGES.about}
        crumbs={[{ label: "We Are" }, { label: "About Company" }]}
      />

      {/* Intro */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="reveal img-zoom rounded-sm overflow-hidden shadow-2xl">
            <img src={IMAGES.aboutSecondary} alt="MME plant" className="w-full h-[440px] lg:h-[540px] object-cover" />
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

      {/* Mission & Vision */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1a2f]" data-testid="mission-vision-section">
        <div className="absolute inset-0">
          <img src={IMAGES.missionVision} alt="Vision" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f] via-[#0a1a2f]/90 to-[#0a1a2f]" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="kicker text-[#c8a25c] mb-5">Our Mission &amp; Vision</p>
            <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Rising above all standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-16">
            <div className="reveal bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-sm p-9 lg:p-11 hover:border-[#c8a25c]/50 transition-colors duration-500">
              <div className="w-14 h-14 grid place-items-center bg-[#c8a25c] rounded-sm mb-7">
                <Target size={26} className="text-[#0a1a2f]" />
              </div>
              <h3 className="font-display text-white text-2xl mb-4" style={{ fontWeight: 700 }}>Our Mission</h3>
              <p className="text-white/70 leading-relaxed text-[15px] md:text-base">{MISSION_VISION.mission}</p>
            </div>
            <div className="reveal reveal-delay-1 bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-sm p-9 lg:p-11 hover:border-[#c8a25c]/50 transition-colors duration-500">
              <div className="w-14 h-14 grid place-items-center bg-[#c8a25c] rounded-sm mb-7">
                <Eye size={26} className="text-[#0a1a2f]" />
              </div>
              <h3 className="font-display text-white text-2xl mb-4" style={{ fontWeight: 700 }}>Our Vision</h3>
              <p className="text-white/70 leading-relaxed text-[15px] md:text-base">{MISSION_VISION.vision}</p>
            </div>
          </div>

          <div className="reveal mt-8 bg-[#c8a25c] rounded-sm p-9 lg:p-11 flex flex-col md:flex-row md:items-center gap-6">
            <Handshake size={40} className="text-[#0a1a2f] shrink-0" />
            <p className="text-[#0a1a2f] leading-relaxed text-[15px] md:text-lg font-medium">{MISSION_VISION.commitment}</p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-[#f5f4f1] py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal">
            <p className="kicker text-[#c8a25c] mb-5">What Drives Us</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              The values behind every project
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {MISSION_VISION.values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <div key={v.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-sm p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400`}>
                  <Icon size={30} className="text-[#c8a25c] mb-6" />
                  <h3 className="font-display text-[#0a1a2f] text-xl mb-3" style={{ fontWeight: 700 }}>{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Caution notice */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="reveal border-l-4 border-[#c8a25c] bg-[#fbf8f1] rounded-sm p-8 lg:p-10 flex gap-5">
            <AlertTriangle size={28} className="text-[#c8a25c] shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-[#0a1a2f] text-lg mb-2" style={{ fontWeight: 800 }}>Caution Notice</h3>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                It has come to our notice that certain fraudulent individuals are using the name of MME Private Limited on social media, websites and WhatsApp to solicit fees or payments for various schemes. MME Private Limited never solicits payment of any kind for any scheme, nor charges fees for online submissions. We have not authorised any third-party website or entity claiming to represent us and offering monetary benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
