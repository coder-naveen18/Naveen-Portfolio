import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { contactItems } from "../data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_FORM_STATE: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as
    | string
    | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
    | string
    | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
    | string
    | undefined;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured yet. Please add the EmailJS environment variables.",
      });
      return;
    }

    if (!formRef.current) return;

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setStatus({
        type: "success",
        message: "Email sent successfully. I will get back to you soon.",
      });
      setForm(INITIAL_FORM_STATE);
      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Sorry, the message could not be sent right now. Please try again in a moment.",
      });
      console.error("Email send failed:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="reveal">
        <div className="section-label">Contact</div>
        <h2 className="section-title">
          Let's work
          <br />
          together
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          I'm open to internships, full-time roles, and freelance
          collaborations. Reach out anytime!
        </p>
      </div>

      <div className="contact-layout reveal reveal-d1">
        <div className="contact-stack">
          <div className="contact-grid">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-card"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-label">{item.label}</div>
                <div className="contact-val">{item.value}</div>
              </a>
            ))}
          </div>

          <div className="contact-note">
            Prefer a quick message? Send the form and I’ll reply to your email.
          </div>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <h3 className="contact-form-title">Send a Message</h3>

          <label className="contact-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-field">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Tell me about your project, idea, or opportunity"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          {status.type !== "idle" && (
            <div
              className={`contact-status ${status.type === "success" ? "is-success" : "is-error"}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          )}

          <button type="submit" className="contact-submit" disabled={isSending}>
            {isSending ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
