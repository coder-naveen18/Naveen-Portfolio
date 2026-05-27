import { contactItems } from '../data'

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="reveal">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let's work<br />together</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          I'm open to internships, full-time roles, and freelance collaborations. Reach out anytime!
        </p>
      </div>

      <div className="contact-grid reveal reveal-d1">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="contact-card"
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <div className="contact-icon">{item.icon}</div>
            <div className="contact-label">{item.label}</div>
            <div className="contact-val">{item.value}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
