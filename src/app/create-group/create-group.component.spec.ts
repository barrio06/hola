// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CreateGroupComponent } from './create-group.component';
// import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
// import { GrupoService } from '../grupo.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { of } from 'rxjs';

// describe('CreateGroupComponent', () => {
//   let component: CreateGroupComponent;
//   let fixture: ComponentFixture<CreateGroupComponent>;
//   let grupoService: GrupoService;

//   beforeEach(() => {
//     const grupoServiceMock = {
//       getInstrumentos: jasmine.createSpy().and.returnValue(of([{ idInstrumento: 1, nombre: 'Guitar', tipo_instrumento: 'String' }])),
//     };

//     TestBed.configureTestingModule({
//       imports: [ReactiveFormsModule, HttpClientTestingModule],
//       declarations: [CreateGroupComponent],
//       providers: [
//         FormBuilder,
//         { provide: GrupoService, useValue: grupoServiceMock }
//       ]
//     });

//     fixture = TestBed.createComponent(CreateGroupComponent);
//     component = fixture.componentInstance;
//     grupoService = TestBed.inject(GrupoService);
//   });

//   it('should create the component and load instruments', () => {
//     fixture.detectChanges(); // Trigger ngOnInit
//     expect(component.instrumentos.length).toBeGreaterThan(0);
//     expect(grupoService.getInstrumentos).toHaveBeenCalled();
//   });

//   it('should submit form successfully', () => {
//     // Set form values
//     component.grupoForm.setValue({
//       nombreGrupo: 'Nuevo Grupo',
//       descripcion: 'Descripción del grupo',
//       ubicacion: 'Ubicación',
//       fechaCreacion: '2024-11-25',
//       instrumentoId: 1,
//       rol: 'Guitarra'
//     });

//     spyOn(component, 'crearGrupo').and.callThrough();
//     component.crearGrupo();

//     expect(component.crearGrupo).toHaveBeenCalled();
//     expect(component.grupoForm.valid).toBeTrue();
//   });
// });
