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
export class IndustriesComponent {
  industries: IndustryItem[] = [
    { title: 'Industrial Automation', desc: 'Machine design, fixtures and conveyor systems for automated production lines.', icon: 'industrial' },
    { title: 'Automotive & Mobility', desc: 'Component and sub-assembly design supporting OEM and Tier suppliers.', icon: 'automotive' },
    { title: 'Manufacturing & Process', desc: 'Equipment integration and layouts engineered for real-world production facilities.', icon: 'process' },
    { title: 'Consumer Products', desc: 'Design-for-manufacture support taking products from prototype to production.', icon: 'consumer' }
  ];
}
