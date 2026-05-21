import { useState } from "react";
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    openContactMailto(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", topic: "", message: "", urgency: "normal" });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-md bg-white border-2 border-black rounded-2xl shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black">
          <h2 className="text-2xl font-bold">Talk to us</h2>
          <button onClick={onClose} className="text-2xl font-bold hover:opacity-50 transition-opacity">
            ×
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="text-5xl">✓</div>
              <h3 className="text-xl font-bold">Thank you!</h3>
              <p className="text-sm text-gray-600">Our team will contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                <input
                  type="text" name="company" value={formData.company} onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Topic *</label>
                <select
                  name="topic" value={formData.topic} onChange={handleChange} required
                  className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
                >
                  <option value="">Select a topic</option>
                  <option value="demo">Request a Demo</option>
                  <option value="pricing">Pricing Inquiry</option>
                  <option value="integration">Integration Help</option>
                  <option value="enterprise">Enterprise Solution</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required
                  className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0 resize-none"
                  placeholder="Tell us more..." rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Urgency</label>
                <select
                  name="urgency" value={formData.urgency} onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0"
                >
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgent</option>
                  <option value="asap">ASAP</option>
                </select>
              </div>
              <button
                type="submit" disabled={loading}
                className="w-full py-3 rounded-lg border-2 border-black bg-black text-white font-bold hover:bg-white hover:text-black transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
