import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearReferrerRemovePopupComponent } from './xpr-referrer-remove-popup.component';

describe('NearLoanPopupComponent', () => {
  let component: NearReferrerRemovePopupComponent;
  let fixture: ComponentFixture<NearReferrerRemovePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearReferrerRemovePopupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearReferrerRemovePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
