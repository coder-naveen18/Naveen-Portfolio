import React, { useState } from "react";
import { Mail } from "lucide-react";
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
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4v-12h4v1.6A4 4 0 0 1 16 8z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2"
                y="9"
                width="4"
                height="12"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="4"
                cy="4"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
          <a
            href={basics.links.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-light/5 rounded-full hover:bg-rust transition-all group"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.9c-2.8.6-3.3-1.2-3.3-1.2-.4-1-.9-1.3-.9-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.8.8.1-.6.3-1 .6-1.2-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.4.1-2.9 0 0 .8-.2 2.8 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-.1 2.8-1 2.8-1 .5 1.5.2 2.6.1 2.9.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.4 0-5.5-4.5-10-10-10z"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinejoin="round"
              />
            </svg>
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
