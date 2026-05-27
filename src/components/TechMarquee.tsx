import { useInfiniteMarquee } from '../hooks'
import { techPills } from '../data'

export default function TechMarquee() {
  useInfiniteMarquee('marqueeWrap', 'marqueeA')

  return (
    <div style={{ padding: '2rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: 'max-content' }} id="marqueeWrap">
        <div className="marquee-track" id="marqueeA">
          {techPills.map((pill) => (
            <span key={pill} className="tech-pill">{pill}</span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {techPills.map((pill) => (
            <span key={`b-${pill}`} className="tech-pill">{pill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
