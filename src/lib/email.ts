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

  await Promise.all([businessPromise, customerPromise]);
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
