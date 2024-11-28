// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { EditProfileComponent } from './edit-profile.component';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { MatDialogRef } from '@angular/material/dialog';
// import { of } from 'rxjs';

// describe('EditProfileComponent', () => {
//   let component: EditProfileComponent;
//   let fixture: ComponentFixture<EditProfileComponent>;
//   let httpMock: HttpTestingController;
//   let dialogRefSpy: jasmine.SpyObj<MatDialogRef<EditProfileComponent>>;

//   beforeEach(() => {
//     dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [EditProfileComponent],
//       providers: [
//         { provide: MatDialogRef, useValue: dialogRefSpy }
//       ]
//     });

//     fixture = TestBed.createComponent(EditProfileComponent);
//     component = fixture.componentInstance;
//     httpMock = TestBed.inject(HttpTestingController);

//     localStorage.setItem('token', 'fake-token'); // Simulamos un token en el localStorage
//   });

//   it('should fetch user data on init', () => {
//     const mockUserData = { nombre: 'John', apellido: 'Doe', ubicacion: 'Mexico', descripcion: 'Musician' };
    
//     // Simulamos la respuesta de la API
//     const req = httpMock.expectOne('http://localhost:3000/user/me');
//     expect(req.request.method).toBe('GET');
//     req.flush(mockUserData);

//     fixture.detectChanges(); // Trigger ngOnInit

//     expect(component.musico).toEqual(mockUserData);
//   });

//   it('should submit the form and update user data', () => {
//     component.musico = { nombre: 'John', apellido: 'Doe', ubicacion: 'Mexico', descripcion: 'Musician' };

//     spyOn(component, 'onSubmit').and.callThrough();
//     component.onSubmit();

//     const req = httpMock.expectOne('http://localhost:3000/user/update');
//     expect(req.request.method).toBe('PUT');
//     expect(req.request.body).toEqual(component.musico);
//     req.flush({ success: true });

//     expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });
// });
