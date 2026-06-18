// Contact helpers — WhatsApp primary; email + Instagram secondary.
export const WA_PHONE = "918796447105";
export const WA_DISPLAY = "+91 87964 47105";
export const EMAIL = "sandookstory.in@gmail.com";
export const INSTAGRAM_HANDLE = "@sandookstory.in";
export const INSTAGRAM_URL = "https://instagram.com/sandookstory.in";
export const STUDIO_LOCATION = "Made slowly in India";

export function waLink(message) {
  const text = encodeURIComponent(
    message ||
      "Hi Sandook Story! I'd love to begin my sandook story. Could you tell me more?"
  );
  return `https://wa.me/${WA_PHONE}?text=${text}`;
}

// Legacy alias so existing callers keep working
export const enquireLink = (_subject, body) => waLink(body);
