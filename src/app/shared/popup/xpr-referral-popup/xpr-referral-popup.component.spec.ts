import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearReferralPopupComponent } from './xpr-referral-popup.component';

describe('NearLoanPopupComponent', () => {
  let component: NearReferralPopupComponent;
  let fixture: ComponentFixture<NearReferralPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearReferralPopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearReferralPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
