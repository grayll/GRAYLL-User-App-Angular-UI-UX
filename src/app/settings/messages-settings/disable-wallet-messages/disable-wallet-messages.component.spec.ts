import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableWalletMessagesComponent } from './disable-wallet-messages.component';

describe('DisableWalletMessagesComponent', () => {
  let component: DisableWalletMessagesComponent;
  let fixture: ComponentFixture<DisableWalletMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableWalletMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableWalletMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
