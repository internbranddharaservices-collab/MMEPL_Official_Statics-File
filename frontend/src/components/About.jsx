import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ABOUT, IMAGES } from "../content";

export default function About() {
  const navigate = useNavigate();
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Images */}
          <div className="reveal relative">
            <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
              <img src={IMAGES.about} alt="MME engineers on site" className="w-full h-[420px] lg:h-[540px] object-cover" />
            </div>
            <div className="img-zoom hidden sm:block absolute -bottom-10 -right-6 w-52 h-52 lg:w-64 lg:h-64 rounded-sm overflow-hidden border-8 border-white shadow-2xl">
              <img src={IMAGES.aboutSecondary} alt="Cement plant" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 bg-[#0a1a2f] text-white px-7 py-5 rounded-sm shadow-xl hidden sm:block">
              <p className="font-display text-4xl text-[#c8a25c]" style={{ fontWeight: 800 }}>2019</p>
              <p className="text-xs tracking-widest uppercase text-white/60 mt-1">Established</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-1">
            <p className="kicker text-[#c8a25c] mb-5">{ABOUT.kicker}</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.08] mb-8" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              {ABOUT.heading}
            </h2>
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] md:text-base leading-relaxed text-gray-600 mb-5">
                {p}
              </p>
            ))}
            <button
              onClick={() => navigate("/services")}
              className="group mt-4 inline-flex items-center gap-3 text-[#0a1a2f] font-semibold text-sm tracking-wide"
            >
              <span className="link-underline">Explore our expertise</span>
              <ArrowRight size={18} className="text-[#c8a25c] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
