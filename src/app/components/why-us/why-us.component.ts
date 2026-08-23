import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface WhyItem {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  whyItems: WhyItem[] = [
    { title: 'Engineering Excellence', desc: 'Real mechanical design experience behind every deliverable, not just CAD software operation.' },
    { title: 'Fast Project Delivery', desc: 'Dedicated focus that keeps drawings and models moving without long queues.' },
    { title: 'Industry-Grade Software', desc: 'A modern CAD and analysis stack used by engineering teams worldwide.' },
    { title: 'NDA Protected Projects', desc: 'Your project data and IP are protected under strict confidentiality agreements.' },
    { title: '24/7 Client Support', desc: 'Round-the-clock coordination so distance and time zones never slow your project down.' },
    { title: 'Quality-Driven Design', desc: 'Design reviews built into every stage of the process, not left until the end.' },
    { title: 'Global Remote Collaboration', desc: 'Structured check-ins and shared files, wherever your team is based.' },
    { title: 'Production-Ready Documentation', desc: 'Every project handed off with clean, versioned drawing packages and BOMs.' }
  ];
}
