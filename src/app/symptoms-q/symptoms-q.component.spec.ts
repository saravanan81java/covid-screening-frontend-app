import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsQComponent } from './symptoms-q.component';

describe('SymptomsQComponent', () => {
  let component: SymptomsQComponent;
  let fixture: ComponentFixture<SymptomsQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymptomsQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
