import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableAlgoMessagesComponent } from './disable-algo-messages.component';

describe('DisableAlgoMessagesComponent', () => {
  let component: DisableAlgoMessagesComponent;
  let fixture: ComponentFixture<DisableAlgoMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableAlgoMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableAlgoMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
