export const CONSOLE_URL = "https://console.dubcall.com/overview";
export const SUPPORT_EMAIL = "support@dubcall.com";
export const BUSINESS_EMAIL = "business@dubcall.com";

export function consoleLinkProps() {
  return {
    href: CONSOLE_URL,
    target: "_blank" as const,
    rel: "noopener noreferrer",
  };
}
