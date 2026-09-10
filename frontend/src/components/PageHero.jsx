import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHero({ kicker, title, subtitle, image, crumbs = [] }) {
  return (
    <section className="relative min-h-[52vh] lg:min-h-[60vh] flex items-end overflow-hidden bg-[#0a1a2f]">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f] via-[#0a1a2f]/80 to-[#0a1a2f]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-transparent to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 pt-32">
        {kicker && <p className="kicker text-[#c8a25c] mb-5">{kicker}</p>}
        <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-[1.02] max-w-4xl" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
          {title}
        </h1>
        {subtitle && <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
        <nav className="mt-8 flex items-center gap-2 text-sm text-white/50">
          <Link to="/" className="hover:text-[#c8a25c] transition-colors">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-white/30" />
              {c.to ? (
                <Link to={c.to} className="hover:text-[#c8a25c] transition-colors">{c.label}</Link>
              ) : (
                <span className="text-[#c8a25c]">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
