import { useState, useEffect } from "react";
import { X, Check, ArrowRight, AlertCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmails, type ContactFormData } from "@/lib/email";
import { consoleLinkProps } from "@/lib/links";
import { useTalkToUs } from "@/lib/talk-to-us";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  topic: "",
  message: "",
  urgency: "normal",
};

export default function TalkToUs() {
  const { isOpen, close } = useTalkToUs();
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStatus("idle");
        setFormData(initialForm);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

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
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-fg/40 backdrop-blur-md p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="card max-h-[90vh] w-full max-w-md overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-line p-5">
              <h2 className="text-lg font-semibold">Talk to us</h2>
              <button
                onClick={close}
                className="grid h-8 w-8 place-items-center rounded-full text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6">
              {status === "sent" ? (
                <SuccessPanel onClose={close} />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field label="Full name *" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  <Field label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
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
                    <label className="mb-1.5 block text-xs font-medium text-fg-muted">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Tell us more…"
                      className="w-full resize-none rounded-xl border border-line bg-surface px-3 py-2.5 text-sm placeholder:text-fg-subtle focus:border-fg/30 focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-2 rounded-xl border border-danger/30 bg-danger/10 px-3 py-2.5 text-xs text-danger">
                      <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                      <span>{errorMsg || "Couldn't send. Please try again or email business@dubcall.com."}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-fg py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SuccessPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-4 py-6 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
        <Check size={28} strokeWidth={2.5} />
      </div>
      <h3 className="text-xl font-semibold">Thank you for writing to us!</h3>
      <p className="text-sm leading-relaxed text-fg-muted">
        We've received your message and our team will get back to you soon.
        Meanwhile, feel free to explore the DubCall console.
      </p>
      <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:gap-2">
        <a
          {...consoleLinkProps()}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fg px-4 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          Explore console
          <ExternalLink size={13} />
        </a>
        <button
          onClick={onClose}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-fg/5"
        >
          Close
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-fg-muted">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm placeholder:text-fg-subtle focus:border-fg/30 focus:outline-none"
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
        className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm focus:border-fg/30 focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
}
