import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycSettingsComponent } from './kyc-settings.component';

describe('KycSettingsComponent', () => {
  let component: KycSettingsComponent;
  let fixture: ComponentFixture<KycSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
