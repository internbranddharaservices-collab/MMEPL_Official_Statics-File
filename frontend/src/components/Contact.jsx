import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { COMPANY } from "../content";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please complete the form", description: "Name, email and message are required." });
      return;
    }
    const items = JSON.parse(localStorage.getItem("mme_enquiries") || "[]");
    items.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("mme_enquiries", JSON.stringify(items));
    toast({ title: "Message sent", description: "Thank you for reaching out. We'll respond shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#f5f4f1] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Info */}
          <div className="reveal">
            <p className="kicker text-[#c8a25c] mb-5">Get In Touch</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-8" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Let's discuss your next project
            </h2>
            <div className="space-y-6 mb-10">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#0a1a2f] grid place-items-center shrink-0"><Mail size={19} className="text-[#c8a25c]" /></span>
                <span><span className="block text-xs uppercase tracking-widest text-gray-400">Email</span><span className="text-[#0a1a2f] font-medium group-hover:text-[#c8a25c] transition-colors">{COMPANY.email}</span></span>
              </a>
              <a href={COMPANY.phoneRaw} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#0a1a2f] grid place-items-center shrink-0"><Phone size={19} className="text-[#c8a25c]" /></span>
                <span><span className="block text-xs uppercase tracking-widest text-gray-400">Call</span><span className="text-[#0a1a2f] font-medium group-hover:text-[#c8a25c] transition-colors">{COMPANY.phone}</span></span>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-[#0a1a2f] grid place-items-center shrink-0"><Clock size={19} className="text-[#c8a25c]" /></span>
                <span><span className="block text-xs uppercase tracking-widest text-gray-400">Opening Hours</span><span className="text-[#0a1a2f] font-medium">{COMPANY.hours}</span></span>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {COMPANY.offices.map((o, i) => (
                <div key={i} className="bg-white rounded-sm p-5 border border-gray-100">
                  <MapPin size={18} className="text-[#c8a25c] mb-3" />
                  <p className="font-display text-sm text-[#0a1a2f] mb-2" style={{ fontWeight: 700 }}>{o.label}</p>
                  <p className="text-xs leading-relaxed text-gray-500">{o.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1">
            <form onSubmit={submit} className="bg-white rounded-sm p-8 lg:p-10 shadow-xl border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input value={form.name} onChange={set("name")} placeholder="Your name" className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                  <input value={form.phone} onChange={set("phone")} placeholder="Phone number" className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input value={form.email} onChange={set("email")} type="email" placeholder="you@company.com" className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea value={form.message} onChange={set("message")} rows={5} placeholder="Tell us about your project..." className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors resize-none" />
                </div>
              </div>
              <button type="submit" className="group w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#0a1a2f] hover:bg-[#0d2240] text-white font-semibold py-4 rounded-sm transition-colors">
                Send message
                <Send size={17} className="text-[#c8a25c] group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
