import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  // Configuración del entorno de pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Usamos HttpClientTestingModule para simular las solicitudes HTTP
      providers: [AuthService],  // Proveemos el servicio AuthService
    });

    service = TestBed.inject(AuthService); // Obtenemos la instancia del servicio
    httpMock = TestBed.inject(HttpTestingController); // Obtenemos HttpTestingController para interceptar las solicitudes HTTP
  });

  afterEach(() => {
    // Aseguramos que no haya solicitudes pendientes después de cada prueba
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verificamos que el servicio se haya creado correctamente
  });

  it('should login successfully and return token', (done) => {
    const mockResponse = { token: 'fake-jwt-token' };
    const loginData = { username: 'user1', password: 'password' };

    service.login(loginData).subscribe(response => {
      expect(response.token).toBe('fake-jwt-token');  // Verificamos que la respuesta contenga el token simulado
      done();
    });

    // Interceptamos la solicitud HTTP y respondemos con los datos simulados
    const req = httpMock.expectOne('http://localhost:3000/login');
    expect(req.request.method).toBe('POST');  // Verificamos que sea una solicitud POST
    req.flush(mockResponse);  // Respondemos con los datos simulados
  });

  it('should register successfully', (done) => {
    const mockResponse = { message: 'User registered successfully' };
    const registerData = { username: 'user1', password: 'password' };

    service.register(registerData).subscribe(response => {
      expect(response.message).toBe('User registered successfully');  // Verificamos que el mensaje sea el esperado
      done();
    });

    const req = httpMock.expectOne('http://localhost:3000/register');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });



  it('should check if user exists', (done) => {
    const mockResponse = { exists: true };
    const username = 'user1';

    service.checkUserExists(username).subscribe(response => {
      expect(response.exists).toBeTrue();  // Verificamos que la respuesta indique que el usuario existe
      done();
    });

    const req = httpMock.expectOne(`http://localhost:3000/check-user-exists?username=${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get user id from token', () => {
    const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5MCwiZXhwIjoxNjcwNjg1MTMyfQ.8qLC0_PbKz9oDQKAs7FnbWyfUqR8A_nRpeHC7l1bVO4';
    spyOn(localStorage, 'getItem').and.returnValue(mockToken);

    const userId = service.getUserId();
    expect(userId).toBe(1234567890);  // Verificamos que el ID del usuario sea el esperado
  });
});
