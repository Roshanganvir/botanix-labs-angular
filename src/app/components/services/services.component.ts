import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: ServiceItem[] = [
  {
    num: '01',
    title: '3D CAD Services & Technical Drawings',
    desc: 'From initial sketch to production-ready, manufacturable models — plus precise 2D technical drawings and documentation prepared for accurate, efficient manufacturing.',
    image: 'assets/services/cad_services_icon_v2_1.svg'
  },
  {
    num: '02',
    title: 'Conveyor Design Solutions',
    desc: 'Fully customized conveyor systems engineered to maximize throughput and minimize downtime, integrated seamlessly with your existing facility.',
    image: 'assets/services/conveyor_design_icon_v2_2.svg'
  },
  {
    num: '03',
    title: 'Prototyping Development',
    desc: 'Rapid prototyping that lets you test, iterate and validate designs quickly, catching flaws early before committing to production.',
    image: 'assets/services/prototyping_icon_v2_3.svg'
  },
  {
    num: '04',
    title: 'Outsourcing Partner Support',
    desc: 'Dedicated engineering support that acts as a true extension of your in-house team, scaled to your project workload.',
    image: 'assets/services/outsourcing_support_icon_v2_5.svg'
  },
  {
    num: '05',
    title: 'Extended Engineering Team',
    desc: 'Seamless team integration for manufacturers who need reliable, scalable mechanical design capacity on demand.',
    image: 'assets/services/extended_team_icon_v2_6.svg'
  },
  {
    num: '06',
    title: 'Industrial Automation',
    desc: 'End-to-end automation engineering — from control system design to PLC integration — built to streamline production lines and reduce manual intervention.',
    image: 'assets/services/industrial_automation_icon_v2_7.svg'
  }
];
}