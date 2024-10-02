import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-contact-q',
  templateUrl: './close-contact-q.component.html',
  styleUrls: ['./close-contact-q.component.css'],
})
export class CloseContactQComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() {}

  onYes() {
    this.messageEvent.emit(true);
  }

  onNo() {
    this.messageEvent.emit(false);
  }
}
