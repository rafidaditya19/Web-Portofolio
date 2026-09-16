"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";
import { Award, ArrowDown, Mail, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Profile Avatar Frame (Ready for /images/profile.jpg) */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-xl shadow-blue-500/15">
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative">
                {!imageError ? (
                  <Image
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    priority
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                    <span className="text-2xl sm:text-3xl font-black tracking-wider text-blue-600 dark:text-blue-400">
                      NRA
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* Active Status Badge */}
            <div
              className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full shadow-xs"
              title="Available for Opportunities & Projects"
            />
          </div>
        </div>

        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Electrical &amp; Industrial Automation Engineer</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          {personalInfo.name}
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8">
          A Math &amp; Science graduate equipped with accredited{" "}
          <strong className="text-zinc-900 dark:text-white font-semibold">
            BNSP Electrical Engineering
          </strong>{" "}
          and{" "}
          <strong className="text-zinc-900 dark:text-white font-semibold">
            Industrial Automation
          </strong>{" "}
          credentials. Experienced in Smart Building installations, IoT architectures, and rigorous safety compliance.
        </p>

        {/* Credentials Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>BNSP Electrical Engineering (2025)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>BNSP Industrial Automation (2026)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>High School MIPA (Math &amp; Science)</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#certifications"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-semibold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 shadow-xs hover:-translate-y-0.5 transition-all"
          >
            <span>View Certifications</span>
          </a>

          {/* Social Quick Links */}
          <div className="flex items-center gap-2 pl-2">
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-red-500 hover:scale-110 transition-all"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
