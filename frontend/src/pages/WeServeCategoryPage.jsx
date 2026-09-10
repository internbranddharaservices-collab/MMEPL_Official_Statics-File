import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { findCategory } from "../weServe";
import { ArrowUpRight, Check } from "lucide-react";

export default function WeServeCategoryPage() {
  const { category } = useParams();
  const cat = findCategory(category);
  if (!cat) return <Navigate to="/we-serve" replace />;

  return (
    <div data-testid="we-serve-category-page">
      <PageHero
        kicker="We Serve"
        title={cat.title}
        subtitle={cat.tagline}
        image={cat.image}
        crumbs={[{ label: "We Serve", to: "/we-serve" }, { label: cat.short }]}
      />

      {/* Overview */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="reveal img-zoom rounded-sm overflow-hidden shadow-2xl">
            <img src={cat.image} alt={cat.title} className="w-full h-[380px] lg:h-[460px] object-cover" />
          </div>
          <div className="reveal reveal-delay-1">
            <p className="kicker text-[#c8a25c] mb-5">Overview</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl leading-[1.1] mb-8" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>{cat.title}</h2>
            {cat.intro.map((p, i) => (
              <p key={i} className="text-[15px] md:text-base leading-relaxed text-gray-600 mb-5">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="bg-[#f5f4f1] py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-14">
            <p className="kicker text-[#c8a25c] mb-5">What We Deliver</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Our {cat.short} services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="sub-grid">
            {cat.subs.map((s, i) => (
              <Link
                key={s.slug}
                to={`/we-serve/${cat.slug}/${s.slug}`}
                data-testid={`sub-card-${s.slug}`}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-white rounded-sm border border-gray-100 p-7 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-400`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-display text-[#c8a25c]/40 text-3xl" style={{ fontWeight: 800 }}>0{i + 1}</span>
                  <span className="w-10 h-10 rounded-full border border-gray-200 grid place-items-center text-[#0a1a2f] group-hover:bg-[#c8a25c] group-hover:border-[#c8a25c] transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className="font-display text-[#0a1a2f] text-lg leading-snug mb-3" style={{ fontWeight: 800 }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="mt-auto space-y-2">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-gray-500">
                      <Check size={14} className="text-[#c8a25c] mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <CTA />
    </div>
  );
}
