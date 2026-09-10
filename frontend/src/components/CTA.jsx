import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../content";

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.ctaBg} alt="steel structure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f] via-[#0a1a2f]/85 to-[#0a1a2f]/60" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="kicker text-[#c8a25c] mb-6 reveal">Let's Build Together</p>
        <h2 className="reveal font-display text-white text-3xl md:text-5xl lg:text-6xl leading-[1.02] max-w-4xl mx-auto" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
          Have a project in mind? Let's engineer it to perfection.
        </h2>
        <button
          onClick={() => navigate("/contact")}
          className="reveal reveal-delay-1 group mt-10 inline-flex items-center gap-3 bg-[#c8a25c] hover:bg-[#d9b877] text-[#0a1a2f] font-semibold text-sm tracking-wide px-9 py-4 rounded-full transition-colors"
        >
          Get in touch
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
