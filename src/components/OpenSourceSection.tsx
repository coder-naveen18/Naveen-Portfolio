import {
  openSourceAchievements,
  openSourceSummary,
  openSourceCollage,
} from "../data";

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="opensource-section">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label">Open Source</div>
          <h2 className="section-title">Open Source Contributions</h2>
        </div>

        {openSourceCollage && (
          <div className="opensource-collage-wrap reveal reveal-d2">
            <a href={openSourceCollage.link} target="_blank" rel="noreferrer">
              <img
                src={openSourceCollage.src}
                alt="Holopin badges collage"
                className="opensource-collage"
              />
            </a>
          </div>
        )}

        <h3 className="opensource-subtitle reveal reveal-d2">
          Key Achievements
        </h3>
        <div className="opensource-achievements reveal reveal-d2">
          {openSourceAchievements.map((achievement) => (
            <div key={achievement} className="opensource-achievement-row">
              <span className="opensource-dot" />
              <p>{achievement}</p>
            </div>
          ))}
        </div>

        <div className="opensource-summary reveal reveal-d3">
          <p>{openSourceSummary}</p>
        </div>
      </div>
    </section>
  );
}
