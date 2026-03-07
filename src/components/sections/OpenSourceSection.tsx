import { GitBranch, ExternalLink } from "lucide-react";
import { Section } from "../ui/Section";
import type { OpenSourceContribution } from "../../types/resume";

interface OpenSourceSectionProps {
  openSource: OpenSourceContribution[];
}

export const OpenSourceSection = ({ openSource }: OpenSourceSectionProps) => {
  return (
    <section id="open-source" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Section title="Open Source Contributions" icon={GitBranch}>
          <div className="space-y-8">
            {/* Badges Grid */}
            <div>
              <h3 className="text-lg font-bold text-light mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-linear-to-b from-purple to-cyan rounded-full" />
                Hacktoberfest 2025 Badges
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {openSource.map((contribution) => (
                  <a
                    key={contribution.id}
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple/10 to-cyan/10 border border-purple/20 hover:border-purple/60 transition-all h-full p-4 flex flex-col items-center justify-center group-hover:shadow-xl group-hover:shadow-purple/20">
                      {contribution.badgeImage ? (
                        <>
                          <img
                            src={contribution.badgeImage}
                            alt={contribution.event}
                            className="w-24 h-24 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                          <p className="text-xs text-light/70 font-medium text-center mt-3 group-hover:text-light transition-colors">
                            {contribution.event}
                          </p>
                        </>
                      ) : (
                        <span className="text-5xl mb-2">
                          {contribution.badge}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Achievements Details */}
            <div>
              <h3 className="text-lg font-bold text-light mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-linear-to-b from-rust to-gold rounded-full" />
                Key Achievements
              </h3>
              <div className="space-y-3">
                {openSource
                  .find((c) => c.id === 5)
                  ?.achievements?.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-linear-to-r from-rust/5 to-gold/5 border border-rust/10 hover:border-rust/30 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-linear-to-b from-rust to-gold mt-2 shrink-0" />
                      <p className="text-light/80">{achievement}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Summary */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-purple/10 via-transparent to-cyan/10 border border-purple/20">
              <p className="text-light/80 leading-relaxed">
                Active contributor to the open source community. Participated in{" "}
                <span className="font-bold text-rust">Hacktoberfest 2025</span>{" "}
                and achieved{" "}
                <span className="font-bold text-purple">Supercontributor</span>{" "}
                status by making meaningful contributions to various projects.
                Earned multiple badges through consistent effort and
                high-quality pull requests.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
};
