import { timelineUpdates } from "@/data/portfolio-data";
import { Clock, PlusCircle } from "lucide-react";

export default function TimelineUpdates() {
  return (
    <section
      id="updates"
      className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Activity Log
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Latest Milestones &amp; Updates
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm max-w-lg mx-auto">
            A real-time timeline tracking engineering activities, project completions, and ongoing qualifications.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600/30 dark:border-blue-500/30 space-y-10 ml-4 sm:ml-6">
          {timelineUpdates.map((update) => (
            <div key={update.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-4 border-blue-600 group-hover:scale-125 transition-transform" />

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:shadow-sm transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {update.date}
                  </span>
                  {update.tag && (
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {update.tag}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                  {update.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {update.description}
                </p>
              </div>
            </div>
          ))}

          {/* Placeholder for Future Milestones */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 border-4 border-zinc-200 dark:border-zinc-800" />
            <div className="p-4 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-400 flex items-center justify-center gap-2">
              <PlusCircle className="w-4 h-4 text-blue-500" />
              <span>Upcoming engineering projects and certifications in progress...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
