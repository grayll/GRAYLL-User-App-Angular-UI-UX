import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearLoanPopupComponent } from './xpr-loan-popup.component';

describe('NearLoanPopupComponent', () => {
  let component: NearLoanPopupComponent;
  let fixture: ComponentFixture<NearLoanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearLoanPopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearLoanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
