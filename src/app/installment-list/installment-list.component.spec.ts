import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentListComponent } from './installment-list.component';

describe('InstallmentListComponent', () => {
  let component: InstallmentListComponent;
  let fixture: ComponentFixture<InstallmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentListComponent]
    });
    fixture = TestBed.createComponent(InstallmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
