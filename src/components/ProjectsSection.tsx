import { projects } from '../data'

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've<br />built</h2>
        </div>

        <div className="projects-grid reveal reveal-d1">
          {projects.map((p) => (
            <div
              key={p.name}
              className="project-card"
              style={p.featured ? { background: 'rgba(167,139,250,.03)' } : undefined}
            >
              <div className="project-num">{p.num}</div>
              <div className="project-icon">{p.icon}</div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  {p.linkLabel}
                </a>
              )}
              {p.note && (
                <span style={{ fontSize: '.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>{p.note}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
