import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearReferralRemovePopupComponent } from './near-referral-remove-popup.component';

describe('NearLoanPopupComponent', () => {
  let component: NearReferralRemovePopupComponent;
  let fixture: ComponentFixture<NearReferralRemovePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearReferralRemovePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearReferralRemovePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
