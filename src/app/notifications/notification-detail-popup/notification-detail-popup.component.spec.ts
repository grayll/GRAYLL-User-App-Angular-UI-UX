import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDetailPopupComponent } from './notification-detail-popup.component';

describe('NotificationDetailPopupComponent', () => {
  let component: NotificationDetailPopupComponent;
  let fixture: ComponentFixture<NotificationDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
