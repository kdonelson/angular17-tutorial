import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <header class="brand-name">
      <img class="brand-logo" src="/assets/record-1.svg" alt="logo" aria-hidden="true" />
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'record-collection';
}
