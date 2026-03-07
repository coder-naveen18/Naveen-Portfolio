import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ResumeBasics } from "../../types/resume";
import { Toast } from "../ui/Toast";

interface FooterProps {
  basics: ResumeBasics;
}

export const Footer = ({ basics }: FooterProps) => {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(basics.email);
      setShowToast(true);
    } catch (err) {
      // Fallback: try mailto
      window.location.href = `mailto:${basics.email}`;
    }
  };

  return (
    <footer className="py-20 border-t border-light/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-light mb-8 tracking-tighter">
          Let&apos;s build something <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rust to-gold">
            extraordinary.
          </span>
        </h2>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href={basics.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-light/5 rounded-full hover:bg-rust transition-all group"
          >
            <Linkedin className="group-hover:text-dark" />
          </a>
          <a
            href={basics.links.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-light/5 rounded-full hover:bg-rust transition-all group"
          >
            <Github className="group-hover:text-dark" />
          </a>
          <button
            onClick={handleEmailClick}
            aria-label="Email"
            className="p-4 bg-light/5 rounded-full hover:bg-rust transition-all group"
          >
            <Mail className="group-hover:text-dark" />
          </button>
        </div>

        <p className="text-light/50 text-sm font-medium">
          &copy; 2026 {basics.name} &bull; Designed as a Futuristic Portfolio
          Experience
        </p>
      </div>

      {showToast && (
        <Toast
          message="Email copied to clipboard!"
          onClose={() => setShowToast(false)}
        />
      )}
    </footer>
  );
};
