import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  team: TeamMember[] = [
    {
      name: 'Iván Romero',
      role: 'Director R&D',
      image: 'assets/team/team-1.webp'
    },
    {
      name: 'Georgina Espinoza',
      role: 'Project Manager',
      image: 'assets/team/team-2.webp'
    },
    {
      name: 'Ramon Duran',
      role: 'Product Manager',
      image: 'assets/team/team-3.avif'
    },
    {
      name: 'Juan Ruíz',
      role: 'Mechanical Engineer',
      image: 'assets/team/team-4.webp'
    }
  ];
}