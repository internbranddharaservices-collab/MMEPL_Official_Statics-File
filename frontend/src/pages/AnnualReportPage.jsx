import React from "react";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import { ANNUAL_REPORTS, REPORT_HIGHLIGHTS, REVENUE, IMAGES } from "../content";
import { FileText, Download, Lock, TrendingUp, IndianRupee } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const MAX = 30; // chart y-axis max (Cr)
const TICKS = [30, 25, 20, 15, 10, 5, 0];

export default function AnnualReportPage() {
  const { toast } = useToast();
  const table = [...REVENUE].reverse(); // newest first for the table

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

      {/* Revenue chart + table */}
      <section className="bg-[#f5f4f1] py-24 lg:py-28" data-testid="revenue-section">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl reveal mb-14">
            <p className="kicker text-[#c8a25c] mb-5">Financial Highlights</p>
            <h2 className="font-display text-[#0a1a2f] text-3xl md:text-4xl leading-[1.05]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              Revenue growth year on year
            </h2>
          </div>

          {/* Chart card */}
          <div className="reveal bg-white rounded-lg shadow-[0_20px_60px_rgba(10,26,47,0.10)] border border-gray-100 p-6 sm:p-10 overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-10">
              <IndianRupee size={18} className="text-[#c8a25c]" />
              <h3 className="font-display text-[#0a1a2f] text-xl md:text-2xl text-center" style={{ fontWeight: 800 }}>Revenue in <span className="text-[#c8a25c]">₹ Cr.</span></h3>
            </div>

            <div className="flex gap-3 sm:gap-6">
              {/* Y axis */}
              <div className="hidden sm:flex flex-col justify-between h-[340px] text-[11px] text-gray-400 pr-1 text-right w-6">
                {TICKS.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {/* Bars */}
              <div className="relative flex-1">
                {/* gridlines */}
                <div className="absolute inset-0 flex flex-col justify-between h-[340px] pointer-events-none">
                  {TICKS.map((t) => (
                    <div key={t} className="border-t border-dashed border-gray-100" />
                  ))}
                </div>

                <div className="relative flex items-end justify-between h-[340px] gap-2 sm:gap-4">
                  {REVENUE.map((r) => {
                    const h = Math.max((r.cr / MAX) * 100, 2);
                    return (
                      <div key={r.year} className="group flex-1 flex flex-col items-center justify-end h-full">
                        <span className={`mb-2 text-[11px] sm:text-sm font-semibold ${r.projected ? "text-[#c8a25c]" : "text-[#0a1a2f]"}`}>
                          {r.projected && <span className="hidden md:inline text-[10px] text-gray-400 font-normal mr-1">Projected</span>}
                          {r.cr.toFixed(2)}
                        </span>
                        <div className="w-full flex justify-center items-end gap-[3px] h-full">
                          {/* shadow bar */}
                          <div
                            className="w-1/3 max-w-[10px] bg-gray-300/70 rounded-t-[2px]"
                            style={{ height: `${h}%`, transition: "height 1s cubic-bezier(0.16,1,0.3,1)" }}
                          />
                          {/* main bar */}
                          <div
                            className={`w-2/3 max-w-[22px] rounded-t-[3px] ${r.projected ? "bg-[#c8a25c]" : "bg-gradient-to-t from-[#0d2240] to-[#1c4b7a]"} group-hover:opacity-90`}
                            style={{ height: `${h}%`, transition: "height 1.1s cubic-bezier(0.16,1,0.3,1)" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* X axis labels */}
                <div className="flex items-start justify-between gap-2 sm:gap-4 mt-3 border-t border-gray-200 pt-3">
                  {REVENUE.map((r) => (
                    <span key={r.year} className="flex-1 text-center text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{r.year}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Revenue table */}
          <div className="reveal reveal-delay-1 mt-8 bg-white rounded-lg shadow-[0_20px_60px_rgba(10,26,47,0.08)] border border-gray-100 overflow-x-auto" data-testid="revenue-table">
            <table className="w-full text-left min-w-[440px]">
              <thead>
                <tr className="bg-[#0a1a2f] text-white">
                  <th className="py-4 px-5 sm:px-8 text-xs tracking-widest uppercase font-semibold w-16">Sl. No.</th>
                  <th className="py-4 px-5 sm:px-8 text-xs tracking-widest uppercase font-semibold">Year</th>
                  <th className="py-4 px-5 sm:px-8 text-xs tracking-widest uppercase font-semibold text-right">Revenue (in ₹)</th>
                </tr>
              </thead>
              <tbody>
                {table.map((r, i) => (
                  <tr key={r.year} className={`border-b border-gray-100 last:border-0 ${i % 2 ? "bg-[#faf9f6]" : "bg-white"} hover:bg-[#fbf3e2] transition-colors`}>
                    <td className="py-4 px-5 sm:px-8 text-sm text-[#c8a25c] font-bold">{i + 1}</td>
                    <td className="py-4 px-5 sm:px-8 text-sm text-gray-700 font-medium">{r.year.replace("–", "to")}</td>
                    <td className="py-4 px-5 sm:px-8 text-sm text-[#0a1a2f] font-semibold text-right">
                      {r.amount} {r.projected && <span className="text-[#c8a25c] font-normal">(Projected)</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Download centre */}
      <section className="bg-white py-24 lg:py-28">
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
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-[#f5f4f1] rounded-sm border border-gray-100 p-7 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-400`}
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
                      : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-100"
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
