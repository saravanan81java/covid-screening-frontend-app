import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doctor-isolation-q',
  templateUrl: './doctor-isolation-q.component.html',
  styleUrls: ['./doctor-isolation-q.component.css'],
})
export class DoctorIsolationQComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() {}

  onYes() {
    this.messageEvent.emit(true);
  }

  onNo() {
    this.messageEvent.emit(false);
  }
}
