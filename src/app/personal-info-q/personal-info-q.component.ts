import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-info-q',
  templateUrl: './personal-info-q.component.html',
  styleUrls: ['./personal-info-q.component.css'],
})
export class PersonalInfoQComponent {
  model = {
    fullName: '',
    email: '',
    phone: '',
  };

  @Output() messageEvent = new EventEmitter<{
    fullName: string;
    email: string;
    phone: string;
  }>();

  constructor() {}

  onSubmit() {
    this.messageEvent.emit(this.model);
  }
}
