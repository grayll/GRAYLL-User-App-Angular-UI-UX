import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycDocumentUploadSuccessfulComponent } from './kyc-document-upload-successful.component';

describe('KycDocumentUploadSuccessfulComponent', () => {
  let component: KycDocumentUploadSuccessfulComponent;
  let fixture: ComponentFixture<KycDocumentUploadSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycDocumentUploadSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycDocumentUploadSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
