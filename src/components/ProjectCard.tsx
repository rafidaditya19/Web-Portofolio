"use client";

import { useState } from "react";
import { Project } from "@/data/types";
import {
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
  Maximize2,
  X,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activePhoto, setActivePhoto] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (src: string) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <article className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
      {/* Top Header info */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800 mb-2">
            {project.role}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            {project.year}
          </span>
          <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md">
            <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
            {project.company}
          </span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
        {project.summary}
      </p>

      {/* Highlights / Responsibilities */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
          Key Responsibilities &amp; Outcomes
        </h4>
        <ul className="space-y-2.5">
          {project.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Chips */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
          Technologies &amp; Frameworks
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      {project.images && project.images.length > 0 && (
        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center justify-between">
            <span>Project Gallery ({project.images.length} Photos)</span>
            <span className="text-[11px] font-normal normal-case text-zinc-400">
              Click photo to enlarge
            </span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {project.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActivePhoto(img)}
                className="group relative h-20 sm:h-24 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 cursor-pointer shadow-2xs hover:scale-105 transition-all"
              >
                {!failedImages[img.src] ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(img.src)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center text-zinc-400">
                    <ImageIcon className="w-5 h-5 mb-1" />
                    <span className="text-[10px] line-clamp-1">{img.alt}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-zinc-900 text-white rounded-2xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
              <span className="text-xs text-zinc-400 font-medium">
                {activePhoto.caption || activePhoto.alt}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={activePhoto.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  title="Open full resolution image in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Full Photo</span>
                </a>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative w-full h-[320px] sm:h-[450px] bg-zinc-950 rounded-xl overflow-hidden flex items-center justify-center">
              {!failedImages[activePhoto.src] ? (
                <>
                  <Image
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    fill
                    className="object-contain select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  {/* Anti-Theft Watermark Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none overflow-hidden opacity-30">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="text-white font-black text-2xl md:text-3xl transform -rotate-45 whitespace-nowrap my-6 tracking-widest drop-shadow-md">
                        VIEW ONLY • NUR RAFID ADITYA
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center text-zinc-400">
                  <ImageIcon className="w-12 h-12 mb-3 text-zinc-500" />
                  <p className="text-sm font-semibold">{activePhoto.alt}</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Image path: public{activePhoto.src}
                  </p>
                </div>
              )}
            </div>

            {activePhoto.caption && (
              <p className="mt-3 text-xs text-zinc-300 text-center">
                {activePhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
