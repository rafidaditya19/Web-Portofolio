import { personalInfo } from "@/data/portfolio-data";
import { Mail, Zap, ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand & Mission (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Zap className="w-4 h-4 fill-white" />
              </span>
              <span className="font-bold text-lg tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Electrical Engineering &amp; Industrial Automation professional specializing in smart building integrations, telemetry, and modern IoT infrastructures.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for engineering projects &amp; collaborations
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Core Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#updates" className="hover:text-white transition-colors">
                  Timeline &amp; Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts & Socials (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Connect Directly
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="inline-flex items-center gap-2.5 text-zinc-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="truncate">{personalInfo.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-zinc-300 hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-zinc-300 hover:text-blue-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-blue-500" />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Nur Rafid Aditya. All rights reserved.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
