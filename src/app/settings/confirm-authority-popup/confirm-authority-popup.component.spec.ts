import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAuthorityPopupComponent } from './confirm-authority-popup.component';

describe('ConfirmAuthorityPopupComponent', () => {
  let component: ConfirmAuthorityPopupComponent;
  let fixture: ComponentFixture<ConfirmAuthorityPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAuthorityPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAuthorityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
