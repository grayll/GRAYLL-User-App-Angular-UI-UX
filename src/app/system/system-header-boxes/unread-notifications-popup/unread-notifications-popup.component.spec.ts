import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadNotificationsPopupComponent } from './unread-notifications-popup.component';

describe('UnreadNotificationsPopupComponent', () => {
  let component: UnreadNotificationsPopupComponent;
  let fixture: ComponentFixture<UnreadNotificationsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreadNotificationsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadNotificationsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
