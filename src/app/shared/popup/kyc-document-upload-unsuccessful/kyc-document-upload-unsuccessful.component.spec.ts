import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycDocumentUploadUnsuccessfulComponent } from './kyc-document-upload-unsuccessful.component';

describe('KycDocumentUploadUnsuccessfulComponent', () => {
  let component: KycDocumentUploadUnsuccessfulComponent;
  let fixture: ComponentFixture<KycDocumentUploadUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycDocumentUploadUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycDocumentUploadUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
