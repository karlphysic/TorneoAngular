import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDirectorTecnicoComponent } from './buscar-director-tecnico.component';

describe('BuscarDirectorTecnicoComponent', () => {
  let component: BuscarDirectorTecnicoComponent;
  let fixture: ComponentFixture<BuscarDirectorTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarDirectorTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDirectorTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
