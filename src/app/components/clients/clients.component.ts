import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface Client {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients: Client[] = [
    { name: 'R&I Automation', logo: 'assets/clients/ri-automation.png' },
    // { name: 'Festo', logo: 'assets/clients/festo.png' },
    // { name: 'Maxeon', logo: 'assets/clients/maxeon.png' },
    // { name: 'PIMS', logo: 'assets/clients/pims.png' },
    // { name: 'Intuitive Surgical', logo: 'assets/clients/intuitive-surgical.png' },
    // { name: 'Fevisa', logo: 'assets/clients/fevisa.png' },
    // { name: 'GAF Energy', logo: 'assets/clients/gaf-energy.png' },
    // { name: 'Flextronics', logo: 'assets/clients/flextronics.png' },
    // { name: 'Furukawa Electric Group', logo: 'assets/clients/furukawa.png' },
    // { name: 'Jabil', logo: 'assets/clients/jabil.png' },
    // { name: 'Allegion', logo: 'assets/clients/allegion.png' }
  ];
}