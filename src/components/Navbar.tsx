export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#">
        <span className="logo-dot" />
        Naveen Sahu
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" className="nav-cta">Hire Me</a></li>
      </ul>
    </nav>
  )
}
