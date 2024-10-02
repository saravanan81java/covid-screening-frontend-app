import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelQuarantineQComponent } from './travel-quarantine-q.component';

describe('TravelQuarantineQComponent', () => {
  let component: TravelQuarantineQComponent;
  let fixture: ComponentFixture<TravelQuarantineQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelQuarantineQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelQuarantineQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
