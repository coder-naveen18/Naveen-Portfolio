import type { ResumeData } from "../types/resume";
import { experiences, projects, skillGroups, certificates } from "./index";

export const RESUME_DATA: ResumeData = {
  basics: {
    name: "Naveen Sahu",
    label: "Full Stack Developer",
    summary: "Full-stack developer working with React, Next.js and Django.",
    location: "India",
    email: "sahu18.naveen@gmail.com",
    links: {
      linkedin: "https://linkedin.com/in/naveen-sahu-a61aab258/",
      github: "https://github.com/coder-naveen18",
      resume: "",
      email: "sahu18.naveen@gmail.com",
    },
  },
  experience: experiences.map((e, i) => ({ id: i + 1, company: e.company ?? "", role: e.role ?? "", period: e.period ?? "", bullets: e.bullets ?? [] })),
  projects: projects.map((p, i) => ({ id: i + 1, title: p.name || p.num || `Project ${i + 1}`, description: p.desc || "", stack: p.stack || [], highlights: [], status: p.featured ? "completed" : undefined, githubUrl: p.link || "#", liveUrl: undefined })),
  skills: skillGroups.reduce((acc: any, g) => ({ ...acc, [g.label]: g.skills }), {}),
  education: {
    school: "",
    degree: "",
    period: "",
  },
  certifications: certificates.map((c) => c.name),
  openSource: [],
};
