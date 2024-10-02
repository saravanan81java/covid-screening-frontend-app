import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingForResultsQComponent } from './waiting-for-results-q.component';

describe('WaitingForResultsQComponent', () => {
  let component: WaitingForResultsQComponent;
  let fixture: ComponentFixture<WaitingForResultsQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaitingForResultsQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingForResultsQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
