import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GrupoService } from './grupo.service'; 

describe('GrupoService', () => {
  let service: GrupoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [GrupoService],  
    });

    service = TestBed.inject(GrupoService); 
    httpMock = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  it('should call crearGrupoConMusico and return data', () => {
    const mockData = { grupo: 'Grupo 1', musico: 'Musico 1' };
    const requestData = { grupo: 'Grupo 1', musico: 'Musico 1' };

    service.crearGrupoConMusico(requestData).subscribe((response) => {
      expect(response).toEqual(mockData); 
    });

    const req = httpMock.expectOne('http://localhost:3000/crearGrupoConMusico');
    expect(req.request.method).toBe('POST'); 
    req.flush(mockData); 
  });

  it('should get instrumentos and return a list', () => {
    const mockInstrumentos = [
      { id: 1, nombre: 'Guitarra' },
      { id: 2, nombre: 'Piano' },
    ];

    service.getInstrumentos().subscribe((response) => {
      expect(response).toEqual(mockInstrumentos); 
    });

    const req = httpMock.expectOne('http://localhost:3000/api/instrumentos');
    expect(req.request.method).toBe('GET'); 
    req.flush(mockInstrumentos);
  });
});
