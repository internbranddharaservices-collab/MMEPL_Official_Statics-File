import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { findCategory, findSub } from "../weServe";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export default function WeServeDetailPage() {
  const { category, sub } = useParams();
  const cat = findCategory(category);
  if (!cat) return <Navigate to="/we-serve" replace />;
  const service = findSub(cat, sub);
  if (!service) return <Navigate to={`/we-serve/${cat.slug}`} replace />;
  const others = cat.subs.filter((s) => s.slug !== service.slug);

  return (
    <div data-testid="we-serve-detail-page">
      <PageHero
        kicker={`We Serve · ${cat.short}`}
        title={service.title}
        subtitle={service.desc}
        image={cat.image}
        crumbs={[
          { label: "We Serve", to: "/we-serve" },
          { label: cat.short, to: `/we-serve/${cat.slug}` },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-7 reveal">
            <p className="kicker text-[#c8a25c] mb-5">Overview</p>
            <p className="font-display text-[#0a1a2f] text-xl md:text-2xl leading-[1.5] mb-8" style={{ fontWeight: 500 }}>{service.desc}</p>
            <p className="text-[15px] md:text-base leading-relaxed text-gray-600 mb-5">
              As part of our {cat.title.toLowerCase()} capability, MME executes {service.title.toLowerCase()} with experienced engineers, dedicated machinery and disciplined project management — delivering to the highest standards of quality, safety and on-time completion anywhere in India.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed text-gray-600">
              Every mandate is backed by rigorous QA/QC, a zero-harm safety culture and single-point accountability, so our clients can rely on a partner that delivers precisely what was promised.
            </p>
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

      {/* Other services in category */}
      <section className="bg-[#f5f4f1] py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-display text-[#0a1a2f] text-2xl md:text-3xl" style={{ fontWeight: 800 }}>More in {cat.short}</h3>
            <Link to={`/we-serve/${cat.slug}`} className="hidden sm:inline-flex items-center gap-2 text-sm text-[#0a1a2f] hover:text-[#c8a25c] transition-colors">
              <ArrowLeft size={16} /> All {cat.short} services
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="other-subs">
            {others.map((s) => (
              <Link key={s.slug} to={`/we-serve/${cat.slug}/${s.slug}`} className="group bg-white rounded-sm border border-gray-100 p-6 flex items-center justify-between gap-4 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400">
                <div>
                  <h4 className="font-display text-[#0a1a2f] text-base leading-snug" style={{ fontWeight: 700 }}>{s.title}</h4>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-1">{s.desc}</p>
                </div>
                <ArrowRight size={18} className="text-[#c8a25c] shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
