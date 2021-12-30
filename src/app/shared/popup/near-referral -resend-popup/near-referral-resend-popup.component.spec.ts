import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearReferralResendPopupComponent } from './near-referral-resend-popup.component';

describe('NearLoanPopupComponent', () => {
  let component: NearReferralResendPopupComponent;
  let fixture: ComponentFixture<NearReferralResendPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearReferralResendPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearReferralResendPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
