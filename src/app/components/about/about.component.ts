import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface CaseStudy {
  tag: string;
  title: string;
  desc: string;
  image: string;
}

interface Pillar {
  label: string;
  title: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  caseStudies: CaseStudy[] = [
    // {
    //   tag: 'CUSTOM MACHINERY',
    //   title: 'Automated Assembly Fixture Design',
    //   desc: 'Designed a custom assembly fixture for a manufacturing client, cutting cycle time and improving repeatability across the production line. Delivered as production-ready drawings, BOM, and 3D models.',
    //   image: 'assets/projects/project-1.svg'
    // },
    // {
    //   tag: 'PRODUCTION LINE ENGINEERING',
    //   title: 'Conveyor System Redesign',
    //   desc: 'Re-engineered an existing conveyor system to increase throughput and integrate new safety standards, coordinating closely with the client\'s on-site engineering team throughout.',
    //   image: 'assets/projects/project-2.svg'
    // },
    // {
    //   tag: 'MECHANICAL DESIGN',
    //   title: 'Precision Tooling & Jig Design',
    //   desc: 'Developed precision tooling and inspection jigs for a components manufacturer, reducing assembly errors and standardizing quality checks across shifts.',
    //   image: 'assets/projects/project-3.svg'
    // },
    // {
    //   tag: 'DRAFTING & DOCUMENTATION',
    //   title: 'Legacy Equipment 3D Reverse Engineering',
    //   desc: 'Converted legacy 2D drawings of aging equipment into fully detailed 3D CAD models, enabling the client to plan upgrades and source replacement parts with confidence.',
    //   image: 'assets/projects/project-4.svg'
    // }

 {
    tag: 'CUSTOM MACHINERY',
    title: 'Automated Assembly Fixture Design',
    desc: 'Designed a custom assembly fixture for a manufacturing client, cutting cycle time and improving repeatability across the production line. Delivered as production-ready drawings, BOM, and 3D models.',
    image: 'assets/projects/project-1.png'
  },
  {
    tag: 'PRODUCTION LINE ENGINEERING',
    title: 'Conveyor System Redesign',
    desc: 'Re-engineered an existing conveyor system to increase throughput and integrate new safety standards, coordinating closely with the client\'s on-site engineering team throughout.',
    image: 'assets/projects/project-2.png'
  },
  {
    tag: 'MECHANICAL DESIGN',
    title: 'Precision Tooling & Jig Design',
    desc: 'Developed precision tooling and inspection jigs for a components manufacturer, reducing assembly errors and standardizing quality checks across shifts.',
    image: 'assets/projects/project-3.png'
  },
  {
    tag: 'DRAFTING & DOCUMENTATION',
    title: 'Legacy Equipment 3D Reverse Engineering',
    desc: 'Converted legacy 2D drawings of aging equipment into fully detailed 3D CAD models, enabling the client to plan upgrades and source replacement parts with confidence.',
    image: 'assets/projects/project-4.png'
  }

  ];

  pillars: Pillar[] = [
    { label: 'Reach', title: 'Global remote collaboration across time zones' },
    { label: 'Standards', title: 'Designs delivered per ASME, ISO and industry norms' },
    { label: 'Support', title: '24/7 client support, from first sketch to manufacturing' }
  ];
}