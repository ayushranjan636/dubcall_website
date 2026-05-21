import { useState } from "react";
import { openContactMailto } from "@/lib/contact-mailto";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    openContactMailto(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", topic: "", message: "", urgency: "normal" });
    setTimeout(() => setSubmitted(false), 3000);
    setLoading(false);
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-2xl bg-white border-2 border-black rounded-2xl shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)] p-6 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Talk to us</h1>
          <p className="text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and our team will respond as soon as possible.
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-6 py-12">
            <div className="text-6xl">✓</div>
            <h3 className="text-2xl font-bold">Thank you!</h3>
            <p className="text-gray-600">Our team will contact you soon.</p>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                If it's urgent, email us at{" "}
                <a href="mailto:support@dubcall.com" className="font-semibold text-black hover:underline">
                  support@dubcall.com
                </a>
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black"
                placeholder="your@email.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-2">Company (Optional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black"
                placeholder="Your company"
              />
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm font-medium mb-2">Topic *</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black"
              >
                <option value="">Select a topic</option>
                <option value="demo">Request a Demo</option>
                <option value="pricing">Pricing Inquiry</option>
                <option value="integration">Integration Help</option>
                <option value="enterprise">Enterprise Solution</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black resize-none"
                placeholder="Tell us more..."
                rows={5}
              />
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium mb-2">Urgency</label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black"
              >
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
              {formData.urgency === "urgent" && (
                <p className="text-xs text-red-600 mt-2">
                  For urgent matters, please email{" "}
                  <a href="mailto:support@dubcall.com" className="font-semibold hover:underline">
                    support@dubcall.com
                  </a>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-black text-white border-2 border-black rounded-lg text-sm font-medium hover:bg-gray-900 disabled:opacity-50 transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
