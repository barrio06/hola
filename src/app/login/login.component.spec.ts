// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { AuthService } from '../auth.service';
// import { of, throwError } from 'rxjs';
// import { Router } from '@angular/router';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { MatCardModule } from '@angular/material/card';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let authService: jasmine.SpyObj<AuthService>;
//   let router: jasmine.SpyObj<Router>;

//   beforeEach(async () => {
//     authService = jasmine.createSpyObj('AuthService', ['login']);
//     router = jasmine.createSpyObj('Router', ['navigate']);
    
//     await TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       imports: [ReactiveFormsModule, HttpClientTestingModule, MatCardModule],
//       providers: [
//         { provide: AuthService, useValue: authService },
//         { provide: Router, useValue: router }
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the LoginComponent', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call login method on form submit', () => {
//     component.loginForm.setValue({ username: 'testuser', password: 'password' });

//     authService.login.and.returnValue(of({ auth: true, token: 'test-token' }));

//     const form = fixture.debugElement.query(By.css('form'));
//     form.triggerEventHandler('ngSubmit', null);

//     expect(authService.login).toHaveBeenCalledWith({ username: 'testuser', password: 'password' });
//     expect(router.navigate).toHaveBeenCalledWith(['/musico-profile']);
//   });

//   it('should show an error message if login fails', () => {
//     component.loginForm.setValue({ username: 'testuser', password: 'wrongpassword' });

//     authService.login.and.returnValue(throwError({ status: 401 }));

//     const form = fixture.debugElement.query(By.css('form'));
//     form.triggerEventHandler('ngSubmit', null);

//     fixture.detectChanges();
//     const errorMessage = fixture.debugElement.query(By.css('mat-error'));
//     expect(errorMessage.nativeElement.textContent).toBe('Usuario o contraseña incorrectos');
//   });
// });
