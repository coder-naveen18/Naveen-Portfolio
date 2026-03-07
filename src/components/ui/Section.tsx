import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: ElementType;
  children: ReactNode;
}

export const Section = ({
  id,
  title,
  subtitle,
  icon: Icon,
  children,
}: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1 },
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
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
