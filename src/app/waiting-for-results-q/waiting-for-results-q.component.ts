import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-waiting-for-results-q',
  templateUrl: './waiting-for-results-q.component.html',
  styleUrls: ['./waiting-for-results-q.component.css'],
})
export class WaitingForResultsQComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() {}

  onYes() {
    this.messageEvent.emit(true);
  }

  onNo() {
    this.messageEvent.emit(false);
  }
}
