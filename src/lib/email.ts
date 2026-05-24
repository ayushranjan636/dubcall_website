import emailjs from "@emailjs/browser";
import { BUSINESS_EMAIL, CONSOLE_URL } from "@/lib/links";

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  urgency: string;
};

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const BUSINESS_TEMPLATE = import.meta.env
  .VITE_EMAILJS_BUSINESS_TEMPLATE as string | undefined;
const CUSTOMER_TEMPLATE = import.meta.env
  .VITE_EMAILJS_CUSTOMER_TEMPLATE as string | undefined;

let initialized = false;
function ensureInit() {
  if (initialized || !PUBLIC_KEY) return;
  emailjs.init({ publicKey: PUBLIC_KEY });
  initialized = true;
}

export function isEmailConfigured() {
  return Boolean(
    PUBLIC_KEY && SERVICE_ID && BUSINESS_TEMPLATE && CUSTOMER_TEMPLATE
  );
}

/** Diagnostic helper — call from DevTools to see what env the bundle has. */
export function debugEmailConfig() {
  const cfg = {
    has_public_key: Boolean(PUBLIC_KEY),
    has_service_id: Boolean(SERVICE_ID),
    has_business_template: Boolean(BUSINESS_TEMPLATE),
    has_customer_template: Boolean(CUSTOMER_TEMPLATE),
    public_key_prefix: PUBLIC_KEY ? PUBLIC_KEY.slice(0, 4) + "…" : null,
    service_id: SERVICE_ID || null,
    business_template: BUSINESS_TEMPLATE || null,
    customer_template: CUSTOMER_TEMPLATE || null,
  };
  // eslint-disable-next-line no-console
  console.log("[DubCall:email] config", cfg);
  return cfg;
}

if (typeof window !== "undefined") {
  // expose for one-off live debugging from the browser console
  (window as unknown as { __dubcallEmail?: unknown }).__dubcallEmail = {
    debug: debugEmailConfig,
    isConfigured: isEmailConfigured,
  };
}

/** Format EmailJS errors (which are `{status, text}` plain objects, not Errors). */
function formatEmailJsError(err: unknown): string {
  if (err && typeof err === "object") {
    const e = err as { status?: number; text?: string; message?: string };
    if (e.status || e.text) {
      return `EmailJS ${e.status ?? "error"}: ${e.text ?? "(no detail)"}`;
    }
    if (e.message) return e.message;
  }
  if (err instanceof Error) return err.message;
  return "Unknown error";
}

/**
 * Sends two emails on form submit:
 *  1. Business notification to business@dubcall.com (sent FROM admin@dubcall.com via the EmailJS service connector)
 *  2. Customer auto-reply ("thanks, meanwhile explore the console")
 *
 * If EmailJS isn't configured (env vars missing), falls back to a `mailto:` open
 * so the form still works in development.
 */
export async function sendContactEmails(data: ContactFormData): Promise<void> {
  if (!isEmailConfigured()) {
    // eslint-disable-next-line no-console
    console.warn(
      "[DubCall:email] EmailJS not configured — falling back to mailto. Call window.__dubcallEmail.debug() to inspect."
    );
    fallbackMailto(data);
    return;
  }

  ensureInit();

  const sharedVars = {
    name: data.name,
    email: data.email,
    company: data.company || "—",
    topic: data.topic || "General",
    urgency: data.urgency || "normal",
    message: data.message,
    console_url: CONSOLE_URL,
    business_email: BUSINESS_EMAIL,
    submitted_at: new Date().toLocaleString(),
  };

  try {
    // 1) Notification to business@dubcall.com
    const businessPromise = emailjs.send(SERVICE_ID!, BUSINESS_TEMPLATE!, {
      ...sharedVars,
      to_email: BUSINESS_EMAIL,
      reply_to: data.email,
    });

    // 2) Auto-reply to the customer
    const customerPromise = emailjs.send(SERVICE_ID!, CUSTOMER_TEMPLATE!, {
      ...sharedVars,
      to_email: data.email,
      to_name: data.name,
    });

    const [businessRes, customerRes] = await Promise.all([
      businessPromise,
      customerPromise,
    ]);
    // eslint-disable-next-line no-console
    console.log("[DubCall:email] sent", {
      business: businessRes,
      customer: customerRes,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[DubCall:email] send failed", err);
    throw new Error(formatEmailJsError(err));
  }
}

function fallbackMailto(data: ContactFormData) {
  const subject = `[DubCall] ${data.topic || "Contact"} — ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    `Topic: ${data.topic}`,
    `Urgency: ${data.urgency}`,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
