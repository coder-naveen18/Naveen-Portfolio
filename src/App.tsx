import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  Mail,
  ChevronDown,
  Cpu,
  Code,
  FileText,
  Linkedin,
  Terminal,
  Layers,
  Award,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

// --- DATA ---
const RESUME_DATA = {
  basics: {
    name: "Naveen Sahu",
    label: "Backend Developer & Tech Enthusiast",
    summary:
      "Detail-oriented Backend Developer with a strong foundation in Python and Django/DRF, specializing in building scalable and secure RESTful APIs. Expertise in relational schemas with MySQL and full-stack architecture.",
    location: "Jaipur, Rajasthan, India",
    email: "codersahu18@gmail.com",
    links: { linkedin: "https://www.linkedin.com/in/naveen-sahu-a61aab258" },
  },
  experience: [
    {
      id: 1,
      company: "IQuint Technology Services",
      role: "Software Engineer Intern",
      period: "March 2026 - Present",
      bullets: ["Contributing to backend architecture and system design."],
    },
    {
      id: 2,
      company: "Computatia",
      role: "Developer",
      period: "Sept 2025 - Oct 2025",
      bullets: [
        "Transformed legacy UI to Next.js components.",
        "Engineered responsive components for specialized devices like Google Nest Hub (1024x600).",
        "Designed new navigation systems for small screen devices.",
        "Implemented data manipulation and duplicate removal logic.",
      ],
    },
    {
      id: 3,
      company: "Oasis Infobyte",
      role: "Web Development Intern",
      period: "July 2023 - Aug 2023",
      bullets: [
        "Developed a Working Calculator using HTML/CSS/JS.",
        "Built a personalised To-Do web app with complex task management features.",
      ],
    },
  ],
  skills: {
    Backend: ["Python", "Django", "DRF", "MySQL", "C++"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    Other: ["Open Source Integration", "System Administration", "API Design"],
  },
  education: {
    school: "Vivekanand Institute of Technology",
    degree: "B.Tech in Computer Science",
    period: "2022 - 2026",
  },
  certifications: [
    "GitHub Professional Career Essentials",
    "Node.js Web Development",
    "Microsoft System Administration",
    "React Design Patterns",
  ],
};

// --- COMPONENTS ---

/**
 * AnimatedBackground: Futuristic particle mesh using Canvas
 */
const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(224, 102, 65, 0.4)"; // rust
        ctx.fill();
      }
    }

    const initParticles = () => {
      const count = window.innerWidth < 768 ? 40 : 100;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(224, 102, 65, ${0.15 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(48,51,58,0)_0%,rgba(48,51,58,1)_100%)]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rust/15 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/15 blur-[120px] rounded-full"></div>
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-rose/10 blur-[100px] rounded-full"></div>
      <canvas ref={canvasRef} className="opacity-60" />
    </div>
  );
};

/**
 * Splash Screen Logic
 */
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-dark">
      <div className="relative mb-8">
        <div className="text-4xl font-black text-light tracking-tighter flex items-center gap-2">
          <div className="w-12 h-12 bg-rust rounded-lg flex items-center justify-center border border-light/20 shadow-lg shadow-rust/20">
            NS
          </div>
          <span className="opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]">
            PORTFOLIO
          </span>
        </div>
      </div>
      <div className="w-48 h-1 bg-light/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-rust transition-all duration-100 ease-out shadow-[0_0_10px_#E06641]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

/**
 * Section Container with Animation triggers
 */
const Section = ({
  id,
  title,
  subtitle,
  children,
  icon: Icon,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  icon?: React.ElementType;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1 },
    );

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={domRef}
      className={`py-24 px-6 max-w-7xl mx-auto transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex items-center gap-4 mb-12">
        {Icon && (
          <div className="p-3 bg-rust/10 rounded-xl border border-rust/20 text-rust">
            <Icon size={28} />
          </div>
        )}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-light tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-light/60 mt-2">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [expandedExp, setExpandedExp] = useState<number | null>(2); // Computatia expanded by default
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  if (loading) return <SplashScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="min-h-screen text-light/80 selection:bg-rust/30">
      <AnimatedBackground />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-light/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-black text-light cursor-pointer flex items-center gap-2 group"
            onClick={() => scrollTo("hero")}
          >
            <span className="bg-rust px-2 py-0.5 rounded group-hover:bg-rust/80 transition-colors text-dark">
              N
            </span>
            <span className="hidden sm:inline">Sahu</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["experience", "skills", "education"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm font-medium hover:text-rust transition-colors capitalize tracking-widest"
              >
                {item}
              </button>
            ))}
            <a
              href={`mailto:${RESUME_DATA.basics.email}`}
              className="bg-light text-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-rust hover:text-light transition-all transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          <button
            className="md:hidden text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark border-b border-light/10 p-6 flex flex-col gap-6 animate-slide-down">
            {["experience", "skills", "education"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-xl font-bold text-left capitalize hover:text-rust transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rust/10 border border-rust/20 text-rust text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust/70 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rust"></span>
            </span>
            Open for opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-light leading-none mb-6 tracking-tighter">
            {RESUME_DATA.basics.name.split(" ")[0]} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rust via-rose to-gold">
              {RESUME_DATA.basics.name.split(" ")[1]}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-light/70 mb-10 leading-relaxed font-light">
            {RESUME_DATA.basics.label}. <br />
            <span className="text-light/90">{RESUME_DATA.basics.summary}</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("experience")}
              className="group bg-linear-to-r from-rust to-rust/80 hover:from-rust/90 hover:to-rust/70 text-dark px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-rust/25"
            >
              View Experience
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-rust/50 hover:border-rust bg-rust/10 hover:bg-rust text-rust hover:text-dark px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all backdrop-blur-sm">
              <FileText
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Download Resume
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-light/5 pt-12">
          {[
            { label: "Location", val: "Jaipur, IN" },
            { label: "Stack", val: "Python/Next.js" },
            { label: "Education", val: "B.Tech CSE" },
            { label: "Focus", val: "Scalable APIs" },
          ].map((stat, i) => (
            <div key={i} className="group">
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

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Building the future, one component at a time."
        icon={Briefcase}
      >
        <div className="space-y-6">
          {RESUME_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className={`group rounded-3xl border border-light/5 transition-all overflow-hidden cursor-pointer ${
                expandedExp === exp.id
                  ? "bg-light/5 border-light/20"
                  : "bg-transparent hover:bg-light/2"
              }`}
              onClick={() =>
                setExpandedExp(expandedExp === exp.id ? null : exp.id)
              }
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
                  className={`transition-transform duration-300 ${expandedExp === exp.id ? "rotate-180" : ""}`}
                >
                  <ChevronDown className="text-light/50" />
                </div>
              </div>

              <div
                className={`px-8 transition-all duration-500 ease-in-out ${
                  expandedExp === exp.id
                    ? "max-h-1000 pb-8 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="pt-4 border-t border-light/5 space-y-4">
                  {exp.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
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

      {/* Skills Section */}
      <Section id="skills" title="Technical Arsenal" icon={Code}>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(RESUME_DATA.skills).map(([category, items], i) => (
            <div
              key={category}
              className="p-8 rounded-3xl bg-light/3 border border-light/5 hover:border-rust/30 transition-all hover:bg-light/5 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center text-rust border border-rust/20">
                  {i === 0 ? (
                    <Terminal size={20} />
                  ) : i === 1 ? (
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

      {/* Education & Certs */}
      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-8 px-6 mb-24">
        <Section title="Education" icon={GraduationCap}>
          <div className="p-8 rounded-3xl bg-light/3 border border-light/5 h-full">
            <h3 className="text-2xl font-bold text-light mb-1">
              {RESUME_DATA.education.school}
            </h3>
            <p className="text-rust font-semibold mb-4">
              {RESUME_DATA.education.degree}
            </p>
            <p className="text-light/50 font-medium mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rust"></span>
              {RESUME_DATA.education.period}
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
            {RESUME_DATA.certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl bg-light/3 border border-light/5 hover:translate-x-2 transition-transform"
              >
                <div className="p-2 bg-gold/10 rounded-lg text-gold">
                  <CheckCircle size={20} />
                </div>
                <span className="text-light/80 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-20 border-t border-light/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-light mb-8 tracking-tighter">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rust to-gold">
              extraordinary.
            </span>
          </h2>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href={RESUME_DATA.basics.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-light/5 rounded-full hover:bg-rust transition-all group"
            >
              <Linkedin className="group-hover:text-dark" />
            </a>
            <a
              href={`mailto:${RESUME_DATA.basics.email}`}
              className="p-4 bg-light/5 rounded-full hover:bg-rust transition-all group"
            >
              <Mail className="group-hover:text-dark" />
            </a>
          </div>

          <p className="text-light/50 text-sm font-medium">
            &copy; 2026 {RESUME_DATA.basics.name} &bull; Designed as a
            Futuristic Portfolio Experience
          </p>
        </div>
      </footer>

      {/* CSS Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.4s ease-out forwards; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #30333A; }
        ::-webkit-scrollbar-thumb { background: #B48E57; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #E06641; }
        
        body { background-color: #30333A; }
      `,
        }}
      />
    </div>
  );
}
