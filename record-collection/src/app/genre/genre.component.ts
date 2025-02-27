import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordComponent } from '../record/record.component';

@Component({
    selector: 'app-genre',
    imports: [CommonModule, RecordComponent],
    template: `
    <section class="genre">
      <!-- <app-record [record]="parentRecord"></app-record> -->
    </section>
  `,
    styleUrl: './genre.component.scss'
})
export class GenreComponent {
  // @Input() parentRecord!: Record;
}
