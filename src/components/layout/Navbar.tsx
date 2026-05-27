import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (id: string) => void;
  contactEmail: string;
  onEmailClick: () => void;
}

const NAV_ITEMS = ["experience", "projects", "skills", "education"];

export const Navbar = ({
  scrolled,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
  contactEmail,
  onEmailClick,
}: NavbarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-xl border-b border-light/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          className="text-2xl font-black text-light cursor-pointer flex items-center gap-2 group"
          onClick={() => onNavigate("hero")}
        >
          <span className="bg-rust px-2 py-0.5 rounded group-hover:bg-rust/80 transition-colors text-dark">
            N
          </span>
          <span className="hidden sm:inline">Sahu</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className="text-sm font-medium hover:text-rust transition-colors capitalize tracking-widest"
            >
              {item}
            </button>
          ))}

          <button
            onClick={onEmailClick}
            aria-label="Contact via email"
            title={contactEmail}
            className="bg-light text-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-rust hover:text-light transition-all transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        <button className="md:hidden text-light" onClick={onToggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark border-b border-light/10 p-6 flex flex-col gap-6 animate-slide-down">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className="text-xl font-bold text-left capitalize hover:text-rust transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
