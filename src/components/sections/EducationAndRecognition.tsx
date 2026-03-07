import { Award, CheckCircle, GraduationCap } from "lucide-react";
import { Section } from "../ui/Section";
import type { ResumeEducation } from "../../types/resume";

interface EducationAndRecognitionProps {
  education: ResumeEducation;
  certifications: string[];
}

export const EducationAndRecognition = ({
  education,
  certifications,
}: EducationAndRecognitionProps) => {
  return (
    <div
      id="education"
      className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-8 px-6 mb-24"
    >
      <Section title="Education" icon={GraduationCap}>
        <div className="p-8 rounded-3xl bg-light/3 border border-light/5 h-full">
          <h3 className="text-2xl font-bold text-light mb-1">
            {education.school}
          </h3>
          <p className="text-rust font-semibold mb-4">{education.degree}</p>
          <p className="text-light/50 font-medium mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rust" />
            {education.period}
          </p>
          <div className="p-4 rounded-xl bg-rust/5 border border-rust/10 text-light/80 text-sm">
            Bachelor of Technology - BTech, Computer science and engineering.
            Currently focusing on Backend Architectures and Open Source
            software.
          </div>
        </div>
      </Section>

      <Section title="Recognition" icon={Award}>
        <div className="space-y-4 h-full">
          {certifications.map((certification) => (
            <div
              key={certification}
              className="flex items-center gap-4 p-5 rounded-2xl bg-light/3 border border-light/5 hover:translate-x-2 transition-transform"
            >
              <div className="p-2 bg-gold/10 rounded-lg text-gold">
                <CheckCircle size={20} />
              </div>
              <span className="text-light/80 font-medium">{certification}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
