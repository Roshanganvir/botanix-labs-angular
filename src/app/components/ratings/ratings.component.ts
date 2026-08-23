import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface StarRow {
  label: string;
  value: number;
}

interface Metric {
  label: string;
  value: number;
}

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {
  starRows: StarRow[] = [
    { label: '5★', value: 66 },
    { label: '4★', value: 5 },
    { label: '3★', value: 5 },
    { label: '2★', value: 5 },
    { label: '1★', value: 19 }
  ];

  metrics: Metric[] = [
    { label: 'Response', value: 70 },
    { label: 'Quality', value: 85 },
    { label: 'Delivery', value: 80 }
  ];

  overallScore = '4.3';
  reviewCount = 38;
}
