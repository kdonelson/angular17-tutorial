import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordComponent } from '../record/record.component';
import { Record } from '../record';

import { RecordService } from '../record.service';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RecordComponent],
    template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Name" (keyup)="filterResults(filter.value)" #filter/>
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
    this.recordService.getAllRecords().then((recordList: Record[]) => {
      this.recordList = recordList;
      this.filteredRecordList = recordList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredRecordList = this.recordList;
    }

    const lowerCaseText = text.toLowerCase();

    this.filteredRecordList = this.recordList.filter(
      (record) => record?.title.toLowerCase().includes(lowerCaseText) ||
      record?.artist.toLowerCase().includes(lowerCaseText),
    );
  }
}
