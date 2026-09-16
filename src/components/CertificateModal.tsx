"use client";

import { useEffect, useState } from "react";
import { Certificate } from "@/data/types";
import { X, Award, Calendar, Building2, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              {certificate.category}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Issued in {certificate.year}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {certificate.image && (
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Open full resolution image in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Full Image</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Image Preview */}
        <div className="p-4 sm:p-6 bg-zinc-100 dark:bg-zinc-950/80 flex flex-col items-center justify-center min-h-[300px] text-center">
          {certificate.image && !imageError ? (
            <div className="relative w-full h-[360px] sm:h-[460px] rounded-lg overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-contain select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                sizes="(max-width: 768px) 100vw, 800px"
                onError={() => setImageError(true)}
              />
              {/* Anti-Theft Watermark Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none overflow-hidden opacity-20 dark:opacity-30">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="text-zinc-900 dark:text-white font-black text-2xl md:text-3xl transform -rotate-45 whitespace-nowrap my-6 tracking-widest drop-shadow-md">
                    VIEW ONLY • NUR RAFID ADITYA
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full max-w-lg p-8 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xs flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                Certificate of Competence
              </span>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                {certificate.title}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 max-w-sm">
                Awarded by {certificate.issuer}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential ({certificate.year})</span>
              </div>
            </div>
          )}
        </div>

        {/* Details Footer */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              {certificate.title}
            </h3>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                {certificate.issuer}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                Year: {certificate.year}
              </span>
            </div>
          </div>

          {certificate.description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800">
              {certificate.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
