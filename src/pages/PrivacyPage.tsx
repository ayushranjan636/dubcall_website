import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 border border-black rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white mb-6">
              <span className="w-2 h-2 rounded-full bg-black" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm">Last updated: January 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
              <p>
                DubCall (operated by NextSens Global Pvt. Ltd.) collects information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes name, email address, company name, and usage data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">3. Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. All data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Voice Call Data</h2>
              <p>
                Voice recordings and transcripts generated through our platform are processed to provide our services. Call data is retained according to your plan's data retention policy and never shared with third parties without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">5. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">6. Third-Party Services</h2>
              <p>
                Our service integrates with third-party services such as Twilio, ElevenLabs, and OpenAI to enable voice functionality. These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">7. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time. To exercise these rights, contact us at{" "}
                <a href="mailto:support@dubcall.com" className="text-black font-semibold underline">
                  support@dubcall.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@dubcall.com" className="text-black font-semibold underline">
                  support@dubcall.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
