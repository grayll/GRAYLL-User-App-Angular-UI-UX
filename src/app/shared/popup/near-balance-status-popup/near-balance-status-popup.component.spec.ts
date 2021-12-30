import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearBalanceStatusPopupComponent } from './near-balance-status-popup.component';

describe('NearBalanceStatusPopupComponent', () => {
  let component: NearBalanceStatusPopupComponent;
  let fixture: ComponentFixture<NearBalanceStatusPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearBalanceStatusPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearBalanceStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
