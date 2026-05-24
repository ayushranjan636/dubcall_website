import { useState } from "react";
import { Check, AlertCircle, ExternalLink, ArrowRight } from "lucide-react";
import { sendContactEmails, type ContactFormData } from "@/lib/email";
import { consoleLinkProps, SUPPORT_EMAIL } from "@/lib/links";
import { Reveal } from "@/lib/motion";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  topic: "",
  message: "",
  urgency: "normal",
};

export default function TalkToUsForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendContactEmails(formData);
      setStatus("sent");
      setFormData(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Couldn't send. Please try again."
      );
    }
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

        {status === "sent" ? (
          <div className="space-y-4 py-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success">
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-semibold">Thank you for writing to us!</h3>
            <p className="mx-auto max-w-md leading-relaxed text-fg-muted">
              We've received your message and our team will get back to you soon.
              Meanwhile, feel free to explore the DubCall console.
            </p>
            <div className="mx-auto mt-4 flex max-w-md flex-col gap-3 pt-2 sm:flex-row">
              <a
                {...consoleLinkProps()}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                Explore console <ExternalLink size={13} />
              </a>
              <button
                onClick={() => setStatus("idle")}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:bg-fg/5"
              >
                Send another <ArrowRight size={13} />
              </button>
            </div>
            <div className="border-t border-line pt-5 text-sm text-fg-muted">
              Urgent?{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-semibold text-fg underline"
              >
                {SUPPORT_EMAIL}
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

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  {errorMsg || "Couldn't send."} You can also email us directly at{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="underline font-semibold">
                    {SUPPORT_EMAIL}
                  </a>
                  .
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-fg py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send message"}
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
