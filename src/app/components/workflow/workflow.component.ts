import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface WorkflowStep {
  number: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {
  steps: WorkflowStep[] = [
    { number: '01', title: 'Discover', desc: 'Understand your production requirements and constraints.' },
    { number: '02', title: 'Concept', desc: 'Explore design directions and feasibility.' },
    { number: '03', title: 'Design', desc: 'Develop detailed 3D models and assemblies.' },
    { number: '04', title: 'Detail', desc: 'Refine tolerances, materials and manufacturability.' },
    { number: '05', title: 'Document', desc: 'Deliver production-ready drawings and BOMs.' },
    { number: '06', title: 'Support', desc: 'Ongoing engineering support as you scale.' }
  ];
}