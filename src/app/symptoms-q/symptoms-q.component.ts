import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-symptoms-q',
  templateUrl: './symptoms-q.component.html',
  styleUrls: ['./symptoms-q.component.css'],
})
export class SymptomsQComponent {
  @Output() messageEvent = new EventEmitter<boolean>();

  listOfSymptomIds = [
    'question.symptoms.cough',
    'question.symptoms.breathing',
    'question.symptoms.throat',
    'question.symptoms.nose',
    'question.symptoms.temperature',
    'question.symptoms.feverish',
    'question.symptoms.chills',
    'question.symptoms.fatigue',
    'question.symptoms.muscle',
    'question.symptoms.taste',
    'question.symptoms.headache',
    'question.symptoms.gastrointestinal',
    'question.symptoms.unwell',
  ];

  constructor() {}

  onYes() {
    this.messageEvent.emit(true);
  }

  onNo() {
    this.messageEvent.emit(false);
  }
}
