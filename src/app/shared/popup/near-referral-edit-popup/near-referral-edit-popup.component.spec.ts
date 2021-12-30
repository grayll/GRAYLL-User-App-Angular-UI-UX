import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearReferralEditPopupComponent } from './near-referral-edit-popup.component';

describe('NearLoanPopupComponent', () => {
  let component: NearReferralEditPopupComponent;
  let fixture: ComponentFixture<NearReferralEditPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearReferralEditPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearReferralEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
