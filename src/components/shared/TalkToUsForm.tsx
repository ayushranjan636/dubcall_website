import { useState } from "react";
import { Check } from "lucide-react";
import { openContactMailto } from "@/lib/contact-mailto";
import { Reveal } from "@/lib/motion";

export default function TalkToUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
    urgency: "normal",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    openContactMailto(formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      topic: "",
      message: "",
      urgency: "normal",
    });
    setTimeout(() => setSubmitted(false), 3500);
    setLoading(false);
  };

  return (
    <Reveal className="mx-auto w-full max-w-2xl">
      <div className="card p-8 md:p-10">
        <div className="mb-8">
          <span className="eyebrow">Talk to us</span>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Let's build your agent.
          </h1>
          <p className="mt-2 text-fg-muted">
            Share your use case and our team will respond within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="space-y-4 py-12 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success">
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-semibold">Thank you!</h3>
            <p className="text-fg-muted">Our team will contact you soon.</p>
            <div className="border-t border-line pt-4 text-sm text-fg-muted">
              Urgent?{" "}
              <a
                href="mailto:support@dubcall.com"
                className="font-semibold text-fg underline"
              >
                support@dubcall.com
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name *" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
              <Field label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
            </div>
            <Field label="Company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" />
            <SelectField label="Topic *" name="topic" value={formData.topic} onChange={handleChange} required>
              <option value="">Select a topic</option>
              <option value="demo">Request a demo</option>
              <option value="pricing">Pricing inquiry</option>
              <option value="integration">Integration help</option>
              <option value="enterprise">Enterprise solution</option>
              <option value="other">Other</option>
            </SelectField>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-fg-muted">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your use case…"
                className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm placeholder:text-fg-subtle focus:border-fg/30 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-fg py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </Reveal>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-fg-muted">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm placeholder:text-fg-subtle focus:border-fg/30 focus:outline-none"
      />
    </div>
  );
}

function SelectField(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    children: React.ReactNode;
  }
) {
  const { label, children, ...rest } = props;
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-fg-muted">{label}</label>
      <select
        {...rest}
        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm focus:border-fg/30 focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
}
