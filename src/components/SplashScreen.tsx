import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
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
        />
      </div>
    </div>
  );
};
