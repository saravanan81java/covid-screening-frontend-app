import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
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
