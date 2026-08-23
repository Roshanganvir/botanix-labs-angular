import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { AboutComponent } from './components/about/about.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { ProcessComponent } from './components/process/process.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaComponent } from './components/cta/cta.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappFloatComponent } from './components/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    IndustriesComponent,
    ChallengesComponent,
    ClientsComponent,
    RatingsComponent,
    AboutComponent,
    WorkflowComponent,
    ProcessComponent,
    WhyUsComponent,
    FaqComponent,
    CtaComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFloatComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}