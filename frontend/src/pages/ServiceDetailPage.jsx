import React from "react";
import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { SERVICES } from "../content";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id) || SERVICES[0];
  const others = SERVICES.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHero
        kicker="Our Services"
        title={service.title}
        subtitle={service.desc}
        image={service.image}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-7 reveal">
            <p className="kicker text-[#c8a25c] mb-5">Overview</p>
            <p className="font-display text-[#0a1a2f] text-xl md:text-2xl leading-[1.5] mb-8" style={{ fontWeight: 500 }}>{service.intro}</p>
            {service.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] md:text-base leading-relaxed text-gray-600 mb-5">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5 reveal reveal-delay-1">
            <div className="bg-[#f5f4f1] rounded-sm p-8 lg:p-10 sticky top-28">
              <h3 className="font-display text-[#0a1a2f] text-xl mb-6" style={{ fontWeight: 800 }}>Scope of Work</h3>
              <ul className="space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-gray-700">
                    <span className="mt-1 w-5 h-5 shrink-0 grid place-items-center bg-[#c8a25c] rounded-full">
                      <Check size={12} className="text-[#0a1a2f]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-[#f5f4f1] py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-display text-[#0a1a2f] text-2xl md:text-3xl" style={{ fontWeight: 800 }}>Other Services</h3>
            <Link to="/services" className="hidden sm:inline-flex items-center gap-2 text-sm text-[#0a1a2f] hover:text-[#c8a25c] transition-colors">
              <ArrowLeft size={16} /> All services
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="group relative rounded-sm overflow-hidden min-h-[220px] flex bg-[#0a1a2f]">
                <div className="img-zoom absolute inset-0">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-45 transition-opacity" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] to-transparent" />
                <div className="relative z-10 mt-auto p-6 w-full flex items-center justify-between">
                  <h4 className="font-display text-white text-lg" style={{ fontWeight: 700 }}>{s.title}</h4>
                  <ArrowRight size={18} className="text-[#c8a25c] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
