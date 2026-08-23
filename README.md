# Botanix Labs — Angular Site (component-per-section)

Every section of the page is its own standalone Angular component, each with
its own `.ts` / `.html` / `.scss` — nothing is bundled into one giant
component, so any section can be edited or handed to a different person
without touching the rest.

## Run it

```bash
npm install
npm start
```
(or `npx ng serve` / `ng serve` if you have the Angular CLI installed globally)

Then open http://localhost:4200.

## Structure

```
src/
  app/
    app.component.ts/html/scss     -> shell that lists the sections in order
    shared/
      reveal/reveal.directive.ts   -> [appReveal] scroll-in animation, shared by all sections
    components/
      header/      -> sticky nav, logo, mobile menu
      hero/         -> headline + logo mark
      services/     -> 6 service cards
      industries/   -> 4 industry cards
      clients/      -> testimonial + international-collaboration strip
      ratings/      -> star breakdown + response/quality/delivery bars
      about/        -> about copy + pillars
      process/      -> 6-step "idea to reality" track
      why-us/        -> 8-feature grid
      faq/          -> accordion (click to expand)
      cta/          -> "Have an engineering requirement?" band
      contact/      -> contact info + enquiry form
      footer/       -> footer links + legal
  assets/logo.png    -> your logo, background removed
  styles.scss         -> shared design tokens + utility classes (colors, buttons,
                          .wrap, .section, .eyebrow, etc.) used by every component
```

## How it fits together

- `AppComponent` just imports all 13 section components and lists them in
  `app.component.html` — reorder sections by reordering the tags there.
- Shared classes (`.wrap`, `.btn`, `.section`, `.eyebrow`, colors, etc.) live
  in the **global** `src/styles.scss` so every component can use them without
  duplicating CSS. Anything unique to one section (grid layouts, that
  section's specific classes) lives in that component's own `.scss` file.
- The scroll-reveal fade-in effect is a small reusable directive
  (`appReveal`) instead of being copy-pasted into every component.

## Editing a section

Want to change just the FAQ copy? Open `src/app/components/faq/faq.component.ts`
and edit the `faqs` array — the template and styles for FAQ live only in that
folder and don't affect anything else.

## WhatsApp, Call, and the contact form (all free, no backend)

All contact details live in one file:
`src/app/shared/contact-info/contact-info.ts`

```ts
export const WHATSAPP_NUMBER = '918483051756';     // your WhatsApp number, country code, no + or spaces
export const WHATSAPP_DEFAULT_MESSAGE = "Hi Botanix Labs, I'd like to know more about your services.";
export const CALL_NUMBER = '+918483051756';         // used by the "Call Us" tel: link
export const ENQUIRY_EMAIL = 'roshanganvir13@gmail.com'; // where form enquiries land
```
Edit these three values and every WhatsApp button, Call Us button, and the
contact form update automatically — they all read from this one file.

**WhatsApp button** — opens `wa.me` with the message pre-filled. Used in:
the CTA band, the Contact section, and a floating button (bottom-right,
visible on every page) — `components/whatsapp-float/`.

**Call Us button** — plain `tel:` link, opens the phone dialer on mobile.

**Contact form → your Gmail (free)** — the "Send Enquiry" form posts to
[FormSubmit.co](https://formsubmit.co), a free service that forwards form
submissions straight to an email address with zero backend/server needed.

**One-time activation step:** the *first* time the form is submitted (by you
or by a visitor), FormSubmit sends a confirmation email to
`roshanganvir13@gmail.com`. Open that email and click the confirm/activate
link once — after that, every future enquiry is delivered to that inbox
automatically, for free, with no signup or API key required.

If you'd rather use a different free option later (e.g. EmailJS, for more
control over the email template), only `contact.component.ts`'s
`submitForm()` method needs to change — the form UI stays the same.
