import { Briefcase, ChevronDown } from "lucide-react";
import { Section } from "../ui/Section";
import type { ResumeExperience } from "../../types/resume";

interface ExperienceSectionProps {
  experience: ResumeExperience[];
  expandedExperienceId: number | null;
  onToggle: (id: number) => void;
}

export const ExperienceSection = ({
  experience,
  expandedExperienceId,
  onToggle,
}: ExperienceSectionProps) => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Building the future, one component at a time."
      icon={Briefcase}
    >
      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className={`group rounded-3xl border border-light/5 transition-all overflow-hidden cursor-pointer ${
              expandedExperienceId === exp.id
                ? "bg-light/5 border-light/20"
                : "bg-transparent hover:bg-light/2"
            }`}
            onClick={() => onToggle(exp.id)}
          >
            <div className="p-8 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-light group-hover:text-rust transition-colors">
                    {exp.role}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-rust/20 border border-rust/30 text-rust text-xs font-bold">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-light/60 font-medium">
                  {exp.company}
                </p>
              </div>
              <div
                className={`transition-transform duration-300 ${expandedExperienceId === exp.id ? "rotate-180" : ""}`}
              >
                <ChevronDown className="text-light/50" />
              </div>
            </div>

            <div
              className={`px-8 transition-all duration-500 ease-in-out ${
                expandedExperienceId === exp.id
                  ? "max-h-1000 pb-8 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="pt-4 border-t border-light/5 space-y-4">
                {exp.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex gap-3 text-light/80 leading-relaxed"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-rust shrink-0 shadow-[0_0_8px_rgba(224,102,65,0.6)]" />
                    {bullet}
                  </div>
                ))}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.id === 2 &&
                    ["Next.js", "Tailwind CSS", "Media Queries", "UI/UX"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-tighter font-bold text-light/50 border border-light/10 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
