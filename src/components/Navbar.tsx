import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "opensource", label: "Open Source" },
  ];

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav>
      <a
        className="nav-logo"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavigate("hero");
        }}
      >
        <span className="logo-dot" />
        Naveen Sahu
      </a>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="hamburger" />
      </button>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("contact");
            }}
          >
            Hire Me
          </a>
        </li>
      </ul>

      <div className={`nav-mobile ${isOpen ? "open" : ""}`} role="menu">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                className="nav-mobile-link"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavigate("contact")}
              className="nav-mobile-link nav-cta"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
