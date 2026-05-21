import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openContactMailto } from "@/lib/contact-mailto";

interface TalkToUsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TalkToUs({ isOpen, onClose }: TalkToUsProps) {
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

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

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
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
    setLoading(false);
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
          onClick={onClose}
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
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-full text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="space-y-3 py-8 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                    <Check size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-semibold">Thank you!</h3>
                  <p className="text-sm text-fg-muted">
                    Our team will contact you soon.
                  </p>
                </div>
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
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-fg py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? "Sending…" : "Send message"}
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
