import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
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
      name: 'Manish Hiraskar',
      role: 'Founder - CEO',
      image: 'assets/team/team-1.png',
      bio: 'With 5+ years of experience across Special Purpose Machine (SPM) automation, mechanical engineering, and product development, Manish founded Botanix to help manufacturers turn ideas into practical, production-ready solutions.'
    },
    {
      name: 'Georgina Espinoza',
      role: 'Project Manager',
      image: 'assets/team/team-2.webp',
      bio: 'Oversees project timelines and client coordination, ensuring every engineering deliverable meets deadline and quality standards.'
    },
    {
      name: 'Ramon Duran',
      role: 'Product Manager',
      image: 'assets/team/team-3.avif',
      bio: 'Bridges client requirements and engineering execution, translating production challenges into actionable design briefs.'
    },
    {
      name: 'Juan Ruíz',
      role: 'Mechanical Engineer',
      image: 'assets/team/team-4.webp',
      bio: 'Hands-on mechanical engineer specializing in machine design, assemblies, and production-ready detailing.'
    }
  ];
}