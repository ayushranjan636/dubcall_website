import { useState } from "react";
import { Link } from "wouter";
import { Mail } from "lucide-react";
import { XIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from "@/components/icons/Brand";
import { useTalkToUs } from "@/lib/talk-to-us";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/product" },
      { label: "Agent Studio", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/product" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/privacy" },
      { label: "Cookie Policy", href: "/privacy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact" },
      { label: "Support", href: "talk-to-us" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { open: openTalkToUs } = useTalkToUs();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:support@dubcall.com?subject=${encodeURIComponent(
      "Newsletter signup"
    )}&body=${encodeURIComponent(`Please subscribe this email: ${email}`)}`;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="DubCall home" className="inline-flex items-center">
              <img
                src="/images/dubcall-logo.png"
                alt="DubCall"
                className="h-8 w-auto select-none object-contain dark:invert"
                draggable={false}
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              Agentic AI voice agents for support, leads, and sales — built by
              NextSens Global Pvt. Ltd.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: XIcon, href: "#", label: "X" },
                {
                  Icon: LinkedInIcon,
                  href: "https://www.linkedin.com/company/dubcall",
                  label: "LinkedIn",
                },
                {
                  Icon: InstagramIcon,
                  href: "https://www.instagram.com/_dubcall.com_/",
                  label: "Instagram",
                },
                { Icon: GitHubIcon, href: "#", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-colors hover:bg-fg hover:text-bg"
                  aria-label={label}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "talk-to-us" ? (
                      <button
                        type="button"
                        onClick={openTalkToUs}
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-base font-semibold">Subscribe to updates</h3>
            <p className="mt-1.5 text-sm text-fg-muted">
              Get the latest in AI voice technology and product news.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-full border border-line bg-bg px-4 py-2.5 text-sm placeholder:text-fg-subtle focus:border-fg/30 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              {subscribed ? "✓ Thanks" : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-fg-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} NextSens Global Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:support@dubcall.com" className="flex items-center gap-1.5 hover:text-fg">
              <Mail size={12} />
              support@dubcall.com
            </a>
            <Link href="/privacy" className="hover:text-fg">
              Privacy
            </Link>
            <Link href="/privacy" className="hover:text-fg">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
