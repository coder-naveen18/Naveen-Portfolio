import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const ctx2d = ctx;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasEl.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvasEl.height) this.vy *= -1;
      }

      draw() {
        ctx2d.beginPath();
        ctx2d.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx2d.fillStyle = "rgba(224, 102, 65, 0.4)";
        ctx2d.fill();
      }
    }

    const initParticles = () => {
      const count = window.innerWidth < 768 ? 40 : 100;
      particles = [];

      for (let i = 0; i < count; i += 1) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx2d.beginPath();
            ctx2d.moveTo(particles[i].x, particles[i].y);
            ctx2d.lineTo(particles[j].x, particles[j].y);
            ctx2d.strokeStyle = `rgba(224, 102, 65, ${0.15 * (1 - dist / 150)})`;
            ctx2d.stroke();
          }
        }
      }
    };

    const resize = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
      initParticles();
    };

    const animate = () => {
      ctx2d.clearRect(0, 0, canvasEl.width, canvasEl.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(48,51,58,0)_0%,rgba(48,51,58,1)_100%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rust/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/15 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-rose/10 blur-[100px] rounded-full" />
      <canvas ref={canvasRef} className="opacity-60" />
    </div>
  );
};
