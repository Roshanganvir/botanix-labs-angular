import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface IndustryItem {
  title: string;
  desc: string;
  icon: 'industrial' | 'automotive' | 'process' | 'consumer';
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})

// export class IndustriesComponent {
//   industries: IndustryItem[] = [
//     { title: 'Industrial Automation', desc: 'Machine design, fixtures and conveyor systems for automated production lines.', icon: 'industrial' },
//     { title: 'Warehouse Automation', desc: 'Component and sub-assembly design supporting OEM and Tier suppliers.', icon: 'automotive' },
//     { title: 'Pharmacy Industry', desc: 'Equipment integration and layouts engineered for real-world production facilities.', icon: 'process' },
//     { title: 'FMCG', desc: 'Design-for-manufacture support taking products from prototype to production.', icon: 'consumer' }
//   ];
// }

export class IndustriesComponent {
  industries: IndustryItem[] = [
    {
      title: 'Industrial Automation',
      desc: 'Automation solutions, machine design, fixtures and conveyor systems for efficient production lines.',
      icon: 'industrial'
    },
    {
      title: 'Warehouse Automation',
      desc: 'Automated material handling, storage and conveyor solutions designed for modern warehouse operations.',
      icon: 'automotive'
    },
    {
      title: 'Pharmacy Industry',
      desc: 'Precision equipment, production layouts and automation solutions for pharmaceutical manufacturing facilities.',
      icon: 'process'
    },
    {
      title: 'FMCG',
      desc: 'Efficient production, packaging and automation solutions designed to support high-volume FMCG operations.',
      icon: 'consumer'
    }
  ];
}
