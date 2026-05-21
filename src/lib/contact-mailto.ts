export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  urgency: string;
};

export function openContactMailto(formData: ContactFormData) {
  const subject = `[DubCall] ${formData.topic || "Contact"} - ${formData.name}`;
  const body = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    formData.company ? `Company: ${formData.company}` : null,
    `Topic: ${formData.topic}`,
    `Urgency: ${formData.urgency}`,
    "",
    formData.message,
  ]
    .filter(Boolean)
    .join("\n");

  window.location.href = `mailto:support@dubcall.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
