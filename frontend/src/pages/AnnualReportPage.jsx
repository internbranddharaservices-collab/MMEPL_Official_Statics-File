import React from "react";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { ANNUAL_REPORTS, REPORT_HIGHLIGHTS, IMAGES } from "../content";
import { FileText, Download, Lock, TrendingUp } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function AnnualReportPage() {
  const { toast } = useToast();

  const handleDownload = (r) => {
    if (r.pdf) {
      window.open(r.pdf, "_blank");
    } else {
      toast({
        title: `${r.label} report`,
        description: "This annual report will be available for download shortly. Please check back soon.",
      });
    }
  };

  return (
    <div data-testid="annual-report-page">
      <PageHero
        kicker="We Are · Governance"
        title="Annual Reports"
        subtitle="A transparent look at our growth, performance and commitment to excellence — year after year."
        image={IMAGES.annualHero}
        crumbs={[{ label: "We Are" }, { label: "Annual Report" }]}
      />

      {/* Highlights */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-14">
            <p className="kicker text-[#c8a25c] mb-5">Performance at a Glance</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              A track record of sustained growth
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {REPORT_HIGHLIGHTS.map((h, i) => (
              <div key={h.label} className={`reveal reveal-delay-${(i % 3) + 1} bg-[#0a1a2f] rounded-sm p-8 text-center`}>
                <TrendingUp size={22} className="text-[#c8a25c] mx-auto mb-4" />
                <p className="font-display text-white text-4xl lg:text-5xl" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>{h.value}</p>
                <p className="text-white/60 text-xs md:text-sm mt-2">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report list */}
      <section className="bg-[#f5f4f1] py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-14">
            <p className="kicker text-[#c8a25c] mb-5">Download Centre</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Year-wise annual reports
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="report-grid">
            {ANNUAL_REPORTS.map((r, i) => (
              <div
                key={r.year}
                data-testid={`report-card-${i}`}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-white rounded-sm border border-gray-100 p-7 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-400`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 grid place-items-center bg-[#0a1a2f] rounded-sm group-hover:bg-[#c8a25c] transition-colors duration-400">
                    <FileText size={22} className="text-white group-hover:text-[#0a1a2f] transition-colors duration-400" />
                  </div>
                  <span className={`text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full ${r.status === "Published" ? "bg-[#e8f3ec] text-[#2e7d4f]" : "bg-[#fbf3e2] text-[#c8a25c]"}`}>
                    {r.status}
                  </span>
                </div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Financial Year</p>
                <h3 className="font-display text-[#0a1a2f] text-2xl mb-6" style={{ fontWeight: 800 }}>{r.year}</h3>
                <button
                  onClick={() => handleDownload(r)}
                  data-testid={`report-download-${i}`}
                  className={`mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium py-3 rounded-sm transition-all duration-300 ${
                    r.pdf
                      ? "bg-[#0a1a2f] text-white hover:bg-[#c8a25c] hover:text-[#0a1a2f]"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {r.pdf ? <><Download size={16} /> Download PDF</> : <><Lock size={15} /> Available Soon</>}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
