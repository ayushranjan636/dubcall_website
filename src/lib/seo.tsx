import { useEffect } from "react";

/** Canonical production origin — keep in sync with public/sitemap.xml, public/robots.txt and public/llms.txt */
export const SITE_URL = "https://dubcall.com";

export type FaqItem = { question: string; answer: string };

/** Build schema.org FAQPage JSON-LD from on-page FAQ content (must mirror visible content). */
export function faqJsonLd(faqs: FaqItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

type SeoProps = {
  /** Full document title, e.g. "DubCall Pricing — AI Voice Agent Plans" */
  title: string;
  /** Meta description, ~150-165 chars, fact-dense */
  description: string;
  /** Route path starting with "/", e.g. "/pricing" */
  path: string;
  /** Optional route-specific JSON-LD block(s), e.g. faqJsonLd(...) */
  jsonLd?: object | object[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-route SEO: updates title, description, canonical, OG/Twitter tags and
 * injects route-specific JSON-LD. Static defaults live in index.html (which is
 * what non-JS AI crawlers see); this component keeps JS-rendering crawlers
 * (Googlebot, Bingbot) and the share sheet in sync per route.
 */
export default function Seo({ title, description, path, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    // Replace any previous route-level JSON-LD (site-wide entity graph in index.html is untouched)
    document.head.querySelectorAll('script[data-seo="route"]').forEach((n) => n.remove());
    const created: HTMLScriptElement[] = [];
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const block of blocks) {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.dataset.seo = "route";
        s.textContent = JSON.stringify(block);
        document.head.appendChild(s);
        created.push(s);
      }
    }
    return () => {
      created.forEach((n) => n.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, JSON.stringify(jsonLd)]);

  return null;
}
