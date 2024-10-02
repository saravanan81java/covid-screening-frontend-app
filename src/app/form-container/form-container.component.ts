import { Component } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { Submission } from '../submission';

enum Step {
  ConsentQ = 'ConsentQ',
  PersonalInfoQ = 'PersonalInfoQ',
  SymptomsQ = 'SymptomsQ',
  WaitingForResultsQ = 'WaitingForResultsQ',
  DoctorIsolationQ = 'DoctorIsolationQ',
  CloseContactQ = 'CloseContactQ',
  TravelQuarantineQ = 'TravelQuarantineQ',
  CloseContactQuarantineQ = 'CloseContactQuarantineQ',
  Rejection = 'Rejection',
  Success = 'Success',
}

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css'],
})
export class FormContainerComponent {
  formData: Submission = {};

  currentStep: Step = Step.ConsentQ;

  constructor(private submissionService: SubmissionService) {}

  nextStep() {
    switch (this.currentStep) {
      case Step.ConsentQ: {
        this.currentStep = Step.PersonalInfoQ;
        break;
      }
      case Step.PersonalInfoQ: {
        this.currentStep = Step.SymptomsQ;
        break;
      }
      case Step.SymptomsQ: {
        this.currentStep = Step.WaitingForResultsQ;
        break;
      }
      case Step.WaitingForResultsQ: {
        this.currentStep = Step.DoctorIsolationQ;
        break;
      }
      case Step.DoctorIsolationQ: {
        this.currentStep = Step.CloseContactQ;
        break;
      }
      case Step.CloseContactQ: {
        this.currentStep = Step.TravelQuarantineQ;
        break;
      }
      case Step.TravelQuarantineQ: {
        this.currentStep = Step.CloseContactQuarantineQ;
        break;
      }
      case Step.TravelQuarantineQ: {
        this.currentStep = Step.CloseContactQuarantineQ;
        break;
      }
      case Step.CloseContactQuarantineQ: {
        this.currentStep = Step.Success;
        break;
      }
      default: {
        this.currentStep = Step.Rejection;
        break;
      }
    }
  }

  jumpToRejection() {
    this.currentStep = Step.Rejection;
  }

  receiveMessage($event: any) {
    this.formData[this.currentStep] = $event;

    if ($event === true && this.currentStep != Step.ConsentQ) {
      this.jumpToRejection();
    } else {
      this.nextStep();
    }

    if (
      this.currentStep === Step.Success ||
      this.currentStep === Step.Rejection
    ) {
      this.submissionService.saveSubmission(this.formData).subscribe();
    }
  }
}
