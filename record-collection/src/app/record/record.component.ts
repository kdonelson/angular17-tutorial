import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Record } from '../record';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="record.photo"
        alt="record photo of {{ record.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ record.name }}</h2>
      <p class="listing-location">{{ record.artist }}, {{ record.release.toLocaleDateString() }}</p>
    </section>
  `,
  styleUrl: './record.component.scss'
})
export class RecordComponent {
  @Input() record!: Record;
}
