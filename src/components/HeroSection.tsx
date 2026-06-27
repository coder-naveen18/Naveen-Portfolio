import { useEffect, useRef } from "react";
import { useTypewriter, useParticles } from "../hooks";
import { typewriterRoles } from "../data";

export default function HeroSection() {
  const magBtn1 = useRef<HTMLSpanElement>(null);
  const magBtn2 = useRef<HTMLSpanElement>(null);
  const heroNameRef = useRef<HTMLHeadingElement>(null);

  useTypewriter(typewriterRoles, "heroRole");
  useParticles("particleCanvas", "heroSection");

  // Magnetic buttons
  useEffect(() => {
    const makeMagnetic = (el: HTMLElement | null) => {
      if (!el) return;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.35}px,${dy * 0.35}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    };
    const c1 = makeMagnetic(magBtn1.current);
    const c2 = makeMagnetic(magBtn2.current);
    return () => {
      c1?.();
      c2?.();
    };
  }, []);

  // Glitch on hover
  useEffect(() => {
    const el = heroNameRef.current;
    if (!el) return;
    const onEnter = () => {
      el.querySelectorAll<HTMLElement>(".glitch-text").forEach((g) => {
        g.style.animation = "none";
        void g.offsetWidth;
        g.style.animation = "glitch 0.4s steps(2) forwards";
      });
    };
    el.addEventListener("mouseenter", onEnter);
    return () => el.removeEventListener("mouseenter", onEnter);
  }, []);

  return (
    <section className="hero" id="heroSection">
      <canvas id="particleCanvas" />
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-badge">
        <span className="badge-pulse" />
        Open to opportunities
      </div>

      <h1 className="hero-name" ref={heroNameRef}>
        <span className="glitch-text">Naveen</span>
        <br />
        <em className="glitch-text">Sahu</em>
      </h1>

      <div className="hero-role" id="heroRole" />

      <p className="hero-sub">
        Building scalable web applications with React, Next.js, Django &amp;
        Node.js. Recently completed an internship at IQuint Technology Services,
        Noida(remote).
      </p>

      <div className="hero-actions">
        <span className="btn-mag" ref={magBtn1}>
          <a href="#projects" className="btn-primary">
            View my work
          </a>
        </span>
        <span className="btn-mag" ref={magBtn2}>
          <a href="#contact" className="btn-outline">
            Get in touch →
          </a>
        </span>
      </div>

      <div className="hero-actions-download">
        <a
          href="/NaveenUpdatedResume.pdf"
          download="Naveen-Sahu-Resume.pdf"
          className="btn-primary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
