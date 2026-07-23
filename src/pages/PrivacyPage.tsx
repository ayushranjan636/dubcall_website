import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/lib/seo";
import { Reveal } from "@/lib/motion";

const sections = [
  {
    title: "1. Information We Collect",
    body: "DubCall (operated by NextSens Global Pvt. Ltd.) collects information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes name, email address, company name, and usage data.",
  },
  {
    title: "2. How We Use Your Information",
    bullets: [
      "Provide, maintain, and improve our services",
      "Process transactions and send related information",
      "Send technical notices, updates, and support messages",
      "Respond to your comments and questions",
      "Monitor and analyze trends and usage",
    ],
  },
  {
    title: "3. Data Security",
    body: "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. All data is encrypted in transit and at rest.",
  },
  {
    title: "4. Voice Call Data",
    body: "Voice recordings and transcripts generated through our platform are processed to provide our services. Call data is retained according to your plan's data retention policy and never shared with third parties without your explicit consent.",
  },
  {
    title: "5. Cookies",
    body: "We use cookies and similar tracking technologies to track activity on our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    title: "6. Third-Party Services",
    body: "Our service integrates with third-party services such as Twilio, ElevenLabs, and OpenAI to enable voice functionality. These services have their own privacy policies governing the use of your information.",
  },
  {
    title: "7. Your Rights",
    body: "You have the right to access, update, or delete your personal information at any time. To exercise these rights, contact us at support@dubcall.com.",
  },
  {
    title: "8. Contact Us",
    body: "If you have questions about this Privacy Policy, please contact us at support@dubcall.com.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Seo
        title="Privacy Policy | DubCall"
        description="How DubCall (NextSens Global Pvt. Ltd.) collects, uses, and protects your data — including call recordings, voice processing partners, and your data rights."
        path="/privacy"
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="eyebrow">Legal</span>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-fg-subtle">Last updated: January 2025</p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <Reveal key={s.title}>
                <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
                {s.body && (
                  <p className="mt-3 leading-relaxed text-fg-muted">{s.body}</p>
                )}
                {s.bullets && (
                  <ul className="mt-3 list-inside list-disc space-y-2 text-fg-muted">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
