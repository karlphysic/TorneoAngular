import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDirectorTecnicoComponent } from './editar-director-tecnico.component';

describe('EditarDirectorTecnicoComponent', () => {
  let component: EditarDirectorTecnicoComponent;
  let fixture: ComponentFixture<EditarDirectorTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDirectorTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDirectorTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
