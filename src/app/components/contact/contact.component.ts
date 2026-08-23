import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import {
  CALL_NUMBER,
  ENQUIRY_EMAIL,
  WHATSAPP_LINK
} from '../../shared/contact-info/contact-info';

interface ContactForm {
  name: string;
  email: string;
  mobile: string;
  location: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  whatsappLink = WHATSAPP_LINK;
  callLink = `tel:${CALL_NUMBER}`;

  formSubmitted = false;
  formError = false;
    errorMessage = '';        // 👈 YE NAYI LINE ADD KARO

  sending = false;

  form: ContactForm = {
    name: '',
    email: '',
    mobile: '',
    location: '',
    message: ''
  };

  // FormSubmit.co — free, no backend/server needed. The first submission
  // triggers a one-time confirmation email to ENQUIRY_EMAIL; click the link
  // in that email once to activate delivery, then every enquiry lands
  // straight in that inbox for free, forever.
  private readonly endpoint = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`;

async submitForm(): Promise<void> {
    if (!this.form.name || !this.form.email || !this.form.mobile || !this.form.message) {
      this.formError = true;
      this.errorMessage = 'Please fill Name, Email, Mobile and Message before submitting.';
      return;
    }

    this.sending = true;
    this.formError = false;
    this.errorMessage = '';

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: this.form.name,
          email: this.form.email,
          mobile: this.form.mobile,
          location: this.form.location,
          message: this.form.message,
          _subject: `New enquiry from ${this.form.name} — Botanix Labs website`
        })
      });

      if (!response.ok) {
        throw new Error('FormSubmit request failed');
      }

      this.formSubmitted = true;
      this.form = { name: '', email: '', mobile: '', location: '', message: '' };
      setTimeout(() => (this.formSubmitted = false), 8000);
    } catch (err) {
      this.formError = true;
    } finally {
      this.sending = false;
    }
  }
}
