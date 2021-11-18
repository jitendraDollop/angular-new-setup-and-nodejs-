import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadMultiComponent } from './image-upload-multi.component';

describe('ImageUploadMultiComponent', () => {
  let component: ImageUploadMultiComponent;
  let fixture: ComponentFixture<ImageUploadMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
