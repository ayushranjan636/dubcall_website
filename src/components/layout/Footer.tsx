import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:support@dubcall.com?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(`Please subscribe this email: ${email}`)}`;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xl font-bold">D</span>
              </div>
              <span className="text-xl font-bold">DubCall</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI Voice Calls & Agents at scale. Intelligent voice AI by GenData
              Technologies.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wider text-gray-300">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/product"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Agent Studio
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wider text-gray-300">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/resources"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4 uppercase tracking-wider text-gray-300">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@dubcall.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-start gap-2"
                >
                  <span>📧</span>
                  <span>support@dubcall.com</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-start gap-2"
                >
                  <span>📞</span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-3">Subscribe to our newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates on AI voice technology and product news.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                {subscribed ? "Thanks!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NextSens Global Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
