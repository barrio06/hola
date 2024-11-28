// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ImageCropperDialogComponent } from './image-cropper-dialog.component';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { By } from '@angular/platform-browser';

// describe('ImageCropperDialogComponent', () => {
//   let component: ImageCropperDialogComponent;
//   let fixture: ComponentFixture<ImageCropperDialogComponent>;
//   let httpMock: HttpTestingController;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, MatDialogModule],
//       declarations: [ImageCropperDialogComponent],
//       providers: [
//         { provide: MAT_DIALOG_DATA, useValue: { photoType: 'profile' } },
//         { provide: MatDialogRef, useValue: {} }
//       ]
//     }).compileComponents();

//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ImageCropperDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should crop and upload an image', () => {
//     spyOn(component, 'cropImage').and.callThrough();
//     component.croppedImage = 'test-image-url';

//     const button = fixture.debugElement.query(By.css('button'));
//     button.triggerEventHandler('click', null);

//     expect(component.cropImage).toHaveBeenCalled();
//   });

//   it('should send cropped image to cloudinary on crop', () => {
//     component.croppedImage = 'test-image-url';
//     component.uploadImage();

//     const req = httpMock.expectOne('https://api.cloudinary.com/v1_1/djsvjbkpn/upload');
//     expect(req.request.method).toBe('POST');
//     req.flush({ secure_url: 'http://some-url.com' });

//     httpMock.verify();
//   });
// });
