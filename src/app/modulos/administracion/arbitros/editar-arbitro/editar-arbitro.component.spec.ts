import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArbitroComponent } from './editar-arbitro.component';

describe('EditarArbitroComponent', () => {
  let component: EditarArbitroComponent;
  let fixture: ComponentFixture<EditarArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarArbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
