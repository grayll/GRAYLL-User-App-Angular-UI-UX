import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycDocumentUploadInProgressComponent } from './kyc-document-upload-in-progress.component';

describe('KycDocumentUploadInProgressComponent', () => {
  let component: KycDocumentUploadInProgressComponent;
  let fixture: ComponentFixture<KycDocumentUploadInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycDocumentUploadInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycDocumentUploadInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
