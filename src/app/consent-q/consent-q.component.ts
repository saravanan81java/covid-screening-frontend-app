import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consent-q',
  templateUrl: './consent-q.component.html',
  styleUrls: ['./consent-q.component.css'],
})
export class ConsentQComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() {}

  onConsent() {
    this.messageEvent.emit(true);
  }
}
