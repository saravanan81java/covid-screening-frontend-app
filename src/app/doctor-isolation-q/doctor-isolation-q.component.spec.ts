import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorIsolationQComponent } from './doctor-isolation-q.component';

describe('DoctorIsolationQComponent', () => {
  let component: DoctorIsolationQComponent;
  let fixture: ComponentFixture<DoctorIsolationQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorIsolationQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorIsolationQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
