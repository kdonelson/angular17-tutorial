import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Record } from '../record';

import { RecordService } from '../record.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if(record !== undefined) {
      <article>
      <img
        class="listing-photo"
        [src]="record.photo"
        alt="photo of {{ record.title }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ record.title }}</h2>
        <p class="listing-location">{{ record.artist }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this Record</h2>
        <ul>
          <li>Release Year: {{ releaseDateString }}</li>
          <li>Record Label: {{ record.recordLabel }}</li>
        </ul>
      </section>

    </article>
    }
    
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  record: Record | undefined;
  releaseDateString: string;
  recordService: RecordService = inject(RecordService);

  constructor() {
    const recordId = Number(this.route.snapshot.params['id']);
    this.recordService.getRecordById(recordId).then((record) => {
      this.record = record;
    });

    this.releaseDateString = this.record !== undefined ? this.record?.releaseDate.toDateString() : "";
  }
}
