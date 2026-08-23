import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface MvBlock {
  tag: string;
  title: string;
  desc: string;
  image: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  values: string[] = [
     'Professionalism', 'Trust', 'Respect',
    'Responsibility', 'Integrity', 'Honesty'
  ];

  mission: MvBlock = {
    tag: 'MISSION',
    title: 'Mission',
    desc: 'To become a strategic partner for every client, delivering on time and with the highest quality for each of their needs, while also serving as a platform for personal and professional growth that improves the quality of life of every member of our workforce.',
    image: 'assets/values/mission.jpg'
  };

  vision: MvBlock = {
    tag: 'VISION',
    title: 'Vision',
    desc: 'To become a globally leading company in the development of high-technology automated systems, tailored to the process needs of each of our clients.',
    image: 'assets/values/vision.jpg'
  };
}