import { Injectable } from '@angular/core';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  recordList: Record[] = [
    {
      id: 1,
      name: "Waking the Fallen",
      artist: "Avenged Sevenfold",
      release: new Date("2003-08-26"),
      label: "Hopeless Records",
      photo: "/assets/waking-the-fallen.jpg"
    },
    {
      id: 2,
      name: "Heaven:x:Hell",
      artist: "Sum 41",
      release: new Date("2024-03-29"),
      label: "Hopeless Records",
      photo: "/assets/heaven-hell.png"
    },
    {
      id: 3,
      name: "Shadows of the Dying Sun",
      artist: "Insomnium",
      release: new Date("2014-04-29"),
      label: "Century Media",
      photo: "/assets/Shadows_of_the_Dying_Sun.jpg"
    },
    {
      id: 4,
      name: "Anno 1696",
      artist: "Insomnium",
      release: new Date("2023-02-24"),
      label: "Century Media",
      photo: "/assets/anno-1696.png"
    }      
  ]

  getAllRecords(): Record[] {
    return this.recordList;
  }

  getRecordById(id: number): Record | undefined {
    return this.recordList.find((record) => record.id === id);
  }
}
