import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO, IMAGES } from "../content";
import { scrollToId } from "./Navbar";

const ROUTE = { about: "/about", services: "/services", projects: "/projects" };

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % HERO.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#0a1a2f]">
      {/* Slides */}
      {HERO.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={IMAGES.heroSlides[i]}
              alt="MME industrial project"
              className={`w-full h-full object-cover ${i === idx ? "kenburns" : ""}`}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/95 via-[#0a1a2f]/70 to-[#0a1a2f]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
        {HERO.map((slide, i) => (
          <div
            key={i}
            className={`absolute left-6 right-6 lg:left-10 transition-all duration-700 ${
              i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <p className="kicker text-[#c8a25c] mb-6">{slide.kicker}</p>
            <h1 className="font-display text-white text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] whitespace-pre-line max-w-5xl" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              {slide.title}
            </h1>
            <button
              onClick={() => navigate(ROUTE[slide.target] || "/about")}
              className="group mt-10 inline-flex items-center gap-3 bg-[#c8a25c] hover:bg-[#d9b877] text-[#0a1a2f] font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-colors"
            >
              {slide.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-20 flex items-center gap-4">
        <span className="font-display text-white/60 text-sm">{String(idx + 1).padStart(2, "0")}</span>
        <div className="flex gap-2">
          {HERO.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-[3px] transition-all duration-500 ${i === idx ? "w-10 bg-[#c8a25c]" : "w-5 bg-white/30"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="font-display text-white/40 text-sm">{String(HERO.length).padStart(2, "0")}</span>
      </div>

      <button
        onClick={() => scrollToId("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors animate-bounce hidden md:block"
        aria-label="Scroll down"
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
}
