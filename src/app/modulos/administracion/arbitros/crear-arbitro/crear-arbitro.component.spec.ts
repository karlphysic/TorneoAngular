import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArbitroComponent } from './crear-arbitro.component';

describe('CrearArbitroComponent', () => {
  let component: CrearArbitroComponent;
  let fixture: ComponentFixture<CrearArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearArbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
