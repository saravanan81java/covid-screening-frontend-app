import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentQComponent } from './consent-q.component';

describe('ConsentQComponent', () => {
  let component: ConsentQComponent;
  let fixture: ComponentFixture<ConsentQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsentQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
