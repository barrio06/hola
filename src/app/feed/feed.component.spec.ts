// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FeedComponent } from './feed.component';
// import { PublicacionService } from '../services/publicacion.service';
// import { of } from 'rxjs';
// import { By } from '@angular/platform-browser';

// describe('FeedComponent', () => {
//   let component: FeedComponent;
//   let fixture: ComponentFixture<FeedComponent>;
//   let publicacionService: jasmine.SpyObj<PublicacionService>;

//   beforeEach(async () => {
//     publicacionService = jasmine.createSpyObj('PublicacionService', ['getPublicaciones']);
//     await TestBed.configureTestingModule({
//       declarations: [FeedComponent],
//       providers: [{ provide: PublicacionService, useValue: publicacionService }]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FeedComponent);
//     component = fixture.componentInstance;
//     publicacionService.getPublicaciones.and.returnValue(of([{ id: 1, content: 'Test publication' }]));
//     fixture.detectChanges();
//   });

//   it('should load publications on init', () => {
//     expect(component.publicaciones.length).toBeGreaterThan(0);
//     expect(component.publicaciones[0].content).toBe('Test publication');
//   });

//   it('should display publications in the template', () => {
//     const publicaciones = fixture.debugElement.queryAll(By.css('#publicaciones'));
//     expect(publicaciones.length).toBeGreaterThan(0);
//   });
// });
