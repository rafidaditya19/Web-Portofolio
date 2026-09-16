"use client";

import { useState } from "react";
import { certificates } from "@/data/portfolio-data";
import { Certificate } from "@/data/types";
import CertificateModal from "./CertificateModal";
import { Award, Eye, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const categories = ["All", "BNSP", "Industry", "Government"];

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Credentials &amp; Standards
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Professional Certifications
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mx-auto">
            Accredited qualifications verifying technical competency in electrical engineering, automation, and telecommunication standards.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCertificate(cert)}
              className="group relative p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                      cert.category === "BNSP"
                        ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        : cert.category === "Government"
                        ? "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                        : "bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    }`}
                  >
                    {cert.category}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400">
                    {cert.year}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {cert.category === "BNSP" ? (
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span className="text-[11px] font-medium">View credential</span>
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-400">
          Tip: Click on any certification card above to preview details and certificates.
        </p>
      </div>

      {/* Modal Dialog for Certificate Preview */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </section>
  );
}
