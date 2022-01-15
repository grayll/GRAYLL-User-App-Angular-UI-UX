import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEmbedWindowsComponent } from './video-embed-windows.component';

describe('VideoEmbedWindowsComponent', () => {
  let component: VideoEmbedWindowsComponent;
  let fixture: ComponentFixture<VideoEmbedWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoEmbedWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEmbedWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
