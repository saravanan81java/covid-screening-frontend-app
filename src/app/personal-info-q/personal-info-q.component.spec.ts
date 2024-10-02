import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoQComponent } from './personal-info-q.component';

describe('PersonalInfoQComponent', () => {
  let component: PersonalInfoQComponent;
  let fixture: ComponentFixture<PersonalInfoQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalInfoQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
