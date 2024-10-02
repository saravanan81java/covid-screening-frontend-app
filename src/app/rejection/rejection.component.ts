import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rejection',
  templateUrl: './rejection.component.html',
  styleUrls: ['./rejection.component.css'],
})
export class RejectionComponent {
  @Input() fullName: string | undefined = '';
  @Input() email: string | undefined = '';
  @Input() phone: string | undefined = '';
  resultIssuedOn: Date = new Date();
  resultValidUntil: Date = new Date(
    this.resultIssuedOn.getFullYear(),
    this.resultIssuedOn.getMonth(),
    this.resultIssuedOn.getDate(),
    23,
    59
  );

  constructor() {}
}
