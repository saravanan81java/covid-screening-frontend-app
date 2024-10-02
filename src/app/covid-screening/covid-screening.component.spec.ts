/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CovidScreeningComponent } from './covid-screening.component';

describe('CovidscreeningComponent', () => {
  let component: CovidScreeningComponent;
  let fixture: ComponentFixture<CovidScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CovidScreeningComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
