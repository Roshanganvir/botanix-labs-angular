import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: 'What is Botanix Labs?',
      answer: 'Botanix Labs is a global engineering outsourcing partner providing mechanical design, 3D CAD, prototyping and production-ready documentation for manufacturers and engineering teams.',
      open: true
    },
    {
      question: 'Is Botanix Labs available worldwide?',
      answer: 'Yes. We work with clients across time zones with structured, time-zone-friendly collaboration, and we are always happy to work with teams based outside India.',
      open: false
    },
    {
      question: 'What services does Botanix Labs offer?',
      answer: '3D CAD modeling, conveyor design, prototyping, CAD drafting and technical drawings, and extended engineering team support — from concept through to manufacturing.',
      open: false
    },
    {
      question: 'Is my project data secure with Botanix Labs?',
      answer: 'Every project is NDA protected, and we follow strict confidentiality practices to keep your designs and data secure throughout the engagement.',
      open: false
    },
    {
      question: 'What software do you use for CAD design?',
      answer: 'We work with industry-grade, industry-standard CAD and analysis software, and deliver designs per ASME, ISO and industry-specific compliance norms.',
      open: false
    },
    {
      question: 'What is the typical project turnaround time?',
      answer: 'Turnaround depends on project scope, but we prioritize fast project delivery and typically respond to new enquiries within 48 hours.',
      open: false
    }
  ];

  toggleFaq(item: FaqItem): void {
    item.open = !item.open;
  }
}
