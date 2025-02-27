import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Record } from '../record';

@Component({
    selector: 'app-record',
    imports: [CommonModule, RouterModule],
    template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="record.photo"
        alt="record photo of {{ record.title }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ record.title }}</h2>
      <p class="listing-location">{{ record.artist }}</p>
      <a [routerLink]="['/details', record.recordId]">Learn More</a>
    </section>
  `,
    styleUrl: './record.component.scss'
})
export class RecordComponent {
  @Input() record!: Record;
}
