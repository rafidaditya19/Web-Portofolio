import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import Certifications from "@/components/Certifications";
import PortfolioSection from "@/components/PortfolioSection";
import TimelineUpdates from "@/components/TimelineUpdates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <SkillsSection />
        <Certifications />
        <PortfolioSection />
        <TimelineUpdates />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
