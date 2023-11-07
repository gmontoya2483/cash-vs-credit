import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseResumeComponent } from './expense-resume.component';

describe('ExpenseResumeComponent', () => {
  let component: ExpenseResumeComponent;
  let fixture: ComponentFixture<ExpenseResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseResumeComponent]
    });
    fixture = TestBed.createComponent(ExpenseResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
