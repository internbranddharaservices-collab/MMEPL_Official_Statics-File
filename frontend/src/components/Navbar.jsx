import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Plus, Minus } from "lucide-react";
import { NAV_LINKS, COMPANY } from "../content";

// kept for backwards-compat with in-page anchor scrolling
export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileSub(false);
  }, [location.pathname]);

  const isActive = (to) => (to === "/" ? location.pathname === "/" : location.pathname.startsWith(to));

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a1a2f]/95 backdrop-blur-md py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)]" : "bg-gradient-to-b from-[#0a1a2f]/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="bg-white rounded-md p-1 grid place-items-center shadow-md">
              <img src={COMPANY.logo} alt="MME Private Limited" className="h-9 w-9 object-contain" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-tight text-white" style={{ fontWeight: 900 }}>MME</span>
              <span className="hidden sm:block text-[9px] text-white/60 font-display tracking-[0.2em] uppercase mt-0.5">Private Limited</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) =>
              l.children ? (
                <div key={l.to} className="relative group">
                  <Link
                    to={l.to}
                    className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors ${
                      isActive(l.to) ? "text-[#c8a25c]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {l.label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-sm shadow-2xl overflow-hidden w-64 py-2">
                      {l.children.map((c) => (
                        <Link key={c.to} to={c.to} className="block px-5 py-3 text-sm text-[#0a1a2f] hover:bg-[#f5f4f1] hover:text-[#c8a25c] border-l-2 border-transparent hover:border-[#c8a25c] transition-all">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`link-underline text-[13px] font-medium tracking-wide transition-colors ${
                    isActive(l.to) ? "text-[#c8a25c]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a href={COMPANY.phoneRaw} className="hidden md:flex items-center gap-2 text-white/80 hover:text-[#c8a25c] transition-colors text-[13px] font-medium">
              <Phone size={15} /> {COMPANY.phone}
            </a>
            <button onClick={() => setOpen(true)} className="lg:hidden text-white p-1" aria-label="Open menu">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[60] bg-[#0a1a2f] transition-all duration-500 overflow-y-auto ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="bg-white rounded-md p-1 grid place-items-center shadow-md">
              <img src={COMPANY.logo} alt="MME Private Limited" className="h-9 w-9 object-contain" />
            </span>
            <span className="ml-2.5 font-display text-2xl text-white" style={{ fontWeight: 900 }}>MME</span>
          </div>
          <button onClick={() => setOpen(false)} className="text-white p-1" aria-label="Close menu"><X size={28} /></button>
        </div>
        <nav className="px-8 mt-4 flex flex-col">
          {NAV_LINKS.map((l, i) => (
            <div key={l.to} className="border-b border-white/10">
              <div className="flex items-center justify-between">
                <Link to={l.to} onClick={() => setOpen(false)} className="flex-1 py-4 font-display text-2xl text-white/90 hover:text-[#c8a25c] transition-colors" style={{ fontWeight: 700 }}>
                  {l.label}
                </Link>
                {l.children && (
                  <button onClick={() => setMobileSub((v) => (v === l.to ? false : l.to))} className="text-[#c8a25c] p-2">
                    {mobileSub === l.to ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                )}
              </div>
              {l.children && mobileSub === l.to && (
                <div className="pb-3 pl-3">
                  {l.children.map((c) => (
                    <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="block py-2.5 text-white/60 hover:text-[#c8a25c] text-[15px]">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="px-8 mt-8 pb-10 text-white/60 text-sm space-y-2">
          <a href={`mailto:${COMPANY.email}`} className="block hover:text-[#c8a25c]">{COMPANY.email}</a>
          <a href={COMPANY.phoneRaw} className="block hover:text-[#c8a25c]">{COMPANY.phone}</a>
        </div>
      </div>
    </>
  );
}
