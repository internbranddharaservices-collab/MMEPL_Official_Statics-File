import React, { useState } from "react";
import { ArrowRight, Briefcase } from "lucide-react";
import { IMAGES, COMPANY } from "../content";
import { useToast } from "../hooks/use-toast";

export default function Careers() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    const apps = JSON.parse(localStorage.getItem("mme_applications") || "[]");
    apps.push({ name, email, at: new Date().toISOString() });
    localStorage.setItem("mme_applications", JSON.stringify(apps));
    toast({ title: "Application received", description: "Thank you — our HR team will be in touch soon." });
    setName(""); setEmail("");
  };

  return (
    <section id="careers" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.careers} alt="MME careers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1a2f]/90" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 kicker text-[#c8a25c] mb-6"><Briefcase size={16} /> Careers at MME</span>
            <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Your next opportunity starts here
            </h2>
            <p className="text-white/70 leading-relaxed text-[15px] md:text-base max-w-lg">
              We continuously seek passionate engineers and skilled professionals. At MME we value integrity, respect and excellence — investing in training and a supportive environment where talent thrives together as a family.
            </p>
            <a href={`mailto:${COMPANY.email}`} className="group inline-flex items-center gap-3 mt-8 text-white font-semibold">
              <span className="link-underline">Email your CV — {COMPANY.email}</span>
              <ArrowRight size={18} className="text-[#c8a25c] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <form onSubmit={submit} className="reveal reveal-delay-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-8 lg:p-10">
            <h3 className="font-display text-white text-xl mb-6" style={{ fontWeight: 700 }}>Quick apply</h3>
            <div className="space-y-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full bg-white/10 border border-white/15 rounded-sm px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c8a25c] transition-colors" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/15 rounded-sm px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c8a25c] transition-colors" />
            </div>
            <button type="submit" className="group w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#c8a25c] hover:bg-[#d9b877] text-[#0a1a2f] font-semibold py-4 rounded-sm transition-colors">
              Submit application
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
