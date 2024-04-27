import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/record-1.svg" alt="logo" aria-hidden="true" />
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'record-collection';
}
