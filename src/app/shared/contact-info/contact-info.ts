/**
 * Single place to edit contact details used across the site
 * (header, hero, CTA band, floating WhatsApp button, footer, contact form).
 */

// WhatsApp number in international format, digits only, no + or spaces.
export const WHATSAPP_NUMBER = '918483051756';

// Message that's pre-filled when someone taps the WhatsApp button.
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Botanix Labs, I'd like to know more about your services.";

// Phone number used for the "Call Us" button (tel: link).
export const CALL_NUMBER = '+918483051756';
export const CALL_NUMBER_DISPLAY = '+91-8483051756';

// Where enquiries should actually land (used by FormSubmit — free, no backend needed).
export const ENQUIRY_EMAIL = 'info@botanixlabs.in';

// Pre-built WhatsApp deep link.
export const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
