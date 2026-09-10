import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Building2, ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "../content";

export default function Projects({ preview = false }) {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    let list = PROJECTS;
    if (filter !== "All") list = PROJECTS.filter((p) => p.status === filter || p.type === filter);
    return preview ? list.slice(0, 6) : list;
  }, [filter, preview]);

  return (
    <section id="projects" className="bg-[#0a1a2f] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div className="reveal">
            <p className="kicker text-[#c8a25c] mb-5">Our Projects</p>
            <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Crafting the future,<br className="hidden md:block" /> across India
            </h2>
          </div>
          <p className="reveal reveal-delay-1 text-white/60 leading-relaxed text-[15px] md:text-base max-w-xl">
            A portfolio built on trust and delivery — spanning marquee cement, power, steel and oil &amp; gas mandates for India's most respected industrial names.
          </p>
        </div>

        {/* Filters */}
        {!preview && (
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                filter === f
                  ? "bg-[#c8a25c] text-[#0a1a2f]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.name + i}
              className="group relative rounded-sm overflow-hidden bg-[#0d2240] border border-white/5"
            >
              <div className="img-zoom relative h-60 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2240] via-transparent to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                    p.status === "Ongoing" ? "bg-[#c8a25c] text-[#0a1a2f]" : "bg-white/90 text-[#0a1a2f]"
                  }`}
                >
                  {p.status}
                </span>
                <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-widest text-[#c8a25c]">{p.type}</span>
                <h3 className="font-display text-white text-lg leading-snug mt-2 mb-4" style={{ fontWeight: 700 }}>
                  {p.name}
                </h3>
                <div className="space-y-2 text-sm text-white/60">
                  <p className="flex items-center gap-2"><Building2 size={14} className="text-[#c8a25c]" /> {p.client}</p>
                  <p className="flex items-center gap-2"><MapPin size={14} className="text-[#c8a25c]" /> {p.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {preview && (
          <div className="reveal mt-12 text-center">
            <Link to="/projects" className="group inline-flex items-center gap-3 bg-[#c8a25c] hover:bg-[#d9b877] text-[#0a1a2f] font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-colors">
              View all projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
