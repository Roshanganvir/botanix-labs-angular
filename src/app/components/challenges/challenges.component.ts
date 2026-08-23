import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface ChallengeItem {
  trigger: string;
  question: string;
  solution: string;
}

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.scss'
})
export class ChallengesComponent {
  challenges: ChallengeItem[] = [
    { trigger: 'ENGINEERING OVERLOAD', question: 'Need more engineering capacity?', solution: 'Extended engineering team + outsourced design.' },
    { trigger: 'TIGHT DEADLINES', question: 'Need to deliver a machine faster?', solution: 'Concept-to-detail design + 3D CAD + detailing.' },
    { trigger: 'PROJECT BACKLOG', question: 'Need to automate a repetitive process?', solution: 'Automation concepts + SPM + conveyors.' },
    { trigger: 'MACHINE UPGRADES', question: 'Need to modify an existing machine?', solution: 'Redesign + design modifications + documentation.' },
    { trigger: 'HIRING COSTS', question: 'Need production-ready documentation?', solution: 'CAD drafting + detailing + BOMs.' }
  ];
}