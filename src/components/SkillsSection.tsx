import { skillGroups } from "@/data/portfolio-data";
import { Zap, Cpu, Wrench } from "lucide-react";

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Electrical")) return <Zap className="w-5 h-5 text-amber-500" />;
    if (category.includes("Smart")) return <Cpu className="w-5 h-5 text-blue-500" />;
    return <Wrench className="w-5 h-5 text-emerald-500" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Technical Proficiency
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Core Skills &amp; Competencies
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mx-auto">
            Practical skills verified through national BNSP accreditation, ministry vocational training, and real-world field projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {getCategoryIcon(group.category)}
                </div>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-white mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
