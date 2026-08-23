import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WHATSAPP_LINK } from '../../shared/contact-info/contact-info';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.scss'
})
export class WhatsappFloatComponent {
  whatsappLink = WHATSAPP_LINK;
}
