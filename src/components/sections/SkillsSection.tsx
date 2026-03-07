import { Code, Cpu, Layers, Terminal } from "lucide-react";
import { Section } from "../ui/Section";
import type { ResumeSkills } from "../../types/resume";

interface SkillsSectionProps {
  skills: ResumeSkills;
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <Section id="skills" title="Technical Arsenal" icon={Code}>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={category}
            className="p-8 rounded-3xl bg-light/3 border border-light/5 hover:border-rust/30 transition-all hover:bg-light/5 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center text-rust border border-rust/20">
                {index === 0 ? (
                  <Terminal size={20} />
                ) : index === 1 ? (
                  <Layers size={20} />
                ) : (
                  <Cpu size={20} />
                )}
              </div>
              <h3 className="text-xl font-bold text-light capitalize">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-light/5 border border-light/5 text-sm font-medium hover:border-rust/50 hover:bg-rust/10 hover:text-rust transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
