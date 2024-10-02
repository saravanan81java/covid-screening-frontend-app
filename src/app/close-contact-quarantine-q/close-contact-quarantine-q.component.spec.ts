import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseContactQuarantineQComponent } from './close-contact-quarantine-q.component';

describe('CloseContactQuarantineQComponent', () => {
  let component: CloseContactQuarantineQComponent;
  let fixture: ComponentFixture<CloseContactQuarantineQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloseContactQuarantineQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseContactQuarantineQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
