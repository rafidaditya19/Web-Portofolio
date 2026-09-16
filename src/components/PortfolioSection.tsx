import { projects } from "@/data/portfolio-data";
import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Fieldwork &amp; Implementations
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Featured Engineering Projects
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mx-auto">
            Hands-on technical supervision, wiring analysis, IoT integrations, and MEP systems executed with professional standards.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
