import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordComponent } from '../record/record.component';
import { Record } from '../record';

import { RecordService } from '../record.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RecordComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Name" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for(record of recordList; track record) {
        <app-record [record]="record"></app-record>
      }      
    </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recordList: Record[] = [];
  recordService: RecordService = inject(RecordService);

  constructor() {
    this.recordList = this.recordService.getAllRecords();
  }
}
