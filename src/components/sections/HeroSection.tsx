import { ArrowRight, FileText } from "lucide-react";
import type { ResumeBasics } from "../../types/resume";

interface HeroSectionProps {
  basics: ResumeBasics;
  onViewExperience: () => void;
}

const STATS = [
  { label: "Location", val: "Jaipur, IN" },
  { label: "Stack", val: "Python(Django/DRF)" },
  { label: "Education", val: "B.Tech CSE" },
  { label: "Focus", val: "Building Robust Backend Systems" },
];

export const HeroSection = ({ basics, onViewExperience }: HeroSectionProps) => {
  const [firstName, lastName] = basics.name.split(" ");

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20"
    >
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rust/10 border border-rust/20 text-rust text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust/70 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rust" />
          </span>
          Open for opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-light leading-none mb-6 tracking-tighter">
          {firstName}
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rust via-rose to-gold">
            {lastName}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-light/70 mb-10 leading-relaxed font-light">
          {basics.label}. <br />
          <span className="text-light/90">{basics.summary}</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onViewExperience}
            className="group bg-linear-to-r from-rust to-rust/80 hover:from-rust/90 hover:to-rust/70 text-dark px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-rust/25"
          >
            View Experience
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={basics.links.resume}
            target="_blank"
            rel="noreferrer"
            className="group border-2 border-rust/50 hover:border-rust bg-rust/10 hover:bg-rust text-rust hover:text-dark px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all backdrop-blur-sm"
          >
            <FileText
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            Download Resume
          </a>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-light/5 pt-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="group">
            <p className="text-xs uppercase tracking-widest text-light/50 mb-1">
              {stat.label}
            </p>
            <p className="text-lg font-bold text-light group-hover:text-rust transition-colors">
              {stat.val}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
