import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionAfterCompletionComponent } from './instruction-after-completion.component';

describe('InstructionAfterCompletionComponent', () => {
  let component: InstructionAfterCompletionComponent;
  let fixture: ComponentFixture<InstructionAfterCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionAfterCompletionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionAfterCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
