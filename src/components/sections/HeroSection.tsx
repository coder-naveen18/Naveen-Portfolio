import { ArrowRight, FileText } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Profile Photo */}
        <div
          className={`flex-1 relative transition-all duration-1000 delay-300 transform order-1 md:order-2 ${isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <div className="relative w-full aspect-square max-w-120 mx-auto">
            {/* Decorative Frame Elements */}
            <div className="absolute -inset-4 bg-indigo-100 rounded-[2.5rem] rotate-3 -z-10" />
            <div className="absolute -inset-4 border-2 border-slate-200 rounded-[2.5rem] -rotate-2 -z-10" />

            {/* Main Image Container */}
            <div className="w-full h-full rounded-4xl overflow-hidden bg-slate-200 shadow-2xl relative group">
              <img
                src={
                  basics.image ||
                  "https://via.placeholder.com/600x600?text=Your+Photo+Here"
                }
                alt={basics.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x600?text=Your+Photo+Here";
                }}
              />

              {/* Floating Badge */}
              {/* <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Experience
                  </p>
                  <p className="font-bold text-slate-900">5+ Years Pro</p>
                </div>
              </div> */}
            </div>

            {/* Aesthetic Accents */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl transform rotate-12">
              <span className="text-center text-[10px] font-bold leading-tight">
                HIRE
                <br />
                ME
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 order-2 md:order-1 max-w-3xl">
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
