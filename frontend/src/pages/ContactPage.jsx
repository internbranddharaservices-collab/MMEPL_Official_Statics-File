import React, { useState } from "react";
import PageHero from "../components/PageHero";
import { COMPANY, IMAGES } from "../content";
import { useToast } from "../hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Send, Navigation, Building2 } from "lucide-react";

const mapSrc = (q) => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=15&output=embed`;
const directions = (q) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

export default function ContactPage() {
  const { toast } = useToast();
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", office: COMPANY.offices[0].label, message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const office = COMPANY.offices[active];

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
    setForm({ name: "", email: "", phone: "", office: COMPANY.offices[0].label, message: "" });
  };

  const quick = [
    { icon: Phone, label: "Call Us", value: COMPANY.phone, href: COMPANY.phoneRaw },
    { icon: Mail, label: "Email Us", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: Clock, label: "Opening Hours", value: COMPANY.hours, href: null },
  ];

  return (
    <div data-testid="contact-page">
      <PageHero
        kicker="Get In Touch"
        title="Let's build something enduring"
        subtitle="Three offices, one dependable team. Reach out and we'll help you take the next step on your project."
        image={IMAGES.about}
        crumbs={[{ label: "Contact" }]}
      />

      {/* Quick contact strip */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-5">
          {quick.map((q, i) => {
            const Icon = q.icon;
            const inner = (
              <>
                <span className="w-14 h-14 rounded-full bg-[#0a1a2f] grid place-items-center shrink-0 group-hover:bg-[#c8a25c] transition-colors duration-400">
                  <Icon size={22} className="text-[#c8a25c] group-hover:text-[#0a1a2f] transition-colors duration-400" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-gray-400">{q.label}</span>
                  <span className="text-[#0a1a2f] font-display text-lg" style={{ fontWeight: 700 }}>{q.value}</span>
                </span>
              </>
            );
            return q.href ? (
              <a key={i} href={q.href} data-testid={`quick-${q.label}`} className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-4 bg-[#f5f4f1] rounded-sm p-6 hover:shadow-xl transition-all duration-400`}>{inner}</a>
            ) : (
              <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-4 bg-[#f5f4f1] rounded-sm p-6`}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* Offices + map */}
      <section className="bg-[#0a1a2f] py-24 lg:py-28" data-testid="offices-section">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-14">
            <p className="kicker text-[#c8a25c] mb-5">Our Offices</p>
            <h2 className="font-display text-white text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Find us across India
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Office selector */}
            <div className="lg:col-span-5 space-y-4">
              {COMPANY.offices.map((o, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  data-testid={`office-card-${i}`}
                  className={`w-full text-left rounded-sm p-6 border transition-all duration-400 ${
                    active === i
                      ? "bg-[#c8a25c] border-[#c8a25c]"
                      : "bg-white/[0.04] border-white/10 hover:border-[#c8a25c]/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`w-11 h-11 rounded-sm grid place-items-center shrink-0 ${active === i ? "bg-[#0a1a2f]" : "bg-[#c8a25c]"}`}>
                      <Building2 size={20} className={active === i ? "text-[#c8a25c]" : "text-[#0a1a2f]"} />
                    </span>
                    <div className="flex-1">
                      <p className={`font-display text-lg ${active === i ? "text-[#0a1a2f]" : "text-white"}`} style={{ fontWeight: 800 }}>{o.label}</p>
                      <p className={`text-sm leading-relaxed mt-1.5 ${active === i ? "text-[#0a1a2f]/80" : "text-white/55"}`}>{o.address}</p>
                      <div className={`flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm ${active === i ? "text-[#0a1a2f]" : "text-white/70"}`}>
                        <span className="inline-flex items-center gap-1.5"><Phone size={13} /> {o.phone}</span>
                        <span className="inline-flex items-center gap-1.5"><Mail size={13} /> {o.email}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="lg:col-span-7 reveal">
              <div className="rounded-sm overflow-hidden shadow-2xl border border-white/10 h-[360px] lg:h-full min-h-[360px] bg-white">
                <iframe
                  key={active}
                  title={`Map — ${office.label}`}
                  data-testid="office-map"
                  src={mapSrc(office.map)}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={directions(office.map)}
                target="_blank"
                rel="noreferrer"
                data-testid="get-directions"
                className="mt-4 inline-flex items-center gap-2 bg-[#c8a25c] hover:bg-white text-[#0a1a2f] font-semibold px-6 py-3 rounded-sm transition-colors"
              >
                <Navigation size={17} /> Get directions to {office.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-[#f5f4f1] py-24 lg:py-28" id="enquiry">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5 reveal">
            <p className="kicker text-[#c8a25c] mb-5">Send an Enquiry</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl leading-[1.05] mb-6" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Tell us about your project
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              Share a few details and our team will get back to you promptly. Whether it's a shutdown, a new plant or an expansion, MME is ready to deliver.
            </p>
            <div className="space-y-4">
              <a href={COMPANY.phoneRaw} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#0a1a2f] grid place-items-center shrink-0"><Phone size={18} className="text-[#c8a25c]" /></span>
                <span className="text-[#0a1a2f] font-medium group-hover:text-[#c8a25c] transition-colors">{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#0a1a2f] grid place-items-center shrink-0"><Mail size={18} className="text-[#c8a25c]" /></span>
                <span className="text-[#0a1a2f] font-medium group-hover:text-[#c8a25c] transition-colors">{COMPANY.email}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1">
            <form onSubmit={submit} data-testid="contact-form" className="bg-white rounded-sm p-8 lg:p-10 shadow-xl border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Name *</label>
                  <input value={form.name} onChange={set("name")} data-testid="input-name" placeholder="Your name" className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                  <input value={form.phone} onChange={set("phone")} data-testid="input-phone" placeholder="Phone number" className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email *</label>
                  <input value={form.email} onChange={set("email")} type="email" data-testid="input-email" placeholder="you@company.com" className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Preferred Office</label>
                  <select value={form.office} onChange={set("office")} data-testid="input-office" className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors">
                    {COMPANY.offices.map((o, i) => (
                      <option key={i} value={o.label}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Message *</label>
                  <textarea value={form.message} onChange={set("message")} rows={5} data-testid="input-message" placeholder="Tell us about your project..." className="w-full bg-[#f5f4f1] border border-gray-200 rounded-sm px-4 py-3.5 text-[#0a1a2f] focus:outline-none focus:border-[#c8a25c] transition-colors resize-none" />
                </div>
              </div>
              <button type="submit" data-testid="submit-enquiry" className="group w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#0a1a2f] hover:bg-[#c8a25c] hover:text-[#0a1a2f] text-white font-semibold py-4 rounded-sm transition-colors">
                Send message
                <Send size={17} className="text-[#c8a25c] group-hover:text-[#0a1a2f] group-hover:translate-x-1 transition-all" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
