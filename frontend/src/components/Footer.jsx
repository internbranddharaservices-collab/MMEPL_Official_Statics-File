import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="bg-[#0a1a2f] text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <span className="bg-white rounded-md p-1.5 grid place-items-center shadow-md">
                <img src={COMPANY.logo} alt="MME Private Limited" className="h-10 w-10 object-contain" />
              </span>
              <span className="ml-3 font-display text-3xl" style={{ fontWeight: 900 }}>MME</span>
              <span className="ml-2 text-[11px] leading-tight text-white/60 font-display tracking-[0.2em] uppercase">Private<br/>Limited</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              {COMPANY.legalName} — specialists in civil &amp; mechanical development, delivering industrial projects across India with discipline, quality and precision since {COMPANY.established}.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-white/70 hover:text-[#c8a25c] transition-colors"><Mail size={15} className="text-[#c8a25c]" /> {COMPANY.email}</a>
              <a href={COMPANY.phoneRaw} className="flex items-center gap-3 text-white/70 hover:text-[#c8a25c] transition-colors"><Phone size={15} className="text-[#c8a25c]" /> {COMPANY.phone}</a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm tracking-widest uppercase text-white/40 mb-5">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 hover:text-[#c8a25c] text-sm transition-colors link-underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm tracking-widest uppercase text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-white/70 hover:text-[#c8a25c] text-sm transition-colors text-left link-underline">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm tracking-widest uppercase text-white/40 mb-5">Our Offices</h4>
            <div className="space-y-5">
              {COMPANY.offices.map((o, i) => (
                <div key={i} className="flex gap-3">
                  <MapPin size={16} className="text-[#c8a25c] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">{o.label}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{o.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/40 text-xs">© {year} {COMPANY.legalName}. All rights reserved.</p>
          <button onClick={scrollTop} className="group flex items-center gap-2 text-white/60 hover:text-[#c8a25c] text-xs tracking-widest uppercase transition-colors">
            Back to top
            <span className="w-9 h-9 rounded-full border border-white/20 grid place-items-center group-hover:border-[#c8a25c] transition-colors"><ArrowUp size={15} /></span>
          </button>
        </div>
      </div>
    </footer>
  );
}
