import { experiences } from '../data'

export default function ExperienceSection() {
  return (
    <section className="exp-section" id="experience">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="reveal">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Where I've<br />worked</h2>
        </div>

        <div className="exp-list reveal reveal-d1">
          {experiences.map((exp) => (
            <div key={exp.company} className="exp-card">
              <div className="exp-top">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-date">{exp.period}</div>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="exp-tags">
                {exp.tags.map((t) => <span key={t} className="exp-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
