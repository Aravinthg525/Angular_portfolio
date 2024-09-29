import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, LandingComponent, FooterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
