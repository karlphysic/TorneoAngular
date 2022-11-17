import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDirectorTecnicoComponent } from './crear-director-tecnico.component';

describe('CrearDirectorTecnicoComponent', () => {
  let component: CrearDirectorTecnicoComponent;
  let fixture: ComponentFixture<CrearDirectorTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDirectorTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDirectorTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
