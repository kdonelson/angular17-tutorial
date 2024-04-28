import { Component, inject } from '@angular/core';
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
        <input type="text" placeholder="Filter by Name" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for(record of filteredRecordList; track record) {
        <app-record [record]="record"></app-record>
      }      
    </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recordList: Record[] = [];
  recordService: RecordService = inject(RecordService);
  filteredRecordList: Record[] = [];

  constructor() {
    this.recordList = this.recordService.getAllRecords();
    this.filteredRecordList = this.recordList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredRecordList = this.recordList;
    }

    this.filteredRecordList = this.recordList.filter(
      (record) => record?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
