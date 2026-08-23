import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface Client {
  name: string;
  logo: string;
}

interface ClientSpotlight {
  name: string;
  summary: string;
  pains: string[];
  solutions: string[];
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients: Client[] = [
    { name: 'R&I Automation', logo: 'assets/clients/ri-automation.png' },
    // { name: 'Festo', logo: 'assets/clients/festo.png' },
  ];

  spotlights: ClientSpotlight[] = [
    {
      name: 'R&I Automation',
      summary: 'An automation and machine building partner facing engineering capacity constraints across multiple simultaneous projects.',
      pains: [
        'Internal engineering team at full capacity',
        'Projects delayed due to unavailable mechanical design resources',
        'Difficulty hiring experienced mechanical designers quickly',
        'Needed temporary engineering capacity without permanent payroll cost',
        'Large CAD backlog — 3D models, assemblies, drawings, BOMs and detailing',
        'Required support for new machine development and machine variants',
        'Frequent engineering changes consuming senior engineers\' time',
        'Needed production-ready documentation while internal team focused on higher-value engineering',
        'Needed a partner who could work across time zones with clear communication',
      ],
      solutions: [
        'Deployed extended engineering team to absorb overflow capacity',
        'Delivered 3D CAD, assemblies and production-ready drawings on schedule',
        'Cleared CAD backlog while supporting new machine variants in parallel',
        'Took ownership of documentation and BOMs, freeing senior engineers for core design work',
        'Maintained clear cross-timezone communication and consistent engineering standards',
        'Provided scalable, on-demand capacity without adding to permanent headcount'
      ]
    }
  ];
}