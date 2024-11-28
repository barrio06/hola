// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ConfirmDialogComponent } from './confirm-dialog.component';
// import { MatDialogRef } from '@angular/material/dialog';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// describe('ConfirmDialogComponent', () => {
//   let component: ConfirmDialogComponent;
//   let fixture: ComponentFixture<ConfirmDialogComponent>;
//   let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ConfirmDialogComponent>>;

//   beforeEach(() => {
//     dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

//     TestBed.configureTestingModule({
//       declarations: [ConfirmDialogComponent],
//       providers: [
//         { provide: MatDialogRef, useValue: dialogRefSpy }
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     });

//     fixture = TestBed.createComponent(ConfirmDialogComponent);
//     component = fixture.componentInstance;
//   });

//   it('should close dialog with true onConfirm', () => {
//     component.onConfirm();
//     expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
//   });

//   it('should close dialog with false onCancel', () => {
//     component.onCancel();
//     expect(dialogRefSpy.close).toHaveBeenCalledWith(false);
//   });
// });
