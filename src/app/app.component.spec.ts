// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { AppComponent } from './app.component';
// import { ApiService } from './services/api.service';
// import { AuthService } from './auth.service';
// import { of } from 'rxjs';

// // Descripción de las pruebas del componente
// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let routerSpy: jasmine.SpyObj<Router>;
//   let apiServiceSpy: jasmine.SpyObj<ApiService>;
//   let authServiceSpy: jasmine.SpyObj<AuthService>;

//   beforeEach(() => {
//     // Crear mocks de los servicios
//     routerSpy = jasmine.createSpyObj('Router', ['navigate']);
//     apiServiceSpy = jasmine.createSpyObj('ApiService', ['getData']);
//     authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);

//     // Configurar el TestBed
//     TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       providers: [
//         { provide: Router, useValue: routerSpy },
//         { provide: ApiService, useValue: apiServiceSpy },
//         { provide: AuthService, useValue: authServiceSpy }
//       ]
//     }).compileComponents();

//     // Crear fixture y componente
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to login if not authenticated', () => {
//     // Configurar el mock de autenticación para que retorne false
//     authServiceSpy.isAuthenticated.and.returnValue(false);

//     component.navigateToLogin();

//     expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
//   });

//   it('should navigate to profile if authenticated', () => {
//     // Configurar el mock de autenticación para que retorne true
//     authServiceSpy.isAuthenticated.and.returnValue(true);

//     component.navigateToLogin();

//     expect(routerSpy.navigate).toHaveBeenCalledWith(['/musico-profile']);
//   });

//   it('should navigate to feed when home is called', () => {
//     component.home();
//     expect(routerSpy.navigate).toHaveBeenCalledWith(['/feed']);
//   });

//   it('should set message when ngOnInit is called', () => {
//     // Simular respuesta del servicio apiService
//     const mockData = { message: 'Hello, World!' };
//     apiServiceSpy.getData.and.returnValue(of(mockData));

//     component.ngOnInit();

//     // Ejecutar detección de cambios para que el componente se actualice
//     fixture.detectChanges();

//     // Verificar que el mensaje se haya actualizado
//     expect(component.message).toBe('Hello, World!');
//   });
// });
