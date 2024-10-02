import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-contact-quarantine-q',
  templateUrl: './close-contact-quarantine-q.component.html',
  styleUrls: ['./close-contact-quarantine-q.component.css'],
})
export class CloseContactQuarantineQComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() {}

  onYes() {
    this.messageEvent.emit(true);
  }

  onNo() {
    this.messageEvent.emit(false);
  }
}
