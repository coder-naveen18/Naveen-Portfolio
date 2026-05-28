import { skillGroups, stats } from "../data";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="reveal">
          <div className="section-label">About me</div>
          <h2 className="section-title">
            Developer.
            <br />
            Problem solver.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Builder.
            </em>
          </h2>
          <div className="about-text" style={{ marginTop: "1.5rem" }}>
            <p>
              I'm a recently graduated B.Tech CSE student at Vivekananda
              Institute of Technology, Jaipur with a strong foundation in full
              stack development.
            </p>
            <p>
              I enjoy architecting end-to-end systems — from designing
              relational database schemas and secure REST APIs to building
              responsive, pixel-perfect frontends that users love.
            </p>
            <p>
              Currently building a Hospital Management System at IQuint
              Technology Services, handling real-world complexity like
              role-based access control, billing workflows, and analytics
              dashboards.
            </p>
          </div>
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-cell">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-d1">
          <div className="section-label">Technical skills</div>
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="skills-group"
              style={{
                marginTop: group.label === "Frontend" ? "1.5rem" : undefined,
              }}
            >
              <div className="skills-group-label">{group.label}</div>
              <div className="skills-tags">
                {group.skills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="skills-group">
            <div className="skills-group-label">Education</div>
            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: ".88rem",
                  fontWeight: 500,
                  marginBottom: ".25rem",
                }}
              >
                B.Tech — Computer Science
              </div>
              <div style={{ fontSize: ".78rem", color: "var(--accent)" }}>
                Vivekananda Institute of Technology, Jaipur
              </div>
              <div
                style={{
                  fontSize: ".75rem",
                  color: "var(--muted)",
                  marginTop: ".2rem",
                }}
              >
                2022 - 2026{" "}
              </div>
            </div>

            <br />
            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: ".88rem",
                  fontWeight: 500,
                  marginBottom: ".25rem",
                }}
              >
                Senior Secondary (Science – Mathematics)
              </div>
              <div style={{ fontSize: ".78rem", color: "var(--accent)" }}>
                NEW SARASWATI BAL V M SR SEC SCH,GUJRATI
                MOHALLA,INDRAGARH(BUNDI)
              </div>
              <div
                style={{
                  fontSize: ".75rem",
                  color: "var(--muted)",
                  marginTop: ".2rem",
                }}
              >
                2021 --- 97.40%{" "}
              </div>
            </div>

            <br />
            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: ".88rem",
                  fontWeight: 500,
                  marginBottom: ".25rem",
                }}
              >
                Secondary Education
              </div>
              <div style={{ fontSize: ".78rem", color: "var(--accent)" }}>
                ADARSH BAL VIDHYA MANDIR SEC SCH,KARWAR(BUNDI)
              </div>
              <div
                style={{
                  fontSize: ".75rem",
                  color: "var(--muted)",
                  marginTop: ".2rem",
                }}
              >
                2019 --- 87.83%{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
