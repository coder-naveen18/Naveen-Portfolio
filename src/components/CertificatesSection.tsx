import { certificates } from '../data'

export default function CertificatesSection() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: '6rem' }} id="certs">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="reveal">
          <div className="section-label">Certifications</div>
          <h2 className="section-title" style={{ marginBottom: '.5rem' }}>Credentials</h2>
        </div>

        <div className="certs-grid reveal reveal-d1">
          {certificates.map((c) => (
            <div key={c.name} className="cert-card">
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-date">{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
