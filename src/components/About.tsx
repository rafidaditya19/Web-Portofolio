import { personalInfo } from "@/data/portfolio-data";
import { GraduationCap, Award, Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
      id="about"
      className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Background &amp; Philosophy
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            About Me
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story (8 Columns) */}
          <div className="lg:col-span-7 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} className="text-justify">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">
                    Academic Foundation
                  </h4>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Mathematics &amp; Natural Sciences (MIPA) graduate with rigorous analytical problem-solving and logic.
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">
                    National Certification
                  </h4>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  BNSP certified in Electrical Engineering (2025) and Industrial Automation (2026).
                </p>
              </motion.div>
            </div>
          </div>

          {/* Quick Info & Highlights Sidebar (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div whileHover={{ scale: 1.01 }} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h4 className="font-semibold text-zinc-900 dark:text-white text-base mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Professional Highlights</span>
              </h4>

              <ul className="space-y-3.5 text-xs text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Smart Building Integration:</strong> Experience with PT Denki Engineering &amp; Skill Akademi HQ.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">IoT Ecosystems:</strong> Home Assistant UI/UX, Tuya automation, and Raspberry Pi implementations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Telecom Infrastructure:</strong> Certified Huawei BTS L0 Installation Technician (grounding, cabling, antenna).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white">Safety &amp; Compliance:</strong> Method Statement &amp; Risk Assessment (MSRA) and K3 compliance.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                  <span>Based in {personalInfo.contact.location}</span>
                </span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  Open to Opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
