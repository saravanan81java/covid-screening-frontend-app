import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseContactQComponent } from './close-contact-q.component';

describe('CloseContactQComponent', () => {
  let component: CloseContactQComponent;
  let fixture: ComponentFixture<CloseContactQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloseContactQComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseContactQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
