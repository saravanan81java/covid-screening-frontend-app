import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-travel-quarantine-q',
  templateUrl: './travel-quarantine-q.component.html',
  styleUrls: ['./travel-quarantine-q.component.css'],
})
export class TravelQuarantineQComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() {}

  onYes() {
    this.messageEvent.emit(true);
  }

  onNo() {
    this.messageEvent.emit(false);
  }
}
