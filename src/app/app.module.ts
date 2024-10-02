import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidScreeningComponent } from './covid-screening/covid-screening.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { PersonalInfoQComponent } from './personal-info-q/personal-info-q.component';
import { SymptomsQComponent } from './symptoms-q/symptoms-q.component';
import { WaitingForResultsQComponent } from './waiting-for-results-q/waiting-for-results-q.component';
import { DoctorIsolationQComponent } from './doctor-isolation-q/doctor-isolation-q.component';
import { CloseContactQComponent } from './close-contact-q/close-contact-q.component';
import { TravelQuarantineQComponent } from './travel-quarantine-q/travel-quarantine-q.component';
import { CloseContactQuarantineQComponent } from './close-contact-quarantine-q/close-contact-quarantine-q.component';
import { SuccessComponent } from './success/success.component';
import { RejectionComponent } from './rejection/rejection.component';
import { InstructionAfterCompletionComponent } from './instruction-after-completion/instruction-after-completion.component';
import { PrivacyStatementComponent } from './privacy-statement/privacy-statement.component';
import { LandingPageContentComponent } from './landing-page-content/landing-page-content.component';
import { ConsentQComponent } from './consent-q/consent-q.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    LandingPageContentComponent,
    ConsentQComponent,
    AppComponent,
    CovidScreeningComponent,
    FooterComponent,
    HeaderComponent,
    FormContainerComponent,
    PersonalInfoQComponent,
    SymptomsQComponent,
    WaitingForResultsQComponent,
    DoctorIsolationQComponent,
    CloseContactQComponent,
    TravelQuarantineQComponent,
    CloseContactQuarantineQComponent,
    SuccessComponent,
    RejectionComponent,
    PrivacyStatementComponent,
    InstructionAfterCompletionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
