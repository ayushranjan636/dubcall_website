import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TalkToUs from "@/components/shared/TalkToUs";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [talkToUsOpen, setTalkToUsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    return href !== "/" && location.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <motion.nav
        initial={false}
        animate={{
          maxWidth: scrolled ? 880 : 1080,
          paddingTop: scrolled ? 6 : 10,
          paddingBottom: scrolled ? 6 : 10,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "w-full glass flex items-center justify-between rounded-2xl px-4 transition-shadow duration-500",
          scrolled ? "shadow-soft" : "shadow-none"
        )}
      >
        <div className="flex items-center gap-1">
          <Link href="/" aria-label="DubCall home" className="flex items-center pr-3">
            <img
              src="/images/dubcall-logo.png"
              alt="DubCall"
              className="h-7 w-auto select-none object-contain dark:invert"
              draggable={false}
            />
          </Link>

          <div className="ml-3 hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-300",
                  isActive(link.href)
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-fg/10"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://console.dubcall.com/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/40 px-3.5 py-1.5 text-sm font-semibold text-fg transition-all duration-300 ease-apple hover:-translate-y-0.5 hover:border-fg/30 hover:bg-fg/5"
          >
            Sign in
            <ExternalLink
              size={12}
              className="text-fg-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
            />
          </a>
          <button
            onClick={() => setTalkToUsOpen(true)}
            className="rounded-full bg-fg px-4 py-1.5 text-sm font-semibold text-bg shadow-soft transition-transform duration-300 ease-apple hover:-translate-y-0.5 active:scale-95"
          >
            Talk to us
          </button>
        </div>

        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-fg"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass absolute left-3 right-3 top-[68px] mx-auto flex max-w-md flex-col gap-1 rounded-2xl p-3 shadow-soft md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-fg text-bg"
                    : "text-fg-muted hover:bg-fg/5 hover:text-fg"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-line pt-3">
              <ThemeToggle />
              <a
                href="https://console.dubcall.com/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-line px-3 py-2 text-center text-sm font-semibold transition-colors hover:bg-fg/5"
              >
                Sign in
                <ExternalLink size={11} className="text-fg-muted" />
              </a>
              <button
                onClick={() => {
                  setTalkToUsOpen(true);
                  setMenuOpen(false);
                }}
                className="flex-1 rounded-full bg-fg px-3 py-2 text-sm font-semibold text-bg"
              >
                Talk to us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <TalkToUs isOpen={talkToUsOpen} onClose={() => setTalkToUsOpen(false)} />
    </header>
  );
}
