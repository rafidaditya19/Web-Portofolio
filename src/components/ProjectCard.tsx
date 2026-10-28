"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/types";
import {
  MapPin,
  Calendar,
  Briefcase,
  Maximize2,
  X,
  Image as ImageIcon,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Cast ke any agar TypeScript tidak error jika nama properti di types.ts berbeda
  const p = project as any;

  const [activePhoto, setActivePhoto] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [scale, setScale] = useState(1);

  const handleImageError = (src: string) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setScale(1);

  const closePhotoModal = () => {
    setActivePhoto(null);
    setScale(1);
  };

  const photosList = p.photos || p.images || [];
  const techList = p.technologies || p.techStack || p.tags || [];
  const linkUrl = p.liveUrl || p.link || p.demoUrl || p.githubUrl;
  const timePeriod = p.period || p.year || p.date;

  return (
    <>
      <motion.article
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
      >
        {/* Top Header info */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            {p.role && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mb-2">
                {p.role}
              </span>
            )}
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {p.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {linkUrl && (
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                title="Visit Project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Meta Sub-header */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
          {p.company && (
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
              {p.company}
            </span>
          )}
          {timePeriod && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              {timePeriod}
            </span>
          )}
          {p.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              {p.location}
            </span>
          )}
        </div>

        {/* Description */}
        {p.description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
            {p.description}
          </p>
        )}

        {/* Photos Preview Grid */}
        {photosList.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5" /> Project Documentation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photosList.map((photo: any, index: number) => {
                const photoSrc = typeof photo === "string" ? photo : photo.src;
                const photoAlt = typeof photo === "string" ? p.title : photo.alt;
                const photoObj = typeof photo === "string" ? { src: photo, alt: p.title } : photo;

                return !failedImages[photoSrc] ? (
                  <div
                    key={index}
                    onClick={() => setActivePhoto(photoObj)}
                    className="group relative h-28 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 cursor-pointer select-none"
                  >
                    <Image
                      src={photoSrc}
                      alt={photoAlt || "Project photo"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      onError={() => handleImageError(photoSrc)}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        {techList.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
            {techList.map((tech: any, idx: number) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
              >
                {typeof tech === "string" ? tech : tech.name || tech.title}
              </span>
            ))}
          </div>
        )}
      </motion.article>

      {/* Full Photo Modal with Anti-Theft Watermark & Zoom Controls */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
            onClick={closePhotoModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">
                  Project Screenshot
                </span>

                <div className="flex items-center gap-2">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1 bg-zinc-200/60 dark:bg-zinc-800 p-1 rounded-lg mr-2">
                    <button
                      onClick={handleZoomOut}
                      disabled={scale <= 1}
                      className="p-1 rounded text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-40 transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono px-1 min-w-[36px] text-center text-zinc-700 dark:text-zinc-300">
                      {Math.round(scale * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={scale >= 3}
                      className="p-1 rounded text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 disabled:opacity-40 transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    {scale > 1 && (
                      <button
                        onClick={handleResetZoom}
                        className="p-1 rounded text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                        title="Reset Zoom"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <button
                    onClick={closePhotoModal}
                    className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Certificate & Project Image Preview */}
              <div className="p-4 sm:p-6 bg-zinc-100 dark:bg-zinc-950/80 flex flex-col items-center justify-center overflow-hidden">
                <div className="relative w-full h-[360px] sm:h-[460px] rounded-lg overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 select-none">
                  <motion.div
                    animate={{ scale }}
                    transition={{ duration: 0.2 }}
                    drag={scale > 1}
                    dragConstraints={{
                      left: -150 * (scale - 1),
                      right: 150 * (scale - 1),
                      top: -150 * (scale - 1),
                      bottom: 150 * (scale - 1),
                    }}
                    className={`relative w-full h-full ${
                      scale > 1 ? "cursor-grab active:cursor-grabbing" : ""
                    }`}
                  >
                    <Image
                      src={activePhoto.src}
                      alt={activePhoto.alt || "Preview"}
                      fill
                      className="object-contain select-none pointer-events-none"
                      draggable={false}
                      onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />

                    {/* Anti-Theft Watermark Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden flex flex-col justify-around opacity-25 -rotate-45 scale-150">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="whitespace-nowrap text-xs sm:text-sm font-black tracking-widest text-zinc-900 dark:text-white uppercase text-center"
                        >
                          VIEW ONLY • NUR RAFID ADITYA &nbsp;&nbsp;&nbsp;&nbsp;
                          VIEW ONLY • NUR RAFID ADITYA &nbsp;&nbsp;&nbsp;&nbsp;
                          VIEW ONLY • NUR RAFID ADITYA
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {activePhoto.caption && (
                  <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 text-center">
                    {activePhoto.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}